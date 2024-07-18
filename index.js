/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
 // velocity (km/h)
 // acceleration (m/s^2)
 // seconds (1 hour)
 // distance (km)
 // remaining massOfFuel (kg)
 // remainingMassOfFuel burn rate (kg/s)

const velocity = {
  value : 10000/3600, // converted from km/hr to km/s for calculations
  measurement: 'km/second'
}
const acceleration = {
  value : 3,
  measurement: 'm/second^2'
}
const time = {
  value : 3600,
  measurement: 'second'
}
const distance = {
  value : 2,
  measurement: 'km'
}
const remainingMassOfFuel = {
  value : 5000,
  measurement: 'kg'
}
const fuelBurnRate = {
  value : 0.5,
  measurement: 'kg/second'
}

const calcNewDistance = (props) => {
  const {distance, velocity, time} = props
  const {distanceValue, distanceMeasurement} = distance
  const {velocityValue, velocityMeasurement} = velocity
  const {timeValue, timeMeasurement} = time

  if (!distance) throw new Error("distance is required")
  if (!velocity) throw new Error("velocity is required")  
  if (!time) throw new Error("time is required")
  if (!distanceValue) throw new Error("distanceValue is required")
  if (!velocityValue) throw new Error("velocityValue is required")
  if (!timeValue) throw new Error("timeValue is required")      
  if (!distanceMeasurement) throw new Error("distanceMeasurement is required")
  if (!velocityMeasurement) throw new Error("velocityMeasurement is required")
  if (!timeMeasurement) throw new Error("timeMeasurement is required")
  
  if (distanceMeasurement !== 'km') {
    throw new Error ("'measurement' required is in 'km'")
  }
  if (velocityMeasurement !== 'km/second') {
    throw new Error ("'measurement' required is in 'km'")
  }
  if (timeMeasurement !== 'second') {
    throw new Error ("'measurement' required is in 'second'")
  }

return (distanceValue + (velocityValue*timeValue))
}
const calcRemainingMassOfFuel = (props) => {
  const {fuelBurnRate, time} = props
  const {fuelBurnRateValue, fuelBurnRateMeasurement} = fuelBurnRate
  const {timeValue, timeMeasurement} = time

  if (!fuelBurnRate) throw new Error("fuelBurnRate is required")
  if (!time) throw new Error("time is required")
  if (!fuelBurnRateValue) throw new Error("fuelBurnRateValue is required")
  if (!timeValue) throw new Error("timeValue is required")      
  if (!fuelBurnRateMeasurement) throw new Error("fuelBurnRateMeasurement is required")
  if (!timeMeasurement) throw new Error("timeMeasurement is required")
  
  if (fuelBurnRateMeasurement !== 'kg/second') {
    throw new Error ("'measurement' required is in 'kg/second'")
  }
  if (timeMeasurement !== 'second') {
    throw new Error ("'measurement' required is in 'second'")
  }

return (fuelBurnRateValue*timeValue)
}

const calcNewVelocity = (props) => {
  const {acceleration, velocity, time} = props
  const {accelerationValue, accelerationMeasurement} = acceleration
  const {velocityValue, velocityMeasurement} = velocity
  const {timeValue, timeMeasurement} = time

  if (!acceleration) throw new Error("distance is acceleration")
  if (!velocity) throw new Error("velocity is required")  
  if (!time) throw new Error("time is required")
  if (!accelerationValue) throw new Error("accelerationValue is required")
  if (!velocityValue) throw new Error("velocityValue is required")
  if (!timeValue) throw new Error("timeValue is required")      
  if (!accelerationMeasurement) throw new Error("accelerationMeasurement is required")
  if (!velocityMeasurement) throw new Error("velocityMeasurement is required")
  if (!timeMeasurement) throw new Error("timeMeasurement is required")
  
  if (accelerationMeasurement !== 'm/second^2') {
    throw new Error ("'measurement' required is in 'm/second^2'")
  }
  if (velocityMeasurement !== 'km/second') {
    throw new Error ("'measurement' required is in 'km'")
  }
  if (timeMeasurement !== 'second') {
    throw new Error ("'measurement' required is in 'second'")
  }

  return Math.floor(velocityValue + (accelerationValue*timeValue))
}

//const d2 = distance +  (velocity*time) //calcultes new distance
const NewDistance = calcNewDistance({
  distance: {
    distanceValue : distance.value,
    distanceMeasurement: distance.measurement
  },
  velocity: {
    velocityValue : velocity.value,
    velocityMeasurement: velocity.measurement
  },
  time: {
    timeValue : time.value,
    timeMeasurement: time.measurement
  }
  
})

//const rf = fuelBurnRate*time //calculates remaining remainingMassOfFuel nm
const massOfFuelRemaining = calcRemainingMassOfFuel({
  fuelBurnRate: {
    fuelBurnRateValue : fuelBurnRate.value,
    fuelBurnRateMeasurement: fuelBurnRate.measurement
  },
  time: {
    timeValue : time.value,
    timeMeasurement: time.measurement
  }
  
})


const vel2 = calcNewVel(acceleration, velocity, time) //calculates new velocity based on accelerationeleration
const newVelocity = calcNewVelocity({
  acceleration: {
    accelerationValue : acceleration.value,
    accelerationMeasurement: acceleration.measurement
  },
  velocity: {
    velocityValue : velocity.value,
    velocityMeasurement: velocity.measurement
  },
  time: {
    timeValue : time.value,
    timeMeasurement: time.measurement
  }
  
})

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(velocity, acceleration, time) { 
  return velocity + (acceleration*time)
}

console.log(`Corrected New Velocity: ${newVelocity} km/s`);
console.log(`Corrected New Distance: ${NewDistance} km`);
console.log(`Corrected Remaining Fuel: ${massOfFuelRemaining} kg`);






