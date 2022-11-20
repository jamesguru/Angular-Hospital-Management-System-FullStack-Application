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
exports.getDiagnosisForUser = exports.updateDiagnosis = exports.createDiagnosis = void 0;
const database_1 = __importDefault(require("../helpers/database"));
const db = new database_1.default();
const createDiagnosis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name_treatment, drug_administered, doctor_name, patient_email, bill, date, paid, description, patient_status } = req.body;
    try {
        yield db.exec('addDiagnosis', { name_treatment, drug_administered, doctor_name, patient_email, bill, date, paid, description, patient_status });
        res.status(201).json({ message: 'Diagnosis added successfully' });
    }
    catch (error) {
        res.status(400).json({ error: 'Something went wrong' });
    }
});
exports.createDiagnosis = createDiagnosis;
const updateDiagnosis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield db.exec('updateDiagnosis', { id });
        res.status(201).json({ message: "Diagnosis updated successfully" });
    }
    catch (error) {
    }
});
exports.updateDiagnosis = updateDiagnosis;
const getDiagnosisForUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const diagnosis = yield (yield db.exec('getDiagnosisForUser', { email })).recordset;
        res.status(200).json(diagnosis);
    }
    catch (error) {
    }
});
exports.getDiagnosisForUser = getDiagnosisForUser;
