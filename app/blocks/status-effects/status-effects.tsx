"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  StatusEffectIndicator,
  StatusEffect,
} from "@/components/ui/8bit/status-effect-indicator";

// Sample status effects data
const sampleEffects: StatusEffect[] = [
  {
    id: "poison-1",
    type: "poison",
    duration: 10,
    stacks: 3,
    intensity: "normal",
  },
  {
    id: "freeze-1",
    type: "freeze",
    duration: 5,
    intensity: "strong",
  },
  {
    id: "burn-1",
    type: "burn",
    duration: 8,
    stacks: 2,
    intensity: "normal",
  },
  {
    id: "stun-1",
    type: "stun",
    duration: 3,
    intensity: "weak",
  },
  {
    id: "heal-1",
    type: "heal",
    duration: 15,
    intensity: "strong",
  },
  {
    id: "shield-1",
    type: "shield",
    duration: 20,
    stacks: 1,
    intensity: "normal",
  },
  {
    id: "speed-1",
    type: "speed",
    duration: 12,
    intensity: "strong",
  },
  {
    id: "slow-1",
    type: "slow",
    duration: 6,
    stacks: 2,
    intensity: "normal",
  },
];

const debuffEffects = sampleEffects.filter(effect => 
  ['poison', 'freeze', 'burn', 'stun', 'slow'].includes(effect.type)
);

const buffEffects = sampleEffects.filter(effect => 
  ['heal', 'shield', 'speed'].includes(effect.type)
);

export default function StatusEffectsBlock() {
  const [showDuration, setShowDuration] = useState(true);
  const [showStacks, setShowStacks] = useState(true);
  const [animated, setAnimated] = useState(true);
  const [size, setSize] = useState<"sm" | "md" | "lg" | "xl">("md");
  const [maxEffects, setMaxEffects] = useState(10);

  const toggleShowDuration = () => setShowDuration(!showDuration);
  const toggleShowStacks = () => setShowStacks(!showStacks);
  const toggleAnimated = () => setAnimated(!animated);
  
  const cycleSizes = () => {
    const sizes: Array<"sm" | "md" | "lg" | "xl"> = ["sm", "md", "lg", "xl"];
    const currentIndex = sizes.indexOf(size);
    const nextIndex = (currentIndex + 1) % sizes.length;
    setSize(sizes[nextIndex]);
  };

  const toggleMaxEffects = () => {
    setMaxEffects(maxEffects === 10 ? 3 : 10);
  };

  return (
    <div className="space-y-8">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Status Effect Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button onClick={toggleShowDuration} variant="outline">
              Show Duration: {showDuration ? "Yes" : "No"}
            </Button>
            <Button onClick={toggleShowStacks} variant="outline">
              Show Stacks: {showStacks ? "Yes" : "No"}
            </Button>
            <Button onClick={toggleAnimated} variant="outline">
              Animated: {animated ? "Yes" : "No"}
            </Button>
            <Button onClick={cycleSizes} variant="outline">
              Size: {size.toUpperCase()}
            </Button>
            <Button onClick={toggleMaxEffects} variant="outline">
              Max Effects: {maxEffects}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Basic Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Examples</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>All Effects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <StatusEffectIndicator
                effects={sampleEffects}
                showDuration={showDuration}
                showStacks={showStacks}
                size={size}
                maxEffects={maxEffects}
                animated={animated}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Debuffs Only</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <StatusEffectIndicator
                effects={debuffEffects}
                showDuration={showDuration}
                showStacks={showStacks}
                size={size}
                animated={animated}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Size Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Size Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Small (SM)</CardTitle>
            </CardHeader>
            <CardContent>
              <StatusEffectIndicator
                effects={buffEffects}
                size="sm"
                showDuration={showDuration}
                showStacks={showStacks}
                animated={animated}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medium (MD)</CardTitle>
            </CardHeader>
            <CardContent>
              <StatusEffectIndicator
                effects={buffEffects}
                size="md"
                showDuration={showDuration}
                showStacks={showStacks}
                animated={animated}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Large (LG)</CardTitle>
            </CardHeader>
            <CardContent>
              <StatusEffectIndicator
                effects={buffEffects}
                size="lg"
                showDuration={showDuration}
                showStacks={showStacks}
                animated={animated}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Extra Large (XL)</CardTitle>
            </CardHeader>
            <CardContent>
              <StatusEffectIndicator
                effects={buffEffects}
                size="xl"
                showDuration={showDuration}
                showStacks={showStacks}
                animated={animated}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Individual Effect Types */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Individual Effect Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries({
            Poison: [{ id: "poison-demo", type: "poison" as const, duration: 10, stacks: 3, intensity: "normal" as const }],
            Freeze: [{ id: "freeze-demo", type: "freeze" as const, duration: 5, intensity: "strong" as const }],
            Burn: [{ id: "burn-demo", type: "burn" as const, duration: 8, stacks: 2, intensity: "normal" as const }],
            Stun: [{ id: "stun-demo", type: "stun" as const, duration: 3, intensity: "weak" as const }],
            Heal: [{ id: "heal-demo", type: "heal" as const, duration: 15, intensity: "strong" as const }],
            Shield: [{ id: "shield-demo", type: "shield" as const, duration: 20, stacks: 1, intensity: "normal" as const }],
            Speed: [{ id: "speed-demo", type: "speed" as const, duration: 12, intensity: "strong" as const }],
            Slow: [{ id: "slow-demo", type: "slow" as const, duration: 6, stacks: 2, intensity: "normal" as const }],
          }).map(([name, effects]) => (
            <Card key={name}>
              <CardHeader>
                <CardTitle>{name}</CardTitle>
              </CardHeader>
              <CardContent>
                <StatusEffectIndicator
                  effects={effects}
                  size={size}
                  showDuration={showDuration}
                  showStacks={showStacks}
                  animated={animated}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Intensity Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Effect Intensities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Weak Intensity</CardTitle>
            </CardHeader>
            <CardContent>
              <StatusEffectIndicator
                effects={[
                  { id: "weak-poison", type: "poison", duration: 5, intensity: "weak" },
                  { id: "weak-burn", type: "burn", duration: 5, intensity: "weak" },
                  { id: "weak-freeze", type: "freeze", duration: 5, intensity: "weak" },
                ]}
                size={size}
                showDuration={showDuration}
                showStacks={showStacks}
                animated={animated}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Normal Intensity</CardTitle>
            </CardHeader>
            <CardContent>
              <StatusEffectIndicator
                effects={[
                  { id: "normal-poison", type: "poison", duration: 5, intensity: "normal" },
                  { id: "normal-burn", type: "burn", duration: 5, intensity: "normal" },
                  { id: "normal-freeze", type: "freeze", duration: 5, intensity: "normal" },
                ]}
                size={size}
                showDuration={showDuration}
                showStacks={showStacks}
                animated={animated}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Strong Intensity</CardTitle>
            </CardHeader>
            <CardContent>
              <StatusEffectIndicator
                effects={[
                  { id: "strong-poison", type: "poison", duration: 5, intensity: "strong" },
                  { id: "strong-burn", type: "burn", duration: 5, intensity: "strong" },
                  { id: "strong-freeze", type: "freeze", duration: 5, intensity: "strong" },
                ]}
                size={size}
                showDuration={showDuration}
                showStacks={showStacks}
                animated={animated}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Empty State */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Empty State</h3>
        <Card>
          <CardHeader>
            <CardTitle>No Effects</CardTitle>
          </CardHeader>
          <CardContent>
            <StatusEffectIndicator
              effects={[]}
              size={size}
              showDuration={showDuration}
              showStacks={showStacks}
              animated={animated}
            />
            <p className="text-muted-foreground text-sm mt-2">
              When no effects are present, the component renders nothing.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}