"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const defenition = {
    name: 'ping',
    basePath: '/api/v1/ping',
    description: 'ping API v1',
    routes: [
        {
            enabled: true,
            method: 'get',
            path: '/',
            summary: 'List of service',
            description: 'Get services status',
            middlewares: [],
            action: [
                controllers_1.ping
            ],
            responseExample: [
                {
                    code: 200,
                    description: 'OK : HealthCheck',
                    mediaType: 'application/json',
                    schema: ""
                }
            ]
        }
    ]
};
exports.default = defenition;
