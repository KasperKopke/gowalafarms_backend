import express from 'express';
import { signInWithToken } from '../../handlers/auth.handler.js';

const authTokenRouter = express.Router();

// Get
authTokenRouter.post("/auth/token", async (req, res) => {
  
    const result = await signInWithToken(req.body.token);

    if(result.status === 'ok') {

        return res.status(200).send(
            { message: result.message, data: result.data }
        );

    } else {

        return res.status(200).send(
            { 
                message: result.message, 
                data: [] 
            }
        );

    }
    
});



export default authTokenRouter;