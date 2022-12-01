
import Server from './server';


class Manifest extends Server {
    constructor(){
        super();
    }

    start(){
         this.setupServer();
     };
}


export default Manifest;


