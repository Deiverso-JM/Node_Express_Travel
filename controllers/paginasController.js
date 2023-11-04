const paginaInicio = (req,res) => {
    res.render('incio', {
        pagina: 'Inicio'
    });
}

const paginaViajes = (req, res)=>{ // req - Lo que enviamos : res- lo que express responder

    res.render('viajes', {
        pagina: 'Viajes'
    })
}


const  paginaNosotros = (req, res)=>{ 
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaTestimoniales = (req, res)=>{ // req - Lo que enviamos : res- lo que express responder

    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}