// /pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'landryasimwe@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Error sending email.' });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed.' });
    }
}
