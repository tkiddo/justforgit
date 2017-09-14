define(['log'], function(log) {
    var add = function(x, y) {
        log.log(x + y);
    };

    return {
        add: add
    }
})