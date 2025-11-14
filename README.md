# DS4SSCC Inventory

Inventory for Data Space for Smart & Sustainable Cities

## Prerequisites

- Node.js (version 16 or higher)
- pnpm (package manager)
- MongoDB (for database)

## Installation

### 1. Install pnpm (if not already installed)

```bash
npm install -g pnpm
```

### 2. Clone the repository

```bash
git clone <repository-url>
cd ds4sscc-inventory
```

### 3. Install dependencies

#### Full installation (root + client + server)

```bash
pnpm install
cd client && pnpm install
```

### 4. Environment configuration

Create a `.env` file from the `.env.sample` at the root of the project with the necessary variables:

```bash
cp server/.env.sample .env
```

## Build

### Build for production

```bash
pnpm build
```

This command will:
1. Compile the TypeScript server (`build:server`)
2. Install client dependencies and build it (`build:client`)

## Run the application in production

After building, start the application:

```bash
pnpm start
```

This command runs the compiled server from `dist/index.js`.

## Project structure

```
ds4sscc-inventory/
├── client/          # React/Vite application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── contexts/
│   │   └── utils/
│   └── public/
├── server/          # Express/TypeScript API
│   └── src/
│       ├── models/
│       ├── routes/
│       ├── config/
│       └── utils/
└── dist/            # Compiled files (after build)
```

## License

MIT