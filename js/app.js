let isAnimal = prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda ");


switch (isAnimal) {

    case "1":

        console.log("Chose the Dog");

    break;

    case "2":
        
        console.log("Chose the Cat");

    break;

    case "3":
    
        console.log("Chose the Goldfish");

    break;
    
    case "4":

        console.log("Chose the Monkey");

    break;

    case "5":
    
        console.log("Chose the Panda");

    default:

        console.log("Animal not found");

    break;
}