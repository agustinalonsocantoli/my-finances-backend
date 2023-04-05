import express from "express";
import kpiController from "../controllers/kpi.js";

const router = express.Router();

router.get('/kpis', kpiController.getKpis);

export default router;