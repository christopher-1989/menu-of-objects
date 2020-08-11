const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
    get appetizers() {
      return this._courses.appetizers
      },
    set appetizers(newApp) {
      this._courses.appetizers = newApp
    },
    get mains() {
      return this._courses.mains
      },
    set mains(newMain) {
      this._courses.mains = newMain
    },
    get desserts() {
      return this._courses.desserts
      },
    set desserts(newDess) {
      this._courses.desserts = newMain
    },
  
  get courses() {
    return _courses
    },
  addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName]
      const randIndex = Math.floor(Math.random()*(dishes.length-1))
      return dishes[randIndex]
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers')
      const main = this.getRandomDishFromCourse('mains')
      const dessert = this.getRandomDishFromCourse('desserts')
      const totalPrice = appetizer.price+main.price+dessert.price
      return `The meal consists of ${appetizer.name} as the appetizer, ${main.name} as the main course and ${dessert.name} for dessert. The total bill for the meal comes to \$${totalPrice}.`
    }
}

menu.addDishToCourse('mains', 'Raclette', 40)
menu.addDishToCourse('mains', 'Spaghetti', 25)
menu.addDishToCourse('mains', 'Burgers', 18)

menu.addDishToCourse('appetizers', 'Wings', 12)
menu.addDishToCourse('appetizers', 'Fries', 5)
menu.addDishToCourse('appetizers', 'Cheeses', 20)

menu.addDishToCourse('desserts', 'Iced Cream', 10)
menu.addDishToCourse('desserts', 'Nothing', 0)
menu.addDishToCourse('desserts', 'Crackers and Wine', 35)

console.log(menu.generateRandomMeal())


