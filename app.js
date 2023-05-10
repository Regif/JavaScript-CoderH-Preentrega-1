const SI = "si";
const NO = "no";
let hadWater;
let waterTaken;
let waterLeft;
let weight;
let waterTarget;
let trackWater;

let totalWaterTaken = 0;

do {
  trackWater = prompt("Quiere saber cuanta agua debe tomar diariamente? si/no");

  if (trackWater.toLowerCase() != SI && trackWater.toLowerCase() != NO) {
    alert("Debe ingresar si o no");
  }
} while (trackWater.toLowerCase() != SI && trackWater.toLowerCase() != NO);

if (trackWater.toLowerCase() == SI) {
  do {
    weight = prompt("ingrese su peso");

    if (isNaN(weight) || weight <= 0) {
      alert("Debe ingresar un numero mayor a 0");
    }
  } while (isNaN(weight) || weight <= 0);

  waterTarget = weight * 35;
  alert("Debe tomar " + waterTarget + " ml de agua diariamente");

  hadWater = prompt("Ya tomo agua? si/no");
  if (hadWater.toLowerCase() == SI) {
    do {
      waterTaken = prompt("Cuantos ml de agua tomo?");
      totalWaterTaken += parseInt(waterTaken);
      waterLeft = waterTarget - totalWaterTaken;
      alert(
        "Le faltan " +
          waterLeft +
          " ml de agua para cumplir con la cantidad diaria"
      );
    } while (totalWaterTaken < waterTarget);

    alert("Objetivo cumplido");
  } else {
    alert("Recuerde tomar agua");
  }
} else {
  alert("Gracias por su visita");
}
