const Sequelize = require ('sequelize');

module.exports = function(sequelize){
    const Article = sequelize.define ('Article',{
        title:{
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        content:{
            type: Sequelize.TEXT,
            required : true,
            allowNull : false
        },
        date: {
            type: Sequelize.DATE,
            allowNul : false ,
            required : true ,
            defaultValue: Sequelize.NOW,

        },
    }, {
        timestamps: false
    });

    Article.associate = function (model){
        Article.belongsTo(model.User,{
            foreignKey:'authorId',
            targetKey: 'id'
        });
    };
        return Article ;
};