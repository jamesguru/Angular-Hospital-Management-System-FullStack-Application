"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppointment = void 0;
const database_1 = __importDefault(require("../helpers/database"));
const db = new database_1.default();
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { patient_name, doctor_email, date, patient_email } = req.body;
    try {
        yield db.exec('addAppointment', { patient_name, doctor_email, date, patient_email });
        res.status(200).json({ message: 'appointment has been created successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'something went wrong' });
    }
});
exports.createAppointment = createAppointment;
