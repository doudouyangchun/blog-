const CategoryModel = require('../models/category');
/**
 * 用户控制器
 */
const User = {
    /**
     * 个人中心
     */
    personal: (req, res, next) => {
        CategoryModel.find().then(doc => {
            res.render('personal',{
                categoryList:doc
            });
        });

    }
}
module.exports = User;