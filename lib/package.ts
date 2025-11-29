import { promises as fs } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Registry, RegistryItem } from "shadcn/schema";

export const getPackage = async (packageName: string) => {
  // Read the main registry.json file
  const registryPath = join(process.cwd(), "registry.json");
  const registryContent = await readFile(registryPath, "utf-8");
  const registry = JSON.parse(registryContent);

  // Find the package in the registry
  const packageItem = registry.items.find(
    (item: RegistryItem) => item.name === packageName
  );

  if (!packageItem) {
    throw new Error(`Package ${packageName} not found in registry`);
  }

  // Read file contents for each file in the package
  const filesWithContent = await Promise.all(
    // @ts-expect-error - RegistryItem["files"] is not typed correctly
    packageItem.files.map(async (file: RegistryItem["files"][0]) => {
      const filePath = join(process.cwd(), file.path);
      const content = await fs.readFile(filePath, "utf-8");

      return {
        ...file,
        content,
      };
    })
  );

  // Return the package with file contents
  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    ...packageItem,
    files: filesWithContent,
  };
};

export const getAllPackageNames = async () => {
  const registryPath = join(process.cwd(), "registry.json");
  const registryContent = await readFile(registryPath, "utf-8");
  const registry = JSON.parse(registryContent) as Registry;

  return registry.items.map((item: RegistryItem) => item.name);
};
