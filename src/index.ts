import "module-alias/register"
/** import all configs effectively validates there are no errors */
import "@/app/config"

import { Server } from "@/core/server"
import { logger } from "./core/server/logger"
import { db } from "./core/database";

async function main(): Promise<void> {

  // const movies = await db.movie.createMany({
  //   data: [
  //     {
  //       title: 'The Avengers',
  //       imageUrl: 'https://example.com/avengers.jpg',
  //       description: 'A team of superheroes must come together to save the world.',
  //       duration: 143,
  //       // theaterId: 1, // Example theater ID, should match a real theater ID in your database
  //     },
  //     {
  //       title: 'Inception',
  //       imageUrl: 'https://example.com/inception.jpg',
  //       description: 'A thief who enters the dreams of others to steal secrets is given the task of planting an idea into the mind of a CEO.',
  //       duration: 148,
  //       // theaterId: 2, // Example theater ID, should match a real theater ID in your database
  //     },
  //     {
  //       title: 'Titanic',
  //       imageUrl: 'https://example.com/titanic.jpg',
  //       description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
  //       duration: 195,
  //       // theaterId: 3, // Example theater ID, should match a real theater ID in your database
  //     },
  //     {
  //       title: 'The Dark Knight',
  //       imageUrl: 'https://example.com/darkknight.jpg',
  //       description: 'Batman faces the Joker, a criminal mastermind who seeks to undermine Gotham City’s social order.',
  //       duration: 152,
  //       // theaterId: 4, // Example theater ID, should match a real theater ID in your database
  //     },
  //     {
  //       title: 'Jurassic Park',
  //       imageUrl: 'https://example.com/jurassicpark.jpg',
  //       description: 'A theme park featuring genetically resurrected dinosaurs goes awry when the creatures escape and wreak havoc.',
  //       duration: 127,
  //       // theaterId: 5, // Example theater ID, should match a real theater ID in your database
  //     },
  //   ],
  // });
  // const theaters = await db.theater.createMany({
  //   data: [
  //     {
  //       name: 'Cineplex Downtown',
  //       seatsType: 'Recliner',
  //       screens: 5,
  //     },
  //     {
  //       name: 'Cineworld Uptown',
  //       seatsType: 'Standard',
  //       screens: 8,
  //     },
  //     {
  //       name: 'AMC Theater',
  //       seatsType: 'Luxury',
  //       screens: 6,
  //     },
  //     {
  //       name: 'IMAX Theater',
  //       seatsType: 'VIP',
  //       screens: 4,
  //     },
  //     {
  //       name: 'Regal Cinema',
  //       seatsType: 'Standard',
  //       screens: 10,
  //     },
  //   ],
  // });
  
  // 
  
  
  const server = Server.new()
  await Server.start(server)
}

//main().catch(logger.error)
main().catch((err) => logger.error(err))
