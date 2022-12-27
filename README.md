# ChibaTech-Auth
Unofficial Authentication Library for Chiba Institute of Technology (ChibaTech)

## Getting Started
```
# npm
npm i chibatech-auth

# yarn
yarn add chibatech-auth
```

## Usage
### Set your Google OAuth client Id, Token and Callback URL in environment variable
```
# .env
GOOGLE_CLIENT_ID=___YOUR_CLIENT_ID___
GOOGLE_CLIENT_SECRET=___YOUR_CLIENT_SECRET___
GOOGLE_CALLBACK_URL=___YOUR_CALLBACK_URL___
```

### Get auth URL
```
import { oAuth2Client, scope } from 'chibatech-auth'

const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scope
  })
```