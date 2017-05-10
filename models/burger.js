module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: DataTypes.STRING,
    eaten: DataTypes.BOOLEAN,
    time_created: DataTypes.DATE
  },
{
  timestamps: false
});
  console.log(`typeof ${Burger}`);
  return Burger;
};
