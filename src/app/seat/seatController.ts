
    import { RouteShorthandOptionsWithHandler } from "fastify"
    import { requestMeta } from "@/core/helpers"
    import { Seat } from "./seatSchema"
    import { SeatService } from "./seatService"
    import { SeatSchema } from "./seatSchema"
    import { validateToken } from "@/core/server/middleware"
    import { hasRole } from "@/core/server/middleware"
    import { UserRole } from "@prisma/client"

    export const SeatController: Record<
    string,
    RouteShorthandOptionsWithHandler
    > = {
    createSeat: {
        preValidation: [
        validateToken,
        hasRole(UserRole.ADMIN),
        ],
        schema: {
        body: SeatSchema,
        },
        handler: async (req) => {
        const body = req.body as Seat[]
        return await SeatService.createSeats(body)
        },
    },    
    listSeat: {
        handler: async (req) => {
        const body = req.params
        return await SeatService.listSeats(body)
        },
    },
    // updateSeat: {
    //     preValidation: [
    //     validateToken,
    //     hasRole(UserRole.ADMIN),
    //     ],
    //     // schema: {
    //     // body: SeatSchema,
    //     // },
    //     handler: async (req) => {
    //     const params = req.params as { id: number }
    //     const body = req.body as Seat[]
    //     const id = params.id
    //     return await SeatService.updateSeat(id, body)
    //     },
    // },
    // deleteSeat: {
    //     preValidation: [
    //     validateToken,
    //     hasRole(UserRole.ADMIN),
    //     ],
    //     handler: async (req) => {
    //     const params = req.params as { id: number }
    //     const id = params.id
    //     return await SeatService.deleteSeat(id)
    //     },
    // },
    }
    