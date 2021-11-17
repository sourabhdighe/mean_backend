const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  // Throw generic error
  throw new Error("Couldn't find .env file");
}

module.exports =  {
  /**
   *  Application port.
   */
  port: process.env.PORT,

  /**
   * JWT Secret
   */
//   jwtSecret: process.env.JWT_SECRET,

  /**
   * AUTH_SERVICE_BASE_URL
   */
  AuthServiceEndPoint: process.env.AUTH_SERVICE_BASE_URL,

  /**
   * NOTIFICATION_SERVICE_BASE_URL
   */
  NotificationServiceEndPoint: process.env.NOTIFICATION_SERVICE_BASE_URL,

  /**
   * ORG_SERVICE_BASE_URL
   */
  orgServiceEndPoint: process.env.ORG_SERVICE_BASE_URL,

  /**
   * FRONTEND_BASE_URL
   */
  frontendEndPoint: process.env.FRONTEND_BASE_URL,

};
