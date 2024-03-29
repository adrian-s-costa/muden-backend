import { transporter } from "../config/mailer.js";
import { db, objectId } from '../db/mongo.js'

export async function emailController(req, res){
    try{
        if(req.body.type === "budget"){
            // await transporter.sendMail({
            //     from: '"Muden" <adriacosta1215@gmail.com>',
            //     to: "adriancosta1215@gmail.com",
            //     subject: "Solicitação de orçamento",
            //     text: "Hello world?",
            //     html: `
            //     <p>Nome: ${req.body.name}</p>
            //     <p>Telefone ${req.body.tel}</p>
            //     <p>Email: ${req.body.email}</p>
            //     <p>Data: ${req.body.date}</p>
            //     <p>Cidade de origem: ${req.body.originCity}</p>
            //     <p>Estado de origem: ${req.body.originState}</p>
            //     <p>Cidade de destino: ${req.body.destinationCity}</p>
            //     <p>Estado de origem: ${req.body.destinationState}</p>
            //     `
            // });
            await db.collection('muden').insertOne({nome: req.body.name, telefone: req.body.tel, email: req.body.email, mudanca: req.body.date, type: "Orçamento", time: req.body.time, code: req.body.code});
        }else if(req.body.type === "contact"){
            // await transporter.sendMail({
            //     from: '"Muden" <adriacosta1215@gmail.com>',
            //     to: "adriancosta1215@gmail.com",
            //     subject: "Nova mensagem!",
            //     html: `
            //     <p>Email: ${req.body.email}</p>
            //     <p>Mensagem: ${req.body.message}</p>
            //     `
            // });
            await db.collection('muden').insertOne({nome: req.body.name, telefone: req.body.tel, email: req.body.email, servico: req.body.servico, type: "Parceria", time: req.body.time, code: req.body.code});
        }
        return res.send("success").status(200);
    }catch{
        return res.send("error").status(500);
    }
}

export async function getMessages(req, res){
    try{
        const messages = await db.collection('muden').find().toArray();
        return res.send(messages).status(200);
    }catch{
        return res.send("error").status(500);
    }
}