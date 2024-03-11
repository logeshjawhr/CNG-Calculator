const tripDistance = document.getElementById("trip-distance");
const fuelEfficiency = document.querySelector('#fuel-efficiency');

const fuelCost = document.querySelector('#fuel-cost');

const btn = document.querySelector('#cal-btn');

btn.addEventListener("click", ()=>{

    const distance = tripDistance.value;
const efficiency = fuelEfficiency.value;
const cost = fuelCost.value;

const result = (distance / efficiency) * cost ;

console.log(result);

})

