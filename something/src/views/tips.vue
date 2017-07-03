<template>
<div>
  <div id="map"></div>
  <el-button @click='zoomIn'>zoomIn</el-button>
  <el-button @click='zoomOut'>zoomOut</el-button>
  <el-button @click='flyLocate'>fly to guangzhou</el-button>
</div>
</template>
<script type="text/javascript">
import ol from 'openlayers'
export default {
	data(){
		return{
			map:null,
			layer:null,
			view:null
		}

	},
	mounted() {
      this.show();
	},
	methods: {
		show() {
			this.layer = new ol.layer.Tile({
						source: new ol.source.OSM()
					});
			this.view = new ol.View({
					center: [12950000, 4860000],
					minZoom:6,
					maxZoom:12,
					rotation:Math.PI/6,
					zoom:8
				});
			this.map = new ol.Map({
				layers: [
					this.layer
				],
				target: 'map',
				controls: ol.control.defaults({
					attributionOptions: ({
						collapsible: false
					})
				}),
				view: this.view
			});
		},
		zoomIn(){
			let view = this.map.getView();
			let zoom = view.getZoom();
			view.setZoom(zoom+1);
		},
		zoomOut(){
			let view = this.map.getView();
			let zoom = view.getZoom();
			view.setZoom(zoom-1);
		},
		flyLocate(){
			let guangzhou = ol.proj.transform([113.15, 23.08], 'EPSG:4326', 'EPSG:3857');
			let duration = 2000;
			let start = +new Date();
		    let pan = ol.animation.pan({
		    	duration:duration,
		    	source:this.view.getCenter(),
		    	start:start
		    });
		    let bounce = ol.animation.bounce({
		    	duration:duration,
		    	resolution:4*this.view.getResolution(),
		    	start:start,
		    });
		    this.map.beforeRender(pan,bounce);
		    this.view.setCenter(guangzhou)
		}
	}
}
</script>

<style scoped>
  
</style>