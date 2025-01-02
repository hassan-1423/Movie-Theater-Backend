import { FastifyPlugin } from "@/core/server/plugins"
import { MovieController } from "./movieController"

export const MovieRouter: FastifyPlugin = (app, _opts, next) => {
  app.post("/", MovieController.createMovie)
//   app.get("/", MovieController.listMovies)
  app.put("/Movie/:id", MovieController.updateMovie)
  app.delete("/Movie/:id", MovieController.deleteMovie)
  next()
}
