import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env",
});

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.error("Server error:", error);
            throw error;
        });

        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`Server listening on http://localhost:${port}`);
        });

    } catch (error) {
        console.error("Server failed to start:", error);
        process.exit(1);
    }
}

startServer();