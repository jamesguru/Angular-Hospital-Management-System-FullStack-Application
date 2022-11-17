"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentRoute = exports.diagnosisRoute = exports.patientRoute = exports.userRoute = void 0;
const users_1 = __importDefault(require("./users"));
exports.userRoute = users_1.default;
const patients_1 = __importDefault(require("./patients"));
exports.patientRoute = patients_1.default;
const diagnosis_1 = __importDefault(require("./diagnosis"));
exports.diagnosisRoute = diagnosis_1.default;
const appointment_1 = __importDefault(require("./appointment"));
exports.appointmentRoute = appointment_1.default;
