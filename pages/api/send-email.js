// /pages/api/send-email.js
import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

       const client = new SMTPClient({
            user: process.env.EMAIL_USER,
            password: process.env.EMAIL_PASS,
            host: 'smtp.gmail.com:465', 
            ssl: true,
        });

        const mailOptions = {
            text: message,
            from: email,
            to: 'grouphantom@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            attachment: [
                { data: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`, alternative: true },
            ],
        };

        try {

            await client.sendAsync(mailOptions);
            return res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Error sending email.' });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed.' });
    }
}
