//funcionalidad de los botones nav
const verBalance = document.getElementById('balance-nav')
const verCategorias = document.getElementById('categorias-nav')
const verReportes = document.getElementById('reportes-nav')
const verOperacion=  document.getElementById('btn-nueva-operacion')
const verAgregarOperacionBtn=  document.getElementById('agregar-operacion-btn')
const verCancelarOperacionBtn=  document.getElementById('cancelar-operacion-btn')



const vistaBalance = document.getElementById('balance-box')
const vistaCategoria = document.getElementById('vista-categorias')
const vistaReportes = document.getElementById('vista-reportes')
const vistaOperacion= document.getElementById('vista-operacion')

//inputs agrega operacion 
const descripcionInput = document.getElementById('descripcion')
const montoInput= document.getElementById('monto')
const tipoOperacion= document.getElementById('tipo')
const categoriaSelect= document.getElementById('categoria')
const FechaImput= document.getElementById('fecha')


const categorias = [
    'Comida',
    'Servicios',
    'Salida',
    'Educacion',
    'Transporte',
    'Trabajo'
];

const operaciones= [];

//const operaciones2 = JSON.parse(localStorage.getItem('operaciones'));


const generarCategorias = () =>{
    const selects = document.getElementsByClassName('categorias-select');
    for(let i=0; i < selects.length; i ++){
        const select = selects[i];
        selects.innerHTML = '';
        if(select.classList.contains('filtro-categoria')){
            select.innerHTML = `<option>Todas</option>` 
        }
        for(let j =0; j< categorias.length; j ++){
            select.innerHTML += `<option value=${categoria[j]}>${categorias[j]}</option>`
        }
    }
}

generarCategorias();

const mostraroperaciones = (arr) =>{
    if(arr.length==0){/*si el arreglo esta vacio muestrame..*/
        document.getElementById('sin-operaciones').classList.remove('is-hidden')
        document.getElementById('con-operaciones').classList.add('is-hidden')
    } else{
        document.getElementById('sin-operaciones').classList.add('is-hidden')
        document.getElementById('con-operaciones').classList.remove('is-hidden')
    }
}

//mostraroperaciones(operaciones);

vistaCategoria.classList.add('is-hidden')
vistaReportes.classList.add('is-hidden')
vistaOperacion.classList.add('is-hidden')

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

verAgregarOperacionBtn.addEventListener('click', () => {
    //console.log(descripcionInput.value.trim().length)
    
    if(descripcionInput.value.trim().length==0)
    {
        alert('Ingrese una descripción válida.')
        return 
    }

    if(montoInput.value  == 0)
    {
        alert('Debe ingresar el monto antes de continuar.')
        return 
    }


    var wid = uuidv4 ();
    var wdescripcion = descripcionInput.value;
    var wmonto = montoInput.value;
    var wtipo = tipoOperacion.value;
    var wcategoria = categoriaSelect.value;
    var wfecha = FechaImput.value;

    //creo un objeto por cada operacion
    const operacion = {
        id: uuidv4 (),
        descripcion: descripcionInput.value,
        monto: montoInput.value,
        tipo: tipoOperacion.value,
        categoria: categoriaSelect.value,
        fecha: FechaImput.value,
    }
    //agrego el obj (operacion)al arreglo de operaciones
    operaciones.push(operacion)
    //escondo la vista formulario y muestro la vista de listas d las operaciones
    vistaOperacion.classList.add('is-hidden')
    vistaBalance.classList.remove('is-hidden')
    vistaCategoria.classList.add('is-hidden')
    vistaReportes.classList.add('is-hidden')
    vistaOperacion.classList.add('is-hidden')

    //limpio los Input para que me regrese al menu inicial
    descripcionInput.value=''
    montoInput.value = 0
    tipoOperacion.value ='Ganancia'
    categoriaSelect.value = 'Servicios'
    FechaImput.value = new Date()
    
    

    mostraroperaciones(operaciones)
    // guardo el arreglo en LS
    //localStorage.setItem(operaciones), JSON.stringyfy(operaciones), 

    

    pintoOperaciones(operaciones)

    /*vistaBalance.classList.remove('is-hidden')
    vistaCategoria.classList.add('is-hidden')
    vistaReportes.classList.add('is-hidden')
    vistaOperacion.classList.add('is-hidden')
    document.getElementById('sin-operaciones').classList.add('is-hidden')
    document.getElementById('con-operaciones').classList.remove('is-hidden')*/
    
})


const pintoOperaciones = (arr) => {
    let str= '';
    //recorre el array por cada operacion
    arr.forEach((operacion) =>{
        console.log(operacion)
        //hace destructuring para sacar las propiedades
        const {id, descripcion, categoria, fecha, monto, tipo} = operacion;

        //let color = tipo =='ganancia' ? 'green':  'red';

        str =str + `
        
        <div class="columns has-text-weight-semibold is-hidden-movile">
            <div class="column has-text-weight-bold is-3">Descripción</div>
            <div class="column has-text-weight-bold is-3">Categoría</div>
            <div class="column has-text-weight-bold is-2 has-text-right">Fecha</div>
            <div class="column has-text-weight-bold is-2 has-text-right">Monto</div>
            <div class="column has-text-weight-bold is-2 has-text-right">Acciones</div>
         </div>

        <div  class="mi-flex" is-flex-direccion-row"><div class="columns has-text-weight-semibold is-hidden-movile">
            <span class="column is-3">${descripcion}</span>
            <span class="column notification is-info is-light is-3 is-size-6"> ${categoria} </span>
            <span class="column is-2 has-text-right">${fecha}</span>
            <span class="column is-2 has-text-right ${tipo ==  'ganancia' ? 'green': 'red'}"> ${monto} </span>
            <span class="column is-2 has-text-right">
                <a  href="#">Editar</a>
                <a class="boton-borrar" id=${id} href="#">Borrar</a>
            </span>   
        </div>`

    })
    document.getElementById('con-operaciones').innerHTML = str;
}
  
        

        