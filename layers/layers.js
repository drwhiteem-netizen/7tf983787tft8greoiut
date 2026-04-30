var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format__30042026_110039Layer0_1 = new ol.format.GeoJSON();
var features__30042026_110039Layer0_1 = format__30042026_110039Layer0_1.readFeatures(json__30042026_110039Layer0_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__30042026_110039Layer0_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__30042026_110039Layer0_1.addFeatures(features__30042026_110039Layer0_1);
var lyr__30042026_110039Layer0_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__30042026_110039Layer0_1, 
                style: style__30042026_110039Layer0_1,
                popuplayertitle: 'Без названия_30-04-2026_11-00-39 — Layer0',
                interactive: true,
                title: 'Без названия_30-04-2026_11-00-39 — Layer0'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Дороги региональные Красногорск',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Дороги региональные Красногорск'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Дороги местые Красногорск',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Дороги местые Красногорск'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'ДТ Красногорск',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> ДТ Красногорск'
            });
var format_boundary_administrative__5 = new ol.format.GeoJSON();
var features_boundary_administrative__5 = format_boundary_administrative__5.readFeatures(json_boundary_administrative__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_administrative__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_administrative__5.addFeatures(features_boundary_administrative__5);
var lyr_boundary_administrative__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_administrative__5, 
                style: style_boundary_administrative__5,
                popuplayertitle: 'вфывфвфывф — boundary_administrative_',
                interactive: true,
                title: 'вфывфвфывф — boundary_administrative_'
            });

lyr_2gisMap_0.setVisible(true);lyr__30042026_110039Layer0_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr_boundary_administrative__5.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr__30042026_110039Layer0_1,lyr__2,lyr__3,lyr__4,lyr_boundary_administrative__5];
lyr__30042026_110039Layer0_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__2.set('fieldAliases', {'name': 'name', 'Исполнитель': 'Исполнитель', 'SKPDI ID': 'SKPDI ID', 'Тип покрытия': 'Тип покрытия', 'Категория': 'Категория', 'Протяженность': 'Протяженность', });
lyr__3.set('fieldAliases', {'name': 'name', 'Исполнитель': 'Исполнитель', 'SKPDI ID': 'SKPDI ID', 'Тип покрытия': 'Тип покрытия', 'Категория': 'Категория', 'Протяженность': 'Протяженность', });
lyr__4.set('fieldAliases', {'name': 'name', 'description': 'description', 'skpdi': 'skpdi', 'fill': 'fill', 'fill-opacity': 'fill-opacity', 'stroke': 'stroke', 'stroke-width': 'stroke-width', 'stroke-opacity': 'stroke-opacity', });
lyr_boundary_administrative__5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'old_name': 'old_name', 'official_status': 'official_status', 'name:uk': 'name:uk', 'name:ru': 'name:ru', 'name:en': 'name:en', 'admin_level': 'admin_level', 'addr:region': 'addr:region', 'addr:country': 'addr:country', });
lyr__30042026_110039Layer0_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr__2.set('fieldImages', {'name': '', 'Исполнитель': '', 'SKPDI ID': '', 'Тип покрытия': '', 'Категория': '', 'Протяженность': '', });
lyr__3.set('fieldImages', {'name': '', 'Исполнитель': '', 'SKPDI ID': '', 'Тип покрытия': '', 'Категория': '', 'Протяженность': '', });
lyr__4.set('fieldImages', {'name': '', 'description': '', 'skpdi': '', 'fill': '', 'fill-opacity': '', 'stroke': '', 'stroke-width': '', 'stroke-opacity': '', });
lyr_boundary_administrative__5.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'boundary': '', 'wikipedia': '', 'wikidata': '', 'type': '', 'old_name': '', 'official_status': '', 'name:uk': '', 'name:ru': '', 'name:en': '', 'admin_level': '', 'addr:region': '', 'addr:country': '', });
lyr__30042026_110039Layer0_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__2.set('fieldLabels', {'name': 'no label', 'Исполнитель': 'no label', 'SKPDI ID': 'no label', 'Тип покрытия': 'no label', 'Категория': 'no label', 'Протяженность': 'no label', });
lyr__3.set('fieldLabels', {'name': 'no label', 'Исполнитель': 'no label', 'SKPDI ID': 'no label', 'Тип покрытия': 'no label', 'Категория': 'no label', 'Протяженность': 'no label', });
lyr__4.set('fieldLabels', {'name': 'no label', 'description': 'no label', 'skpdi': 'no label', 'fill': 'no label', 'fill-opacity': 'no label', 'stroke': 'no label', 'stroke-width': 'no label', 'stroke-opacity': 'no label', });
lyr_boundary_administrative__5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'old_name': 'no label', 'official_status': 'no label', 'name:uk': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'admin_level': 'no label', 'addr:region': 'no label', 'addr:country': 'no label', });
lyr_boundary_administrative__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});