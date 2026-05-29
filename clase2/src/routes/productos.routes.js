import { Router } from "express";
import { listar_productos, buscar_productos } from "../controllers/producto.controller.js";


const router = Router();

//Rutas GET
router.get("/", listar_productos);

router.get("/buscar/:nombre", buscar_productos);

export default router;
