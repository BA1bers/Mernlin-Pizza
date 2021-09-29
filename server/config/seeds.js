const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Appetizers' },
    { name: 'Pizza' },
    { name: 'Salads' },
    { name: 'Rewards' },
    { name: 'Contact' },
    { name: 'AboutUs' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Buffalo Wings',
      description:
        'Classic Chicken wings smoothered in Buffalo Sauce, served with your choice Bleu cheese or Ranch dressing.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 5.99,
      quantity: 6
    },
    {
      name: 'Mozzarella Sticks',
      description:
        'Coated with crisp garlic butter breading, sprinkled with Parmesan cheese and served with marinara sauce.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 3.99,
      quantity: 6
    },
    {
      name: 'Cinnamon Twist',
      category: categories[0]._id,
      description:
        'Fresh buttery-tasting dough baked to golden brown, served drizzled with the perfect amount of cinnamon, sugar, and a side of icing.',
      image: 'toilet-paper.jpg',
      price: 6.99,
      quantity: 10
    },
    {
      name: 'Bread Sticks',
      category: categories[0]._id,
      description:
        'Fresh baked dough, topped with a special concoction of Parmesan cheese and garlic.',
      image: 'soap.jpg',
      price: 5.99,
      quantity: 10
    },
    {
      name: 'Fried Pickles',
      category: categories[0]._id,
      description:
        'Battered Pickle slices deep fried, served with your choice Bleu cheese or Ranch dressing.',
      image: 'wooden-spoons.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Vegan Garlic Buffalo Sprouts',
      category: categories[0]._id,
      description:
        'Baked Brussels sprouts tossed in a garlic buffalo sauce, served with vergan bleu cheese or vegan ranch dressing.',
      image: 'camera.jpg',
      price: 6.99,
      quantity: 6
    },
    {
      name: 'Pepperoni',
      category: categories[1]._id,
      description:
        'Deep dish 16" Pizza made with marinara sauce, garlic seasoning, parsley, cheese and pepperoni.',
      image: 'tablet.jpg',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Supreme',
      category: categories[1]._id,
      description:
        'Deep dish 16" Pizza made with marinara sauce, garlic seasoning, parsley, cheese, pepperoni, sausage, bell peppers, onions, and mushrooms.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Meat Lovers',
      category: categories[1]._id,
      description: 
      'Deep dish 16" Pizza made with marinara sauce, garlic seasoning, parsley, cheese, pepperoni, sausage, ham, and bacon.',
      image: 'spinning-top.jpg',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Hawaiian',
      category: categories[1]._id,
      description:
        'Deep dish 16" Pizza made with marinara sauce, garlic seasoning, parsley, cheese, ham, and pineapple.',
      image: 'plastic-horses.jpg',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Veggie',
      category: categories[1]._id,
      description:
        'Deep dish 16" Pizza made with marinara sauce, garlic seasoning, parsley, cheese, bell peppers, onions, and mushrooms.',
      image: 'teddy-bear.jpg',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Vegan Caprese',
      category: categories[1]._id,
      description:
        'Deep dish 16" Pizza made with minced garlic, cashew mozzarella, sliced tomatoes, tangy balsamic reduciton, and threads of basil.',
      image: 'alphabet-blocks.jpg',
      price: 10.99,
      quantity: 1
    },
    {
      name: 'Cesar',
      category: categories[2]._id,
      description:
        'Crisp Hearts of Romaine Tossed in Robust Caesar Dressing, topped with Herbed Croutons & Parmesan Cheese.',
      image: 'alphabet-blocks.jpg',
      price: 6.99,
      quantity: 1
    },
    {
      name: 'Garden',
      category: categories[2]._id,
      description:
        'Bed of mixed greens plus hand-sliced cucumbers, grape tomatoes, shredded cheddar and croutons.',
      image: 'alphabet-blocks.jpg',
      price: 6.99,
      quantity: 1
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
