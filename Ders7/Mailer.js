var nodemailer = require('nodemailer')

var transporter = nodemailer.createTestAccount((err, account) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yourMailAddress',
            pass: 'YourPassword'
        }
    });

    var mailOptions = {
        from: 'sender@example.com',
        to: 'receiver.example@com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };

    transporter.sendMail(mailOptions,(err,info)=>{
        if(err) throw err;
        console.log('Email Sent:'+ info.response)
    });

})