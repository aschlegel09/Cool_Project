module.exports = function (sequelize, DataTypes) {
    var ToDoListItem = sequelize.define("ToDoListItem", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
            defaultValue: "Fly a kite"
        }
    });

    ToDoListItem.associate = function (models) {
        ToDoListItem.belongsTo(models.Author, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return ToDoListItem;
};