import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Construction Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug URL",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Project Status",
      type: "string",
      options: {
        list: [
          { title: "In Progress", value: "in-progress" },
          { title: "Completed", value: "completed" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Main Thumbnail Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Project Image Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Drag and drop blueprints, structural progress frames, and finishing shots here.",
    }),
    defineField({
      name: "description",
      title: "Project Summary & Details",
      type: "text",
    }),
  ],
});