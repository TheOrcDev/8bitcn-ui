"use client"

import dynamic from "next/dynamic"

const InputOTPDemo = dynamic(
  () => import("./input-otp-demo").then((mod) => mod.InputOTPDemo),
  { ssr: false }
)

export function InputOTPWrapper() {
  return <InputOTPDemo />
}
