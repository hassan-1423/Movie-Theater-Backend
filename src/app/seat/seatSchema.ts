
    import { authConfig } from "@/app/config"
    import { User } from "@prisma/client"
    import { FromSchema } from "json-schema-to-ts"

    export const SeatSchema = {
        type: "array",
        items: {
            type: "object",
            properties: {
                number: { type: "string" },
                theaterId: { type: "number" },
            },
            required: ["number"],
            additionalProperties: false,
        },
    } as const;
    
    export type Seat = FromSchema<typeof SeatSchema>;
    