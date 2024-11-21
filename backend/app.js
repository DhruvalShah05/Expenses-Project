const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();


mongoose
  .connect("mongodb+srv://neel20904:2094isGr8@cluster0.zzuorwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e));


const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

app.use(express.json()); 

app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);

app.use(errorHandler);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server is running on this port... ${PORT} `)
);
