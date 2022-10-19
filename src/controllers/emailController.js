import { transporter } from "../config/mailer.js";

export async function emailController(req, res){
    try{
        if(req.body.type === "budget"){
            await transporter.sendMail({
                from: '"Muden" <adriacosta1215@gmail.com>',
                to: "adriancosta1215@gmail.com",
                subject: "Solicitação de orçamento",
                text: "Hello world?",
                html: `
                <p>Nome: ${req.body.name}</p>
                <p>Telefone ${req.body.tel}</p>
                <p>Email: ${req.body.email}</p>
                <p>Data: ${req.body.date}</p>
                <p>Cidade de origem: ${req.body.originCity}</p>
                <p>Estado de origem: ${req.body.originState}</p>
                <p>Cidade de destino: ${req.body.destinationCity}</p>
                <p>Estado de origem: ${req.body.destinationState}</p>
                `
            });
        }else if(req.body.type === "contact"){
            await transporter.sendMail({
                from: '"Muden" <adriacosta1215@gmail.com>',
                to: "adriancosta1215@gmail.com",
                subject: "Nova mensagem!",
                html: `
                <p>Email: ${req.body.email}</p>
                <p>Mensagem: ${req.body.message}</p>
                `
            });
        }
        return res.sendStatus(200);
    }catch{
        return res.sendStatus(500);
    }
}