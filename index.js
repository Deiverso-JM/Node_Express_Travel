import  express  from "express";
import  router  from "./routes/index.js";
import db from './config/db.js';


const app = express();


//Conectar base de datos
db.authenticate()
    .then(()=>console.log('**Base de datos Conectada **'))
    .catch(error => console.log(error));

//Puerto definido
const port = process.env.port || 5000;

//Agregamos PUG
app.set('view engine', 'pug');


//MIddelever

//Obtener el año actual
app.use((req, res, next )=>{
    const year = new Date();
    res.locals.actualyear= year.getFullYear();
    res.locals.nombreSitio="Agencia de viajes"
    console.log(res.locals)
    return next()
})

//Definir Carpeta publica
app.use(express.static('public'));

//Agregamos el Router
app.use('/', router);


//Escucha el puerto
app.listen(port ,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})

