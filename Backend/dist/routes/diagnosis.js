"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const diagnosis_1 = require("../controllers/diagnosis");
const router = (0, express_1.Router)();
router.post('/', diagnosis_1.createDiagnosis);
router.put('/:id', diagnosis_1.updateDiagnosis);
router.post('/user', diagnosis_1.getDiagnosisForUser);
exports.default = router;
