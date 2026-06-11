# Lebanon Flow - Appwrite Auth Only

This version has:

- Appwrite Auth only
- No Appwrite database
- No tables
- No messages table
- No backend table routes
- No `app.use(express.static(...))`
- Manual Express page routes using `app.get()`
- CSS and JavaScript integrated inside each HTML file

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Open:

```txt
http://localhost:5000
```

## .env

```env
PORT=5000
NODE_ENV=development
APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=your_project_id_here
```

## Appwrite Console

Create an Appwrite project, then copy the Project ID into `.env`.

For local development, add this platform:

```txt
Web Platform: localhost
```

If Appwrite blocks login/signup, the usual reason is that localhost was not added as a web platform.
