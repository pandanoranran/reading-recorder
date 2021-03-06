'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Review = loader.database.define('reviews', {
  reviewId: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  reviewName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  publisher: {
    type: Sequelize.STRING,
    allowNull: false
  },
  memo: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  createdBy: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updatedYear: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  format: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false,
  indexes: [
    {
      fields: ['createdBy', 'updatedAt']
    }
  ]
});

module.exports = Review;