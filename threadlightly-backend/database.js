import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('threadlightlydatabase', 'immanuella', 'ememobong', {
  host: 'localhost',
  dialect: 'postgres'
});



