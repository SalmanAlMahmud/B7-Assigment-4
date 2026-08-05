# GearUp Backend

GearUp is a premium **Gear Rental and Sharing Platform** where users can register as **Customers** to rent premium sports and outdoor gear or as **Providers** to list their own gear for rental. This project contains the backend REST API built with **Node.js, Express.js, TypeScript, PostgreSQL, Prisma ORM, and Stripe**.

---

# 🌐 Live API

**Production URL:**  
https://assigment-4-lime.vercel.app/

**Base API URL:**

```text
https://assigment-4-lime.vercel.app/api
```

---

# 🔑 Admin Credentials

| Email | Password |
|-------|----------|
| admin@gmail.com | 12345 |

---

# 🚀 Features

## Authentication & Authorization

- User Registration
- Secure Login
- JWT Authentication
- Refresh Token
- Role-Based Access Control (RBAC)
- Profile Management

## User Roles

- 👤 Customer
- 🛒 Provider
- 👑 Admin

## Customer Features

- Browse available gear
- Filter gear by category
- Rent gear
- Cancel rentals
- View rental history
- Make secure Stripe payments
- Submit reviews and ratings

## Provider Features

- Add new gear
- Update gear
- Delete gear
- View rental orders
- Update rental status

## Admin Features

- Manage users
- Suspend or activate users
- Monitor all gear
- Monitor all rental orders

## Payment

- Stripe Checkout
- Stripe Webhooks
- Payment History
- Secure Payment Verification

## Other Features

- TypeScript
- PostgreSQL
- Prisma ORM
- Zod Validation
- Global Error Handling
- Modular Architecture
- Secure Password Hashing
- Soft Delete Support

---

# 🛠 Tech Stack

| Technology | Usage |
|------------|-------|
| Node.js | Runtime |
| Express.js | Backend Framework |
| TypeScript | Programming Language |
| PostgreSQL | Database |
| Prisma ORM | ORM |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| Stripe | Payment Gateway |
| Zod | Validation |
| tsup | Build Tool |
| tsx | Development |

---

# 📁 Project Structure

```text
gear-up-backend/
│
├── prisma/
│   ├── migrations/
│   └── schema/
│       ├── category.prisma
│       ├── enums.prisma
│       ├── gearItem.prisma
│       ├── payment.prisma
│       ├── profile.prisma
│       ├── rental.prisma
│       ├── review.prisma
│       ├── schema.prisma
│       └── user.prisma
│
├── src/
│   ├── config/
│   ├── Interfaces/
│   ├── lib/
│   ├── middleware/
│   ├── modules/
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── category/
│   │   ├── gear/
│   │   ├── payment/
│   │   ├── provider/
│   │   ├── rental/
│   │   ├── review/
│   │   └── users/
│   ├── utils/
│   ├── validations/
│   ├── app.ts
│   └── server.ts
│
├── .env.example
├── package.json
├── tsconfig.json
├── tsup.config.js
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <repository-url>

cd gear-up-backend
```

## Install Dependencies

```bash
npm install
```

## Create Environment File

Create a `.env` file.

```env
PORT=5000

DATABASE_URL=

JWT_ACCESS_SECRET=

JWT_REFRESH_SECRET=

JWT_ACCESS_EXPIRES_IN=7d

JWT_REFRESH_EXPIRES_IN=30d

BCRYPT_SALT_ROUNDS=10

STRIPE_SECRET_KEY=

STRIPE_WEBHOOK_SECRET_KEY=
```

---

# 🗄 Database Setup

Generate Prisma Client

```bash
npx prisma generate
```

Push Database

```bash
npx prisma db push
```

Or run migrations

```bash
npx prisma migrate dev
```

---

# ▶️ Running the Project

Development

```bash
npm run dev
```

Build

```bash
npm run build
```

Production

```bash
npm start
```

---

# 💳 Stripe Webhook

Login

```bash
stripe login
```

Forward Events

```bash
npm run stripe:webhook
```

Copy the generated `whsec_...` key into

```env
STRIPE_WEBHOOK_SECRET_KEY=
```

---

# 📮 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/auth/register` |
| POST | `/api/auth/login` |
| POST | `/api/auth/refresh-token` |

## Users

| Method | Endpoint |
|---------|----------|
| GET | `/api/users/profile` |
| PATCH | `/api/users/profile` |

## Categories

| Method | Endpoint |
|---------|----------|
| GET | `/api/categories` |
| POST | `/api/categories` |

## Gear

| Method | Endpoint |
|---------|----------|
| GET | `/api/gear` |
| GET | `/api/gear/:id` |

## Provider

| Method | Endpoint |
|---------|----------|
| POST | `/api/provider/gear` |
| PUT | `/api/provider/gear/:id` |
| DELETE | `/api/provider/gear/:id` |
| GET | `/api/provider/orders` |
| PATCH | `/api/provider/orders/:id` |

## Rentals

| Method | Endpoint |
|---------|----------|
| POST | `/api/rentals` |
| GET | `/api/rentals` |
| GET | `/api/rentals/:id` |
| PATCH | `/api/rentals/:id/cancel` |

## Reviews

| Method | Endpoint |
|---------|----------|
| POST | `/api/reviews` |

## Payments

| Method | Endpoint |
|---------|----------|
| POST | `/api/payments/create` |
| POST | `/api/payments/confirm` |
| GET | `/api/payments` |
| GET | `/api/payments/:id` |

## Admin

| Method | Endpoint |
|---------|----------|
| GET | `/api/admin/users` |
| PATCH | `/api/admin/users/:id` |
| GET | `/api/admin/gear` |
| GET | `/api/admin/rentals` |

---

# 🔒 Authentication

Protected routes require:

```http
Authorization: Bearer <access_token>
```

---

# 📄 Environment Variables

```env
PORT=
DATABASE_URL=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
JWT_ACCESS_EXPIRES_IN=
JWT_REFRESH_EXPIRES_IN=
BCRYPT_SALT_ROUNDS=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET_KEY=
```

---

# 📜 License

ISC License

---

# 👨‍💻 Author

**Salman Al Mahmud**

Backend Developer

---

⭐ If you like this project, don't forget to give it a star.
