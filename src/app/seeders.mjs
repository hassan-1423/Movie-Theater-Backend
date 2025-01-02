// @ts-check
import { PrismaClient, UserRole } from "@prisma/client"
import argon2 from "argon2"

/**
 * create the default admin user account with account password
 * @param {PrismaClient} db
 */
async function adminSeeder(db) {
  await db.user.create({
    data: {
      name: "Admin",
      email: "admin@site.com",
      role: UserRole.ADMIN,
      password: {
        create: {
          hash: await argon2.hash("123_Orangez"),
        },
      },
    },
  })
}
async function SeatSeeder(db) {
  const seats = [];

  // Generate seat names (A1 to A30)
  for (let i = 1; i <= 30; i++) {
    seats.push({
      number: `A${i}`,
      theaterId: 1,
    });
  }

  // Insert seats into the database
  await db.seat.createMany({
    data: seats,
  });
}
async function moviesSeeder(db) {
  const movies = await db.movie.createMany({
      data: [
        {
          title: 'The Avengers',
          imageUrl: 'https://example.com/avengers.jpg',
          description: 'A team of superheroes must come together to save the world.',
          duration: 143,
          // theaterId: 1, // Example theater ID, should match a real theater ID in your database
        },
        {
          title: 'Inception',
          imageUrl: 'https://example.com/inception.jpg',
          description: 'A thief who enters the dreams of others to steal secrets is given the task of planting an idea into the mind of a CEO.',
          duration: 148,
          // theaterId: 2, // Example theater ID, should match a real theater ID in your database
        },
        {
          title: 'Titanic',
          imageUrl: 'https://example.com/titanic.jpg',
          description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
          duration: 195,
          // theaterId: 3, // Example theater ID, should match a real theater ID in your database
        },
        {
          title: 'The Dark Knight',
          imageUrl: 'https://example.com/darkknight.jpg',
          description: 'Batman faces the Joker, a criminal mastermind who seeks to undermine Gotham City’s social order.',
          duration: 152,
          // theaterId: 4, // Example theater ID, should match a real theater ID in your database
        },
        {
          title: 'Jurassic Park',
          imageUrl: 'https://example.com/jurassicpark.jpg',
          description: 'A theme park featuring genetically resurrected dinosaurs goes awry when the creatures escape and wreak havoc.',
          duration: 127,
          // theaterId: 5, // Example theater ID, should match a real theater ID in your database
        },
      ],
    });
}
async function theatersSeeder(db) {
 const theaters = await db.theater.createMany({
    data: [
      {
        name: 'Cineplex Downtown',
        seatsType: 'Recliner',
        screens: 5,
      },
      {
        name: 'Cineworld Uptown',
        seatsType: 'Standard',
        screens: 8,
      },
      {
        name: 'AMC Theater',
        seatsType: 'Luxury',
        screens: 6,
      },
      {
        name: 'IMAX Theater',
        seatsType: 'VIP',
        screens: 4,
      },
      {
        name: 'Regal Cinema',
        seatsType: 'Standard',
        screens: 10,
      },
    ],
  });
}
/**
 * the application may require some default data to be present in the database
 * to be opeational. You may define functions here for setting up the default
 * state of the application database.
 *
 * @returns {Promise<void>}
 */
async function runSeeders() {
  const db = new PrismaClient()

  /** @type {((client: PrismaClient) => Promise<void>)[]} */
  const enabledSeeders = [adminSeeder,theatersSeeder,moviesSeeder,SeatSeeder]

  try {
    for (const seeder of enabledSeeders) {
      await seeder(db)
    }
  } finally {
    await db.$disconnect()
  }
}

/* eslint-disable-next-line no-console */
runSeeders().catch(console.error)
