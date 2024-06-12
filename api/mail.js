import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      await sendgrid.send({
        to: 'shadafsiddiqui5@gmail.com', // Your email address
        from: `[Contact Form] ${email}`,// Your verified sender email address
        subject: `[Contact Form] ${subject}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
      res.status(200).json({ status: 'success', message: 'Form submitted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Something went wrong. Please try again later.' });
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}
