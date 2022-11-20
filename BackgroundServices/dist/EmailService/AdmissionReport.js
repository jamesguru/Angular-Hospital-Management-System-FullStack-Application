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
const json2csv_1 = require("json2csv");
const db = new database_1.default();
dotenv_1.default.config();
const ReportEmail = () => __awaiter(void 0, void 0, void 0, function* () {
    const patients = (yield db.exec("checkPatient")).recordset;
    if (patients.length) {
        const csv = (0, json2csv_1.parse)(patients);
        ejs_1.default.renderFile("templates/Report.ejs", (err, data) => __awaiter(void 0, void 0, void 0, function* () {
            let messageoption = {
                from: process.env.EMAIL,
                to: process.env.EMAIL,
                subject: "HI HERE IS YOUR DAILY REPORT",
                html: data,
                attachments: [
                    {
                        filename: "DailyReport.csv",
                        content: csv,
                    },
                ],
            };
            try {
                yield (0, sendMail_1.default)(messageoption);
                yield db.exec("updatePatientEmailSent");
            }
            catch (error) {
                console.log(error);
            }
        }));
    }
});
exports.default = ReportEmail;
