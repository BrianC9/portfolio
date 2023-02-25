import { transporter, mailOptions } from "@/config/nodemailer";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Error validating the fields on the server" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Portfolio message from ${name}`,
        text: `Message from ${name} with email: ${email} and content message: ${message}`,
        html: `<h1>Portfolio message</h1>
                <h3>Name: ${name}</h3>
                <h3>Email: ${email}</h3>
            <p>${message}</p>`,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error sending the email" });
    }
    console.log({ name, email, message });
  }
  return res.status(400).json({ message: "Error handling the request" });
}
