const express = require('express');
const route = express.Router();
const article = require('../controllers/article');

/**
 * 文章列表
 */
route.get('/',article.index);

/**
 * 文章详情
 */
route.get('/:id', article.get);

/**
 * 文章保存u
 */
route.post('/save', article.save);

/**
 * 更新文章
 */
route.post('/update/:id',article.update)

/**
 * 删除文章
 */
route.post('/delete/:id',article.delete)

module.exports = route;

