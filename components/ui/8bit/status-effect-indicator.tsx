"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

import "./styles/retro.css";

export interface StatusEffect {
	id: string;
	type:
		| "poison"
		| "freeze"
		| "burn"
		| "stun"
		| "heal"
		| "shield"
		| "speed"
		| "slow";
	duration?: number;
	stacks?: number;
	intensity?: "weak" | "normal" | "strong";
}

export const statusEffectVariants = cva("", {
	variants: {
		variant: {
			default: "",
			retro: "retro",
		},
		size: {
			sm: "w-16 h-16",
			md: "w-20 h-20", 
			lg: "w-24 h-24",
			xl: "w-28 h-28",
		},
	},
	defaultVariants: {
		variant: "retro",
		size: "md",
	},
});

export interface StatusEffectIndicatorProps
	extends React.ComponentProps<"div">,
		VariantProps<typeof statusEffectVariants> {
	effects: StatusEffect[];
	showDuration?: boolean;
	showStacks?: boolean;
	maxEffects?: number;
	className?: string;
	animated?: boolean;
}

// Pixel art SVG icons for different status effects
const getStatusEffectIcon = (
	type: StatusEffect["type"],
	intensity: StatusEffect["intensity"] = "normal",
) => {
	const icons = {
		poison: (
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 256 256"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				{/* Bottle neck */}
				<rect x="120" y="64" width="14" height="14" rx="1"></rect>
				<rect x="120" y="80" width="14" height="14" rx="1"></rect>
				<rect x="120" y="96" width="14" height="14" rx="1"></rect>

				{/* Bottle stopper */}
				<rect x="104" y="48" width="14" height="14" rx="1"></rect>
				<rect x="120" y="48" width="14" height="14" rx="1"></rect>
				<rect x="136" y="48" width="14" height="14" rx="1"></rect>

				{/* Bottle body */}
				<rect x="88" y="112" width="14" height="14" rx="1"></rect>
				<rect x="104" y="112" width="14" height="14" rx="1"></rect>
				<rect x="120" y="112" width="14" height="14" rx="1"></rect>
				<rect x="136" y="112" width="14" height="14" rx="1"></rect>
				<rect x="152" y="112" width="14" height="14" rx="1"></rect>

				<rect x="88" y="128" width="14" height="14" rx="1"></rect>
				<rect x="152" y="128" width="14" height="14" rx="1"></rect>
				<rect x="88" y="144" width="14" height="14" rx="1"></rect>
				<rect x="152" y="144" width="14" height="14" rx="1"></rect>
				<rect x="88" y="160" width="14" height="14" rx="1"></rect>
				<rect x="152" y="160" width="14" height="14" rx="1"></rect>
				<rect x="88" y="176" width="14" height="14" rx="1"></rect>
				<rect x="152" y="176" width="14" height="14" rx="1"></rect>

				{/* Bottle bottom */}
				<rect x="88" y="192" width="14" height="14" rx="1"></rect>
				<rect x="104" y="192" width="14" height="14" rx="1"></rect>
				<rect x="120" y="192" width="14" height="14" rx="1"></rect>
				<rect x="136" y="192" width="14" height="14" rx="1"></rect>
				<rect x="152" y="192" width="14" height="14" rx="1"></rect>

				{/* Liquid inside */}
				<rect
					x="104"
					y="128"
					width="14"
					height="14"
					rx="1"
					opacity="0.7"
				></rect>
				<rect
					x="120"
					y="128"
					width="14"
					height="14"
					rx="1"
					opacity="0.7"
				></rect>
				<rect
					x="136"
					y="128"
					width="14"
					height="14"
					rx="1"
					opacity="0.7"
				></rect>
				<rect
					x="104"
					y="144"
					width="14"
					height="14"
					rx="1"
					opacity="0.7"
				></rect>
				<rect
					x="120"
					y="144"
					width="14"
					height="14"
					rx="1"
					opacity="0.7"
				></rect>
				<rect
					x="136"
					y="144"
					width="14"
					height="14"
					rx="1"
					opacity="0.7"
				></rect>
				<rect
					x="104"
					y="160"
					width="14"
					height="14"
					rx="1"
					opacity="0.7"
				></rect>
				<rect
					x="120"
					y="160"
					width="14"
					height="14"
					rx="1"
					opacity="0.7"
				></rect>
				<rect
					x="136"
					y="160"
					width="14"
					height="14"
					rx="1"
					opacity="0.7"
				></rect>
				<rect
					x="104"
					y="176"
					width="14"
					height="14"
					rx="1"
					opacity="0.7"
				></rect>
				<rect
					x="120"
					y="176"
					width="14"
					height="14"
					rx="1"
					opacity="0.7"
				></rect>
				<rect
					x="136"
					y="176"
					width="14"
					height="14"
					rx="1"
					opacity="0.7"
				></rect>
			</svg>
		),
		freeze: (
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 256 256"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="120" y="88" width="14" height="14" rx="1"></rect>
				<rect x="120" y="72" width="14" height="14" rx="1"></rect>
				<rect x="120" y="152" width="14" height="14" rx="1"></rect>
				<rect x="200" y="72" width="14" height="14" rx="1"></rect>
				<rect x="120" y="168" width="14" height="14" rx="1"></rect>
				<rect x="120" y="104" width="14" height="14" rx="1"></rect>
				<rect x="168" y="88" width="14" height="14" rx="1"></rect>
				<rect x="152" y="136" width="14" height="14" rx="1"></rect>
				<rect x="88" y="136" width="14" height="14" rx="1"></rect>
				<rect x="88" y="104" width="14" height="14" rx="1"></rect>
				<rect x="120" y="56" width="14" height="14" rx="1"></rect>
				<rect x="104" y="120" width="14" height="14" rx="1"></rect>
				<rect x="120" y="184" width="14" height="14" rx="1"></rect>
				<rect x="136" y="120" width="14" height="14" rx="1"></rect>
				<rect x="184" y="56" width="14" height="14" rx="1"></rect>
				<rect x="104" y="40" width="14" height="14" rx="1"></rect>
				<rect x="104" y="200" width="14" height="14" rx="1"></rect>
				<rect x="136" y="40" width="14" height="14" rx="1"></rect>
				<rect x="136" y="200" width="14" height="14" rx="1"></rect>
				<rect x="168" y="152" width="14" height="14" rx="1"></rect>
				<rect x="72" y="152" width="14" height="14" rx="1"></rect>
				<rect x="184" y="72" width="14" height="14" rx="1"></rect>
				<rect x="200" y="168" width="14" height="14" rx="1"></rect>
				<rect x="56" y="168" width="14" height="14" rx="1"></rect>
				<rect x="56" y="184" width="14" height="14" rx="1"></rect>
				<rect x="56" y="72" width="14" height="14" rx="1"></rect>
				<rect x="56" y="56" width="14" height="14" rx="1"></rect>
				<rect x="40" y="72" width="14" height="14" rx="1"></rect>
				<rect x="40" y="168" width="14" height="14" rx="1"></rect>
				<rect x="184" y="168" width="14" height="14" rx="1"></rect>
				<rect x="184" y="184" width="14" height="14" rx="1"></rect>
				<rect x="72" y="88" width="14" height="14" rx="1"></rect>
				<rect x="152" y="104" width="14" height="14" rx="1"></rect>
				<rect x="120" y="120" width="14" height="14" rx="1"></rect>
				<rect x="120" y="136" width="14" height="14" rx="1"></rect>
			</svg>
		),
		burn: (
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 256 256"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="184" y="160" width="14" height="14" rx="1"></rect>
				<rect x="184" y="176" width="14" height="14" rx="1"></rect>
				<rect x="184" y="128" width="14" height="14" rx="1"></rect>
				<rect x="88" y="192" width="14" height="14" rx="1"></rect>
				<rect x="72" y="176" width="14" height="14" rx="1"></rect>
				<rect x="168" y="112" width="14" height="14" rx="1"></rect>
				<rect x="168" y="96" width="14" height="14" rx="1"></rect>
				<rect x="136" y="80" width="14" height="14" rx="1"></rect>
				<rect x="72" y="144" width="14" height="14" rx="1"></rect>
				<rect x="72" y="160" width="14" height="14" rx="1"></rect>
				<rect x="88" y="128" width="14" height="14" rx="1"></rect>
				<rect x="104" y="96" width="14" height="14" rx="1"></rect>
				<rect x="104" y="112" width="14" height="14" rx="1"></rect>
				<rect x="88" y="144" width="14" height="14" rx="1"></rect>
				<rect x="88" y="32" width="14" height="14" rx="1"></rect>
				<rect x="104" y="48" width="14" height="14" rx="1"></rect>
				<rect x="120" y="48" width="14" height="14" rx="1"></rect>
				<rect x="120" y="64" width="14" height="14" rx="1"></rect>
				<rect x="104" y="80" width="14" height="14" rx="1"></rect>
				<rect x="136" y="64" width="14" height="14" rx="1"></rect>
				<rect x="120" y="192" width="14" height="14" rx="1"></rect>
				<rect x="152" y="208" width="14" height="14" rx="1"></rect>
				<rect x="152" y="192" width="14" height="14" rx="1"></rect>
				<rect x="152" y="176" width="14" height="14" rx="1"></rect>
				<rect x="120" y="176" width="14" height="14" rx="1"></rect>
				<rect x="136" y="160" width="14" height="14" rx="1"></rect>
				<rect x="104" y="208" width="14" height="14" rx="1"></rect>
				<rect x="104" y="192" width="14" height="14" rx="1"></rect>
				<rect x="88" y="160" width="14" height="14" rx="1"></rect>
				<rect x="152" y="96" width="14" height="14" rx="1"></rect>
				<rect x="168" y="192" width="14" height="14" rx="1"></rect>
				<rect x="168" y="64" width="14" height="14" rx="1"></rect>
				<rect x="56" y="112" width="14" height="14" rx="1"></rect>
				<rect x="184" y="144" width="14" height="14" rx="1"></rect>
				<rect x="168" y="160" width="14" height="14" rx="1"></rect>
				<rect x="168" y="176" width="14" height="14" rx="1"></rect>
				<rect x="168" y="128" width="14" height="14" rx="1"></rect>
				<rect x="168" y="144" width="14" height="14" rx="1"></rect>
				<rect x="152" y="144" width="14" height="14" rx="1"></rect>
				<rect x="152" y="160" width="14" height="14" rx="1"></rect>
				<rect x="152" y="112" width="14" height="14" rx="1"></rect>
				<rect x="152" y="128" width="14" height="14" rx="1"></rect>
				<rect x="136" y="128" width="14" height="14" rx="1"></rect>
				<rect x="136" y="144" width="14" height="14" rx="1"></rect>
				<rect x="120" y="160" width="14" height="14" rx="1"></rect>
				<rect x="120" y="144" width="14" height="14" rx="1"></rect>
				<rect x="136" y="96" width="14" height="14" rx="1"></rect>
				<rect x="136" y="112" width="14" height="14" rx="1"></rect>
				<rect x="120" y="112" width="14" height="14" rx="1"></rect>
				<rect x="120" y="128" width="14" height="14" rx="1"></rect>
				<rect x="120" y="80" width="14" height="14" rx="1"></rect>
				<rect x="120" y="96" width="14" height="14" rx="1"></rect>
				<rect x="104" y="160" width="14" height="14" rx="1"></rect>
				<rect x="104" y="176" width="14" height="14" rx="1"></rect>
				<rect x="104" y="128" width="14" height="14" rx="1"></rect>
				<rect x="104" y="144" width="14" height="14" rx="1"></rect>
				<rect x="88" y="176" width="14" height="14" rx="1"></rect>
			</svg>
		),
		stun: (
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 256 256"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="128" y="40" width="14" height="14" rx="1"></rect>
				<rect x="160" y="40" width="14" height="14" rx="1"></rect>
				<rect x="176" y="40" width="14" height="14" rx="1"></rect>
				<rect x="144" y="40" width="14" height="14" rx="1"></rect>
				<rect x="144" y="56" width="14" height="14" rx="1"></rect>
				<rect x="128" y="56" width="14" height="14" rx="1"></rect>
				<rect x="112" y="56" width="14" height="14" rx="1"></rect>
				<rect x="160" y="56" width="14" height="14" rx="1"></rect>
				<rect x="128" y="72" width="14" height="14" rx="1"></rect>
				<rect x="112" y="72" width="14" height="14" rx="1"></rect>
				<rect x="96" y="72" width="14" height="14" rx="1"></rect>
				<rect x="144" y="72" width="14" height="14" rx="1"></rect>
				<rect x="112" y="88" width="14" height="14" rx="1"></rect>
				<rect x="96" y="88" width="14" height="14" rx="1"></rect>
				<rect x="80" y="88" width="14" height="14" rx="1"></rect>
				<rect x="128" y="88" width="14" height="14" rx="1"></rect>
				<rect x="96" y="104" width="14" height="14" rx="1"></rect>
				<rect x="80" y="104" width="14" height="14" rx="1"></rect>
				<rect x="64" y="104" width="14" height="14" rx="1"></rect>
				<rect x="112" y="104" width="14" height="14" rx="1"></rect>
				<rect x="96" y="120" width="14" height="14" rx="1"></rect>
				<rect x="128" y="104" width="14" height="14" rx="1"></rect>
				<rect x="144" y="104" width="14" height="14" rx="1"></rect>
				<rect x="160" y="104" width="14" height="14" rx="1"></rect>
				<rect x="176" y="104" width="14" height="14" rx="1"></rect>
				<rect x="160" y="120" width="14" height="14" rx="1"></rect>
				<rect x="144" y="136" width="14" height="14" rx="1"></rect>
				<rect x="112" y="136" width="14" height="14" rx="1"></rect>
				<rect x="128" y="136" width="14" height="14" rx="1"></rect>
				<rect x="112" y="120" width="14" height="14" rx="1"></rect>
				<rect x="128" y="120" width="14" height="14" rx="1"></rect>
				<rect x="144" y="120" width="14" height="14" rx="1"></rect>
				<rect x="96" y="152" width="14" height="14" rx="1"></rect>
				<rect x="112" y="152" width="14" height="14" rx="1"></rect>
				<rect x="128" y="152" width="14" height="14" rx="1"></rect>
				<rect x="96" y="168" width="14" height="14" rx="1"></rect>
				<rect x="112" y="168" width="14" height="14" rx="1"></rect>
				<rect x="96" y="184" width="14" height="14" rx="1"></rect>
				<rect x="80" y="200" width="14" height="14" rx="1"></rect>
				<rect x="80" y="184" width="14" height="14" rx="1"></rect>
			</svg>
		),
		heal: (
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 256 256"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="40" y="104" width="14" height="14" rx="1"></rect>
				<rect x="40" y="88" width="14" height="14" rx="1"></rect>
				<rect x="184" y="72" width="14" height="14" rx="1"></rect>
				<rect x="56" y="72" width="14" height="14" rx="1"></rect>
				<rect x="120" y="88" width="14" height="14" rx="1"></rect>
				<rect x="104" y="88" width="14" height="14" rx="1"></rect>
				<rect x="136" y="88" width="14" height="14" rx="1"></rect>
				<rect x="104" y="72" width="14" height="14" rx="1"></rect>
				<rect x="136" y="72" width="14" height="14" rx="1"></rect>
				<rect x="200" y="88" width="14" height="14" rx="1"></rect>
				<rect x="200" y="104" width="14" height="14" rx="1"></rect>
				<rect x="56" y="88" width="14" height="14" rx="1"></rect>
				<rect x="88" y="88" width="14" height="14" rx="1"></rect>
				<rect x="72" y="88" width="14" height="14" rx="1"></rect>
				<rect x="184" y="88" width="14" height="14" rx="1"></rect>
				<rect x="168" y="88" width="14" height="14" rx="1"></rect>
				<rect x="152" y="88" width="14" height="14" rx="1"></rect>
				<rect x="120" y="104" width="14" height="14" rx="1"></rect>
				<rect x="104" y="104" width="14" height="14" rx="1"></rect>
				<rect x="136" y="104" width="14" height="14" rx="1"></rect>
				<rect x="56" y="104" width="14" height="14" rx="1"></rect>
				<rect x="88" y="104" width="14" height="14" rx="1"></rect>
				<rect x="72" y="104" width="14" height="14" rx="1"></rect>
				<rect x="184" y="104" width="14" height="14" rx="1"></rect>
				<rect x="168" y="104" width="14" height="14" rx="1"></rect>
				<rect x="152" y="104" width="14" height="14" rx="1"></rect>
				<rect x="104" y="120" width="14" height="14" rx="1"></rect>
				<rect x="88" y="120" width="14" height="14" rx="1"></rect>
				<rect x="120" y="120" width="14" height="14" rx="1"></rect>
				<rect x="72" y="120" width="14" height="14" rx="1"></rect>
				<rect x="56" y="120" width="14" height="14" rx="1"></rect>
				<rect x="152" y="120" width="14" height="14" rx="1"></rect>
				<rect x="136" y="120" width="14" height="14" rx="1"></rect>
				<rect x="184" y="120" width="14" height="14" rx="1"></rect>
				<rect x="168" y="120" width="14" height="14" rx="1"></rect>
				<rect x="104" y="136" width="14" height="14" rx="1"></rect>
				<rect x="88" y="136" width="14" height="14" rx="1"></rect>
				<rect x="120" y="136" width="14" height="14" rx="1"></rect>
				<rect x="72" y="136" width="14" height="14" rx="1"></rect>
				<rect x="152" y="136" width="14" height="14" rx="1"></rect>
				<rect x="136" y="136" width="14" height="14" rx="1"></rect>
				<rect x="168" y="136" width="14" height="14" rx="1"></rect>
				<rect x="104" y="152" width="14" height="14" rx="1"></rect>
				<rect x="88" y="152" width="14" height="14" rx="1"></rect>
				<rect x="120" y="152" width="14" height="14" rx="1"></rect>
				<rect x="104" y="168" width="14" height="14" rx="1"></rect>
				<rect x="152" y="152" width="14" height="14" rx="1"></rect>
				<rect x="136" y="152" width="14" height="14" rx="1"></rect>
				<rect x="136" y="168" width="14" height="14" rx="1"></rect>
				<rect x="120" y="168" width="14" height="14" rx="1"></rect>
				<rect x="120" y="184" width="14" height="14" rx="1"></rect>
				<rect x="88" y="56" width="14" height="14" rx="1"></rect>
				<rect x="72" y="56" width="14" height="14" rx="1"></rect>
				<rect x="168" y="56" width="14" height="14" rx="1"></rect>
				<rect x="152" y="56" width="14" height="14" rx="1"></rect>
				<rect x="168" y="72" width="14" height="14" rx="1"></rect>
				<rect x="152" y="72" width="14" height="14" rx="1"></rect>
				<rect x="88" y="72" width="14" height="14" rx="1"></rect>
				<rect x="72" y="72" width="14" height="14" rx="1"></rect>
			</svg>
		),
		shield: (
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 256 256"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="14"
					height="14"
					rx="1"
					transform="matrix(0 -1 -1 0 144 64)"
				></rect>
				<rect
					width="14"
					height="14"
					rx="1"
					transform="matrix(0 -1 -1 0 128 64)"
				></rect>
				<rect
					width="14"
					height="14"
					rx="1"
					transform="matrix(0 -1 -1 0 144 176)"
				></rect>
				<rect
					width="14"
					height="14"
					rx="1"
					transform="matrix(0 -1 -1 0 128 176)"
				></rect>
				<rect
					width="14"
					height="14"
					rx="1"
					transform="matrix(0 -1 -1 0 144 144)"
				></rect>
				<rect
					width="14"
					height="14"
					rx="1"
					transform="matrix(0 -1 -1 0 128 144)"
				></rect>
				<rect
					width="14"
					height="14"
					rx="1"
					transform="matrix(0 -1 -1 0 144 112)"
				></rect>
				<rect
					width="14"
					height="14"
					rx="1"
					transform="matrix(0 -1 -1 0 128 112)"
				></rect>
				<rect x="112" y="192" width="14" height="14" rx="1"></rect>
				<rect x="128" y="192" width="14" height="14" rx="1"></rect>
				<rect x="144" y="192" width="14" height="14" rx="1"></rect>
				<rect x="96" y="192" width="14" height="14" rx="1"></rect>
				<rect x="80" y="192" width="14" height="14" rx="1"></rect>
				<rect x="112" y="64" width="14" height="14" rx="1"></rect>
				<rect x="128" y="64" width="14" height="14" rx="1"></rect>
				<rect x="144" y="64" width="14" height="14" rx="1"></rect>
				<rect x="160" y="64" width="14" height="14" rx="1"></rect>
				<rect x="96" y="64" width="14" height="14" rx="1"></rect>
				<rect x="80" y="96" width="14" height="14" rx="1"></rect>
				<rect x="80" y="112" width="14" height="14" rx="1"></rect>
				<rect x="80" y="64" width="14" height="14" rx="1"></rect>
				<rect x="80" y="80" width="14" height="14" rx="1"></rect>
				<rect x="80" y="128" width="14" height="14" rx="1"></rect>
				<rect x="80" y="144" width="14" height="14" rx="1"></rect>
				<rect x="80" y="160" width="14" height="14" rx="1"></rect>
				<rect x="80" y="176" width="14" height="14" rx="1"></rect>
				<rect x="160" y="112" width="14" height="14" rx="1"></rect>
				<rect x="160" y="128" width="14" height="14" rx="1"></rect>
				<rect x="160" y="96" width="14" height="14" rx="1"></rect>
				<rect x="160" y="80" width="14" height="14" rx="1"></rect>
				<rect x="160" y="144" width="14" height="14" rx="1"></rect>
				<rect x="160" y="160" width="14" height="14" rx="1"></rect>
				<rect x="160" y="176" width="14" height="14" rx="1"></rect>
				<rect x="160" y="192" width="14" height="14" rx="1"></rect>
			</svg>
		),
		speed: (
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 256 256"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="128" y="40" width="14" height="14" rx="1"></rect>
				<rect x="160" y="40" width="14" height="14" rx="1"></rect>
				<rect x="176" y="40" width="14" height="14" rx="1"></rect>
				<rect x="144" y="40" width="14" height="14" rx="1"></rect>
				<rect x="144" y="56" width="14" height="14" rx="1"></rect>
				<rect x="128" y="56" width="14" height="14" rx="1"></rect>
				<rect x="112" y="56" width="14" height="14" rx="1"></rect>
				<rect x="160" y="56" width="14" height="14" rx="1"></rect>
				<rect x="128" y="72" width="14" height="14" rx="1"></rect>
				<rect x="112" y="72" width="14" height="14" rx="1"></rect>
				<rect x="96" y="72" width="14" height="14" rx="1"></rect>
				<rect x="144" y="72" width="14" height="14" rx="1"></rect>
				<rect x="112" y="88" width="14" height="14" rx="1"></rect>
				<rect x="96" y="88" width="14" height="14" rx="1"></rect>
				<rect x="80" y="88" width="14" height="14" rx="1"></rect>
				<rect x="128" y="88" width="14" height="14" rx="1"></rect>
				<rect x="96" y="104" width="14" height="14" rx="1"></rect>
				<rect x="80" y="104" width="14" height="14" rx="1"></rect>
				<rect x="64" y="104" width="14" height="14" rx="1"></rect>
				<rect x="112" y="104" width="14" height="14" rx="1"></rect>
				<rect x="96" y="120" width="14" height="14" rx="1"></rect>
				<rect x="128" y="104" width="14" height="14" rx="1"></rect>
				<rect x="144" y="104" width="14" height="14" rx="1"></rect>
				<rect x="160" y="104" width="14" height="14" rx="1"></rect>
				<rect x="176" y="104" width="14" height="14" rx="1"></rect>
				<rect x="160" y="120" width="14" height="14" rx="1"></rect>
				<rect x="144" y="136" width="14" height="14" rx="1"></rect>
				<rect x="112" y="136" width="14" height="14" rx="1"></rect>
				<rect x="128" y="136" width="14" height="14" rx="1"></rect>
				<rect x="112" y="120" width="14" height="14" rx="1"></rect>
				<rect x="128" y="120" width="14" height="14" rx="1"></rect>
				<rect x="144" y="120" width="14" height="14" rx="1"></rect>
				<rect x="96" y="152" width="14" height="14" rx="1"></rect>
				<rect x="112" y="152" width="14" height="14" rx="1"></rect>
				<rect x="128" y="152" width="14" height="14" rx="1"></rect>
				<rect x="96" y="168" width="14" height="14" rx="1"></rect>
				<rect x="112" y="168" width="14" height="14" rx="1"></rect>
				<rect x="96" y="184" width="14" height="14" rx="1"></rect>
				<rect x="80" y="200" width="14" height="14" rx="1"></rect>
				<rect x="80" y="184" width="14" height="14" rx="1"></rect>
			</svg>
		),
		slow: (
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 256 256"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="120" y="88" width="14" height="14" rx="1"></rect>
				<rect x="120" y="72" width="14" height="14" rx="1"></rect>
				<rect x="120" y="152" width="14" height="14" rx="1"></rect>
				<rect x="200" y="72" width="14" height="14" rx="1"></rect>
				<rect x="120" y="168" width="14" height="14" rx="1"></rect>
				<rect x="120" y="104" width="14" height="14" rx="1"></rect>
				<rect x="168" y="88" width="14" height="14" rx="1"></rect>
				<rect x="152" y="136" width="14" height="14" rx="1"></rect>
				<rect x="88" y="136" width="14" height="14" rx="1"></rect>
				<rect x="88" y="104" width="14" height="14" rx="1"></rect>
				<rect x="120" y="56" width="14" height="14" rx="1"></rect>
				<rect x="104" y="120" width="14" height="14" rx="1"></rect>
				<rect x="120" y="184" width="14" height="14" rx="1"></rect>
				<rect x="136" y="120" width="14" height="14" rx="1"></rect>
				<rect x="184" y="56" width="14" height="14" rx="1"></rect>
				<rect x="104" y="40" width="14" height="14" rx="1"></rect>
				<rect x="104" y="200" width="14" height="14" rx="1"></rect>
				<rect x="136" y="40" width="14" height="14" rx="1"></rect>
				<rect x="136" y="200" width="14" height="14" rx="1"></rect>
				<rect x="168" y="152" width="14" height="14" rx="1"></rect>
				<rect x="72" y="152" width="14" height="14" rx="1"></rect>
				<rect x="184" y="72" width="14" height="14" rx="1"></rect>
				<rect x="200" y="168" width="14" height="14" rx="1"></rect>
				<rect x="56" y="168" width="14" height="14" rx="1"></rect>
				<rect x="56" y="184" width="14" height="14" rx="1"></rect>
				<rect x="56" y="72" width="14" height="14" rx="1"></rect>
				<rect x="56" y="56" width="14" height="14" rx="1"></rect>
				<rect x="40" y="72" width="14" height="14" rx="1"></rect>
				<rect x="40" y="168" width="14" height="14" rx="1"></rect>
				<rect x="184" y="168" width="14" height="14" rx="1"></rect>
				<rect x="184" y="184" width="14" height="14" rx="1"></rect>
				<rect x="72" y="88" width="14" height="14" rx="1"></rect>
				<rect x="152" y="104" width="14" height="14" rx="1"></rect>
				<rect x="120" y="120" width="14" height="14" rx="1"></rect>
				<rect x="120" y="136" width="14" height="14" rx="1"></rect>
			</svg>
		),
	};

	// Return the same icon for all intensities for now, can be customized later
	return icons[type];
};

// Get status effect colors - strong backgrounds with high contrast white icons
const getStatusEffectColor = (
	type: StatusEffect["type"],
	intensity: StatusEffect["intensity"] = "normal",
) => {
	const colors = {
		poison: {
			weak: "bg-purple-600 border-purple-400 text-white",
			normal: "bg-purple-700 border-purple-500 text-white",
			strong: "bg-purple-800 border-purple-600 text-white",
		},
		freeze: {
			weak: "bg-blue-600 border-blue-400 text-white",
			normal: "bg-blue-700 border-blue-500 text-white",
			strong: "bg-blue-800 border-blue-600 text-white",
		},
		burn: {
			weak: "bg-red-600 border-red-400 text-white",
			normal: "bg-red-700 border-red-500 text-white",
			strong: "bg-red-800 border-red-600 text-white",
		},
		stun: {
			weak: "bg-yellow-600 border-yellow-400 text-white",
			normal: "bg-yellow-700 border-yellow-500 text-white",
			strong: "bg-yellow-800 border-yellow-600 text-white",
		},
		heal: {
			weak: "bg-green-600 border-green-400 text-white",
			normal: "bg-green-700 border-green-500 text-white",
			strong: "bg-green-800 border-green-600 text-white",
		},
		shield: {
			weak: "bg-slate-600 border-slate-400 text-white",
			normal: "bg-slate-700 border-slate-500 text-white",
			strong: "bg-slate-800 border-slate-600 text-white",
		},
		speed: {
			weak: "bg-cyan-600 border-cyan-400 text-white",
			normal: "bg-cyan-700 border-cyan-500 text-white",
			strong: "bg-cyan-800 border-cyan-600 text-white",
		},
		slow: {
			weak: "bg-orange-600 border-orange-400 text-white",
			normal: "bg-orange-700 border-orange-500 text-white",
			strong: "bg-orange-800 border-orange-600 text-white",
		},
	};

	return colors[type][intensity];
};

function StatusEffectBadge({
	effect,
	size,
	showDuration,
	showStacks,
	animated,
}: {
	effect: StatusEffect;
	size: VariantProps<typeof statusEffectVariants>["size"];
	showDuration?: boolean;
	showStacks?: boolean;
	animated?: boolean;
}) {
	const icon = getStatusEffectIcon(effect.type, effect.intensity);
	const colorClass = getStatusEffectColor(effect.type, effect.intensity);

	// Get size-specific dimensions for indicators
	const indicatorSize =
		size === "sm"
			? "w-5 h-5"
			: size === "md"
				? "w-6 h-6"
				: size === "lg"
					? "w-7 h-7"
					: "w-8 h-8";
	const textSize =
		size === "sm"
			? "text-[10px]"
			: size === "md"
				? "text-xs"
				: size === "lg"
					? "text-sm"
					: "text-base";

	return (
		<div
			className={cn("relative inline-block", statusEffectVariants({ size }))}
		>
			{/* Container with 8-bit border styling - matches card/input pattern exactly */}
			<div className="relative w-full h-full border-y-4 border-foreground dark:border-ring">
				{/* Main effect icon */}
				<div
					className={cn(
						"relative w-full h-full flex items-center justify-center rounded-none border-0 retro transition-all duration-200",
						colorClass,
						animated && "hover:brightness-110",
					)}
					title={`${effect.type.charAt(0).toUpperCase() + effect.type.slice(1)}${
						effect.duration ? ` (${effect.duration}s)` : ""
					}${effect.stacks ? ` x${effect.stacks}` : ""}`}
				>
					<div className="w-3/4 h-3/4">{icon}</div>
				</div>

				{/* Left and right borders */}
				<div
					className="absolute inset-0 border-x-4 -mx-1 border-foreground dark:border-ring pointer-events-none"
					aria-hidden="true"
				/>
			</div>

			{/* Duration indicator - top right corner, clean style */}
			{showDuration && effect.duration && (
				<div
					className={cn(
						"absolute top-1 right-0 flex items-center justify-center bg-foreground rounded-sm font-bold leading-none",
						indicatorSize,
						textSize,
					)}
				>
					<span className="text-background select-none">{effect.duration}</span>
				</div>
			)}

			{/* Stack indicator - bottom right corner, clean style */}
			{showStacks && effect.stacks && effect.stacks > 1 && (
				<div
					className={cn(
						"absolute bottom-1 right-0 flex items-center justify-center bg-orange-600 rounded-sm font-bold leading-none",
						indicatorSize,
						textSize,
					)}
				>
					<span className="text-white select-none">{effect.stacks}</span>
				</div>
			)}
		</div>
	);
}

export function StatusEffectIndicator({
	effects,
	showDuration = true,
	showStacks = true,
	maxEffects = 10,
	className,
	variant,
	size = "md",
	animated = true,
	...props
}: StatusEffectIndicatorProps) {
	const visibleEffects = React.useMemo(() => {
		return effects.slice(0, maxEffects);
	}, [effects, maxEffects]);

	const remainingCount = effects.length - maxEffects;

	if (effects.length === 0) {
		return null;
	}

	return (
		<div
			className={cn(
				"flex flex-row items-center gap-3 flex-wrap",
				variant === "retro" && "retro",
				className,
			)}
			{...props}
		>
			{visibleEffects.map((effect) => (
				<StatusEffectBadge
					key={effect.id}
					effect={effect}
					size={size}
					showDuration={showDuration}
					showStacks={showStacks}
					animated={animated}
				/>
			))}

			{/* Show remaining count if there are more effects - matches new 8-bit style */}
			{remainingCount > 0 && (
				<div
					className={cn(
						"relative inline-block",
						statusEffectVariants({ size }),
					)}
				>
					<div className="relative w-full h-full border-y-4 border-muted-foreground">
						<div
							className="relative w-full h-full flex items-center justify-center rounded-none border-0 bg-muted/50 text-muted-foreground retro transition-all duration-200"
							title={`${remainingCount} more effect${remainingCount > 1 ? "s" : ""}`}
						>
							<span className="text-center leading-none font-bold select-none">
								+{remainingCount}
							</span>
						</div>
						<div
							className="absolute inset-0 border-x-4 -mx-1 border-muted-foreground pointer-events-none"
							aria-hidden="true"
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default StatusEffectIndicator;
