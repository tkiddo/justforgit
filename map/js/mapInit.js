var projection = ol.proj.get("EPSG:3857");
var resolutions = [];
for (var i = 0; i < 19; i++) {
    resolutions[i] = Math.pow(2, 18 - i);
}
var tilegrid = new ol.tilegrid.TileGrid({
    origin: [0, 0],
    resolutions: resolutions
});

var baidu_source = new ol.source.TileImage({
    projection: projection,
    tileGrid: tilegrid,
    tileUrlFunction: function(tileCoord, pixelRatio, proj) {
        if (!tileCoord) {
            return "";
        }
        var z = tileCoord[0];
        var x = tileCoord[1];
        var y = tileCoord[2];

        if (x < 0) {
            x = "M" + (-x);
        }
        if (y < 0) {
            y = "M" + (-y);
        }

        return "http://online3.map.bdimg.com/onlinelabel/?qt=tile&x=" + x + "&y=" + y + "&z=" + z + "&styles=pl&udt=20151021&scaler=1&p=1";
    }
});

var baidu_layer = new ol.layer.Tile({
    source: baidu_source
});
var beijing = ol.proj.fromLonLat([116.4071700000, 39.9046900000]);
var view = new ol.View({
    center: beijing,
    zoom: 8
})
var map = new ol.Map({
    target: 'map',
    layers: [baidu_layer],
    view: view,
    // Improve user experience by loading tiles while animating. Will make
    // animations stutter on mobile or slow devices.
    loadTilesWhileAnimating: true
});

$("#map").on('click', function(e) {
    var coords = ol.proj.transform(map.getEventCoordinate(e), 'EPSG:3857', 'EPSG:4326');
    console.log(coords);
    var pixel = map.getEventPixel(e);
    console.log(pixel)
    var feature = map.getFeaturesAtPixel(pixel);
    console.log(feature)
})