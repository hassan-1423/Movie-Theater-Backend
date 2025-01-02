import { Movie } from "./movieSchema"
import { db, Paginated } from "@/core/database"

export const MovieService = {
  async createMovie(body: any & { categoryIds: number[] }) {
    try {
      
      const newMovie = await db.movie.create({
        data: {
          title: body.title,
          imageUrl: body.imageUrl,
          description: body.description,
          duration: body.duration,
          theaterId: body.theaterId, // nullable
          categories: {
            connect: body.categoryIds.map((id: any) => ({ id })),
          },
        },
        include: { categories: true }, // optional: include categories in the response
      });
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
  async createMovieCategory(body: any) {
    try {
      const newCategory = await db.movieCategory.create({
        data: {
          categoryName: body.categoryName,
          description: body.description || null, // Optional field
        },
      })
      return newCategory
    } catch (error) {
      console.error("Error creating movie category:", error)
      throw new Error("Unable to create movie category")
    }
  },
  async getMovieCategories(body: any) {
    try {
      const categories = await db.movieCategory.findMany({
        include: {
          Movie: true, // Include associated movies (optional)
        },
      })
      return categories
    } catch (error) {
      console.error("Error fetching movie categories:", error)
      throw new Error("Unable to fetch movie categories")
    }
  },
  async updateMovieCategory(id: Number, body: any) {
    try {
      const movie = await db.movieCategory.update({
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
}
