import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@streetcricket.pro' },
    update: {},
    create: {
      email: 'admin@streetcricket.pro',
      name: 'Admin User',
      role: 'ADMIN',
      isVerified: true,
    },
  })

  // Create team managers
  const manager1 = await prisma.user.upsert({
    where: { email: 'rahul@team.com' },
    update: {},
    create: {
      email: 'rahul@team.com',
      name: 'Rahul Sharma',
      phone: '+919876543210',
      role: 'TEAM_MANAGER',
      isVerified: true,
    },
  })

  const manager2 = await prisma.user.upsert({
    where: { email: 'vijay@team.com' },
    update: {},
    create: {
      email: 'vijay@team.com',
      name: 'Vijay Kumar',
      phone: '+919876543211',
      role: 'TEAM_MANAGER',
      isVerified: true,
    },
  })

  const manager3 = await prisma.user.upsert({
    where: { email: 'amit@team.com' },
    update: {},
    create: {
      email: 'amit@team.com',
      name: 'Amit Singh',
      phone: '+919876543212',
      role: 'TEAM_MANAGER',
      isVerified: false,
    },
  })

  // Create teams
  const team1 = await prisma.team.create({
    data: {
      name: 'Janakpuri Cricket Club',
      shortName: 'JCC',
      description: 'Professional cricket team from Janakpuri with 5+ years of experience',
      area: 'Janakpuri',
      city: 'Delhi',
      isVerified: true,
      rating: 1350,
      managerId: manager1.id,
    },
  })

  const team2 = await prisma.team.create({
    data: {
      name: 'Dwarka Warriors',
      shortName: 'DWW',
      description: 'Rising cricket team from Dwarka sector 12',
      area: 'Dwarka',
      city: 'Delhi',
      isVerified: true,
      rating: 1280,
      managerId: manager2.id,
    },
  })

  const team3 = await prisma.team.create({
    data: {
      name: 'Tilak Nagar Titans',
      shortName: 'TNT',
      description: 'Aggressive young team from Tilak Nagar',
      area: 'Tilak Nagar',
      city: 'Delhi',
      isVerified: false,
      rating: 1150,
      managerId: manager3.id,
    },
  })

  // Create players for Team 1
  const players1 = [
    { name: 'Rahul Sharma', role: 'ALL_ROUNDER', jerseyNumber: 1 },
    { name: 'Vikram Malhotra', role: 'BATSMAN', jerseyNumber: 2 },
    { name: 'Suresh Kumar', role: 'BOWLER', jerseyNumber: 3 },
    { name: 'Amit Patel', role: 'WICKET_KEEPER', jerseyNumber: 4 },
    { name: 'Rohit Verma', role: 'BATSMAN', jerseyNumber: 5 },
    { name: 'Karan Singh', role: 'ALL_ROUNDER', jerseyNumber: 6 },
    { name: 'Piyush Sharma', role: 'BOWLER', jerseyNumber: 7 },
    { name: 'Naveen Kumar', role: 'BATSMAN', jerseyNumber: 8 },
    { name: 'Deepak Singh', role: 'BOWLER', jerseyNumber: 9 },
    { name: 'Manish Jain', role: 'ALL_ROUNDER', jerseyNumber: 10 },
    { name: 'Ravi Chaudhary', role: 'BOWLER', jerseyNumber: 11 },
  ]

  for (const player of players1) {
    await prisma.player.create({
      data: {
        ...player,
        teamId: team1.id,
        battingAvg: Math.random() * 40 + 20,
        strikeRate: Math.random() * 100 + 80,
        totalRuns: Math.floor(Math.random() * 500),
        totalWickets: Math.floor(Math.random() * 30),
        economy: Math.random() * 3 + 6,
      },
    })
  }

  // Create players for Team 2
  const players2 = [
    { name: 'Vijay Kumar', role: 'BATSMAN', jerseyNumber: 1 },
    { name: 'Arjun Singh', role: 'BOWLER', jerseyNumber: 2 },
    { name: 'Rajat Sharma', role: 'ALL_ROUNDER', jerseyNumber: 3 },
    { name: 'Kunal Verma', role: 'WICKET_KEEPER', jerseyNumber: 4 },
    { name: 'Tarun Kumar', role: 'BATSMAN', jerseyNumber: 5 },
    { name: 'Mohit Singh', role: 'BOWLER', jerseyNumber: 6 },
    { name: 'Pankaj Sharma', role: 'ALL_ROUNDER', jerseyNumber: 7 },
    { name: 'Vikas Jain', role: 'BATSMAN', jerseyNumber: 8 },
    { name: 'Rohit Kumar', role: 'BOWLER', jerseyNumber: 9 },
    { name: 'Amit Verma', role: 'BATSMAN', jerseyNumber: 10 },
    { name: 'Suresh Singh', role: 'BOWLER', jerseyNumber: 11 },
  ]

  for (const player of players2) {
    await prisma.player.create({
      data: {
        ...player,
        teamId: team2.id,
        battingAvg: Math.random() * 40 + 20,
        strikeRate: Math.random() * 100 + 80,
        totalRuns: Math.floor(Math.random() * 500),
        totalWickets: Math.floor(Math.random() * 30),
        economy: Math.random() * 3 + 6,
      },
    })
  }

  // Create players for Team 3
  const players3 = [
    { name: 'Amit Singh', role: 'ALL_ROUNDER', jerseyNumber: 1 },
    { name: 'Rahul Verma', role: 'BATSMAN', jerseyNumber: 2 },
    { name: 'Karan Kumar', role: 'BOWLER', jerseyNumber: 3 },
    { name: 'Vikram Sharma', role: 'WICKET_KEEPER', jerseyNumber: 4 },
    { name: 'Suresh Singh', role: 'BATSMAN', jerseyNumber: 5 },
    { name: 'Mohit Kumar', role: 'ALL_ROUNDER', jerseyNumber: 6 },
    { name: 'Rohit Verma', role: 'BOWLER', jerseyNumber: 7 },
    { name: 'Amit Jain', role: 'BATSMAN', jerseyNumber: 8 },
    { name: 'Piyush Singh', role: 'BOWLER', jerseyNumber: 9 },
    { name: 'Naveen Kumar', role: 'ALL_ROUNDER', jerseyNumber: 10 },
    { name: 'Deepak Sharma', role: 'BOWLER', jerseyNumber: 11 },
  ]

  for (const player of players3) {
    await prisma.player.create({
      data: {
        ...player,
        teamId: team3.id,
        battingAvg: Math.random() * 40 + 20,
        strikeRate: Math.random() * 100 + 80,
        totalRuns: Math.floor(Math.random() * 500),
        totalWickets: Math.floor(Math.random() * 30),
        economy: Math.random() * 3 + 6,
      },
    })
  }

  // Create grounds
  const grounds = [
    {
      name: 'Janakpuri Sports Complex',
      address: 'Block C2, Janakpuri, New Delhi',
      area: 'Janakpuri',
      pricePerSlot: 1500,
      pitchType: 'Turf',
      hasFloodlights: true,
      hasPavilion: true,
      capacity: 200,
      description: 'Premium turf ground with floodlights and pavilion',
    },
    {
      name: 'Dwarka Sector 12 Ground',
      address: 'Sector 12, Dwarka, New Delhi',
      area: 'Dwarka',
      pricePerSlot: 1200,
      pitchType: 'Matting',
      hasFloodlights: false,
      hasPavilion: true,
      capacity: 150,
      description: 'Well-maintained matting pitch with pavilion',
    },
    {
      name: 'Tilak Nagar Cricket Ground',
      address: 'Tilak Nagar, New Delhi',
      area: 'Tilak Nagar',
      pricePerSlot: 1000,
      pitchType: 'Concrete',
      hasFloodlights: false,
      hasPavilion: false,
      capacity: 100,
      description: 'Basic concrete ground for practice matches',
    },
  ]

  for (const ground of grounds) {
    await prisma.ground.create({
      data: ground,
    })
  }

  // Create a sample match (without ground for now to avoid FK constraint)
  const match = await prisma.match.create({
    data: {
      title: 'JCC vs DWW - Practice Match',
      homeTeamId: team1.id,
      awayTeamId: team2.id,
      scheduledDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      scheduledTime: '18:00',
      matchFormat: 'T20',
      ballType: 'TENNIS',
      oversPerInnings: 20,
      status: 'SCHEDULED',
      entryFee: 10000,
      prizePool: 20000,
      platformFee: 2000,
      createdBy: adminUser.id,
    },
  })

  console.log('✅ Database seeded successfully!')
  console.log(`📊 Created:
  - 3 users (1 admin, 2 managers)
  - 3 teams
  - 33 players
  - 3 grounds
  - 1 match
  `)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })