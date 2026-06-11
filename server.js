const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const ENV = require("./config/env");
const pageRoutes = require("./routes/page.routes");

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Manual page routes only. No express.static.
app.use("/", pageRoutes);

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
    endpoint: ENV.APPWRITE_ENDPOINT,
    projectId: ENV.APPWRITE_PROJECT_ID,
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Lebanon Flow backend is running",
    mode: ENV.NODE_ENV,
  });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(ENV.PORT, () => {
  console.log(`Server running on http://localhost:${ENV.PORT}`);
});
