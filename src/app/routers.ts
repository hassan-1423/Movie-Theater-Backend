import { FastifyPlugin } from "@/core/server/plugins"
import { HealthCheckRouter } from "./modules/healthCheck/healthCheckRouter"
import { AuthRouter } from "./modules/auth/authRouter"
import { ForgotPasswordRouter } from "./modules/forgotPassword/forgotPasswordRouter"
import { PasswordRouter } from "./modules/password/passwordRouter"
import { UserRouter } from "./modules/user/userRouter"
import { CinemaRouter } from "./cinema/cinemaRouter"
import { MovieRouter } from "./movie/movieRouter"
import { SeatRouter } from "./seat/seatRouter"

/**
 * Register all module routers here
 *
 */
export const routers = new Map<string, FastifyPlugin>([
  ["/api/v1/health-check", HealthCheckRouter],
  ["/api/v1/auth", AuthRouter],
  ["/api/v1/forgot-password", ForgotPasswordRouter],
  ["/api/v1/password", PasswordRouter],
  ["/api/v1/user", UserRouter],
  ["/api/v1/cinema", CinemaRouter],
  ["/api/v1/movie", MovieRouter],
  ["/api/v1/seat", SeatRouter],
])
