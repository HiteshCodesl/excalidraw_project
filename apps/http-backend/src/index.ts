import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-commen/config";
import { middleware } from "./middleware";
import {CreateUserSchema, SigninSchema, CreateRoomSchema} from  
"@repo/commen/types"
import {prismaClient} from "@repo/db/client"

const app = express();

app.post("signup", (req, res)=>{
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    res.json({
        userId: "123"
    })
})

app.post("signin", async(req, res)=>{
    const data = SigninSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    
const userId = 1;
    const token = await jwt.sign({
        userId 
    }, JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room", middleware , (req, res) =>{
    res.json({
        roomId: 123
    })
})

app.listen(3001);