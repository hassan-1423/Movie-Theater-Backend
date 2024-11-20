
    import { FastifyPlugin } from "@/core/server/plugins"
    import { CinemaController } from "./cinemaController"

    export const CinemaRouter: FastifyPlugin = (app, _opts, next) => {
        app.post("/", CinemaController.createCinema)
        app.get("/", CinemaController.listCinema)
        app.put("/:id", CinemaController.updateCinema)
        app.delete("/:id", CinemaController.deleteCinema)
        app.post("/Movie", CinemaController.createMovie)
        app.get("/Movie", CinemaController.listMovies)
        app.put("/Movie/:id", CinemaController.updateMovie)
        app.delete("/Movie/:id", CinemaController.deleteMovie)

        next()
    }
    