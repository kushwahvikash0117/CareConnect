const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const emergencyRoutes = require("./routes/emergencyRoutes");
const fraudRoutes = require("./routes/fraudRoutes");
const wellnessRoutes = require("./routes/wellnessRoutes");
const familyRoutes = require("./routes/familyRoutes");
const adminRoutes = require("./routes/adminRoutes");

const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

/* =========================
Middleware
========================= */

app.use(cors());

app.use(
express.json({
limit: "10mb",
})
);

app.use(
express.urlencoded({
extended: true,
})
);

/* =========================
Health Check
========================= */

app.get("/", (req, res) => {
res.status(200).json({
success: true,
message: "CareConnect API Running 🚀",
});
});

/* =========================
Routes
========================= */

app.use("/api/auth", authRoutes);
app.use("/api/emergency", emergencyRoutes);
app.use("/api/fraud", fraudRoutes);
app.use("/api/wellness", wellnessRoutes);
app.use("/api/family", familyRoutes);
app.use("/api/admin", adminRoutes);

/* =========================
Global Error Handler
========================= */

app.use(errorMiddleware);

module.exports = app;
