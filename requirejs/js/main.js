require.config({
    baseUrl: 'js/lib',
    path: {
        'math': 'math',
        'log': 'log'
    }
})

require(['math'], function(math) {
    math.add(1, 1)
})