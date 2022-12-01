"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
class Manifest extends server_1.default {
    constructor() {
        super();
    }
    start() {
        this.setupServer();
    }
    ;
}
exports.default = Manifest;
