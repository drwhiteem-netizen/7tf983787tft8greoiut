var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Микрорайон',
                interactive: true,
    title: 'Микрорайон<br />\
    <img src="styles/legend/_1_0.png" /> Архангельское<br />\
    <img src="styles/legend/_1_1.png" /> Бруски<br />\
    <img src="styles/legend/_1_2.png" /> Губайлово<br />\
    <img src="styles/legend/_1_3.png" /> Дмитровское<br />\
    <img src="styles/legend/_1_4.png" /> Изумрудные Холмы<br />\
    <img src="styles/legend/_1_5.png" /> Ильинское<br />\
    <img src="styles/legend/_1_6.png" /> Институтская/Панфилова<br />\
    <img src="styles/legend/_1_7.png" /> Нахабино Север<br />\
    <img src="styles/legend/_1_8.png" /> Нахабино Юг<br />\
    <img src="styles/legend/_1_9.png" /> Николо Урюпино<br />\
    <img src="styles/legend/_1_10.png" /> Опалиха<br />\
    <img src="styles/legend/_1_11.png" /> Отрадное<br />\
    <img src="styles/legend/_1_12.png" /> Путилково<br />\
    <img src="styles/legend/_1_13.png" /> Райцентр<br />\
    <img src="styles/legend/_1_14.png" /> Сабурово<br />\
    <img src="styles/legend/_1_15.png" /> Теплый бетон<br />\
    <img src="styles/legend/_1_16.png" /> ТО Красногорск<br />\
    <img src="styles/legend/_1_17.png" /> ТО Нахабино<br />\
    <img src="styles/legend/_1_18.png" /> ТО Отрадненское<br />\
    <img src="styles/legend/_1_19.png" /> ТО Павшинская Пойма<br />\
    <img src="styles/legend/_1_20.png" /> Турецкий городок<br />\
    <img src="styles/legend/_1_21.png" /> Чернево-1<br />\
    <img src="styles/legend/_1_22.png" /> Чернево-2<br />\
    <img src="styles/legend/_1_23.png" /> Южный<br />\
    <img src="styles/legend/_1_24.png" /> <br />' });
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
                popuplayertitle: 'ОП Красногорск',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ОП Красногорск'
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
                popuplayertitle: 'Дороги региональные Красногорск',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Дороги региональные Красногорск'
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
                popuplayertitle: 'Дороги местые Красногорск',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Дороги местые Красногорск'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'ДТ Красногорск',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> ДТ Красногорск'
            });
var format___6 = new ol.format.GeoJSON();
var features___6 = format___6.readFeatures(json___6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___6.addFeatures(features___6);
var lyr___6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___6, 
                style: style___6,
                popuplayertitle: 'округ линия — _',
                interactive: true,
                title: '<img src="styles/legend/__6.png" /> округ линия — _'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'Чат-бот ручной',
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> Чат-бот ручной'
            });

lyr_2gisMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr___6.setVisible(true);lyr__7.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr___6,lyr__7];
lyr__1.set('fieldAliases', {'name': 'name', });
lyr__2.set('fieldAliases', {'name': 'name', 'description': 'description', 'skpdi': 'skpdi', });
lyr__3.set('fieldAliases', {'name': 'name', 'Исполнитель': 'Исполнитель', 'SKPDI ID': 'SKPDI ID', 'Тип покрытия': 'Тип покрытия', 'Категория': 'Категория', 'Протяженность': 'Протяженность', });
lyr__4.set('fieldAliases', {'name': 'name', 'Исполнитель': 'Исполнитель', 'SKPDI ID': 'SKPDI ID', 'Тип покрытия': 'Тип покрытия', 'Категория': 'Категория', 'Протяженность': 'Протяженность', });
lyr__5.set('fieldAliases', {'name': 'name', 'description': 'description', 'skpdi': 'skpdi', });
lyr___6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'old_name': 'old_name', 'official_status': 'official_status', 'name:uk': 'name:uk', 'name:ru': 'name:ru', 'name:en': 'name:en', 'admin_level': 'admin_level', 'addr:region': 'addr:region', 'addr:country': 'addr:country', });
lyr__7.set('fieldAliases', {'ID': 'ID', 'Дата_и_время': 'Дата_и_время', 'Адрес': 'Адрес', 'Категория': 'Категория', 'Комментарий': 'Комментарий', 'Фото': 'Фото', });
lyr__1.set('fieldImages', {'name': 'TextEdit', });
lyr__2.set('fieldImages', {'name': 'TextEdit', 'description': 'TextEdit', 'skpdi': 'TextEdit', });
lyr__3.set('fieldImages', {'name': '', 'Исполнитель': '', 'SKPDI ID': '', 'Тип покрытия': '', 'Категория': '', 'Протяженность': '', });
lyr__4.set('fieldImages', {'name': '', 'Исполнитель': '', 'SKPDI ID': '', 'Тип покрытия': '', 'Категория': '', 'Протяженность': '', });
lyr__5.set('fieldImages', {'name': 'TextEdit', 'description': 'TextEdit', 'skpdi': 'TextEdit', });
lyr___6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'boundary': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'old_name': 'TextEdit', 'official_status': 'TextEdit', 'name:uk': 'TextEdit', 'name:ru': 'TextEdit', 'name:en': 'TextEdit', 'admin_level': 'TextEdit', 'addr:region': 'TextEdit', 'addr:country': 'TextEdit', });
lyr__7.set('fieldImages', {'ID': 'Range', 'Дата_и_время': 'TextEdit', 'Адрес': 'TextEdit', 'Категория': 'TextEdit', 'Комментарий': 'TextEdit', 'Фото': 'TextEdit', });
lyr__1.set('fieldLabels', {'name': 'no label', });
lyr__2.set('fieldLabels', {'name': 'no label', 'description': 'no label', 'skpdi': 'no label', });
lyr__3.set('fieldLabels', {'name': 'no label', 'Исполнитель': 'no label', 'SKPDI ID': 'no label', 'Тип покрытия': 'no label', 'Категория': 'no label', 'Протяженность': 'no label', });
lyr__4.set('fieldLabels', {'name': 'no label', 'Исполнитель': 'no label', 'SKPDI ID': 'no label', 'Тип покрытия': 'no label', 'Категория': 'no label', 'Протяженность': 'no label', });
lyr__5.set('fieldLabels', {'name': 'no label', 'description': 'no label', 'skpdi': 'no label', });
lyr___6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'old_name': 'no label', 'official_status': 'no label', 'name:uk': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'admin_level': 'no label', 'addr:region': 'no label', 'addr:country': 'no label', });
lyr__7.set('fieldLabels', {'ID': 'no label', 'Дата_и_время': 'no label', 'Адрес': 'no label', 'Категория': 'no label', 'Комментарий': 'no label', 'Фото': 'no label', });
lyr__7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});