try {
  // PONER TODO EL CODIGO DE JS
  //Balance
  const mostrarBalance = document.getElementById("mostrar-balance");
  const balance = () => {
    let balanceDatos = LocalStorage();
    let balanceArray = balanceDatos.operaciones;

    const filtroGastos = balanceArray.filter((elemento) => {
      return elemento.tipo === "gastos";
    });

    const sumaGastos = filtroGastos.reduce((acc, elemento, i) => {
      return acc + elemento.monto;
    }, 0);

    const filtroGanancias = balanceArray.filter((elemento) => {
      return elemento.tipo === "ganancias";
    });

    const sumaGanancias = filtroGanancias.reduce((acc, elemento, i) => {
      return acc + elemento.monto;
    }, 0);

    const totalBalance = () => {
      return sumaGastos - sumaGanancias;
    };
    totalBalance();

    mostrarBalance.innerHTML = `
  <h2 class="is-title is-size-3 mb-6 has-text-weight-bold" id="mostrarBalance">Balance</h2>
                        <div class="columns is-mobile is-vcentered">
                            <div class="column is-size-5">Ganancias</div>
                            <div class="column has-text-right has-text-success" id="ganancias">+$${sumaGanancias}</div>
                        </div>

                        <div class="columns is-mobile is-vcentered">
                            <div class="column is-size-5">Gastos</div>
                            <div class="column has-text-right has-text-danger-dark" id="gastos">-$${sumaGastos}</div>
                        </div>

                        <div class="columns is-mobile is-vcentered">
                            <div class="column is-size-5">Total</div>
                            <div class="column has-text-right has-text-dark" id="total">$${totalBalance()}</div>
                        </div>`;
  };
  balance();
} catch (err) {
  console.log(err.message);
}
