const User = require('../models/User');

const usersToInsert = [
  { userId: 1, name: 'Zein Tonconi',  email: 'daner@zein.com', password: 123456, phone: 70186881},
  { userId: 2, name: 'Marian Zamorano', email: 'zamoranomarianisabel@gmail.com', password: 123456, phone: 79576667},
  { userId: 3, name: 'Alexander Cruz', email: 'alexanderCruz@gmail.com', password: 123456, phone: 67027168},
  { userId: 4, name: 'Raton Perez', email: 'raton@perez.com', password: 123456, phone: 71212345},
  { userId: 5, name: 'Ariel Cejas', email: 'ariel@cejas.com', password: 123456, phone: 71212345},
];

const insertUsers = async () => {
    try {
      const newUsers = await Promise.all(usersToInsert.map(user => User.create(user)));
      console.log('Usuarios creados:', newUsers);
    } catch (error) {
      console.error('Error al crear usuarios:', error);
    }
  };
  
  module.exports=insertUsers;