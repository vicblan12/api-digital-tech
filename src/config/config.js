const { config } = require('dotenv')
config()

module.exports = {
    data: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSW,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        secret: process.env.JWT_SECRET
    },
    smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        passw: process.env.SMTP_PASSW,
        service: process.env.SMTP_SERVICE,
        client: process.env.SMTP_CLIENT,
        secret: process.env.SMTP_SECRET,
        refresh: process.env.SMTP_REFRESH
    }
}