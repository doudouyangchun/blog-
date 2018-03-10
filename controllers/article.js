const ArticleModel = require('../models/article');
const moment = require('moment');
const Article = {
    /**
     * 获取列表
     * @param req
     * @param res
     * @param next
     */
    index: (req, res, next) => {
        let key = req.query.key;
        let page = req.query.page ? req.query.page : 1;
        let jing = req.query.jing;
        let limit = 3;
        let count = 0;
        let totalPage = 0;
        let where = {};
        if (key) {
            where.title = {$regex: key};
        }
        if (jing) {
            where.is_jing = 1
        }

        //获总条数
        ArticleModel.find(where).count().then(doc => {
            count = doc;
            //计算分页
            totalPage = Math.ceil(count / limit)
            //内容查询
            ArticleModel.find(where).skip((page - 1) * limit).limit(limit).sort({create_at: 'desc'}).then(doc => {
                let list = doc;
                let newList = [];
                for (let i = 0; i < list.length; i++) {
                    let article = list[i];
                    article = article.toJSON();
                    article.f_create_at = moment(article.create_at).format("YYYY-MM-DD")
                    newList.push(article);
                }
                res.json({
                    status: 1,
                    result: newList,
                    page:page,
                    count:count,
                    totalPage:totalPage,
                    limit:limit
                });
            }).catch(err => {
                res.json({
                    status: 0,
                    msg: '获取失败！'
                });
            })
        })


    },
    /**
     * 获取详情
     * @param req
     * @param res
     * @param next
     */
    get: (req, res, next) => {

    },
    /**
     * 文章保存
     * @param req
     * @param res
     * @param next
     */
    save: (req, res, next) => {

    },
    /**
     * 更新文章
     */
    update: (req, res, next) => {

    },
    /**
     * 删除文章
     * @param req
     * @param res
     * @param next
     */
    delete: (req, res, next) => {

    }
}
module.exports = Article;