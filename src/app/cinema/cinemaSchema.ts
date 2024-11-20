import { authConfig } from "@/app/config"
import { User } from "@prisma/client"
import { FromSchema } from "json-schema-to-ts"

export const CinemaSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    seatsType: { type: "string" },
    screens: { type: "integer" },
  },
  required: ["name", "seatsType", "screens"],
  additionalProperties: false,
} as const

export type Cinema = FromSchema<typeof CinemaSchema>

export const MovieSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    imageUrl: { type: "string" },
    description: { type: "string" },
    duration: { type: "integer" },
    theaterId: { type: "integer" },
  },
  required: ["title", "duration"],
  additionalProperties: false,
} as const

export type Movie = FromSchema<typeof MovieSchema>
