// import { Item } from "../Interfaces/ItemInterface";

// export const data: Item[] = [
//     { id: 1, name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.3 },
//     { id: 2, name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 30, protein: 3.76 },
//     { id: 3, name: 'Eclair', calories: 262, fat: 16.0, carbs: 37, protein: 5.32 },
//     { id: 4, name: 'Cupcake', calories: 305, fat: 3.75, carbs: 22, protein: 7.23 },
//     { id: 5, name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 28, protein: 2.3 },
//     { id: 6, name: 'Chocolate chip cookie', calories: 53, fat: 2.5, carbs: 7, protein: 0.75 },
//     { id: 7, name: 'Brownie', calories: 215, fat: 12.0, carbs: 26, protein: 2.5 },
//     { id: 8, name: 'Cheesecake', calories: 321, fat: 19.0, carbs: 35, protein: 6.8 },
//     { id: 9, name: 'Pumpkin pie', calories: 323, fat: 14.0, carbs: 42, protein: 4.2 },
//     { id: 10, name: 'Muffin', calories: 189, fat: 8.5, carbs: 25, protein: 3.1 },
//     { id: 11, name: 'Caramel popcorn', calories: 152, fat: 6.8, carbs: 23, protein: 1.2 },
//     { id: 12, name: 'Banana split', calories: 420, fat: 20.5, carbs: 55, protein: 6.7 },
//     { id: 13, name: 'Cherry pie', calories: 277, fat: 13.0, carbs: 34, protein: 3.8 },
//     { id: 14, name: 'Vanilla pudding', calories: 144, fat: 5.5, carbs: 22, protein: 2.1 },
//     { id: 15, name: 'Strawberry shortcake', calories: 198, fat: 9.2, carbs: 28, protein: 2.9 },
//     { id: 16, name: 'Lemon sorbet', calories: 120, fat: 0.5, carbs: 30, protein: 0.7 },
//     { id: 17, name: 'Pecan pie', calories: 456, fat: 21.0, carbs: 59, protein: 5.3 },
//     { id: 18, name: 'Raspberry tart', calories: 185, fat: 8.5, carbs: 25, protein: 2.6 },
//     { id: 19, name: 'Coconut macaroon', calories: 90, fat: 5.0, carbs: 10, protein: 1.0 },
//     { id: 20, name: 'Peanut butter cup', calories: 215, fat: 12.0, carbs: 18, protein: 4.5 },
//     { id: 21, name: 'Red velvet cake', calories: 280, fat: 15.5, carbs: 34, protein: 3.7 },
//     { id: 22, name: 'Blueberry muffin', calories: 170, fat: 7.5, carbs: 23, protein: 2.8 },
//     { id: 23, name: 'Tiramisu', calories: 340, fat: 18.0, carbs: 40, protein: 4.9 },
//     { id: 24, name: 'Chocolate mousse', calories: 210, fat: 12.5, carbs: 25, protein: 3.5 },
//     { id: 25, name: 'Cotton candy', calories: 150, fat: 0.5, carbs: 38, protein: 0.5 },
//     { id: 26, name: 'Cranberry scone', calories: 180, fat: 7.5, carbs: 28, protein: 2.0 },
//     { id: 27, name: 'Peach cobbler', calories: 260, fat: 11.0, carbs: 36, protein: 3.4 },
//     { id: 28, name: 'Apple turnover', calories: 225, fat: 10.0, carbs: 30, protein: 2.8 },
//     { id: 29, name: 'Key lime pie', calories: 305, fat: 15.0, carbs: 35, protein: 4.0 },
//     { id: 30, name: 'Pistachio ice cream', calories: 195, fat: 12.0, carbs: 20, protein: 3.2 },
//     { id: 31, name: 'Oreo cheesecake', calories: 380, fat: 20.5, carbs: 42, protein: 5.8 },
//     { id: 32, name: 'Almond biscotti', calories: 120, fat: 6.0, carbs: 15, protein: 2.0 },
//     { id: 33, name: 'Rocky road ice cream', calories: 280, fat: 15.5, carbs: 32, protein: 3.7 },
//     { id: 34, name: 'Maple walnut fudge', calories: 220, fat: 12.5, carbs: 28, protein: 2.5 },
//     { id: 35, name: 'Praline pecan ice cream', calories: 290, fat: 16.0, carbs: 34, protein: 3.8 },
//     { id: 36, name: 'Butter pecan pie', calories: 350, fat: 18.5, carbs: 40, protein: 4.5 },
//     { id: 37, name: 'Cinnamon roll', calories: 210, fat: 8.5, carbs: 30, protein: 2.0 },
//     { id: 38, name: 'Rum raisin ice cream', calories: 240, fat: 14.0, carbs: 28, protein: 3.2 },
//     { id: 39, name: 'S mores', calories: 180, fat: 8.0, carbs: 24, protein: 2.5 },
//     { id: 40, name: 'Fruit tart', calories: 160, fat: 7.5, carbs: 22, protein: 1.8 },
//     { id: 41, name: 'Mango sorbet', calories: 120, fat: 0.5, carbs: 28, protein: 0.8 },
//     { id: 42, name: 'Pineapple upside-down cake', calories: 300, fat: 14.5, carbs: 38, protein: 3.5 },
//     { id: 43, name: 'Choco-cherry trifle', calories: 260, fat: 12.5, carbs: 34, protein: 3.0 },
//     { id: 44, name: 'Matcha green tea ice cream', calories: 180, fat: 9.0, carbs: 22, protein: 4.5 },
//     { id: 45, name: 'Blackberry cobbler', calories: 280, fat: 13.5, carbs: 36, protein: 3.2 },
//     { id: 46, name: 'Pumpkin spice latte ice cream', calories: 220, fat: 11.0, carbs: 28, protein: 2.8 },
//     { id: 47, name: 'Toffee almond crunch', calories: 190, fat: 10.5, carbs: 24, protein: 2.4 },
//     { id: 48, name: 'Raspberry ripple cheesecake', calories: 320, fat: 17.0, carbs: 38, protein: 4.2 },
//     { id: 49, name: 'Caramel apple pie', calories: 290, fat: 14.5, carbs: 35, protein: 3.6 },
//     { id: 50, name: 'Honey lavender gelato', calories: 170, fat: 8.0, carbs: 22, protein: 2.0 }

// ];

// export const headers = ['Dessert', 'Calories', 'Fat (g)', 'Carbs', 'Protein'];

//...................................................................................................

export const data = [
    { id: 1, animalName: "Lion", food: "Meat" },
    { id: 2, animalName: "Elephant", food: "Vegetation" },
    { id: 3, animalName: "Giraffe", food: "Leaves" },
    { id: 4, animalName: "Penguin", food: "Fish" },
    { id: 5, animalName: "Kangaroo", food: "Grass" },
    { id: 6, animalName: "Dolphin", food: "Fish" },
    { id: 7, animalName: "Tiger", food: "Meat" },
    { id: 8, animalName: "Monkey", food: "Fruits" },
    { id: 9, animalName: "Panda", food: "Bamboo" },
    { id: 10, animalName: "Koala", food: "Eucalyptus leaves" }
];

export const headers = ["ID", "Animal Name", "Foods"];