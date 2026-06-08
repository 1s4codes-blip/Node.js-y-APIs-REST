import { Router } from "express";
import {
    listar_productos, buscar_productos,         
    listar_todos, obtener_por_id, buscar_por_nombre,
    buscar_por_categoria, registrar_producto    
} from "../controllers/producto.controller.js";

const router = Router();

router.get("/carrito", listar_productos);
router.get("/buscar/:nombre", buscar_productos);

router.post("/", registrar_producto);
router.get("/", listar_todos);
router.get("/buscar", buscar_por_nombre);          
router.get("/categoria/:categoria", buscar_por_categoria);
router.get("/:id", obtener_por_id);             

export default router;