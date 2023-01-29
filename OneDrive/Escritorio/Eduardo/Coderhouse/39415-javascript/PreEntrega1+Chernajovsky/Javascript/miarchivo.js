function Calculate() {

	let monto = document.querySelector("#monto").value;

    if (monto < 10000) {

        alert("El cliente debe solicitar un mínimo de $10000")

    }

	let tasa = document.querySelector("#tasa").value;

	let cuotas = document.querySelector("#cuotas").value;

	let interest = (monto * (tasa * 0.01)) / cuotas;

	let total = ((monto / cuotas) + interest).toFixed(2);

	document.querySelector("#total")
		.innerHTML = "Monto de cada cuota (en pesos) = " + total;


        while (total < 100000) {

            alert(" ✔ El cliente es solvente para afrontar este préstamo ✔ \nA continuación se mostrará el monto de cada cuota mensual que el cliente se compromete a abonar.")
            break

        }

}


