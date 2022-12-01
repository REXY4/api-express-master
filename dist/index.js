"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const manifest_1 = __importDefault(require("./src/manifest"));
const start = () => {
    const manifest = new manifest_1.default();
    return manifest.start();
};
start();
