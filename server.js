console.info('Howdy Partner')
console.log('=-=-=-=-=-=-=-=-=-=-=')

class FoodItem {
    constructor(name, calories, vegan, glutenFree) {
        this.name = name;
        this.calories = calories;
        this.vegan = vegan;
        this.glutenFree = glutenFree;
    }

    displayFoodItem() {
        var resultStr = `${this.name} has ${this.calories} calories`;

        if (this.vegan === true) {
            resultStr += ' and is vegan';
        } else {
            resultStr += ' and is not vegan';
        }

        if (this.glutenFree === true) {
            resultStr += ' and is gluten free!';
        } else {
            resultStr += ' and unfortunately it is not gluten free.'
        }
        return (resultStr);
    }
}

var milkShake = new FoodItem('Chocolate Shake', 400, false, false);
var sliceCheese = new FoodItem('Slice Cheese', 230, false, false);
var shreddedCheese = new FoodItem('Shredded Cheese', 210, false, true);
var lettuce = new FoodItem('Lettuce', 100, true, true);
var tomato = new FoodItem('Tomato', 30, true, true);
var onion = new FoodItem('Onion', 20, true, true);

var hamburger = new FoodItem('Hamburger', 350, false, false);
var bacon = new FoodItem('Bacon', 175, false, true);
var tofu = new FoodItem('Tofu', 25, false, true);
var theBun = new FoodItem('The Bun', 244, true, false);
var aWrap = new FoodItem('A Wrap', 75, true, true);
var condiments = new FoodItem('Various things', 345, false, false);

var rice = new FoodItem('Risotto', 200, true, true)
var frenchFries = new FoodItem('French Fries', 400, true, false);


var saladIngredients = [shreddedCheese, lettuce, tomato, onion];
var vSaladIngredients = [lettuce, tomato, onion]; // vegan = true
var burgerIngredients = [sliceCheese, hamburger, bacon, lettuce, onion, tomato, condiments];
var wrapIngredients = [aWrap, tofu, lettuce, tomato, onion, rice]; // glutenFree = true


//console.log(milkshake);
//console.info(frenchFries.displayFoodItem());

class Plate {
    constructor(name, description, price, ingredients) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.ingredients = ingredients;
    }

    displayPlate() {
        return (`A ${this.name} contains ${this.description} and for a low low price of ${this.price} you can get the following ingredients ${this.getFoodDisplay()} =-=-=-= 

`)
    }

    isVegan() {
        if (this.ingredients.every(function (element) {
                element.vegan === true;
            })) {
            return true;
        } else {
            return false
        }
    }

    isGlutenFree() {
        if (this.ingredients.every(function (element) {
                element.glutenFree === true;
            })) {
            return true;
        } else {
            return false
        }
    }

    getFoodDisplay() {
        var resultArr = [];
        this.ingredients.forEach((element) => {
            resultArr.push(element.displayFoodItem());
        })
        return (resultArr.join(','));
    }
}

var saladPlate = new Plate('Salad Plate', 'A plate of salad', 7.50, saladIngredients);
var veganSaladPlate = new Plate('Vegan Salad Plate', 'A salad with salady stuff', 8.50, vSaladIngredients);
var burgerPlate = new Plate('Burger', 'A hamburger - from Hambuger', 9.99, burgerIngredients);
var wrapPlate = new Plate('Wrap It Up', 'A wrap like no other', 10.50, wrapIngredients)

//console.log(saladPlate);
//console.log(saladPlate.getFoodDisplay());
//console.log(saladPlate.displayPlate());
//console.info(saladPlate.isVegan())

class Menu {
    constructor(name, plates) {
        this.name = name;
        this.plates = plates;
    }

    displayMenu() {
        return (`Today's menu is from ${this.name}.  It includes these plates:
${this.getPlateList()} 
`)
    }

    getPlateList() {
        var resultArr = [];
        this.plates.forEach((element) => {
            resultArr.push(element.displayPlate());
        })

        return (resultArr.join(' '));
    }
}

var theMenu = new Menu(`Alice & Bob`, [saladPlate, veganSaladPlate, burgerPlate, wrapPlate]);
//console.log(JSON.stringify(theMenu))
//console.log(theMenu.displayMenu())

class Restaurant {
    constructor(name, description, menu) {
        this.name = name;
        this.description = description;
        this.menu = menu;
    }

    showRestaurant() {
        return (`Welcome to ${this.name}! Our motto is ${this.description}.  We are glad you decided to visit us for some grub. Here is the menu ${this.menu.displayMenu()}  Hopefully something sounds good!

`)
    }
}

var alicePlace = new Restaurant(`Alice's Place`, `Not Fine Dining but Darn Good Food! 
`, theMenu)

console.info(alicePlace.showRestaurant());
