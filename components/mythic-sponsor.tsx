"use client";

import { useEffect, useId, useRef, useState } from "react";
// biome-ignore lint/performance/noNamespaceImport: This is a valid use case for namespace import.
import * as THREE from "three";

interface MythicSponsorProps {
  src: string;
  width?: number;
  height?: number;
  scale?: number;
  pixelSize?: number;
  className?: string;
}

const MythicSponsor = ({
  src,
  width: propWidth,
  height: propHeight,
  scale = 5,
  pixelSize = 6,
  className = "",
}: MythicSponsorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [svgData, setSvgData] = useState<{
    paths: string[];
    viewBox: { width: number; height: number };
  } | null>(null);
  const clipId = useId();

  useEffect(() => {
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: This function is used to load the SVG data and is necessary for the component to work.
    const loadSvg = async () => {
      try {
        const response = await fetch(src);
        const svgText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, "image/svg+xml");
        const svgElement = doc.querySelector("svg");

        if (!svgElement) {
          return;
        }

        const viewBoxAttr = svgElement.getAttribute("viewBox");
        const svgWidth = Number.parseFloat(
          svgElement.getAttribute("width") || "100"
        );
        const svgHeight = Number.parseFloat(
          svgElement.getAttribute("height") || "100"
        );

        let vbWidth = svgWidth;
        let vbHeight = svgHeight;

        if (viewBoxAttr) {
          const parts = viewBoxAttr.split(/[\s,]+/g);
          if (parts.length >= 4 && parts[2] && parts[3]) {
            vbWidth = Number.parseFloat(parts[2]);
            vbHeight = Number.parseFloat(parts[3]);
          }
        }

        const pathElements = doc.querySelectorAll("path");
        const paths: string[] = [];
        for (const path of pathElements) {
          const d = path.getAttribute("d");
          if (d) {
            paths.push(d);
          }
        }

        setSvgData({
          paths,
          viewBox: { width: vbWidth, height: vbHeight },
        });
      } catch (error) {
        console.error("Failed to load SVG:", error);
      }
    };

    loadSvg();
  }, [src]);

  useEffect(() => {
    if (!(containerRef.current && svgData)) {
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector3(width, height, 1) },
        uPixelSize: { value: pixelSize },
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;
        uniform float uTime;
        uniform vec3 uResolution;
        uniform float uPixelSize;

        const float SCALE = 0.0002;
        const float TIME_SCALE = 0.0014;
        const float VIGNETTE_POWER = 0.1;
        const mat2 ROTATION = mat2(0.80, 0.60, -0.60, 0.80);

        const vec3 PALETTE[6] = vec3[6](
            vec3(1.0, 0.78, 0.2),
            vec3(0.96, 0.165, 0.455),
            vec3(0.027, 0.192, 0.56),
            vec3(0.278, 0.804, 1.0),
            vec3(0.725, 0.286, 1.0),
            vec3(1.0, 0.706, 0.8)
        );
        const float STOPS[4] = float[4](0.1, 0.3, 0.6, 0.8);

        float rand(vec2 coord) {
            vec3 v = fract(vec3(coord.xyx) * 0.1031);
            v += dot(v, v.yzx + 33.33);
            return fract((v.x + v.y) * v.z);
        }

        float valueNoise(vec2 coord) {
            vec2 i = floor(coord);
            vec2 f = smoothstep(0.0, 1.0, fract(coord));
            float bl = rand(i);
            float br = rand(i + vec2(1.0, 0.0));
            float tl = rand(i + vec2(0.0, 1.0));
            float tr = rand(i + vec2(1.0, 1.0));
            return mix(mix(bl, br, f.x), mix(tl, tr, f.x), f.y);
        }

        float fractalNoise(vec2 coord) {
            float amplitude = 0.5;
            float result = 0.0;
            for (int i = 0; i < 6; i++) {
                result += amplitude * valueNoise(coord);
                coord = ROTATION * coord * (2.01 + float(i % 3) * 0.01);
                amplitude *= 0.5;
            }
            return result * 1.0323;
        }

        float warpedNoise(vec2 coord, float time) {
            vec2 offset1 = vec2(10.0, 1.3);
            vec2 layer1 = vec2(fractalNoise(coord), fractalNoise(coord + offset1));
            
            vec2 warp1 = coord + 4.0 * layer1 + time;
            vec2 layer2 = vec2(
                fractalNoise(warp1 + vec2(1.7, 9.2)),
                fractalNoise(warp1 + vec2(8.3, 2.8))
            );
            
            vec2 warp2 = coord + 2.0 * layer2;
            vec2 layer3 = vec2(
                fractalNoise(warp2 + vec2(time * 20.0 + 2.0, 6.0)),
                fractalNoise(warp2 + vec2(time * 10.0 + 5.0, 3.0))
            );
            
            return fractalNoise(coord + 5.5 * layer3 - time * 7.0);
        }

        vec3 sampleGradient(float t) {
            t = clamp(t, 0.0, 1.0);
            vec3 colorA, colorB;
            float localT;
            
            if (t < STOPS[0]) {
                colorA = PALETTE[0]; colorB = PALETTE[1];
                localT = t / STOPS[0];
            } else if (t < STOPS[1]) {
                colorA = PALETTE[1]; colorB = PALETTE[2];
                localT = (t - STOPS[0]) / (STOPS[1] - STOPS[0]);
            } else if (t < STOPS[2]) {
                colorA = PALETTE[2]; colorB = PALETTE[3];
                localT = (t - STOPS[1]) / (STOPS[2] - STOPS[1]);
            } else if (t < STOPS[3]) {
                colorA = PALETTE[3]; colorB = PALETTE[4];
                localT = (t - STOPS[2]) / (STOPS[3] - STOPS[2]);
            } else {
                colorA = PALETTE[4]; colorB = PALETTE[5];
                localT = (t - STOPS[3]) / (1.0 - STOPS[3]);
            }
            return mix(colorA, colorB, localT);
        }

        float computeVignette(vec2 uv) {
            float edge = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
            return 0.5 + 0.5 * pow(16.0 * edge, VIGNETTE_POWER);
        }

        void main() {
            vec2 pixelatedCoord = floor(gl_FragCoord.xy / uPixelSize) * uPixelSize;
            
            vec2 pixelCoord = pixelatedCoord * SCALE;
            float animTime = uTime * TIME_SCALE;
            
            float noiseValue = warpedNoise(pixelCoord, animTime);
            float gradientPos = fract(noiseValue * 2.6 - 1.0);
            
            vec3 color = sampleGradient(gradientPos);
            
            vec2 screenUV = pixelatedCoord * 0.05 / uResolution.xy;
            color *= computeVignette(screenUV);
            
            gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(mesh);

    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      (shaderMaterial.uniforms.uTime as THREE.IUniform<number>).value =
        clock.getElapsedTime();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      renderer.setSize(newWidth, newHeight);
      (
        shaderMaterial.uniforms.uResolution as THREE.IUniform<THREE.Vector3>
      ).value.set(newWidth, newHeight, 1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      shaderMaterial.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [svgData, pixelSize]);

  if (!svgData) {
    return null;
  }

  const { viewBox } = svgData;
  const displayWidth = propWidth ?? viewBox.width * scale;
  const displayHeight = propHeight ?? viewBox.height * scale;
  const scaleX = 1 / viewBox.width;
  const scaleY = 1 / viewBox.height;

  return (
    <div
      className={`relative brightness-125 contrast-125 ${className}`}
      style={{ width: displayWidth, height: displayHeight }}
    >
      <svg
        aria-hidden="true"
        height="0"
        style={{ position: "absolute" }}
        width="0"
      >
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id={clipId}>
            {svgData.paths.map((d) => (
              <path d={d} key={d} transform={`scale(${scaleX}, ${scaleY})`} />
            ))}
          </clipPath>
        </defs>
      </svg>

      <div
        className="h-full w-full"
        ref={containerRef}
        style={{
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
      />
    </div>
  );
};

export default MythicSponsor;
