const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const locationRouter = require("./routes/locationRouter");
const victimRouter = require("./routes/victimRouter");
const app = express();
const port = 3000;

require("dotenv").config();
require("./config/db");

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/victim", victimRouter);
app.use("/location", locationRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
