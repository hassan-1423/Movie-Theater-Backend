import { FastifyPlugin } from "@/core/server/plugins"
import { MovieController } from "./movieController"

export const MovieRouter: FastifyPlugin = (app, _opts, next) => {
  app.post("/", MovieController.createMovie)
  app.get("/", MovieController.listMovie)
  app.put("/Movie/:id", MovieController.updateMovie)
  app.delete("/Movie/:id", MovieController.deleteMovie)
  app.post("/movieCategory", MovieController.movieCategory)
  app.get("/movieCategory", MovieController.getmovieCategory)
  app.put("/MovieCategory/:id", MovieController.updateMovieCategory)
  next()
}
