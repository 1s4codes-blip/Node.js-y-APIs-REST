import { Get_Productos, Buscar_Productos, Filtrar_Productos, Calcular_Total_Carrito } from "../services/productos.service.js";


//get
export const listar_productos = (req,res) => {
    const consulta = Get_Productos();

    res.json(consulta);
}

//get
export const buscar_productos = (req,res) =>{

    
    const {nombre} = req.params;

    if(nombre != "" || nombre != undefined)
    {
       const consulta = Buscar_Productos(nombre);

       res.status(200).json({
            mensaje: "Ok",
            data: consulta
       });
    }
    else
    {
        return res.status(400).json({
            mensaje: "parametros incorrectos"
        });
    }
}

