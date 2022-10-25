import express from "express";
import {
    getLocation,
    getLocationById,
    createLocation,
    updateLocation,
    deleteLocation
} from "../controllers/masterdata/Location.js";
import {
    getWorkcenter,
    getWorkcenterById,
    createWorkcenter,
    updateWorkcenter,
    deleteWorkcenter
} from "../controllers/masterdata/Workcenter.js";
import {
    getRole,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
} from "../controllers/masterdata/Role.js";
import {
    getDms,
    getDmsById,
    createDms,
    updateDms,
    deleteDms
} from "../controllers/masterdata/Dms.js";
import {
    getGroup,
    getGroupById,
    createGroup,
    updateGroup,
    deleteGroup
} from "../controllers/masterdata/Group.js";
import {
    getCondition,
    getConditionById,
    createCondition,
    updateCondition,
    deleteCondition
} from "../controllers/masterdata/Condition.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/location', verifyUser, adminOnly, getLocation);
router.get('/location/:id', verifyUser, adminOnly, getLocationById);
router.post('/location', verifyUser, adminOnly, createLocation);
router.patch('/location/:id', verifyUser, adminOnly, updateLocation);
router.delete('/location/:id', verifyUser, adminOnly, deleteLocation);

router.get('/workcenter', verifyUser, adminOnly, getWorkcenter);
router.get('/workcenter/:id', verifyUser, adminOnly, getWorkcenterById);
router.post('/workcenter', verifyUser, adminOnly, createWorkcenter);
router.patch('/workcenter/:id', verifyUser, adminOnly, updateWorkcenter);
router.delete('/workcenter/:id', verifyUser, adminOnly, deleteWorkcenter);

router.get('/role', verifyUser, adminOnly, getRole);
router.get('/role/:id', verifyUser, adminOnly, getRoleById);
router.post('/role', verifyUser, adminOnly, createRole);
router.patch('/role/:id', verifyUser, adminOnly, updateRole);
router.delete('/role/:id', verifyUser, adminOnly, deleteRole);

router.get('/dms', getDms);
router.get('/dms/:id', getDmsById);
router.post('/dms', verifyUser, adminOnly, createDms);
router.patch('/dms/:id', verifyUser, adminOnly, updateDms);
router.delete('/dms/:id', verifyUser, adminOnly, deleteDms);
router.get('/dms/download/:id', getDms);

router.get('/group', verifyUser, adminOnly, getGroup);
router.get('/group/:id', verifyUser, adminOnly, getGroupById);
router.post('/group', verifyUser, adminOnly, createGroup);
router.patch('/group/:id', verifyUser, adminOnly, updateGroup);
router.delete('/group/:id', verifyUser, adminOnly, deleteGroup);

router.get('/condition', verifyUser, adminOnly, getCondition);
router.get('/condition/:id', verifyUser, adminOnly, getConditionById);
router.post('/condition', verifyUser, adminOnly, createCondition);
router.patch('/condition/:id', verifyUser, adminOnly, updateCondition);
router.delete('/condition/:id', verifyUser, adminOnly, deleteCondition);

export default router;