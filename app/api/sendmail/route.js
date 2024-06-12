import { NextResponse } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api

export async function POST(request) {
    const req = await request.json()
    const user_email = process.env.NEXT_PUBLIC_MAIL_SEND
    const password = process.env.NEXT_PUBLIC_MAIL_PASSWORD
    const { name, subject, message, email } = req
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {
            user: user_email,
            pass: password
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: 'meetri.test@gmail.com',
            to: email,
            subject: subject,
            html: `<p>Hi ${name}</p><br/><p>${message}</p>`,
        })
        return NextResponse.json({ message: "Success: email was sent", status: "success" })
    } catch (error) {
        return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", status: "failed" })
    }
}