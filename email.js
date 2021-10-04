module.exports = function(app){
    var nodemailer = require('nodemailer');

    var user = 'pumpkitty@outlook.com';
    var pass = '4Kytn8y/';

    app.get('/mail',(req, res) =>{

        emailCliente = req.body.emailCliente;
        assunto = req.body.assunto;
        texto = req.body.texto;

        const transporter = nodemailer.createTransport({

            host: 'smtp.live.com',
            port: 587,
            auth: {user,pass}
        });

        transporter.sendMail({
            from: user,
            to: user,
            // Email do cliente.
            replyTo: emailCliente,
            // Assunto do Email.
            subject: assunto,
            // Corpo do Email.
            text: texto
        }).then(info=>{
            console.log('O e-mail foi enviado com sucesso!');
            res.send(info)
        }).catch(error => {
            res.send(error)
            console.log('Erro ao enviar o e-mail!');
        })

    });
}