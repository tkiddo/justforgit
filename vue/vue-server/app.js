const Vue = require('vue');
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
});
server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        }
    })

    const context = {
        title: 'hello'
    }

    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('internal server error');
            return
        }
        console.log(html)
    })

})

server.listen(8080, (req, res) => {
    console.log('listening on port 8080')
})