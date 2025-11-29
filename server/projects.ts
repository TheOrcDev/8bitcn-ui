"use server";

import { and, eq, or } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { type InsertProject, projects, type SelectProject } from "@/db/schema";

export async function createProject(
  project: InsertProject
): Promise<string | SelectProject> {
  const check = await db.query.projects.findFirst({
    where: and(
      or(eq(projects.name, project.name), eq(projects.url, project.url))
    ),
  });

  if (check) {
    return "Project already added.";
  }

  try {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  } catch {
    throw new Error("Failed to create project");
  }
}
