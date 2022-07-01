const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE_URL;


mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => console.log("DB connected"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});