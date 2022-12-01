
require('dotenv').config();
const codename = "micro"
const {
    APP_NAME,
    APP_PORT,
} = process.env;

export default {
    name : APP_NAME,
    port : APP_PORT,
    codeName : codename
}