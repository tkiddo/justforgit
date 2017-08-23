var chengdu = ol.proj.fromLonLat([104.0647600000, 30.5702000000]);
var haerbin = ol.proj.fromLonLat([126.5358000000, 45.8021600000]);
var sanya = ol.proj.fromLonLat([109.5120900000, 18.2524800000]);

$("#rotateLeft").on('click', function() {
    view.animate({
        rotation: view.getRotation() + Math.PI / 2
    })
})

$("#rotateRight").on('click', function() {
    view.animate({
        rotation: view.getRotation() - Math.PI / 2
    })
})

$('#rotateAroundBeijing').on('click', function() {
    var rotation = view.getRotation();
    view.animate({
        rotation: rotation + Math.PI,
        anchor: beijing,
        easing: ol.easing.easeIn
    }, {
        rotation: rotation + Math.PI * 2,
        anchor: beijing,
        easing: ol.easing.easeOut
    })
})

$('#panToChengdu').on('click', function() {
    view.animate({
        center: chengdu,
        duration: 4000
    })
})


// An elastic easing method (from https://github.com/DmitryBaranovskiy/raphael).
function elastic(t) {
    return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
}
$('#elasticToHaerbin').on('click', function() {
    view.animate({
        center: haerbin,
        duration: 4000,
        easing: elastic
    })
})


// A bounce easing method (from https://github.com/DmitryBaranovskiy/raphael).
function bounce(t) {
    var s = 7.5625,
        p = 2.75,
        l;
    if (t < (1 / p)) {
        l = s * t * t;
    } else {
        if (t < (2 / p)) {
            t -= (1.5 / p);
            l = s * t * t + 0.75;
        } else {
            if (t < (2.5 / p)) {
                t -= (2.25 / p);
                l = s * t * t + 0.9375;
            } else {
                t -= (2.625 / p);
                l = s * t * t + 0.984375;
            }
        }
    }
    return l;
}

$("#bounceToSanya").on('click', function() {
    view.animate({
        center: sanya,
        duration: 4000,
        easing: bounce
    })
})

$('#spinToBeijing').on('click', function() {
    var center = view.getCenter();
    view.animate({
        center: [
            center[0] + (beijing[0] - center[0]) / 2,
            center[1] + (beijing[1] - center[1]) / 2
        ],
        rotation: Math.PI,
        easing: ol.easing.easeIn
    }, {
        center: beijing,
        rotation: 2 * Math.PI,
        easing: ol.easing.easeOut
    });
})


function flyTo(location, done) {
    var duration = 2000;
    var zoom = view.getZoom();
    var parts = 2;
    var called = false;

    function callback(complete) {
        --parts;
        if (called) {
            return;
        }
        if (parts === 0 || !complete) {
            called = true;
            done(complete);
        }
    }
    view.animate({
        center: location,
        duration: duration
    }, callback);
    view.animate({
        zoom: zoom - 1,
        duration: duration / 2
    }, {
        zoom: zoom,
        duration: duration / 2
    }, callback);
}

$('#flyToChengdu').on('click', function() {
    flyTo(chengdu, function() {})
})