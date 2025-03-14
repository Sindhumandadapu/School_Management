require("dotenv").config();
const express = require("express");
const cors = require("cors");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", schoolRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
