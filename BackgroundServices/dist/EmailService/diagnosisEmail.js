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
const ejs_1 = __importDefault(require("ejs"));
const dotenv_1 = __importDefault(require("dotenv"));
const sendMail_1 = __importDefault(require("../Helpers/sendMail"));
const database_1 = __importDefault(require("../Helpers/database"));
const db = new database_1.default();
dotenv_1.default.config();
const diagnosisEmail = () => __awaiter(void 0, void 0, void 0, function* () {
    const diagnosis = (yield db.exec("checkDiagnosis")).recordset;
    for (let diagnose of diagnosis) {
        ejs_1.default.renderFile("templates/diagnosis.ejs", { name: diagnose.name_treatment, description: diagnose.description }, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
            let messageoption = {
                from: process.env.EMAIL,
                to: diagnose.patient_email,
                subject: `Hello here is the treatment ${diagnose.name_treatment}`,
                html: data,
                attachments: [
                    {
                        filename: "diagnosis.txt",
                        content: `${diagnose.description}`,
                    },
                ],
            };
            try {
                yield (0, sendMail_1.default)(messageoption);
                yield db.exec("updateDiagnosisSentEmail");
            }
            catch (error) {
                console.log(error);
            }
        }));
    }
});
exports.default = diagnosisEmail;
