//Define a function named buyClay. The function needs no parameters. 
//It should return an object with no properties on it yet.
const buyClay = () => {
    const clayObject = {}
    return clayObject
};

//Define a function named makePottery. 
//You need to pass it the empty object that buyClay produced,
//so it needs a single parameter to capture that value and use it.

//The function should perform the task of adding a new property named shape, 
//and its value should be "Bowl". 
//The function should then return the object after the new property was added.
//Reminder: When a function returns a value, you should store that value in a variable
const makePottery = (clayObject) => {
    clayObject.shape = "Bowl"
    return clayObject
};

//Define a function named bisqueFire. 
//You need to give it the object that makePottery produced, 
//so it needs a single parameter to capture that value and use it.

//The function should perform the task of adding a new property named readyForGlazing, 
//and its value should be true. 
//The function should then return the object after the new property was added.
const bisqueFire = (clayObject) => {
    clayObject.readyForGlazing = true
    return clayObject
};

//Define a function named glazePottery. 
//You need to give it the object that bisqueFire produced, so it needs a single parameter 
//to capture that value and use it.

//The function should check if the pottery has been bisque fired already and is ready for glazing. 
//If it has not, you should log the following message to the console.
//Make sure you bisque fire the pottery before you glaze it.

//If the pottery has been bisque fired, the function should perform the task of adding 
//a new property named glazing, and its value should be "Midnight Blue". 
//The function should then return the object after the new property was added.
const glazePottery = (clayObject) => {
    if(clayObject.readyForGlazing) {
        clayObject.glazing = "MidnightBlue"
    }
    else {
        (clayObject.readyForGlaze !== true) 
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
    return clayObject
};


//Define a function named finalFiring. 
//You need to give it the object that glazePottery produced, so it needs a parameter 
//to capture that value and use it.

//It also needs to capture the temperature of the kiln, so it needs two parameters.

//The function should perform the task of adding a new property named cracked, 
//and its value depend on the value of the temperature parameter. 
//If that value is higher than 1200, then the value of the cracked property must be true. 
//If the value is 1200, or less, the value should be false.

//The function should then return the object after the new property was added.

const finalFiring = (clayObject, temperature) => {
    if(temperature > 1200) {
        clayObject.cracked = true
    }
    else {
        (temperature <= 1200) 
            clayObject.cracked = false
    }   
    
    return clayObject
}; 

//To test the function, make sure you invoke it and pass two arguments. 
//First test if a high temperate cracks the pottery.


//Also test if the temperature is correct, check that the pottery is not cracked.

const potteryProject = buyClay();
const potteryProjectWithClay = makePottery(potteryProject);
const potteryProjectInBisque = bisqueFire(potteryProjectWithClay);
const potteryProjectWithGlaze = glazePottery(potteryProjectInBisque);
// const completedPotteryProject = finalFiring(potteryProjectWithGlaze); 

// console.log(completedPotteryProject);
// const firedPottery1400 = finalFiring(completedPotteryProject, 1400);
// console.log(firedPottery1400);

const firedPottery1200 = finalFiring(potteryProjectWithGlaze, 1500);
console.log(firedPottery1200);

