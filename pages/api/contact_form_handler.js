export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, subject, message } = req.body;
  
      // Here you can add code to process the form data, such as sending an email or storing it in a database.
      
      // Simulating a successful form submission
      res.status(200).json({ status: 'success', message: 'Form submitted successfully' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  