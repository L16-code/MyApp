import express from "express";
import envConfig from "./config/envConfig";
import connectDB from "./db/dbConnect";
import bodyParser from "body-parser";
import UserRouter from "./features/users/routes";
import CategoryRouter from "./features/category/routes";
import TaskRouter from "./features/task/routes";
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

const env = envConfig();
const port = env.port;
connectDB()

app.use('/',UserRouter)
app.use('/category',CategoryRouter)
app.use('/task',TaskRouter)


app.listen(port, () => {
    console.log("server is running on port http://localhost:" + port);
});
