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
            user: user_email ?? 'meetri.test@gmail.com',
            pass: password ?? 'sjfvznswfdkodxic'
        }
    });
    const htmlContent = `
    <table style="width:100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 10px 0;">
                <b>Hello Team Voyagency,</b>
            </td>
        </tr>
        <tr><td style="padding: 10px 0;"></td></tr>
        <tr>
            <td style="padding: 10px 0;">
                <b>Following are the details of the filled contact form:</b>
            </td>
        </tr>
        <tr><td style="padding: 10px 0;"></td></tr>
        <tr>
            <td style="padding: 10px 0;">
                <b>Name:</b> ${name}
            </td>
        </tr>
        <tr>
            <td style="padding: 10px 0;">
                <b>Email:</b> ${email}
            </td>
        </tr>
        <tr>
            <td style="padding: 10px 0;">
                <b>Subject:</b> ${subject}
            </td>
        </tr>
        <tr>
            <td style="padding: 10px 0;">
                <b>Message:</b> ${message}
            </td>
        </tr>
        <tr><td style="padding: 10px 0;"></td></tr>
        <tr>
            <td style="padding: 10px 0;">
                <b>Take Action accordingly!</b>
            </td>
        </tr>
        <tr>
            <td style="padding: 10px 0;">
                <b>Have a nice day!</b>
            </td>
        </tr>
    </table>
`;
    try {
        await transporter.sendMail({
            from: email,
            to: 'meetri.test@gmail.com,rarora@voyagency.travel,vchhabra@voyagency.travel,amit.rawat@meetri.in',
            subject: subject,
            html:htmlContent,
        })
        await transporter.sendMail({
            to: email,
            subject: subject,
            html: `
            <p>Thank you for contacting us!</p>
            <br/>
            <p>We have received your message and will get back to you shortly.</p>
        `,
        })
        return NextResponse.json({ message: "Success: email was sent", status: "success" })
    } catch (error) {
        return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", status: "failed" })
    }
}