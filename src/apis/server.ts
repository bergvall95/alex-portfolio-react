import express from "express";
import cors from "cors";

const app = express();

app.use('/login')

const server = app.listen(app.get("port"),() => {
    console.log(
        "App is running at http://localhost: %d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log(" Press CTRL - C to stop \n")
})

export default server;