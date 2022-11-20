"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_cron_1 = __importDefault(require("node-cron"));
const WelcomeEmail_1 = __importDefault(require("./EmailService/WelcomeEmail"));
const AppointmentEmail_1 = __importDefault(require("./EmailService/AppointmentEmail"));
const AdmissionReport_1 = __importDefault(require("./EmailService/AdmissionReport"));
const diagnosisEmail_1 = __importDefault(require("./EmailService/diagnosisEmail"));
const app = (0, express_1.default)();
const run = () => {
    node_cron_1.default.schedule('* * * * *', () => {
        (0, WelcomeEmail_1.default)();
        (0, AppointmentEmail_1.default)();
        (0, AdmissionReport_1.default)();
        (0, diagnosisEmail_1.default)();
    });
};
run();
app.listen(8001, () => {
    console.log('Background services run on port 8001');
});
