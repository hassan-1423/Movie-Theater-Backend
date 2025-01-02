
    import { RouteShorthandOptionsWithHandler } from "fastify"
    import { requestMeta } from "@/core/helpers"
    import { Movie } from "./movieSchema"
    import { MovieService } from "./movieService"
    import { MovieSchema } from "./movieSchema"
    import { validateToken } from "@/core/server/middleware"
    import { hasRole } from "@/core/server/middleware"
    import { UserRole } from "@prisma/client"

    export const MovieController: Record<
    string,
    RouteShorthandOptionsWithHandler
    > = {
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
        return await MovieService.createMovie(body)
        },
    },
    listMovie: {
        handler: async (req) => {
        const body = req.params
        return await MovieService.listMovies(body)
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
        return await MovieService.updateMovie(id, body)
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
        return await MovieService.deleteMovie(id)
        },
    },
    }
    