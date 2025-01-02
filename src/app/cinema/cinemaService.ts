import { Movie } from "@prisma/client"
import { Cinema } from "./cinemaSchema"
import { db, Paginated } from "@/core/database"

export const CinemaService = {
  async createCinema(body: {
    name: string
    seatsType: string
    screens: number
  }) {
    try {
      // Validate input data
      if (!body.name || !body.seatsType || !body.screens) {
        throw new Error(
          "Invalid input: 'name', 'seatsType', and 'screens' are required.",
        )
      }

      console.log("Creating theater with data:", body)

      const newTheater = await db.theater.create({
        data: {
          name: body.name,
          seatsType: body.seatsType,
          screens: body.screens,
        },
      })

      return newTheater
    } catch (error) {
      // console.error("Error creating theater:", error.message, error.stack);
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
}
