let monto;
monto= prompt("INGRESE EL MONTO");
if (monto <=500){
document.write("EL MONTO A PAGAR INCLUYENDO DESCUENTOS ES:     ")
document.write(monto-(monto*5)/100);
}
else if (monto >500 and > 1000){
document.write("EL MONTO A PAGAR INCLUYENDO DESCUENTOS ES:     ");
document.write(monto-(monto*10)/100);
}
else if (monto > 1000){
document.write("EL MONTO A PAGAR INCLUYENDO DESCUENTOS ES:     ");
document.write(monto-(monto*20)/100);
}