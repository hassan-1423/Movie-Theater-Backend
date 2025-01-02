import { authConfig } from "@/app/config"
import { User } from "@prisma/client"
import { FromSchema } from "json-schema-to-ts"

export const MovieSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    imageUrl: { type: "string" },
    description: { type: "string" },
    duration: { type: "integer" },
    theaterId: { type: "integer" },
    categoryIds: { // updated for multiple categories
        type: "array",
        items: { type: "integer" },
      },
  },
  required: ["title", "duration"],
  additionalProperties: false,
} as const

export type Movie = FromSchema<typeof MovieSchema>
export const MovieCategory = {
  type: "object",
  properties: {
    categoryName: { type: "string" },
    description: { type: "string" },
  },
  required: [],
  additionalProperties: false,
} as const

export type Category = FromSchema<typeof MovieCategory>
