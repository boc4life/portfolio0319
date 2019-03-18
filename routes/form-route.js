module.exports = function(app) {

    app.post("/contact", function(req, res){
        let smtpTrans = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASS
            }
        });
        let mailOpts = {
            from: req.body.name + " &lt;" + req.body.email + "&gt;",
            to: GMAIL_USER,
            subject: "New message from portfolio contact form",
            text: "$(req.body.name} (${req.body.email}) says: ${req.body.message}"
        };
        smtpTrans.sendMail(mailOpts, function(err, response){
            if (err) {
                res.render("Form Submission Failed. Please try again at another time.")
            }
            else {
                res.end();
            }
        });
    });
};
