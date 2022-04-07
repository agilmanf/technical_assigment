// Soal 1 //////////////////////////////////////////////////////
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
        "coffee",
        "jamu temulawak",
        "tea"
    ],
    greeting: function() {
        console.log("hello world")
    }
}

/// EDIT HERE
person.name = "Gilman Firdaus";
person.age = 24;
person.favDrinks[1] = "tap water";
person.greeting = (name) => `Hello, ${name}`;

console.log("// Soal 1 /////////////////////////");

/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));


// Soal 2 //////////////////////////////////////////////////////

function getObjectValue(obj, path) {
    path = path.split(".");

    for (let i = 0; i < path.length; i++) {
        if (obj.hasOwnProperty([path[i]])) obj = obj[path[i]];
        else return null;
    }

    return obj;

    // if (obj.hasOwnProperty(path[0])) {
    //     if (obj[path[0]].hasOwnProperty(path[1])) {
    //         if (obj[path[0]][path[1]].hasOwnProperty(path[2])) {
    //             return obj[path[0]][path[1]][path[2]]
    //         } else return null;
    //     } else return null;
    // } else return null;
}

console.log("\n// Soal 2 /////////////////////////")

const milkBasedCoffee = {
    name: "latte",
    ingredients: {
        espresso: {
            origin: "lampung",
            roastProfile: "medium to dark",
            ratio: 1
        },
        milk: {
            brand: "susu murni",
            isVegan: false,
            ratio: 5
        }
    },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

// Soal 3 //////////////////////////////////////////////////////
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [{
        btc: { buy: 10, sell: 9 },
        eth: { buy: 8, sell: 7.5 },
        doge: { buy: 7, sell: 6.5 },
        day: 1,
    },
    {
        btc: { buy: 9, sell: 5 },
        eth: { buy: 7, sell: 4 },
        doge: { buy: 6, sell: 3 },
        day: 2,
    },
    {
        btc: { buy: 5, sell: 10 },
        eth: { buy: 4, sell: 6 },
        doge: { buy: 3, sell: 4 },
        day: 3,
    },
];

const calculateIncome = (items) => {
    /// EDIT DOWN HERE
    items.map(item => {
        item.btc = item.btc.sell - item.btc.buy;
        item.eth = item.eth.sell - item.eth.buy;
        item.doge = item.doge.sell - item.doge.buy;
        delete item.day;
    });

    let result = items.reduce((count, number) => {
        count.btc += number.btc;
        count.doge += number.doge;
        count.eth += number.eth;
        return count;
    }, { btc: 0, doge: 0, eth: 0, });

    return result;
}

console.log("\n// Soal 3 /////////////////////////")
console.log(calculateIncome(items))