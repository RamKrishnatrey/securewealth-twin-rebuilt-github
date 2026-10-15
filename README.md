# SecureWealth Twin - Rebuilt

A cross-platform personal finance management application built with React Native and Expo.

## Features

- Secure authentication with OTP and biometric login
- Dashboard with financial overview, net worth, and transaction history
- AI-powered financial insights (Twin AI)
- Budgeting, goal tracking, and investment intelligence
- Fraud detection and security shield
- Currency converter, QR scanner, and more

## Prerequisites

- Node.js (>=14)
- yarn or npm
- Expo CLI
- Firebase project (for authentication, optional for mock data)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
   or
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and fill in your Firebase credentials:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your actual values.

4. Start the development server:
   ```bash
   expo start
   ```
   or
   ```bash
   yarn start
   ```

## Project Structure

- `/src` - Source code
- `/src/screens` - UI screens
- `/src/services` - API services
- `/src/constants` - Configuration
- `/src/components` - Reusable components
- `/src/assets` - Images, icons, etc.
- `/backend` - Backend code (if applicable)

## Environment Variables

Copy `.env.example` to `.env` and set the following:

| Variable | Description |
|----------|-------------|
| EXPO_PUBLIC_FIREBASE_API_KEY | Firebase API key |
| EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN | Firebase Auth domain |
| EXPO_PUBLIC_FIREBASE_PROJECT_ID | Firebase project ID |
| EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET | Firebase storage bucket |
| EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID | Firebase messaging sender ID |
| EXPO_PUBLIC_FIREBASE_APP_ID | Firebase app ID |
| EXPO_PUBLIC_FIREBASE_VAPID_KEY | VAPID key for push notifications |

## Development

- Run tests: `yarn test` or `npm test`
- Linting: `yarn lint` or `npm run lint`

## Production Build

To build for Android:
```bash
expo build:android
```

To build for iOS:
```bash
expo build:ios
```

## License

MIT

