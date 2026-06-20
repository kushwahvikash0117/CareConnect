const Notification = require('../models/Notification');

const createNotification = async (userId, title, message, type = "general") => {
  const notification = await Notification.create({
    userId,
    title,
    message,
    type,
  });

  return notification;
};

const markAsRead = async (notificationId) => {
  return await Notification.findByIdAndUpdate(
    notificationId,
    {
      isRead: true,
    },
    { new: true }
  );
};

module.exports = {
  createNotification,
  markAsRead,
};