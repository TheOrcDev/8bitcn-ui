import { siteConfig } from "@/lib/site";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Person",
      name: siteConfig.creator,
      url: "https://orcdev.com",
    },
  } as const;
}

export function softwareSourceCodeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    codeRepository: "https://github.com/TheOrcDev/8bitcn-ui",
    license: "https://opensource.org/licenses/MIT",
    programmingLanguage: "TypeScript",
    runtimePlatform: "React",
  } as const;
}

export function techArticleJsonLd({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: siteConfig.creator,
      url: "https://orcdev.com",
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.creator,
    },
  } as const;
}
