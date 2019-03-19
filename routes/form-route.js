let nodemailer = require("nodemailer")

module.exports = function(app) {

    app.post("/contact", function(req, res){
        console.log(process.env.GMAIL_USER)
        let smtpTrans = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });
        let mailOpts = {
            from: req.body.name + " &lt;" + req.body.email + "&gt;",
            to: process.env.GMAIL_USER,
            subject: "New message from portfolio contact form",
            text: req.body.name + " " +  req.body.email + " says: " + req.body.message
        };
        smtpTrans.sendMail(mailOpts, function(err, response){
            if (err) {
                console.log(err)
                res.render("Form Submission Failed. Please go back and try again at another time.")
            }
            else {
                res.redirect("/");
            }
        });
    });
};
