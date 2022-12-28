# ChibaTech-Auth
Unofficial Authentication Library for Chiba Institute of Technology (ChibaTech)

[English](#getting-started) [日本語](#インストール)

## Getting Started
```shell
# npm
$ npm i chibatech-auth

# yarn
$ yarn add chibatech-auth
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
```typescript
import { oAuth2Client, scope } from 'chibatech-auth'

const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scope
  })
```

### Get User info
Pass  Google OAuth Callback code
```typescript
import { getUserInfo } from 'chibatech-auth'

const code = 'RESPONSE CODE FROM GOOGLE OAUTH'
const userData = await getUserInfo(code)
```


#### Japanese
Google OAuthを利用して本人確認を行い、メールアドレスから学生情報を解析してその情報をJsonで返却します

## インストール
```shell
# npm
$ npm i chibatech-auth

# yarn
$ yarn add chibatech-auth
```

## 使用方法
### 環境変数にGoogle OAuthの認証情報を設定
```
# .env
GOOGLE_CLIENT_ID=___YOUR_CLIENT_ID___
GOOGLE_CLIENT_SECRET=___YOUR_CLIENT_SECRET___
GOOGLE_CALLBACK_URL=___YOUR_CALLBACK_URL___
```

### 認証用のURLを取得
```typescript
import { oAuth2Client, scope } from 'chibatech-auth'

const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scope
  })
```

### ユーザの情報を取得
```typescript
import { getUserInfo } from 'chibatech-auth'

const code = 'RESPONSE CODE FROM GOOGLE OAUTH'
const userData = await getUserInfo(code)
```