import {
    Get_Productos, Buscar_Productos, Filtrar_Productos,
    Listar_Todos, Obtener_Por_Id, Buscar_Por_Nombre,
    Buscar_Por_Categoria, Registrar_Producto
} from "../services/productos.service.js";

export const listar_productos = (req, res) => {
    const consulta = Get_Productos();
    res.json(consulta);
}

export const buscar_productos = (req, res) => {
    const { nombre } = req.params;

    if (nombre != "" || nombre != undefined) {
        const consulta = Buscar_Productos(nombre);
        res.status(200).json({
            mensaje: "Ok",
            data: consulta
        });
    } else {
        return res.status(400).json({
            mensaje: "parametros incorrectos"
        });
    }
}

export const listar_todos = (req, res) => {
    res.json(Listar_Todos());
};

export const obtener_por_id = (req, res) => {
    const { id } = req.params;
    const producto = Obtener_Por_Id(id);

    if (!producto) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.json(producto);
};

export const buscar_por_nombre = (req, res) => {
    const { nombre } = req.query;
    const resultado = Buscar_Por_Nombre(nombre);
    res.json(resultado);
};

export const buscar_por_categoria = (req, res) => {
    const { categoria } = req.params;
    const resultado = Buscar_Por_Categoria(categoria);
    res.json(resultado);
};

export const registrar_producto = (req, res) => {
    const { nombre, precio, stock, categoria, marca } = req.body;

    if (!nombre || precio === undefined || stock === undefined || !categoria || !marca) {
        return res.status(400).json({ mensaje: "Datos inválidos" });
    }
    if (precio <= 0) {
        return res.status(400).json({ mensaje: "Datos inválidos" });
    }
    if (stock < 0) {
        return res.status(400).json({ mensaje: "Datos inválidos" });
    }

    const nuevo = Registrar_Producto({ nombre, precio, stock, categoria, marca });
    res.status(201).json(nuevo);
};