var nutricionForm = document.getElementById("nutricionForm");

function calcularTotal() {
    var total = 0;

    var consultas = nutricionForm.consultas.value;

    if (consultas === "primerConsulta") {
        total += 850;
    }
    else if (consultas === "seguimiento") {
        total += 700;
    }
    else if (consultas === "paqueteTres") {
        total += 2000;
    }
    else if (consultas === "paquetePareja") {
        total += 5000;
    }
    else {
        alert("Por favor seleccione un tipo de consulta.");
        return;
    }

    var analisis = nutricionForm.analisis.value;
    switch (analisis) {
        case "sinConsulta":
            total += 200;
            break;
        case "conConsulta":
            total += 1000;
            break;
    }

    // var costoExtras = 1000;
    // var extras = nutricionForm.extras;
    // var extrasMarcados = 0;
    // for (var i = 0; i < extras.length; i++) {
    //     if (extrasSeleccionados[i].checked) {
    //         extrasMarcados++;
    //     }
    // }
    // total += (extrasMarcados * costoExtras);

    // --- SECCIÓN EXTRAS (con .forEach) ---

var listaDeExtras = nutricionForm.querySelectorAll('input[name="extras"]');

listaDeExtras.forEach(function(checkbox) {
    
    if (checkbox.checked) {
        
        var precioItem = checkbox.dataset.precio;
        
        total += parseFloat(precioItem);
    }
});

    var tipoPago = nutricionForm.tipoPago.value;

    switch (tipoPago) {
        case "efectivo":
            total += 0;
            break;
        case "tarjetaCD":
            total += (total * 0.06);
            break;
        case "transferencia":
            total += (total * 0.03);
            break;
    
    }

    nutricionForm.totalPago.value = total;
    console.log("Total a pagar: $" + total);
}