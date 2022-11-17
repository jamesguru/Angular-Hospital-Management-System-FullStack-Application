import { Router } from "express";
import { getUsers, signIn, signUp } from "../controllers/users";

const router=Router();


router.post('/signin',signIn);
router.post('/signup',signUp)
router.get('/',getUsers)

export default router;