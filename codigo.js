function sumar() {
  //Para los valores tipo input deberemos utilizar el .value
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  //Para que no te coja como cadena de texto debemos convertirlos a Number
  var suma = Number(num1) + Number(num2);
  document.getElementById("resultado").value = suma;
  //Con disable deshabilitas cualquier boton o input tipo texto
  document.getElementById("resultado").style.backgroundColor = "green";
  document.getElementById("resultado").style.color = "white";
}
