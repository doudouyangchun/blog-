$(function () {
    getArticleList();
});

var page = 1;
var key = ''

/**
 * 获取列表
 */
function getArticleList() {
    $.get('/article', {page: page, key: key}, function (data) {
        if (data.status == 1) {
            //列表
            var html = "";
            var articleList = data.result;
            for (var i = 0; i < articleList.length; i++) {
                html += '<li class="col-md-4">';
                html += '<div class="excerpt-minic">';
                html += '<div class="manage-list-box1">';
                html += '<img src="/uploads/' + articleList[i].img + '" class="img-responsive">';
                html += '<h3><a href="#">' + articleList[i].title + '</a></h3>';
                html += '<p>' + articleList[i].content + '</p>';
                html += '</div>';
                html += '<div class="cat">';
                html += '<span><a href="#">' + articleList[i].f_create_at + '</a></span>';
                html += '<span class="fr">';
                html += '<i class="glyphicon glyphicon-pencil"></i>';
                html += '<a onclick="pubboxshow()">编辑</a>';
                html += '</span>';
                html += '<span class="fr">';
                html += '<i class="glyphicon glyphicon-trash"></i>';
                html += '<a href="#">删除</a>';
                html += '</span>';
                html += '</div>';
                html += '</div>';
                html += '</li>';
            }
            //jquery
            $("#articleList").html(html);

            //总页数
            var totalPage = data.totalPage;
            //总条数
            var count = data.count;
            //当前页码
            page = data.page;
            //每页显示条数
            var limit = data.limit;

            var pageHtml = "";

            $("#pageList").html('');
            if (totalPage > 1) {

                //分页
                if (page > 1) {
                    pageHtml += '<li><a href="javasctipt:;" onclick="setPage(' + (parseInt(page) - 1) + ')">上一页</a></li>';
                }

                for (var i = 1; i <= totalPage; i++) {
                    if (i == page) {
                        pageHtml += '<li class="active"><a href="#">' + i + '</a></li>';
                    } else {
                        pageHtml += '<li><a href="javascript::" onclick="setPage(' + i + ')">' + i + '</a></li>';
                    }

                }
                if (page < totalPage) {
                    pageHtml += '<li><a href="javascript:;" onclick="setPage(' + (parseInt(page) + 1) + ')">下一页</a></li>';
                }
                $("#pageList").html(pageHtml);

                // <li class="active"><a href="#">1</a></li>
                // <li class="disabled"><a href="#">2</a></li>
                // <li><a href="#">3</a></li>
                // <li><a href="#">4</a></li>
                // <li><a href="#">&raquo;</a></li>
            }
        }
    })
}

/**
 * 设置分页
 * @param p
 */
function setPage(p) {
    page = p;
    getArticleList();
}

/**
 * 设置key
 */
function setKey() {
    key = $("#key").val();
    getArticleList();
}

/**
 * 获取详情
 */
function getArticle() {

}

/**
 * 编辑文章
 */
function editArticle() {

}

/**
 * 更新文章
 */
function updateArticle() {

}