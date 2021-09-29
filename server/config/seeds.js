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
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
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
