import express from "express";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";

const app = express();

app.use(express.json({ limit: "16kb" }));

app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

app.use((_req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((error, _req, res, _next) => {
    if (error instanceof SyntaxError) {
        return res.status(400).json({ message: "Invalid JSON body" });
    }
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
});

export default app;