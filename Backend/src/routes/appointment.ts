
import {Router} from  'express';
import { createAppointment } from '../controllers/appointment';

const router = Router();

router.post('/',createAppointment);


export default router;