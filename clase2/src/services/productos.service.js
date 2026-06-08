import { bd_carrito, bd_productos } from "../data/carrito.data.js";


let mitbl = bd_carrito[0].productos;

export const Get_Productos = () => {
    return mitbl;
}

export const Buscar_Productos = (p_nombre) => {
    return mitbl.find(x => x.nombre.toUpperCase() == p_nombre.toUpperCase());
}

export const Buscar_Productos_id = (p_id) => {
    return mitbl.find(x => x.id == p_id);
}


export const Filtrar_Productos = (p_precio, p_condicion1) => {
    if(p_condicion1 == 'Mayor')
        return mitbl.filter(x => x.precio > p_precio);
    else
        return mitbl.filter(x => x.precio < p_precio);
}

export const Calcular_Total_Carrito = (lProductos) => {
    let total = 0;
    for(const producto in lProductos)
    {
        total += (Buscar_Productos_id(producto.id).precio * producto.cantidad);
    }
    return total;
}

export const Listar_Todos = () => {
    return bd_productos;
};

export const Obtener_Por_Id = (p_id) => {
    return bd_productos.find(x => x.id == p_id);
};

export const Buscar_Por_Nombre = (p_nombre) => {
    return bd_productos.filter(x =>
        x.nombre.toLowerCase().includes(p_nombre.toLowerCase())
    );
};

export const Buscar_Por_Categoria = (p_categoria) => {
    return bd_productos.filter(x =>
        x.categoria.toLowerCase() == p_categoria.toLowerCase()
    );
};

export const Registrar_Producto = (producto) => {
    const nuevo = {
        id: bd_productos.length + 1,
        ...producto
    };
    bd_productos.push(nuevo);
    return nuevo;
};