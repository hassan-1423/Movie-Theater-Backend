
    import { FastifyPlugin } from "@/core/server/plugins"
    import { CinemaController } from "./cinemaController"

    export const CinemaRouter: FastifyPlugin = (app, _opts, next) => {
        app.post("/", CinemaController.createCinema)
        app.get("/", CinemaController.listCinema)
        app.put("/:id", CinemaController.updateCinema)
        app.delete("/:id", CinemaController.deleteCinema)
       
        
        next()
    }
    