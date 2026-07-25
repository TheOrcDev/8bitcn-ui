/** biome-ignore-all lint/correctness/noChildrenProp: External component */
"use client";

import { useForm, useStore } from "@tanstack/react-form";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { SubmitSuccessCard } from "@/components/submit-success-card";
import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Input } from "@/components/ui/8bit/input";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { createProject } from "@/server/projects";

const URL_PROTOCOL_REGEX = /^https?:\/\//i;
const VALID_HOSTNAME_REGEX = /^.+\..+$/;
const MIN_PROJECT_NAME_LENGTH = 3;
const MAX_PROJECT_NAME_LENGTH = 50;
const PROJECT_NAME_INPUT_ID = "form-tanstack-input-project-name";
const PROJECT_NAME_ERROR_ID = "form-tanstack-error-project-name";
const PROJECT_URL_INPUT_ID = "form-tanstack-input-url";
const PROJECT_URL_DESCRIPTION_ID = "form-tanstack-description-url";
const PROJECT_URL_ERROR_ID = "form-tanstack-error-url";

const formSchema = z.object({
  projectName: z
    .string()
    .min(
      MIN_PROJECT_NAME_LENGTH,
      `Project name must be at least ${MIN_PROJECT_NAME_LENGTH} characters.`
    )
    .max(
      MAX_PROJECT_NAME_LENGTH,
      `Project name must be less than ${MAX_PROJECT_NAME_LENGTH} characters.`
    ),
  url: z
    .string()
    .min(1, "URL is required.")
    .refine(
      (val) => {
        const urlWithProtocol = URL_PROTOCOL_REGEX.test(val)
          ? val
          : `https://${val}`;
        try {
          const urlObj = new URL(urlWithProtocol);
          return VALID_HOSTNAME_REGEX.test(urlObj.hostname);
        } catch {
          return false;
        }
      },
      {
        message:
          "Please enter a valid URL (e.g. example.com or https://example.com)",
      }
    ),
});

export function SubmitProjectForm() {
  const [isSubmited, setIsSubmited] = useState(false);

  const form = useForm({
    defaultValues: {
      projectName: "",
      url: "",
    },
    validators: {
      onChange: formSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const newProject = await createProject({
          name: value.projectName,
          url: value.url,
        });

        if (typeof newProject === "string") {
          toast.error(newProject);
          return;
        }

        toast.success("Project submitted successfully. Good luck!");
        setIsSubmited(true);
        form.reset();
      } catch {
        throw new Error("Failed to create project");
      }
    },
  });

  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

  if (isSubmited) {
    return <SubmitSuccessCard />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Your Project</CardTitle>
        <CardDescription className="text-xs">
          Drop your project here
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="submit-project-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={PROJECT_NAME_INPUT_ID}>
                      Project Name
                    </FieldLabel>
                    <Input
                      aria-describedby={
                        isInvalid ? PROJECT_NAME_ERROR_ID : undefined
                      }
                      aria-invalid={isInvalid}
                      autoComplete="off"
                      id={PROJECT_NAME_INPUT_ID}
                      maxLength={MAX_PROJECT_NAME_LENGTH}
                      minLength={MIN_PROJECT_NAME_LENGTH}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="project name"
                      required
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError
                        className="text-xs"
                        errors={field.state.meta.errors}
                        id={PROJECT_NAME_ERROR_ID}
                      />
                    )}
                  </Field>
                );
              }}
              name="projectName"
            />
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={PROJECT_URL_INPUT_ID}>
                      Project URL
                    </FieldLabel>
                    <Input
                      aria-describedby={
                        isInvalid
                          ? `${PROJECT_URL_DESCRIPTION_ID} ${PROJECT_URL_ERROR_ID}`
                          : PROJECT_URL_DESCRIPTION_ID
                      }
                      aria-invalid={isInvalid}
                      autoComplete="url"
                      id={PROJECT_URL_INPUT_ID}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="https://yourproject.com"
                      required
                      type="text"
                      value={field.state.value}
                    />
                    <FieldDescription
                      className="text-xs"
                      id={PROJECT_URL_DESCRIPTION_ID}
                    >
                      Must be a public project.
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError
                        className="text-xs"
                        errors={field.state.meta.errors}
                        id={PROJECT_URL_ERROR_ID}
                      />
                    )}
                  </Field>
                );
              }}
              name="url"
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field className="flex gap-5" orientation="horizontal">
          <Button
            disabled={isSubmitting}
            form="submit-project-form"
            type="submit"
          >
            {isSubmitting ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
