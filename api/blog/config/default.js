module.exports = {
    port: 3000,
    session: {
        secret: 'myBlog',
        key: 'myblog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:21017/myblog'

}