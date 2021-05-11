// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories to Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
})

// Products to Tags (using ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: 'product_tag',
  foreignKey: 'product_id'
})

// Tags to Products (using ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: 'product_tag',
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
