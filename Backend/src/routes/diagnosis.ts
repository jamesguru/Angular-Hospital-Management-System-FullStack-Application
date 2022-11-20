import {Router} from 'express';
import { createDiagnosis, getDiagnosisForUser, updateDiagnosis } from '../controllers/diagnosis';

const router = Router();

router.post('/',createDiagnosis );
router.put('/:id',updateDiagnosis);
router.post('/user',getDiagnosisForUser)



export default router;