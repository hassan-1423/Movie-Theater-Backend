import { Movie } from "@prisma/client"
import { Cinema } from "./cinemaSchema"
import { db, Paginated } from "@/core/database"

export const CinemaService = {
  async createCinema(body: Cinema) {
    try {
      const newTheater = await db.theater.create({
        data: {
          name: body.name,
          seatsType: body.seatsType,
          screens: body.screens,
        },
      })
      return newTheater
    } catch (error) {
      console.error("Error creating theater:", error)
      throw new Error("Unable to create theater")
    }
  },

  async listCinemas(body: any) {
    try {
      const cinema = await db.theater.findMany()
      return cinema
    } catch (error) {
      console.log(error)
      throw new Error("Unable to list items")
    }
  },

  async updateCinema(id: Number, body: Cinema) {
    try {
      const cinema = await db.theater.update({
        where: {
          id: Number(id),
        },
        data: body,
      })

      return cinema
    } catch (error) {
      console.log(error)
      throw new Error("Unable to Update item")
    }
  },
  async deleteCinema(id: Number) {
    try {
      const cinema = await db.theater.delete({
        where: {
          id: Number(id),
        },
      })

      return {
        message: "Item Deleted Successfully",
      }
    } catch (error) {
      console.log(error)
      throw new Error("Unable to Delete item")
    }
  },
  async createMovie(body: Movie) {
    try {
      const newMovie = await db.movie.create({
        data: {
          title: body.title,
          imageUrl:body.imageUrl,
          description: body.description,
          duration: body.duration,
          theaterId: body.theaterId, // nullable
        },
      })
      return newMovie
    } catch (error) {
      console.error("Error creating movie:", error)
      throw new Error("Unable to create movie")
    }
  },
  async listMovies(body: any) {
    try {
      const movie = await db.movie.findMany()
      return movie
    } catch (error) {
      console.log(error)
      throw new Error("Unable to list items")
    }
  },
  async updateMovie(id: Number, body: Movie) {
    try {
      const movie = await db.movie.update({
        where: {
          id: Number(id),
        },
        data: body,
      })

      return movie
    } catch (error) {
      console.log(error)
      throw new Error("Unable to Update item")
    }
  },
  async deleteMovie(id: Number) {
    try {
      const cinema = await db.movie.delete({
        where: {
          id: Number(id),
        },
      })

      return {
        message: "Item Deleted Successfully",
      }
    } catch (error) {
      console.log(error)
      throw new Error("Unable to Delete item")
    }
  },
}
