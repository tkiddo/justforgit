$('#zoomIn').on('click', function() {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom + 1);
})

$('#zoomOut').on('click', function() {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom - 1);
})