//funcionalidad de los botones nav
const verBalance = document.getElementById('balance-nav')
const verCategorias = document.getElementById('categorias-nav')
const verReportes = document.getElementById('reportes-nav')
const verOperacion=  document.getElementById('btn-nueva-operacion')
const verAgregarOperacionBtn=  document.getElementById('agregar-btn')
const verCancelarOperacionBtn=  document.getElementById('cancelar-operacion-btn')



const vistaBalance = document.getElementById('balance-box')
const vistaCategoria = document.getElementById('vista-categorias')
const vistaReportes = document.getElementById('vista-reportes')
const vistaOperacion= document.getElementById('vista-operacion')

//inputs agrega operacion ultima modi16-21
const descripcionInput = document.getElementById('descripcion')
const montoInput= document.getElementById('monto')
const tipoOperacion= document.getElementById('tipo')
const categoriaSelect= document.getElementById('form-label')
const FechaImput= document.getElementById('fecha-Imput')
//fin ultima modificacion

/*ultimo*/ 
const categorias = [
    'Comida',
    'Servicios',
    'Salida',
    'Educacion',
    'Transporte',
    'Trabajo'
];

const operacion = [];


/*finultimo*/

//vistaCategoria.classList.add('is-hidden')
//vistaReportes.classList.add('is-hidden')
//vistaOperacion.classList.add('is-hidden')

verBalance.addEventListener('click', () =>{
    vistaBalance.classList.remove('is-hidden')
    vistaCategoria.classList.add('is-hidden')
    vistaReportes.classList.add('is-hidden')
    vistaOperacion.classList.add('is-hidden')
    
})

verCategorias.addEventListener('click', () => {
    vistaBalance.classList.add('is-hidden')
    vistaCategoria.classList.remove('is-hidden')
    vistaReportes.classList.add('is-hidden')
    vistaOperacion.classList.add('is-hidden')

    
})

verReportes.addEventListener ('click', () => {
    vistaBalance.classList.add('is-hidden')
    vistaCategoria.classList.add('is-hidden')
    vistaReportes.classList.remove('is-hidden')
    vistaOperacion.classList.add('is-hidden')
    
})

verOperacion.addEventListener ('click',() => {
    vistaBalance.classList.add('is-hidden')
    vistaCategoria.classList.add('is-hidden')
    vistaReportes.classList.add('is-hidden')
    vistaOperacion.classList.remove('is-hidden')
})
/*ulitmo agrego 74-99*/
agregarOperacionBoton.addEventListener ('click', () => {
    const operacion = {
        id: uuidv4 (),
        descripcion: descripcionInput.value,
        monto: montoInput.value,
        tipo: tipoOperacion.value,
        categoria: categoriaSelectInput.value,
        fecha: fechaInput.value,
        
    }
    /*para que me regrese al menu balance*/
    operaciones.push(operacion)
    vistaOperacion.classList.add('is-hidden')
    vistaBalance.classList.remove('is-hidden')
    //para limpiar los Input 
    descripcionInput.value=''
    montoInput.value = 0
    tipoOperacion.value ='Ganancia'
    categoriasSelect.value = 'Servicios'
    fechaInput.value = new Date(),
    console.log(operaciones)
})


    