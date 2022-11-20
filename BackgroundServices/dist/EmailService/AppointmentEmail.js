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
const AppointmentEmail = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = (yield db.exec("checkAppointment")).recordset;
    for (let appointment of appointments) {
        ejs_1.default.renderFile("templates/Appointment.ejs", { name: appointment.patient_name, date: appointment.date }, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
            let messageoption = {
                from: process.env.EMAIL,
                to: appointment.doctor_email,
                subject: "You have an appointment",
                html: data,
                attachments: [
                    {
                        filename: "sendIt.txt",
                        content: "appointment",
                    },
                ],
            };
            try {
                yield (0, sendMail_1.default)(messageoption);
                yield db.exec("updateAppointment");
            }
            catch (error) {
                console.log(error);
            }
        }));
    }
});
exports.default = AppointmentEmail;
