module.exports = function(sequelize, DataTypes) {
    var ToDoListItem = sequelize.define("ToDoListItem", {
        name: { type: DataTypes.STRING }
    });
    ToDoListItem.associate = function(models) {
        ToDoListItem.belongsTo(models.Item, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return ToDoListItem;
};