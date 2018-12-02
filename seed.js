const { db, User, Toilet, Comment } = require('./backend/db');
db.sync({ force: true }).then(() => {
  console.log('Database synced!!!');
  return User.bulkCreate([
    {
      name: 'Claire',
      email: 'claire@gmail.com',
      password: '1234',
      isAdmin: false,
    },
    {
      name: 'Sarai',
      email: 'sarai@gmail.com',
      password: '567',
      isAdmin: false,
    },
    {
      name: 'Mary',
      email: 'mary@gmail.com',
      password: '567',
      isAdmin: false,
    },

    {
      name: 'Steve',
      email: 'steve@gmail.com',
      password: '567',
      isAdmin: false,
    },
    {
      name: 'Maggie',
      email: 'mags@gmail.com',
      password: '1010',
      isAdmin: true,
    },
    {
      name: 'Uma',
      email: 'ums@gmail.com',
      password: '2020',
      isAdmin: true,
    },
    {
      name: 'Maria',
      email: 'mars@gmail.com',
      password: '3030',
      isAdmin: true,
    },
  ])
    .then(
      Toilet.bulkCreate([
        {
          address: '171 School Street, Roxbury, MA 02119',
          toiletType: 'In-Home',
          priceRange: '$$',
          rating: '4',
        },
        {
          address: '38 Bracebridge Road, Newton, MA 02119',
          toiletType: 'In-Home',
          priceRange: '$$$',
          rating: '3',
        },
        {
          address: '5 Hanover Square, New York, NY 10002',
          toiletType: 'In-Store',
          priceRange: '$$',
          rating: '3',
        },
      ])
    )
    .then(
      Comment.bulkCreate([
        {
          content: 'Super nice house, a little out of the way. Small bathroom',
          userId: 2,
        },
        {
          content: 'Chaotic, whimsical house. Clean bathroom. Near to T',
          userId: 4,
        },
        {
          content: 'On 25th floor. Takes a while to get up there.',
          userId: 6,
        },
      ])
    )
    .finally(() => {
      db.close();
    })
    .catch(err => {
      console.log(`Oh no! We have an error: ${err}!!!`);
    });
});

// {
//   content: 'Super nice house, a little out of the way. Small bathroom'
// },
// {
//   content: 'Chaotic, whimsical house. Clean bathroom. Near to T'
// },
// {
//   content: 'On 25th floor. Takes a while to get up there.'
// },
