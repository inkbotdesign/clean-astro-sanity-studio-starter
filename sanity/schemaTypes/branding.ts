import { defineType, defineField } from "sanity";

export const subServiceType = defineType({
  name: "subService",
  title: "Sub-Service",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", validation: (rule) => rule.required() }),
    defineField({ name: "icon", title: "Icon (emoji or class)", type: "string" }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({ name: "ctaUrl", title: "CTA URL", type: "url" }),
  ],
});

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "subServices", title: "Sub-services", type: "array", of: [{ type: "subService" }], validation: (rule) => rule.unique() }),
  ],
  preview: { select: { title: "title", subtitle: "summary" } },
});

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text" }),
    defineField({ name: "heroCtaText", title: "CTA Text", type: "string" }),
    defineField({ name: "heroCtaUrl", title: "CTA URL", type: "url" }),
    defineField({ name: "featuredServices", title: "Featured Services", type: "array", of: [{ type: "reference", to: [{ type: "service" }] }], validation: (rule) => rule.max(6) }),
    defineField({ name: "featuredPortfolio", title: "Featured Portfolio", type: "array", of: [{ type: "reference", to: [{ type: "portfolioItem" }] }], validation: (rule) => rule.max(6) }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text" }),
  ],
  preview: { select: { title: "title", subtitle: "tagline" } },
});

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "mission", title: "Mission Statement", type: "text" }),
    defineField({ name: "vision", title: "Vision Statement", type: "text" }),
    defineField({ name: "values", title: "Values", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "team", title: "Team", type: "array", of: [{ type: "object", fields: [
      { name: "name", title: "Name", type: "string", validation: (rule) => rule.required() },
      { name: "role", title: "Role", type: "string" },
      { name: "bio", title: "Bio", type: "text" },
      { name: "avatar", title: "Avatar", type: "image", options: { hotspot: true } },
    ] }]}),
    defineField({ name: "history", title: "History", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "contactInfo", title: "Contact Info", type: "object", fields: [
      { name: "email", title: "Email", type: "string" },
      { name: "phone", title: "Phone", type: "string" },
      { name: "address", title: "Address", type: "string" },
    ] }),
  ],
  preview: { select: { title: "title", subtitle: "mission" } },
});

export const portfolioItemType = defineType({
  name: "portfolioItem",
  title: "Portfolio Item",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "clientName", title: "Client Name", type: "string" }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "overview", title: "Overview", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "caseStudy", title: "Case Study", type: "reference", to: [{ type: "caseStudy" }] }),
  ],
  preview: { select: { title: "title", subtitle: "clientName" } },
});

export const caseStudyType = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "portfolioItem", title: "Portfolio Item", type: "reference", to: [{ type: "portfolioItem" }] }),
    defineField({ name: "challenge", title: "Challenge", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "solution", title: "Solution", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "results", title: "Results", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "keyMetrics", title: "Key Metrics", type: "array", of: [{ type: "string" }], description: "Add measurable outcomes for the case study." }),
    defineField({ name: "mainImage", title: "Main Image", type: "image", options: { hotspot: true } }),
  ],
  preview: { select: { title: "title", subtitle: "portfolioItem.title" }, prepare(selection) { return { ...selection, subtitle: selection.subtitle ? `Portfolio: ${selection.subtitle}` : "" } } },
});
