import { db } from '../db/mongo.js';
import joi from 'joi';
import bcrypt from 'bcrypt';

export async function loginUser(req, res){
    const user = req.body

    const userSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    });
    
    const { error } = userSchema.validate(user);
    
    if (error) {
        return res.sendStatus(422);
    }

    const userDB = await db.collection('login').findOne({ email: user.email });

    if (userDB && bcrypt.compareSync(user.password, userDB.password)) {
        return res.sendStatus(200);
    } else {
        return res.status(401).send('Senha ou email incorretos!');
    }
}