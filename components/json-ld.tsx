export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be serialized into a script tag
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replaceAll("<", "\\u003c"),
      }}
      type="application/ld+json"
    />
  );
}
