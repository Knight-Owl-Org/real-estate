require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(
    cors({
        origin: "http://localhost:5173", // Updated frontend URL
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
    })
);
app.use(bodyParser.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Contact Form API Route
app.post("/api/contact", (req, res) => {
    const { name, email, contact, message } = req.body; // Match frontend fields

    if (!name || !email || !contact || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const mailOptions = {
        from: email,
        to: "sajani.p@knightowl.online", // Update with your recipient email
        subject: `New Contact Us Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error sending email:", error);
            return res.status(500).json({ error: "Failed to send email", details: error });
        }
        res.status(200).json({ message: "Message sent successfully!" });
    });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
