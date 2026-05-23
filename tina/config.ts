import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "", // Set when connecting to Tina Cloud
  token: "", // Set when connecting to Tina Cloud

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      /* ──────────────── Site (global) ──────────────── */
      {
        name: "site",
        label: "Site Settings",
        path: "content",
        match: { include: "site" },
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          { type: "string", name: "companyName", label: "Company Name", required: true },
          { type: "string", name: "phone", label: "Phone Number", required: true },
          { type: "string", name: "phoneHref", label: "Phone Link (tel:…)", required: true },
          { type: "string", name: "fax", label: "Fax Number" },
          { type: "string", name: "email", label: "Email Address", required: true },
          { type: "string", name: "emailHref", label: "Email Link (mailto:…)", required: true },
          {
            type: "object",
            name: "address",
            label: "Address",
            fields: [
              { type: "string", name: "line1", label: "Line 1" },
              { type: "string", name: "line2", label: "Line 2" },
              { type: "string", name: "line3", label: "Line 3" },
            ],
          },
          { type: "string", name: "badgeText", label: "Badge Text" },
          { type: "image", name: "logo", label: "Header Logo" },
          { type: "string", name: "logoAlt", label: "Logo Alt Text" },
          { type: "image", name: "footerLogo", label: "Footer Logo" },
          { type: "string", name: "footerDescription", label: "Footer Description", ui: { component: "textarea" } },
          {
            type: "object",
            name: "navigation",
            label: "Main Navigation",
            list: true,
            fields: [
              { type: "string", name: "href", label: "Link (e.g. #services)", required: true },
              { type: "string", name: "label", label: "Label", required: true },
            ],
          },
          {
            type: "object",
            name: "footerNav",
            label: "Footer Navigation",
            list: true,
            fields: [
              { type: "string", name: "href", label: "Link", required: true },
              { type: "string", name: "label", label: "Label", required: true },
            ],
          },
        ],
      },

      /* ──────────────── Hero ──────────────── */
      {
        name: "hero",
        label: "Hero Section",
        path: "content",
        match: { include: "hero" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow Text" },
          { type: "string", name: "introText", label: "Introduction Text", ui: { component: "textarea" } },
          { type: "string", name: "ctaPrimary", label: "Primary CTA Button Text" },
          {
            type: "object",
            name: "trustStats",
            label: "Trust Stats",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value (e.g. 20+)", required: true },
              { type: "string", name: "label", label: "Label (e.g. Years' experience)", required: true },
            ],
          },
          {
            type: "object",
            name: "floorCard",
            label: "Floor Card",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subheading", label: "Subheading" },
              { type: "string", name: "features", label: "Features", list: true },
            ],
          },
        ],
      },

      /* ──────────────── Why Us ──────────────── */
      {
        name: "whyUs",
        label: "Why Us Section",
        path: "content",
        match: { include: "why-us" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow Text" },
          { type: "string", name: "heading", label: "Section Heading" },
          { type: "string", name: "description", label: "Section Description", ui: { component: "textarea" } },
          {
            type: "object",
            name: "cards",
            label: "Cards",
            list: true,
            fields: [
              { type: "string", name: "icon", label: "Icon Key (layers, shield, users, clock)" },
              { type: "string", name: "title", label: "Card Title", required: true },
              { type: "string", name: "description", label: "Card Description", ui: { component: "textarea" } },
            ],
          },
        ],
      },

      /* ──────────────── Services ──────────────── */
      {
        name: "services",
        label: "Services Section",
        path: "content",
        match: { include: "services" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow Text" },
          { type: "string", name: "heading", label: "Section Heading" },
          { type: "string", name: "description", label: "Section Description", ui: { component: "textarea" } },
          {
            type: "object",
            name: "services",
            label: "Service Cards",
            list: true,
            fields: [
              { type: "string", name: "icon", label: "Icon Key (consult, cad, install, wrench, chart, stairs)" },
              { type: "string", name: "title", label: "Service Title", required: true },
              { type: "string", name: "description", label: "Service Description", ui: { component: "textarea" } },
            ],
          },
        ],
      },

      /* ──────────────── Partners ──────────────── */
      {
        name: "partners",
        label: "Partners Band",
        path: "content",
        match: { include: "partners" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heading", label: "Band Heading" },
          { type: "string", name: "brands", label: "Brand Names", list: true },
        ],
      },

      /* ──────────────── About / What is RAF ──────────────── */
      {
        name: "about",
        label: "What is Raised Access Flooring",
        path: "content",
        match: { include: "about" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow Text" },
          { type: "string", name: "heading", label: "Section Heading" },
          { type: "string", name: "paragraphs", label: "Body Paragraphs", list: true, ui: { component: "textarea" } },
          {
            type: "object",
            name: "uses",
            label: "Underfloor Uses",
            list: true,
            fields: [
              { type: "string", name: "icon", label: "Icon Key (bolt, server, air, fire)" },
              { type: "string", name: "label", label: "Use Label", required: true },
            ],
          },
          { type: "string", name: "diagramCaption", label: "Diagram Caption" },
        ],
      },

      /* ──────────────── CTA Band ──────────────── */
      {
        name: "cta",
        label: "CTA Band",
        path: "content",
        match: { include: "cta" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heading", label: "Heading" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "string", name: "primaryButton", label: "Primary Button Text" },
          { type: "string", name: "secondaryButtonPrefix", label: "Secondary Button Prefix (before phone number)" },
        ],
      },

      /* ──────────────── Data Centres ──────────────── */
      {
        name: "dataCentres",
        label: "Data Centres Section",
        path: "content",
        match: { include: "data-centres" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow Text" },
          { type: "string", name: "heading", label: "Section Heading" },
          { type: "string", name: "paragraphs", label: "Body Paragraphs", list: true, ui: { component: "textarea" } },
          { type: "string", name: "requirements", label: "Requirements", list: true },
          { type: "string", name: "panelHeading", label: "Panel Heading" },
          { type: "string", name: "panelDescription", label: "Panel Description", ui: { component: "textarea" } },
          { type: "string", name: "panelFeatures", label: "Panel Features", list: true },
          { type: "string", name: "panelCta", label: "Panel CTA Button Text" },
        ],
      },

      /* ──────────────── Contact ──────────────── */
      {
        name: "contact",
        label: "Contact Section",
        path: "content",
        match: { include: "contact" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow Text" },
          { type: "string", name: "heading", label: "Section Heading" },
          { type: "string", name: "introText", label: "Introduction Text", ui: { component: "textarea" } },
          { type: "string", name: "formHeading", label: "Form Heading" },
          { type: "string", name: "formSubheading", label: "Form Subheading" },
          { type: "string", name: "formSuccessMessage", label: "Form Success Message (use {phone} for phone number)" },
          { type: "string", name: "formNote", label: "Form Note (use {phone} for phone number)" },
          { type: "string", name: "submitButton", label: "Submit Button Text" },
          { type: "string", name: "serviceOptions", label: "Service Type Options", list: true },
        ],
      },
    ],
  },
});
