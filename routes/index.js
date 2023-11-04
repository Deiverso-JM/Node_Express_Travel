import  express  from "express";
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes } from "../controllers/paginasController.js";

const router = express.Router();

// req - Lo que enviamos : res- lo que express responder
router.get('/', paginaInicio)

router.get('/Nosotros', paginaNosotros)


router.get('/viajes', paginaViajes)
 
 
router.get('/testimoniales', paginaTestimoniales)

export default router;