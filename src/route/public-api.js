import express from "express";
import userControler from "../controller/user-controler.js";

const publicRouter = new express.Router();
publicRouter.post('/api/users', userControler.register);
publicRouter.post('/api/users/login', userControler.login); 

export {
    publicRouter
}