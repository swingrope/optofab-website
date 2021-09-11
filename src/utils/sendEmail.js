import emailjs from "emailjs-com";

// move to .env later
const serviceID = "service_hb7vmya";
const templateID = "template_5xswbu6";
const userID = "user_87U8gyINczyJUXk8hNpi7";

const sendEmail = async (from_name, to_name, reply_to_email, message) => {
  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      { from_name, to_name, reply_to_email, message },
      userID
    );
    if (response.status === 200) {
      console.log("Successfully sent the email");
    }
  } catch (err) {
    console.log("Error!", err);
  }
};

export default sendEmail;
