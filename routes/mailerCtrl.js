/* eslint-disable */
const nodemailer = require("nodemailer");

module.exports = {
  mailer: function(req, res){

    const contactMessage = req.body.contactMessage;
    const contactFirstName = req.body.contactFirstName;
    const contactLastName =req.body.contactLastName;
    const contactEmail =req.body.contactEmail;
    const contactPhone =req.body.contactPhone;

    let testAccount = nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'contactgamenews019@gmail.com', 
        pass: 'Games123456@', 
      }
    });
  
    let info = transporter.sendMail({
      from: '"Game News" <contactgamenews019@gmail.com>', 
      to: "y.redjah@gmail.com", 
      subject: "Contact Message ✔", 
      text: `Vous avez un nouveau message : \n 
      Prénom : ${contactFirstName} \n
      Nom : ${contactLastName} \n
      Téléphone : ${contactPhone} \n
      Mail : ${contactEmail} \n
      Message : ${contactMessage}` 
    });
  
    console.log("Message sent: %s", info.messageId);
  
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  },
};
