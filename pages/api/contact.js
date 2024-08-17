import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullname, contact, reason, message } = req.body;

    if (!fullname || !contact || !reason || !message) {
      return res.status(400).json({ error: 'Please fill out all fields' });
    }

    try {
      // Create a transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Email options
      const mailOptions = {
        from: contact,
        to: process.env.EMAIL,
        subject: `Form submission by ${fullname} in amanraox portfolio`,
        text: `
          Name: ${fullname}
          Contact: ${contact}
          Reason: ${reason}
          Message: ${message}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ success: 'Your message has successfully pinged my inbox, dodging all the digital traffic. I’ll get back to you soon——no downtime expected!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
