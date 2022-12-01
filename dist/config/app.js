"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const codename = "micro";
const { APP_NAME, APP_PORT, } = process.env;
exports.default = {
    name: APP_NAME,
    port: APP_PORT,
    codeName: codename
};
