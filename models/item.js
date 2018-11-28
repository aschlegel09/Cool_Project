module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    text: { type: DataTypes.STRING, allowNull: false, validate: { len: [1] } },
    description: { type: DataTypes.TEXT },
    duration: { type: DataTypes.STRING },
    complete: { type: DataTypes.BOOLEAN, defaultValue: false },
    category: { type: DataTypes.STRING, defaultValue: "Personal" },
    toDoListItem: {type: DataTypes.STRING, defaultValue: "Fly a kite"},
    toDoListItem0: {type: DataTypes.STRING, defaultValue: "Fly a kite"},
    toDoListItem1: {type: DataTypes.STRING, defaultValue: "Fly a kite"}

  });
  return Item;
};