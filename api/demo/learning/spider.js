var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var eventproxy = require('eventproxy');
var url = require('url');
var app = express();

var cnodeUrl = 'https://cnodejs.org/';
app.get('/', function(req, res, next) {
    var sres = res;
    superagent.get(cnodeUrl)
        .end(function(err, res) {
            if (err) {
                return console.error(err);
            }
            var topicUrls = [];
            var $ = cheerio.load(res.text);
            // 获取首页所有的链接
            $('#topic_list .topic_title').each(function(idx, element) {
                var $element = $(element);
                // $element.attr('href') 本来的样子是 /topic/542acd7d5d28233425538b04
                // 我们用 url.resolve 来自动推断出完整 url，变成
                // https://cnodejs.org/topic/542acd7d5d28233425538b04 的形式
                // 具体请看 http://nodejs.org/api/url.html#url_url_resolve_from_to 的示例
                var href = url.resolve(cnodeUrl, $element.attr('href'));
                topicUrls.push(href);
            });

            console.log(topicUrls);
            // 得到 topicUrls 之后

            // 得到一个 eventproxy 的实例
            var ep = new eventproxy();

            // 命令 ep 重复监听 topicUrls.length 次（在这里也就是 40 次） `topic_html` 事件再行动
            ep.after('topic_html', topicUrls.length, function(topics) {
                // topics 是个数组，包含了 40 次 ep.emit('topic_html', pair) 中的那 40 个 pair

                // 开始行动
                topics = topics.map(function(topicPair) {
                    // 接下来都是 jquery 的用法了
                    var topicUrl = topicPair[0];
                    var topicHtml = topicPair[1];
                    var $ = cheerio.load(topicHtml);
                    return ({
                        title: $('.topic_full_title').text().trim(),
                        href: topicUrl,
                        comment1: $('.reply_content').eq(0).text().trim(),
                    });
                });

                console.log('final:');
                console.log(topics);
                sres.json(topics)
            });

            topicUrls.forEach(function(topicUrl) {
                superagent.get(topicUrl)
                    .end(function(err, res) {
                        console.log('fetch ' + topicUrl + ' successful---' + res.text);
                        ep.emit('topic_html', [topicUrl, res.text]);
                    });
            });

        });
    // console.log(topicUrls);

})



app.listen(3000, function(req, res) {
    console.log('listening on port 3000')
})