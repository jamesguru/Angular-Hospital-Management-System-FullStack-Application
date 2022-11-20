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
exports.getPatients = exports.updatePatient = exports.deletePatient = exports.createPatient = void 0;
const database_1 = __importDefault(require("../helpers/database"));
const db = new database_1.default();
const createPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, resident_area, room_admitted, admission_no, id_no, email } = req.body;
    try {
        yield db.exec('addPatient', { name, resident_area, room_admitted, admission_no, id_no, email });
        res.status(201).json({ message: 'Patient added successfully ' });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.createPatient = createPatient;
const deletePatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield db.exec('deletePatient', { id });
        res.status(201).json({ message: 'deleted successfully' });
    }
    catch (error) {
        res.status(400).json({ error: "Something went wrong" });
    }
});
exports.deletePatient = deletePatient;
const updatePatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { status } = req.body;
    try {
        yield db.exec('updatePatient', { id, status });
        res.status(201).json({ message: "patient updated successfully" });
    }
    catch (error) {
        res.status(400).json({ error: "Something went wrong" });
    }
});
exports.updatePatient = updatePatient;
const getPatients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patients = yield (yield db.exec('getAllpatients')).recordset;
        res.status(200).json(patients);
    }
    catch (error) {
        res.status(400).json({ error: "something went wrong" });
    }
});
exports.getPatients = getPatients;
