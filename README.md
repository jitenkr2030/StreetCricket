# 🏏 StreetCricket Pro

**Premium Local Cricket Match Platform for Serious Teams**

> "Play Professional Cricket in Your Local Area & Win Real Cash Prizes"

StreetCricket Pro is a comprehensive cricket management platform designed for serious cricket teams in Delhi NCR. Think of it as a **mini IPL at the colony level** where teams can compete professionally and win real cash prizes.

## 🌟 Key Features

### 🧑‍🤝‍🧑 Team Management System
- **Professional Team Profiles** with 11-15 players
- **Player Statistics Tracking** (runs, wickets, strike rate, economy)
- **Team Verification Badges** for trusted teams
- **Local Area Rankings** (Janakpuri, Tilaknagar, Dwarka, etc.)
- **ELO Rating System** for competitive matchmaking

### 📍 Match Challenge System
- **Team vs Team Challenges** with instant accept option
- **Open Challenges** for any nearby team
- **Flexible Scheduling** (date, time, ground selection)
- **Multiple Match Formats** (T10, T20, T30, Custom)
- **Auto-Cancellation Penalties** for no-shows

### 💰 Prize Pool & Payment System
- **Minimum Entry Fee**: ₹10,000 per team
- **Example Match**: ₹20,000 total pool → ₹18,000 winner → ₹2,000 platform commission
- **Secure Payment Gateway** (UPI/Razorpay/Stripe)
- **Escrow Protection** - money held until match completion
- **Instant Prize Payouts** after match confirmation

### 🏟 Ground Booking Integration
- **Premium Cricket Grounds** across Delhi
- **Real-time Availability Calendar**
- **Floodlight & Facility Options**
- **Competitive Pricing** with 5-15% commission
- **Detailed Ground Information** (pitch type, capacity, pavilion)

### 📊 Live Scoring & Match Tracking
- **Ball-by-Ball Live Scoring**
- **Professional Scorecards**
- **Automatic Statistics Updates**
- **WhatsApp Live Score Sharing**
- **Audience Engagement Features**

### 🏆 Tournament Mode
- **Multi-Team Tournaments** (8/16 teams)
- **Multiple Formats** (Knockout, League, Double League)
- **Big Prize Pools** (₹80,000+ per tournament)
- **Points Tables & Leaderboards**
- **Tournament Management Dashboard**

## 💼 Business Model

### Revenue Streams

1. **Match Commission**: 10% per match
   - 5 matches/day = ₹10,000/day = ₹3,00,000/month

2. **Tournament Commission**: 10% per tournament
   - 10 tournaments/month = ₹80,000/month

3. **Ground Booking Commission**: 5-15% per booking

### Target Audience
- **Serious Cricket Teams** (not gully cricket)
- **Corporate Teams**
- **Local League Teams**
- **Academy Players**
- **Cricket Enthusiasts** looking for professional competition

## 🛠 Technology Stack

### Frontend
- **Next.js 16** with App Router
- **TypeScript 5** for type safety
- **Tailwind CSS 4** for responsive design
- **shadcn/ui** components for professional UI
- **Lucide React** icons
- **Framer Motion** for animations

### Backend
- **Next.js API Routes** for serverless functions
- **Prisma ORM** for database management
- **SQLite** for development (easily migratable to PostgreSQL)
- **Zod** for runtime validation
- **bcryptjs** for authentication

### Database Schema
- **15+ Models** covering complete cricket ecosystem
- **Proper Relationships** and constraints
- **Scalable Architecture** for growth

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Bun or npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jitenkr2030/StreetCricket.git
   cd StreetCricket
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Set up database**
   ```bash
   bun run db:push
   bun run db:seed  # Optional: adds sample data
   ```

5. **Start development server**
   ```bash
   bun run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── teams/         # Team management
│   │   ├── players/       # Player management
│   │   ├── matches/       # Match management
│   │   └── grounds/       # Ground booking
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── teams/            # Team-specific components
├── lib/                  # Utility libraries
│   ├── db.ts            # Prisma client
│   └── utils.ts         # Helper functions
prisma/
├── schema.prisma         # Database schema
└── seed.ts              # Sample data
```

## 🏃‍♂️ Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run db:push` - Push schema to database
- `bun run db:seed` - Seed sample data

## 🎯 Core Features Status

### ✅ Completed
- [x] **Database Design** - Complete schema with 15+ models
- [x] **Team Management** - Full CRUD with player management
- [x] **Professional Landing Page** - Responsive, feature-rich
- [x] **Match Management API** - Scheduling, challenges, validation
- [x] **Ground Booking API** - Availability, pricing, facilities
- [x] **Sample Data** - Realistic test data for development

### 🚧 In Progress
- [ ] **Authentication System** - Team-based login/registration
- [ ] **Payment Integration** - UPI/Razorpay with escrow
- [ ] **Live Scoring System** - Ball-by-ball tracking
- [ ] **Tournament Mode** - Multi-team competitions

### 📋 Planned
- [ ] **Player Rankings** - Orange Cap, Purple Cap, awards
- [ ] **Match Highlights** - Video upload & sharing
- [ ] **Dispute System** - Fair play resolution
- [ ] **Admin Dashboard** - Business analytics
- [ ] **Mobile App** - React Native for on-the-go management

## 🔧 API Endpoints

### Teams
- `GET /api/teams` - List teams with filtering
- `POST /api/teams` - Create new team
- `GET /api/teams/[id]` - Get team details
- `PUT /api/teams/[id]` - Update team
- `DELETE /api/teams/[id]` - Delete team

### Players
- `GET /api/players` - List players with filtering
- `POST /api/players` - Add new player

### Matches
- `GET /api/matches` - List matches with filtering
- `POST /api/matches` - Create new match

### Grounds
- `GET /api/grounds` - List grounds with availability
- `POST /api/grounds` - Add new ground

## 💡 Sample Data

The platform comes pre-seeded with:
- **3 Teams**: Janakpuri Cricket Club, Dwarka Warriors, Tilak Nagar Titans
- **33 Players** with realistic statistics
- **3 Grounds** across different areas
- **1 Sample Match** for testing

## 🎨 Design Principles

- **Mobile-First** responsive design
- **Professional Cricket Aesthetics** with green color scheme
- **Accessibility** compliance (WCAG 2.1)
- **Performance** optimized for quick loading
- **User-Friendly** interface with intuitive navigation

## 🔒 Security Features

- **Input Validation** with Zod schemas
- **SQL Injection Prevention** via Prisma ORM
- **XSS Protection** with proper sanitization
- **CSRF Protection** built into Next.js
- **Secure Password Hashing** with bcryptjs

## 📈 Business Metrics

### Target KPIs
- **Teams Registered**: 100+ in first 3 months
- **Matches/Day**: 5+ consistent matches
- **Monthly Revenue**: ₹3.8L+ (matches + tournaments)
- **User Retention**: 80%+ month-over-month

### Growth Strategy
1. **Local Marketing** in target areas
2. **Cricket Community Partnerships**
3. **Tournament Sponsorships**
4. **Social Media Marketing**
5. **Referral Programs**

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, please contact:
- **Email**: support@streetcricket.pro
- **Phone**: +91-XXXX-XXXX-XXXX
- **Address**: Delhi NCR, India

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Cricket Community** of Delhi NCR
- **Local Ground Owners** for partnership opportunities
- **Team Captains** for valuable feedback
- **Open Source Community** for amazing tools

---

**🏏 StreetCricket Pro - Where Local Cricket Goes Professional!**

*"This is not gully cricket - this is the real deal!"*