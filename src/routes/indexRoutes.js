import { Router } from "express"
import { createProductos, deleteProductos, renderEditProductos, renderProductos, statusProductos, updateProductos } from "../controllers/productoController";

const router =Router();

//Productos
router.get('/', renderProductos);

router.post("/productos/agregar",  createProductos);

router.get("/productos/:id/update", renderEditProductos);

router.post("/productos/:id/update", updateProductos);

router.get("/productos/:id/delete", deleteProductos);

router.get("/productos/:id/statusProductos", statusProductos);

export default router;
