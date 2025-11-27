import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About the project.",
};

export default function Page() {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-8">
      <h1 className="font-bold text-2xl">About</h1>
      <p>Coming soon...</p>
    </div>
  );
}
