import  express  from "express";
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje } from "../controllers/paginasController.js";
import { guararTestmonial } from "../controllers/testimonialController.js";

const router = express.Router();

// req - Lo que enviamos : res- lo que express responder
router.get('/', paginaInicio)

router.get('/Nosotros', paginaNosotros)


router.get('/viajes', paginaViajes)
router.get('/viajes/:slug', paginaDetalleViaje)
 
 
router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guararTestmonial)


export default router;