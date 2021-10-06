const db = require('./connection');
const { User, Product, Category, About } = require('../models');
import buffaloWings from "../../client/public/images/buffaloWings.png"
import mozzarellaSticks from "../../client/public/images/mozzerellaSticks.png"
import cinnamonTwist from "../../client/public/images/cinnamonTwist.png"
import cheesyBreadSticks from "../../client/public/images/cheesyBreadSticks.PNG"
import friedPickles from "../../client/public/images/friedPickles.PNG"
import veganGarlicBuffaloSprouts from "../../client/public/images/veganGarlicBuffaloSprouts.PNG"
import cheesePizza from "../../client/public/images/cheesePizza.PNG"
import pepperoniPizza from "../../client/public/images/pepperoniPizza.PNG"
import supremePizza from "../../client/public/images/supremePizza.PNG"
import meatLovers from "../../client/public/images/meatLovers.PNG"
import hawaiianPizza from "../../client/public/images/hawaiianPizza.PNG"
import veggiePizza from "../../client/public/images/veggiePizza.PNG"
import veganCapresePizza from "../../client/public/images/veganCapresePizza.PNG"
import cesarSalad from "../../client/public/images/cesarSalad.PNG"
import gardenSalad from "../../client/public/images/gardenSalad.PNG"
import greekSalad from "../../client/public/images/greekSalad.PNG"

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Appetizers' },
    { name: 'Pizza' },
    { name: 'Salads' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Buffalo Wings',
      description:
        'Classic Chicken wings smoothered in Buffalo Sauce, served with your choice Bleu cheese or Ranch dressing.',
      image: {buffaloWings},
      category: categories[0]._id,
      price: 5.99,
      quantity: 6
    },
    {
      name: 'Mozzarella Sticks',
      description:
        'Coated with crisp garlic butter breading, sprinkled with Parmesan cheese and served with marinara sauce.',
      image: {mozzarellaSticks},
      category: categories[0]._id,
      price: 3.99,
      quantity: 6
    },
    {
      name: 'Cinnamon Twist',
      category: categories[0]._id,
      description:
        'Fresh buttery-tasting dough baked to golden brown, served drizzled with the perfect amount of cinnamon, sugar, and a side of icing.',
      image: {cinnamonTwist},
      price: 6.99,
      quantity: 10
    },
    {
      name: 'Cheesy Bread Sticks',
      category: categories[0]._id,
      description:
        'Fresh baked dough, topped with a special concoction of Parmesan cheese and garlic.',
      image: {cheesyBreadSticks},
      price: 5.99,
      quantity: 10
    },
    {
      name: 'Fried Pickles',
      category: categories[0]._id,
      description:
        'Battered Pickle slices deep fried, served with your choice Bleu cheese or Ranch dressing.',
      image: {friedPickles},
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Vegan Garlic Buffalo Sprouts',
      category: categories[0]._id,
      description:
        'Baked Brussels sprouts tossed in a garlic buffalo sauce, served with vergan bleu cheese or vegan ranch dressing.',
      image: {veganGarlicBuffaloSprouts},
      price: 6.99,
      quantity: 6
    },
    {
      name: 'Cheese',
      category: categories[1]._id,
      description:
        'Deep dish 16" Pizza made with marinara sauce, garlic seasoning, parsley, and cheese.',
      image: {cheesePizza},
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Pepperoni',
      category: categories[1]._id,
      description:
        'Deep dish 16" Pizza made with marinara sauce, garlic seasoning, parsley, cheese and pepperoni.',
      image: {pepperoniPizza},
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Supreme',
      category: categories[1]._id,
      description:
        'Deep dish 16" Pizza made with marinara sauce, garlic seasoning, parsley, cheese, pepperoni, sausage, bell peppers, onions, black olives, and mushrooms.',
      image: {supremePizza},
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Meat Lovers',
      category: categories[1]._id,
      description: 
      'Deep dish 16" Pizza made with marinara sauce, garlic seasoning, parsley, cheese, pepperoni, sausage, ham, and bacon.',
      image: {meatLovers},
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Hawaiian',
      category: categories[1]._id,
      description:
        'Deep dish 16" Pizza made with marinara sauce, garlic seasoning, parsley, cheese, ham, and pineapple.',
      image: {hawaiianPizza},
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Veggie',
      category: categories[1]._id,
      description:
        'Deep dish 16" Pizza made with marinara sauce, garlic seasoning, parsley, cheese, bell peppers, onions, black olives, and mushrooms.',
      image: {veggiePizza},
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Vegan Caprese',
      category: categories[1]._id,
      description:
        'Deep dish 16" Pizza made with minced garlic, cashew mozzarella, tomatoes, tangy onions, mushrooms, black olives, and bell peppers.',
      image: {veganCapresePizza},
      price: 10.99,
      quantity: 1
    },
    {
      name: 'Cesar',
      category: categories[2]._id,
      description:
        'Crisp Hearts of Romaine Tossed in Robust Caesar Dressing, topped with Herbed Croutons & Parmesan Cheese.',
      image: {cesarSalad},
      price: 6.99,
      quantity: 1
    },
    {
      name: 'Garden',
      category: categories[2]._id,
      description:
        'Bed of mixed greens plus hand-sliced cucumbers, grape tomatoes, shredded cheddar and croutons.',
      image: {gardenSalad},
      price: 6.99,
      quantity: 1
    },
    {
      name: 'Greek',
      category: categories[2]._id,
      description:
        'Juicy tomatoes, crisp cucumber, sliced red onion, green pepper, crumbly feta cheese and plump Kalamata olives.',
      image: {greekSalad},
      price: 6.99,
      quantity: 1
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'admin',
    lastName: 'admin',
    email: 'admin@testmail.com',
    password: 'pass1234'
  });

  console.log('users seeded');


  process.exit();
});
