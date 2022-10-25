import express from "express";
import {
    getTemplate,
    getTemplateById,
    createTemplate,
    updateTemplate,
    deleteTemplate
} from "../controllers/template/Template.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/template',verifyUser, getTemplate);
router.get('/template/:id',verifyUser, getTemplateById);
router.post('/template',verifyUser, createTemplate);
router.patch('/template/:id',verifyUser, updateTemplate);
router.delete('/template/:id',verifyUser, deleteTemplate);

export default router;