
    import { FastifyPlugin } from "@/core/server/plugins"
    import { SeatController } from "./seatController"

    export const SeatRouter: FastifyPlugin = (app, _opts, next) => {
        app.post("/", SeatController.createSeat)
        app.get("/", SeatController.listSeat)
        // app.put("/:id", SeatController.updateSeat)
        // app.delete("/:id", SeatController.deleteSeat)

        next()
    }
    