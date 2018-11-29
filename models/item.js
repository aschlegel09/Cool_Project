module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    text: { type: DataTypes.STRING, allowNull: false, validate: { len: [1] } },
    description: { type: DataTypes.TEXT },
    duration: { type: DataTypes.STRING },
    complete: { type: DataTypes.BOOLEAN, defaultValue: false },
    category: { type: DataTypes.STRING, defaultValue: "Personal" },
    toDoListItem: {type: DataTypes.STRING, defaultValue: "Fly a kite"},
    toDoListItem0: {type: DataTypes.STRING, defaultValue: "Fly a kite"},
    toDoListItem1: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem2: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem3: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem4: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem5: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem6: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem7: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem8: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem9: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem10: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem11: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem12: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem13: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem14: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem15: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem16: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem17: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem18: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem19: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    toDoListItem20: {type: DataTypes.STRING, allowNull: true, defaultValue: null}
  });
  Item.associate = function (models) {
    Item.hasMany(models.ToDoListItem);
};

  return Item;
};