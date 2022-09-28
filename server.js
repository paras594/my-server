require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
	console.log("working");
	res.json({
		port: process.env.PORT,
		success: true,
		message: "This is mahh server boi",
	});
});

app.listen(5000 || process.env.PORT, () => {
	console.log(`Server started on port: 5000`);
});
