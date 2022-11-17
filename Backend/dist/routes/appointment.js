"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointment_1 = require("../controllers/appointment");
const router = (0, express_1.Router)();
router.post('/', appointment_1.createAppointment);
exports.default = router;
