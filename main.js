"use strict";

//character opjects to be called into the array
let quiGon = {
  name:"Qui-Gon Ginn",
  forceLevel:30
};

let maceWindu = {
  name:"Mace Windu",
  forceLevel:15
};

let yoda = {
  name:"Yoda",
  forceLevel:100
};

//bad dude oject
let sidious = {
  name:"Darth Sidious",
  darkForceLevel:50
};

let characterArray = [quiGon, maceWindu, yoda];

//logging out each of the characters with a loop on the array
for (var i = 0; i < characterArray.length; i++) {
  console.log(`${characterArray[i].name} has a level ${characterArray[i].forceLevel} FORCEEE!`);
}

console.log(`\nYou must defeat ${sidious.name} who has a level ${sidious.darkForceLevel} FORCEEE!`);


//choose your player based on the prompt and the info shown in the console
let chosenJedi = prompt("Which jedi do you want to use? Type the number:\n1: Qui-Gon Ginn\n2: Mace Windu\n3: Yoda");
let jedi = characterArray[chosenJedi-1];

if (chosenJedi >= 1 && chosenJedi <=3) {
  console.log(`\nYou have chosen to fight with ${jedi.name} who has a ${jedi.forceLevel} force.`)
} else {
  console.log(`bro, you can't do that. refresh and pick a jedi by number.`);
}

//fighting function
//Random # 1-5 as damage
function getDamage() {
  jedi.forceLevel -= Math.floor((Math.random() * 5) + 1);
  sidious.darkForceLevel -= Math.floor((Math.random() * 5) + 1);
}

//initaiate the fighting sequece, if no end  and dont run while loop
let fight = confirm(`Do you want to attack ${sidious.name} with ${jedi.name}?`)

if (fight === true) {
  while (jedi.forceLevel > 0 && sidious.darkForceLevel > 0){
    getDamage();

    if (jedi.forceLevel > 0 && sidious.darkForceLevel > 0) {
      console.log(`${jedi.name} has ${jedi.forceLevel} forces left`);
      console.log(`${sidious.name} has ${sidious.darkForceLevel} forces left`);
    } else if (jedi.forceLevel <= 0) {
      console.log(`${sidious.name} has defeated ${jedi.name} and is going to take over the galaxy and end all life as we know it`);
      break;
    } else if (sidious.darkForceLevel <= 0) {
      console.log(`${jedi.name} has defeated ${sidious.name} and has saved the galaxy`);
      break;
    } else {
      console.log(`WTF just happened?`)
      break;
    }

    let play = confirm("Press 'OK' to ATTACK! or press 'CANCEL' to run away")

    if (play === false) {
      console.log(`${jedi.name} has fled and has let ${sidious.name} run terror over the planet and the galaxy`)
      break;
    }
  }
} else if (fight === false) {
  console.log(`WTF dude, you just gave up the galaxy to ${sidious.name}.`)
}



// if (attack === true) {
//   startCombat();
// } else if (attack === false){
//   console.log(`The force isn't strong with this one.`);
// }
//
// function ChooseJedi(){
//   if (chosenJedi > 0 && chosenJedi < 4){
//     let attack = confirm(`Do you want to attack ${sidious}?`);
//     if (attack === true) {
//
//     }
//     function getDamage() {
//       forceLevel -= Math.floor((Math.random() * 5) + 1);
//     }
//   }
//   else {
//     alert("Error");
//   }
// }
//
// function getDamage() {
//   forceLevel -= Math.floor((Math.random() * 5) + 1);
// }
//
//
// ChooseJedi();
//
//




// theForce();
// function chooseJedi(){
//   let character = prompt("Use the force, use your feelings, which jedi will win? /n/Qui-Gon Ginn/n/Mace Windu/n/Yoda");
//   if (character > 0 && character < 4){
//     let jedi = characterArray[character-1];
//     return jedi;
//   }
// }
//
// function lightsaberDuel(){
//   Math.floor(Math.random()*20);
// }
