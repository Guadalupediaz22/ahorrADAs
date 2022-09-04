//funcionalidad de los botones nav
const verBalance = document.getElementById("balance-nav");
const verCategorias = document.getElementById("categorias-nav");
const verReportes = document.getElementById("reportes-nav");
const verOperacion = document.getElementById("btn-nueva-operacion");
//btn de nueva operacion
const verAgregarOperacionBtn = document.getElementById("agregar-operacion-btn");
const verCancelarOperacionBtn = document.getElementById(
  "cancelar-operacion-btn"
);
//btn editar operacion
const verCancelarOperacion=document.getElementById('cancelar-operacion') 
//btn elimina-cancela operacion 
const btnEliminaOperacion= document.getElementById('btn-elimina') 
const btnCancelaOperacion= document.getElementById('btn-cancela') 
const verEditoOperacion = document.getElementById("editar-operacion"); //agrego editar operacion btn
//btn elimina-cancela operacion

//nav
const vistaBalance = document.getElementById("balance-box");
const vistaCategoria = document.getElementById("vista-categorias");
const vistaReportes = document.getElementById("vista-reportes");
const vistaOperacion = document.getElementById("vista-operacion");
//nueva operacion
const vistaEditarOperacion= document.getElementById('vista-editar-operacion')
const vistaCancelarOperacion= document.getElementById('vista-editar-operacion')
//editar operacion 
const vistaEditoOperacion=document.getElementById('vista-edito-operacion')
const vistaCancelOperacion= document.getElementById('vista-edito-operacion')
    
//elimina operacion 
const vistaEliminaOperacion = document.getElementById('elimina-operacion')
const selectTipo = document.getElementById('tipo-filtro');
const selectCat = document.getElementById('filtro-categoria');
const fechaFiltro = document.getElementById('fecha-filtro');
//elimina operacion

//inputs agrega operacion
const descripcionInput = document.getElementById("descripcion");
const montoInput = document.getElementById("monto");
const tipoOperacion = document.getElementById("tipo");
const categoriaSelect = document.getElementById("categoria");
const FechaImput = document.getElementById("fecha");

const categorias = [
  "Comida",
  "Servicios",
  "Salida",
  "Educacion",
  "Transporte",
  "Trabajo",
];

var operaciones = [];

//const operaciones2 = JSON.parse(localStorage.getItem('operaciones'));

const generarCategorias = () => {
  const selects = document.getElementsByClassName("categorias-select");
  for (let i = 0; i < selects.length; i++) {
    const select = selects[i];
    selects.innerHTML = "";
    if (select.classList.contains("filtro-categoria")) {
      select.innerHTML = `<option>Todas</option>`;
    }
    for (let j = 0; j < categorias.length; j++) {
      select.innerHTML += `<option value=${categoria[j]}>${categorias[j]}</option>`;
    }
  }
};

generarCategorias();

const mostraroperaciones = (arr) => {
  if (arr.length == 0) {
    /*si el arreglo esta vacio muestrame..*/
    document.getElementById("sin-operaciones").classList.remove("is-hidden");
    document.getElementById("con-operaciones").classList.add("is-hidden");
  } else {
    document.getElementById("sin-operaciones").classList.add("is-hidden");
    document.getElementById("con-operaciones").classList.remove("is-hidden");
  }
};

//mostraroperaciones(operaciones);


vistaCategoria.classList.add('is-hidden')
vistaReportes.classList.add('is-hidden')
vistaOperacion.classList.add('is-hidden')
vistaEditoOperacion.classList.add('is-hidden')
//vistaCancelarOperacion.classList.add('is-hidden')
vistaEliminaOperacion.classList.add('is-hidden')

verBalance.addEventListener("click", () => {
  vistaBalance.classList.remove("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.add("is-hidden");
  //vistaEditoOperacion.add('is-hidden')/*agrego*/
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy
});

verBalance.addEventListener('click', () =>{
    vistaBalance.classList.remove('is-hidden')
    vistaCategoria.classList.add('is-hidden')
    vistaReportes.classList.add('is-hidden')
    vistaOperacion.classList.add('is-hidden')
    //vistaEditoOperacion.add('is-hidden')
    vistaEliminaOperacion.classList.add('is-hidden')
})

verCategorias.addEventListener('click', () => {
    vistaBalance.classList.add('is-hidden')
    vistaCategoria.classList.remove('is-hidden')
    vistaReportes.classList.add('is-hidden')
    vistaOperacion.classList.add('is-hidden')
    //vistaEditoOperacion.add('is-hidden')
    vistaEliminaOperacion.classList.add('is-hidden')
});

verOperacion.addEventListener("click", () => {
  vistaBalance.classList.add("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.remove("is-hidden");
  //vistaEditoOperacion.add('is-hidden')/*agrego*/
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy
});

var editar = false;
var idEditar = "";

verCancelarOperacionBtn.addEventListener("click", () => {
  vistaBalance.classList.remove("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.add("is-hidden");
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy
});

verReportes.addEventListener ('click', () => {
    vistaBalance.classList.add('is-hidden')
    vistaCategoria.classList.add('is-hidden')
    vistaReportes.classList.remove('is-hidden')
    vistaOperacion.classList.add('is-hidden')
    //vistaEditoOperacion.add('is-hidden')
    vistaEliminaOperacion.classList.add('is-hidden')
    
});

verOperacion.addEventListener ('click', () => {
    vistaBalance.classList.add('is-hidden')
    vistaCategoria.classList.add('is-hidden')
    vistaReportes.classList.add('is-hidden')
    vistaOperacion.classList.remove('is-hidden')
    //vistaEditoOperacion.add('is-hidden')
    vistaEliminaOperacion.classList.add('is-hidden')
})

verAgregarOperacionBtn.addEventListener("click", () => {
  //console.log(descripcionInput.value.trim().length)

  if (descripcionInput.value.trim().length == 0) {
    alert("Ingrese una descripción válida.");
    return;
  }

  if (montoInput.value == 0) {
    alert("Debe ingresar el monto antes de continuar.");
    return;
  }

  if (!editar) {
    var wid = uuidv4();
    var wdescripcion = descripcionInput.value;
    var wmonto = montoInput.value;
    var wtipo = tipoOperacion.value;
    var wcategoria = categoriaSelect.value;
    var wfecha = FechaImput.value;

    //creo un objeto por cada operacion
    const operacion = {
      id: uuidv4(),
      descripcion: descripcionInput.value,
      monto: montoInput.value,
      tipo: tipoOperacion.value,
      categoria: categoriaSelect.value,
      fecha: FechaImput.value,
    };
    //agrego el obj (operacion)al arreglo de operaciones
    operaciones.push(operacion);
  } else {
    var ope = operaciones.filter((operacion) => operacion.id == idEditar);
    ope[0].descripcion = descripcionInput.value;
    ope[0].monto = montoInput.value;
    ope[0].tipo = tipoOperacion.value;
    ope[0].categoria = categoriaSelect.value;
    ope[0].fecha = FechaImput.value;
  }

  //escondo la vista formulario y muestro la vista de listas d las operaciones
  vistaOperacion.classList.add("is-hidden");
  vistaBalance.classList.remove("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.add("is-hidden");

  //limpio los Input para que me regrese al menu inicial
  descripcionInput.value = "";
  montoInput.value = 0;
  tipoOperacion.value = "Ganancia";
  categoriaSelect.value = "Servicios";
  FechaImput.value = null;

  /*
verCancelarOperacionBtn.addEventListener('click', () => {
    vistaBalance.classList.remove('is-hidden')
    vistaCategoria.classList.add('is-hidden')
    vistaReportes.classList.add('is-hidden')
    vistaOperacion.classList.add('is-hidden')
    vistaEliminaOperacion.classList.add('is-hidden')
})*/

  mostraroperaciones(operaciones);
  // guardo el arreglo en LS
  //localStorage.setItem(operaciones), JSON.stringyfy(operaciones),

  pintoOperaciones(operaciones);

  editar = false;
});
  
vistaCategoria.classList.add("is-hidden");
vistaReportes.classList.add("is-hidden");
vistaOperacion.classList.add("is-hidden");
vistaEditoOperacion.classList.add("is-hidden"); /*agrego*/
//vistaCancelarOperacion.classList.add('is-hidden')/*agrego*/
vistaEliminaOperacion.classList.add("is-hidden");

verBalance.addEventListener("click", () => {
  vistaBalance.classList.remove("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.add("is-hidden");
  //vistaEditoOperacion.add('is-hidden')/*agrego*/
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy
});

verCategorias.addEventListener("click", () => {
  vistaBalance.classList.add("is-hidden");
  vistaCategoria.classList.remove("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.add("is-hidden");
  //vistaEditoOperacion.add('is-hidden')/*agrego*/
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy
});

verReportes.addEventListener("click", () => {
  vistaBalance.classList.add("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.remove("is-hidden");
  vistaOperacion.classList.add("is-hidden");
  //vistaEditoOperacion.add('is-hidden')/*agrego*/
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy
});

verOperacion.addEventListener("click", () => {
  vistaBalance.classList.add("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.remove("is-hidden");
  //vistaEditoOperacion.add('is-hidden')/*agrego*/
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy
});

var editar = false;
var idEditar = "";

verCancelarOperacionBtn.addEventListener("click", () => {
  vistaBalance.classList.remove("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.add("is-hidden");
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy*/
});

verAgregarOperacionBtn.addEventListener("click", () => {
  //console.log(descripcionInput.value.trim().length)

  if (descripcionInput.value.trim().length == 0) {
    alert("Ingrese una descripción válida.");
    return;
  }

  if (montoInput.value == 0) {
    alert("Debe ingresar el monto antes de continuar.");
    return;
  }

  if (!editar) {
    var wid = uuidv4();
    var wdescripcion = descripcionInput.value;
    var wmonto = montoInput.value;
    var wtipo = tipoOperacion.value;
    var wcategoria = categoriaSelect.value;
    var wfecha = FechaImput.value;

    //creo un objeto por cada operacion
    const operacion = {
      id: uuidv4(),
      descripcion: descripcionInput.value,
      monto: montoInput.value,
      tipo: tipoOperacion.value,
      categoria: categoriaSelect.value,
      fecha: FechaImput.value,
    };
    //agrego el obj (operacion)al arreglo de operaciones
    operaciones.push(operacion);
  } else {
    var ope = operaciones.filter((operacion) => operacion.id == idEditar);
    ope[0].descripcion = descripcionInput.value;
    ope[0].monto = montoInput.value;
    ope[0].tipo = tipoOperacion.value;
    ope[0].categoria = categoriaSelect.value;
    ope[0].fecha = FechaImput.value;
  }

  //escondo la vista formulario y muestro la vista de listas d las operaciones
  vistaOperacion.classList.add("is-hidden");
  vistaBalance.classList.remove("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.add("is-hidden");

  //limpio los Input para que me regrese al menu inicial
  descripcionInput.value = "";
  montoInput.value = 0;
  tipoOperacion.value = "Ganancia";
  categoriaSelect.value = "Servicios";
  FechaImput.value = null;

  mostraroperaciones(operaciones);
  // guardo el arreglo en LS
  //localStorage.setItem(operaciones), JSON.stringyfy(operaciones),

  pintoOperaciones(operaciones);

  editar = false;
});

vistaCategoria.classList.add("is-hidden");
vistaReportes.classList.add("is-hidden");
vistaOperacion.classList.add("is-hidden");
vistaEditoOperacion.classList.add("is-hidden"); /*agrego*/
//vistaCancelarOperacion.classList.add('is-hidden')/*agrego*/
vistaEliminaOperacion.classList.add("is-hidden");

verBalance.addEventListener("click", () => {
  vistaBalance.classList.remove("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.add("is-hidden");
  //vistaEditoOperacion.add('is-hidden')/*agrego*/
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy
});

verCategorias.addEventListener("click", () => {
  vistaBalance.classList.add("is-hidden");
  vistaCategoria.classList.remove("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.add("is-hidden");
  //vistaEditoOperacion.add('is-hidden')/*agrego*/
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy
});

verReportes.addEventListener("click", () => {
  vistaBalance.classList.add("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.remove("is-hidden");
  vistaOperacion.classList.add("is-hidden");
  //vistaEditoOperacion.add('is-hidden')/*agrego*/
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy
});

verOperacion.addEventListener("click", () => {
  vistaBalance.classList.add("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.remove("is-hidden");
  //vistaEditoOperacion.add('is-hidden')/*agrego*/
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy
});

var editar = false;
var idEditar = "";

verCancelarOperacionBtn.addEventListener("click", () => {
  vistaBalance.classList.remove("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.add("is-hidden");
  vistaEliminaOperacion.classList.add("is-hidden"); //hoy*/
});

verAgregarOperacionBtn.addEventListener("click", () => {
  //console.log(descripcionInput.value.trim().length)

  if (descripcionInput.value.trim().length == 0) {
    alert("Ingrese una descripción válida.");
    return;
  }

  if (montoInput.value == 0) {
    alert("Debe ingresar el monto antes de continuar.");
    return;
  }

  if (!editar) {
    var wid = uuidv4();
    var wdescripcion = descripcionInput.value;
    var wmonto = montoInput.value;
    var wtipo = tipoOperacion.value;
    var wcategoria = categoriaSelect.value;
    var wfecha = FechaImput.value;

    //creo un objeto por cada operacion
    const operacion = {
      id: uuidv4(),
      descripcion: descripcionInput.value,
      monto: montoInput.value,
      tipo: tipoOperacion.value,
      categoria: categoriaSelect.value,
      fecha: FechaImput.value,
    };
    //agrego el obj (operacion)al arreglo de operaciones
    operaciones.push(operacion);
  } else {
    var ope = operaciones.filter((operacion) => operacion.id == idEditar);
    ope[0].descripcion = descripcionInput.value;
    ope[0].monto = montoInput.value;
    ope[0].tipo = tipoOperacion.value;
    ope[0].categoria = categoriaSelect.value;
    ope[0].fecha = FechaImput.value;
  }

  //escondo la vista formulario y muestro la vista de listas d las operaciones
  vistaOperacion.classList.add("is-hidden");
  vistaBalance.classList.remove("is-hidden");
  vistaCategoria.classList.add("is-hidden");
  vistaReportes.classList.add("is-hidden");
  vistaOperacion.classList.add("is-hidden");

  //limpio los Input para que me regrese al menu inicial
  descripcionInput.value = "";
  montoInput.value = 0;
  tipoOperacion.value = "Ganancia";
  categoriaSelect.value = "Servicios";
  FechaImput.value = null;

  mostraroperaciones(operaciones);
  // guardo el arreglo en LS
  //localStorage.setItem(operaciones), JSON.stringyfy(operaciones),

  pintoOperaciones(operaciones);

  editar = false;
});

const pintoOperaciones = (arr) => {
  //filtro tipo
  if(selectTipo.options[selectTipo.selectedIndex].text.toLowerCase() !="todos")
  arr=arr.filter(operacion => operacion.tipo.toLowerCase()==selectTipo.options[selectTipo.selectedIndex].text.toLowerCase());

//filtro categoria
if(selectCat.options[selectCat.selectedIndex].text.toLowerCase() !="todas")
  arr=arr.filter(operacion => operacion.categoria.toLowerCase()==selectCat.options[selectCat.selectedIndex].text.toLowerCase());

//filtro fecha
if(fechaFiltro.value!="")
{
  arr=arr.filter(operacion => operacion.fecha==fechaFiltro.value);
}    

//aca va el ordenar
//suerte!!!


document.getElementById('operaciones').innerHTML= '' 
let str= ''; 

  str =
    str +
    `
    <div class="columns has-text-weight-semibold is-hidden-movile">
        <div class="column has-text-weight-bold is-3">Descripción</div>
        <div class="column has-text-weight-bold is-3">Categoría</div>
        <div class="column has-text-weight-bold is-2 has-text-right">Fecha</div>
        <div class="column has-text-weight-bold is-2 has-text-right">Monto</div>
        <div class="column has-text-weight-bold is-2 has-text-right">Acciones</div>
     </div>

    `;

  //recorre el array por cada operacion
  arr.forEach((operacion) => {
    console.log(operacion);
    //hace destructuring para sacar las propiedades
    const { id, descripcion, categoria, fecha, monto, tipo } = operacion;

    let color = tipo == "ganancia" ? "green" : "red";

    str =
      str +
      `
        <div  class="mi-flex is-flex-direction-row"><div class="columns has-text-weight-semibold is-hidden-movile">
            <span class="column is-3">${descripcion}</span>
            <span class="column notification is-info is-light is-3 is-size-6"> ${categoria} </span>
            <span class="column is-2 has-text-right fecha">${fecha}</span>
            <span class="column is-2 has-text-right ${
              tipo == "Ganancia" ? "green" : "red"
            }"> ${monto} </span>
            <span class="column is-2 has-text-right">
            <a class="boton-editar" data-id="${id}" href="#">Editar</a>
            <a class="boton-borrar" data-id="${id}" href="#">Borrar</a>        
            </span>   
        </div>`;
  });
  document.getElementById("con-operaciones").innerHTML = str;

  var btnsBorrar = document.querySelectorAll(".boton-borrar");

  btnsBorrar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      var respuesta = confirm("¿Seguro desea borrar la operacion?");

      if (respuesta) {
        operaciones = operaciones.filter(
          (operacion) => operacion.id != e.target.dataset.id
        );
        pintoOperaciones(operaciones);
        mostraroperaciones(operaciones);
      } else {
        pintoOperaciones(operaciones);
        mostraroperaciones(operaciones);
      }
    });
  });

  var btnsEditar = document.querySelectorAll(".boton-editar");

  btnsEditar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      vistaBalance.classList.add("is-hidden");
      vistaCategoria.classList.add("is-hidden");
      vistaReportes.classList.add("is-hidden");
      vistaOperacion.classList.remove("is-hidden");

      var ope = operaciones.filter(
        (operacion) => operacion.id == e.target.dataset.id
      );

      idEditar = e.target.dataset.id;

      descripcionInput.value = ope[0].descripcion;
      montoInput.value = ope[0].monto;
      tipoOperacion.value = ope[0].tipo;
      categoriaSelect.value = ope[0].categoria;
      FechaImput.value = ope[0].fecha;

      editar = true;
    });
  });
};


/*
//filtros agrego hoy

//const selectTipo = document.getElementById('tipo-filtro')//esta arriba tambien

const filtroTodos = document.getElementById('tipo-todos')
const filtroGasto = document.getElementById('tipo-gastos')
const filtroGanancia = document.getElementById('tipo-ganancia')
*/

selectTipo.addEventListener('change', (e)=>{
   
    pintoOperaciones(operaciones);
    mostraroperaciones(operaciones);

})
selectCat.addEventListener('change', (e)=>{
   
    pintoOperaciones(operaciones);
    mostraroperaciones(operaciones);

})
  
fechaFiltro.addEventListener('change', (e)=>{
   
    pintoOperaciones(operaciones);
    mostraroperaciones(operaciones);

})


  var btnsBorrar = document.querySelectorAll(".boton-borrar");

  btnsBorrar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      var respuesta = confirm("¿Seguro desea borrar la operacion?");

      if (respuesta) {
        operaciones = operaciones.filter(
          (operacion) => operacion.id != e.target.dataset.id
        );
        pintoOperaciones(operaciones);
        mostraroperaciones(operaciones);
      } else {
        pintoOperaciones(operaciones);
        mostraroperaciones(operaciones);
      }
    });
  });

  var btnsEditar = document.querySelectorAll(".boton-editar");

  btnsEditar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      vistaBalance.classList.add("is-hidden");
      vistaCategoria.classList.add("is-hidden");
      vistaReportes.classList.add("is-hidden");
      vistaOperacion.classList.remove("is-hidden");

      var ope = operaciones.filter(
        (operacion) => operacion.id == e.target.dataset.id
      );

      idEditar = e.target.dataset.id;

      descripcionInput.value = ope[0].descripcion;
      montoInput.value = ope[0].monto;
      tipoOperacion.value = ope[0].tipo;
      categoriaSelect.value = ope[0].categoria;
      FechaImput.value = ope[0].fecha;

      editar = true;
    });
  });

//Balance
const mostrarBalance = document.getElementById("mostrar-balance");