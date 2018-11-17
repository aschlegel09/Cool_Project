module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    text: { type: DataTypes.STRING, allowNull: false, validate: { len: [1] } },
    user: { type: DataTypes.STRING },
    complete: { type: DataTypes.BOOLEAN, defaultValue: false },
    category: { type: DataTypes.STRING, defaultValue: "Personal" }
  });
  return Item;
};