import { Seat } from "./seatSchema"
import { db, Paginated } from "@/core/database"

export const SeatService = {
  async createSeats(seats: any[]) {
    try {
      const createdSeats = await Promise.all(
        seats.map(async (seat) => {
          return await db.seat.create({
            data: {
              number: seat.number,
              theaterId: seat.theaterId,
            },
          })
        }),
      )
      return createdSeats
    } catch (error) {
      
      console.error("Error creating seats:", error)
      throw new Error(`Unable to create seats`)
    }
  },

  async listSeats(body: any) {
      try {
      const seat = await db.seat.findMany()
      return seat
      } catch (error) {
      console.log(error)
      throw new Error("Unable to list items")
      }
  },

//   async updateSeat(id: number, body: Seat[]) {
//     try {
//         const updatedSeats = await Promise.all(body.map(seat => 
//             db.seat.update({
//                 where: {
//                     id: Number(id),
//                 },
//                 data: {
//                     number: seat.number,
//                     theaterId: seat.theaterId,
//                 },
//             })
//         ));                      
 
//          return updatedSeats;
//     } catch (error) {
//         console.log(error);
//         throw new Error("Unable to Update items");
//     }
// }

  // async deleteSeat(id: Number) {
  //     try {
  //     const seat = await db.remoteSite.delete({
  //         where: {
  //         id: Number(id),
  //         },
  //     })

  //     return {
  //         message: "Item Deleted Successfully"
  //     }
  //     } catch (error) {
  //     console.log(error)
  //       throw new Error("Unable to Delete item")
  //     }
  // },
}
