const mongoose = require('mongoose')

const notificationSchema = mongoose.Schema(
    {
        notificationType: {
            type: String,
            required: [true, " add a notification type"]
        },
        notification: {
            type: String,
            required: [true, "add a notification"]
        }
    }, 
    {
        timestamps: true,
    }
)

const Notification = mongoose.model("Notification", notificationSchema);

module.exports=Notification;