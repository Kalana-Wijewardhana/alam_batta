import {initializeApp, applicationDefault } from 'firebase-admin/app';
import { getMessaging } from "firebase-admin/messaging";
import express, { json } from "express";
import cors from "cors";


process.env.GOOGLE_APPLICATION_CREDENTIALS;

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use(function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});


initializeApp({
  credential: applicationDefault(),
  projectId: 'kotlinfirst-60b2c',
});

app.post("/send", function (req, res) {
  const receivedToken = req.body.fcmToken;
  
  const message = {
    notification: {
      title: "Notif",
      body: 'This is a Test Notification'
    },
    token: "f-k_MI6TTCuDGUnYlWUIhT:APA91bFhhEFRLsQVJ_jj3eMXN9-6-_CQk1b3ZJiRN_ab7n0DzBDz2wspZ6bFL057dhnBbrYuwGkB2Z7_PuDYKLW_GXyVBnXsZCqLS5lRQxw_gdcVD6nyt0lpPEmV18NSzE0ZU62wf4pN",
  };
  
  getMessaging()
    .send(message)
    .then((response) => {
      res.status(200).json({
        message: "Successfully sent message",
        token: receivedToken,
      });
      console.log("Successfully sent message:", response);
    })
    .catch((error) => {
      res.status(400);
      res.send(error);
      console.log("Error sending message:", error);
    });
  
  
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});