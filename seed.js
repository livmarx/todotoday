const { db, User, Event } = require('./backend/db');
db.sync({ force: true }).then(() => {
  console.log('Database synced!!!');
  return User.bulkCreate([
    {
      name: 'Claire',
      email: 'claire@gmail.com',
      password: '1234',
      isAdmin: false,
      invitedTo: [1, 4, 5, 6, 7],
      attending: [1, 5, 7],
      pastEvents: [2],
    },
    {
      name: 'Sarai',
      email: 'sarai@gmail.com',
      password: '567',
      isAdmin: false,
      invitedTo: [5, 6, 7, 8],
      attending: [5, 7, 8],
      pastEvents: [1, 2, 10, 11],
    },
    {
      name: 'Mary',
      email: 'mary@gmail.com',
      password: '567',
      isAdmin: false,
      invitedTo: [7, 8],
      attending: [8],
      pastEvents: [11, 12, 13],
    },
    {
      name: 'Steve',
      email: 'steve@gmail.com',
      password: '567',
      isAdmin: false,
      invitedTo: [5, 6],
      attending: [3, 5],
      pastEvents: [13, 14],
    },
    {
      name: 'Maggie',
      email: 'mags@gmail.com',
      password: '1010',
      isAdmin: true,
      invitedTo: [5, 6],
      attending: [3, 5],
      pastEvents: [13, 14],
    },
    {
      name: 'Uma',
      email: 'ums@gmail.com',
      password: '2020',
      isAdmin: true,
      invitedTo: [5, 6],
      attending: [3, 5],
      pastEvents: [13, 14],
    },
    {
      name: 'Maria',
      email: 'mars@gmail.com',
      password: '3030',
      isAdmin: true,
      invitedTo: [5, 6],
      attending: [3, 5],
      pastEvents: [13, 14],
    },
  ])
    .then(
      Event.bulkCreate([
        {
          name: 'Drake',
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
