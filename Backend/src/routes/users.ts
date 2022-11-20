import { Router } from "express";
import { deleteUsers, getUsers, signIn, signUp,getDoctors } from "../controllers/users";

const router=Router();


router.post('/signin',signIn);
router.post('/signup',signUp);
router.get('/',getUsers);
router.delete('/:id',deleteUsers);
router.get('/getdoctors',getDoctors);

export default router;