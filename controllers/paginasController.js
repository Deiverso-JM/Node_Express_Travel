import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/testimoniales.js";



const paginaInicio = async (req,res) => {

    //Promesa

    const promiseDB=[];

    promiseDB.push(  await Viaje.findAll({limit: 3}));
    promiseDB.push( await Testimonial.findAll({limit: 3}));



    //Consultar 3 viajes del modelo
    try {
        const resultado =  await Promise.all(promiseDB);
        res.render('Inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error)
    }
}


const paginaViajes = async (req, res)=>{ // req -  Lo que enviamos : res- lo que express responder

    //Consultar Bd
    const viajes = await Viaje.findAll()

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
}


const  paginaNosotros = (req, res)=>{ 
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaTestimoniales = async (req, res)=>{ // req - Lo que enviamos : res- lo que express responder

    //Consultar los testimoniales desde la BD
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }

 
}

const paginaDetalleViaje =  async (req, res)=>{ // req - Lo que enviamos : res- lo que express responder
    const {slug} = req.params;
    console.log(slug)

    try {
        const resultado = await Viaje.findOne({where: {slug}})
        
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            resultado
        })
    } catch(error) {
        console.log(error)
    }
}



export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,

}