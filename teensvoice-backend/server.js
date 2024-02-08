const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

// MongoDB Schema
const formDataSchema = new mongoose.Schema({
  name: String, // Combining fname and lname into a single field
  email: String,
  phoneNumber: String,
  gender: String,
  interests: String,
  country: String,
  city: String,
  postalCode: String,
});

// MongoDB Model
const FormData = mongoose.model("FormData", formDataSchema);

// MongoDB Connection
const uri =
  "mongodb+srv://teensvoice-data:" +
  "QporViIV2tekrLjD" +
  "@cluster0.1rpvs2v.mongodb.net/teensvoice?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

// Express App
const app = express();
const port = process.env.PORT || 3500;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Route for saving form data
app.post("/signup", (req, res) => {
  const {
    fname,
    lname,
    email,
    phoneNumber,
    gender,
    interests,
    country,
    city,
    postalCode,
  } = req.body;

  // Basic validation
  if (
    !fname ||
    !lname ||
    !email ||
    !phoneNumber ||
    !gender ||
    !interests ||
    !country ||
    !city ||
    !postalCode
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Combine first name and last name into a single field
  const name = `${fname} ${lname}`;

  // Create a new instance of the FormData model
  const formData = new FormData({
    name,
    email,
    phoneNumber,
    gender,
    interests,
    country,
    city,
    postalCode,
  });

  // Save the data to MongoDB
  formData
    .save()
    .then(() => {
      console.log("Form data saved successfully");
      res.json({ message: "Form data saved successfully" });
    })
    .catch((error) => {
      console.error("Error saving form data:", error);
      res.status(500).json({ error: "Error saving form data" });
    });

  // Send welcome email
  const welcomeEmailTemplate = `
    <html>
        <head>
            <style>
            @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

            body {
                background-color: rgb(191, 253, 216);
                font-family: 'Roboto', sans-serif;
            }

            .container {
                max-width: 600px;
                margin: auto;
                padding: 10px;
            }

            h1 {
               color: rgb(111, 111, 255); 
            }

            h1,
            p {
                text-align: center;
            }

            img {
                max-width: 100%;
                display: block;
                margin: 30px auto;
            }

            .about {
                font-size: 13px;
                margin-bottom: 15px;
                text-align: left;
            }
            </style>
        </head>
        <body>
        <div class='container'>
        <h1>TeensVoice</h1>
        <p>
            Dear ${name}, Welcome to the Teens Voice Community! We're thrilled to have you join us on this exciting journey of learning and growth.
        </p>
        <img
            src="https://res.cloudinary.com/dzzwvcapu/image/upload/v1706433195/image-1_sincwj.png"
            alt="banner"
        />
        <p class="about">
            Here at Teens Voice, we believe in the power of unique voice and are committed to your continuous improvement. Whether you're here to acquire new skills, expand your knowledge, or connect with like-minded learners, you've come to the right place.
        </p>
        <p class="about">
            As a member of our community, our dedicated team is committed to providing you with the support and guidance you need to succeed.
        </p>
        <p class="about">
            We encourage you to take advantage of everything our community has to offer and to actively engage with fellow members.
        </p>
        <p class="about">
            If you ever need assistance or have any questions, please feel free to reach out to us at <a href="mailto:hello@teensvoice.org">hello@teensvoice.org</a> We're here to help you every step of the way.
        </p>
        <p class="about">
            Once again, welcome to Teens Voice! We're excited to have you on board and can't wait to see all that you'll accomplish with us. Kindly look forward to another mail containing a link to our community platform.
        </p>
        <p class="about">
            For now, catch up with our activities by:
        </p>
        <p class="about">
            Following us on Instagram <a href="https://www.instagram.com/theofficialteensvoice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">@officialteensvoice</a>
        </p>
        <p class="about">
            Following us on Kingschat <a href="https://www.kingsch.at/p/cHlYQXN">@teensvoice_</a>
        </p>
        <p class="about">
            Subscribing to our channel on YouTube <a href="https://youtube.com/@teensvoiceacademy8089?si=gK1ijNzb5bO1oXy4">@teensvoiceacademy</a>
        </p>
        <p class="about">
            Best regards, <br />
            <b> Sharon Enuebuka </b> <br />
            <b>Senior Executive Envoy, Teens Voice</b>
        </p>

        </div>
        </body>
    </html>
    `;

  const mailOptions = {
    from: "TeensVoice <teensvoiceacademy@gmail.com>",
    to: email,
    subject: "Welcome to Teensvoice",
    html: welcomeEmailTemplate,
  };

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending welcome email:", error);
      return res.status(500).json({ error: "Error sending welcome email" });
    }

    console.log("Email sent: " + info.response);
    // Send success response
    res.json({ message: "Signup successful. Welcome email sent." });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
