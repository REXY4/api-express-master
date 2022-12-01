import {ping} from '../controllers';

const defenition = {
    name : 'ping',
    basePath : '/api/v1/ping',
    description : 'ping API v1',
    routes : [
        {
            enabled : true,
            method : 'get',
            path : '/',
            summary : 'List of service',
            description : 'Get services status',
            middlewares : [
                
            ],
            action : [
                ping
            ],
            responseExample : [
                {
                    code : 200,
                    description : 'OK : HealthCheck',
                    mediaType : 'application/json',
                    schema : ""
                }
            ]
        }
    ]
}

export default defenition;