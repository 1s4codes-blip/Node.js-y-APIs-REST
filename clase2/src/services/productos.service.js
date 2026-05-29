import { bd_carrito } from "../data/carrito.data.js";


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