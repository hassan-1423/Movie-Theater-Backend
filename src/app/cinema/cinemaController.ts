
    import { RouteShorthandOptionsWithHandler } from "fastify"
    import { requestMeta } from "@/core/helpers"
    import { Cinema, MovieSchema } from "./cinemaSchema"
    import { CinemaService } from "./cinemaService"
    import { CinemaSchema } from "./cinemaSchema"
    import { validateToken } from "@/core/server/middleware"
    import { hasRole } from "@/core/server/middleware"
    import { Movie, UserRole } from "@prisma/client"

    export const CinemaController: Record<
    string,
    RouteShorthandOptionsWithHandler
    > = {
    createCinema: {
        preValidation: [
        validateToken,
        hasRole(UserRole.ADMIN),
        ],
        schema: {
        body: CinemaSchema,
        },
        handler: async (req) => {
        const body = req.body as Cinema
        return await CinemaService.createCinema(body)
        },
    },
    listCinema: {
        handler: async (req) => {
        const body = req.params
        return await CinemaService.listCinemas(body)
        },
    },
    updateCinema: {
        preValidation: [
        validateToken,
        hasRole(UserRole.ADMIN),
        ],
        schema: {
        body: CinemaSchema,
        },
        handler: async (req) => {
        const params = req.params as { id: number }
        const body = req.body as Cinema
        console.log(body)
        const id = params.id
        return await CinemaService.updateCinema(id, body)
        },
    },
    deleteCinema: {
        preValidation: [
        validateToken,
        hasRole(UserRole.ADMIN),
        ],
        handler: async (req) => {
        const params = req.params as { id: number }
        const id = params.id
        return await CinemaService.deleteCinema(id)
        },
    },
    createMovie: {
        preValidation: [
        validateToken,
        hasRole(UserRole.ADMIN),
        ],
        schema: {
        body: MovieSchema,
        },
        handler: async (req) => {
        const body = req.body as Movie
        return await CinemaService.createMovie(body)
        },
    },
    listMovies: {
        handler: async (req) => {
        const body = req.params
        return await CinemaService.listMovies(body)
        },
    },
    updateMovie: {
        preValidation: [
        validateToken,
        hasRole(UserRole.ADMIN),
        ],
        schema: {
        body: MovieSchema,
        },
        handler: async (req) => {
        const params = req.params as { id: number }
        const body = req.body as Movie
        console.log(body)
        const id = params.id
        return await CinemaService.updateMovie(id, body)
        },
    },
    deleteMovie: {
        preValidation: [
        validateToken,
        hasRole(UserRole.ADMIN),
        ],
        handler: async (req) => {
        const params = req.params as { id: number }
        const id = params.id
        return await CinemaService.deleteMovie(id)
        },
    },
    }
    