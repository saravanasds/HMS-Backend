import express from 'express';

import {staffRegister} from "../controllers/staff.js";

const router = express.Router();

router.post('/register',staffRegister);
 
export default router;
