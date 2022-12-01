import config from "../config";
import express from "express";

class Server  {
    public app =  express();
    config: { app: { name: string | undefined; port: string | undefined; codeName: string; }; };
    constructor(){
        this.config = config;
        this.app.use(express.json());
    }

     async setupServer(){
       await this.setServer();
    } 

    setServer(){
        const port = this.config.app.port;
        this.app.listen(port,()=>console.log(`Running on Port ${port}`))
    }
}

export default Server;

