import express from "express";
import router from "./routes/productos.routes.js";

const app = express();

app.use(express.json());


const PORT = 3000;


app.use("/api/productos" , router);



app.listen(PORT, () => {

    console.log(`Servidor corriendo en puerto ${PORT}`);

});