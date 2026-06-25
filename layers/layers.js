var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'type':'base',
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
                popuplayertitle: 'Городской округ',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Городской округ'
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
                popuplayertitle: 'Микрорайон',
                interactive: true,
    title: 'Микрорайон<br />\
    <img src="styles/legend/_2_0.png" /> Архангельское<br />\
    <img src="styles/legend/_2_1.png" /> Бруски<br />\
    <img src="styles/legend/_2_2.png" /> Губайлово<br />\
    <img src="styles/legend/_2_3.png" /> Дмитровское<br />\
    <img src="styles/legend/_2_4.png" /> Изумрудные Холмы<br />\
    <img src="styles/legend/_2_5.png" /> Ильинское<br />\
    <img src="styles/legend/_2_6.png" /> Институтская/Панфилова<br />\
    <img src="styles/legend/_2_7.png" /> Нахабино Север<br />\
    <img src="styles/legend/_2_8.png" /> Нахабино Юг<br />\
    <img src="styles/legend/_2_9.png" /> Николо Урюпино<br />\
    <img src="styles/legend/_2_10.png" /> Опалиха<br />\
    <img src="styles/legend/_2_11.png" /> Отрадное<br />\
    <img src="styles/legend/_2_12.png" /> Путилково<br />\
    <img src="styles/legend/_2_13.png" /> Райцентр<br />\
    <img src="styles/legend/_2_14.png" /> Сабурово<br />\
    <img src="styles/legend/_2_15.png" /> Теплый бетон<br />\
    <img src="styles/legend/_2_16.png" /> ТО Ильинское<br />\
    <img src="styles/legend/_2_17.png" /> ТО Красногорск<br />\
    <img src="styles/legend/_2_18.png" /> ТО Нахабино<br />\
    <img src="styles/legend/_2_19.png" /> ТО Отрадненское<br />\
    <img src="styles/legend/_2_20.png" /> ТО Павшинская Пойма<br />\
    <img src="styles/legend/_2_21.png" /> Турецкий городок<br />\
    <img src="styles/legend/_2_22.png" /> Чернево-1<br />\
    <img src="styles/legend/_2_23.png" /> Чернево-2<br />\
    <img src="styles/legend/_2_24.png" /> Южный<br />\
    <img src="styles/legend/_2_25.png" /> <br />' });
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
                popuplayertitle: 'ОП Красногорск',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> ОП Красногорск'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'ДТ Красногорск',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> ДТ Красногорск'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
cluster__7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__7
});
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:cluster__7, 
                style: style__7,
                popuplayertitle: 'Чат-бот',
                interactive: true,
    title: 'Чат-бот<br />\
    <img src="styles/legend/_7_0.png" /> БОРТ/ИДН/ЯМЫ<br />\
    <img src="styles/legend/_7_1.png" /> ДИП<br />\
    <img src="styles/legend/_7_2.png" /> КП<br />\
    <img src="styles/legend/_7_3.png" /> МУСОР<br />\
    <img src="styles/legend/_7_4.png" /> РЕМОНТ<br />' });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
cluster__8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__8
});
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:cluster__8, 
                style: style__8,
                popuplayertitle: 'Добродел',
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> Добродел'
            });

lyr_2gisMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8];
lyr__1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'old_name': 'old_name', 'official_status': 'official_status', 'name:uk': 'name:uk', 'name:ru': 'name:ru', 'name:en': 'name:en', 'admin_level': 'admin_level', 'addr:region': 'addr:region', 'addr:country': 'addr:country', });
lyr__2.set('fieldAliases', {'name': 'name', 'Чат-бот': 'Чат-бот', 'Добродел': 'Добродел', 'Дворов': 'Дворов', 'Общ.пространств': 'Общ.пространств', 'МКД': 'МКД', 'Площадь, м2': 'Площадь, м2', });
lyr__3.set('fieldAliases', {'name': 'name', 'Исполнитель': 'Исполнитель', 'SKPDI ID': 'SKPDI ID', 'Тип покрытия': 'Тип покрытия', 'Категория': 'Категория', 'Протяженность': 'Протяженность', });
lyr__4.set('fieldAliases', {'name': 'name', 'Исполнитель': 'Исполнитель', 'SKPDI ID': 'SKPDI ID', 'Тип покрытия': 'Тип покрытия', 'Категория': 'Категория', 'Протяженность': 'Протяженность', });
lyr__5.set('fieldAliases', {'name': 'name', 'description': 'description', 'skpdi': 'skpdi', });
lyr__6.set('fieldAliases', {'name': 'name', 'description': 'description', 'skpdi': 'skpdi', });
lyr__7.set('fieldAliases', {'ID': 'ID', 'Дата': 'Дата', 'Адрес': 'Адрес', 'Группа': 'Группа', 'Категория': 'Категория', 'Комментарий': 'Комментарий', 'Фото': 'Фото', });
lyr__8.set('fieldAliases', {'Номер': 'Номер', 'Срок': 'Срок', 'Адрес': 'Адрес', 'Группа': 'Группа', 'Категория': 'Категория', 'Ссылка': 'Ссылка', });
lyr__1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'boundary': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'old_name': 'TextEdit', 'official_status': 'TextEdit', 'name:uk': 'TextEdit', 'name:ru': 'TextEdit', 'name:en': 'TextEdit', 'admin_level': 'TextEdit', 'addr:region': 'TextEdit', 'addr:country': 'TextEdit', });
lyr__2.set('fieldImages', {'name': 'TextEdit', 'Чат-бот': 'TextEdit', 'Добродел': 'TextEdit', 'Дворов': 'Range', 'Общ.пространств': 'Range', 'МКД': 'Range', 'Площадь, м2': 'TextEdit', });
lyr__3.set('fieldImages', {'name': '', 'Исполнитель': '', 'SKPDI ID': '', 'Тип покрытия': '', 'Категория': '', 'Протяженность': '', });
lyr__4.set('fieldImages', {'name': '', 'Исполнитель': '', 'SKPDI ID': '', 'Тип покрытия': '', 'Категория': '', 'Протяженность': '', });
lyr__5.set('fieldImages', {'name': 'TextEdit', 'description': 'TextEdit', 'skpdi': 'TextEdit', });
lyr__6.set('fieldImages', {'name': 'TextEdit', 'description': 'TextEdit', 'skpdi': 'TextEdit', });
lyr__7.set('fieldImages', {'ID': 'TextEdit', 'Дата': 'DateTime', 'Адрес': 'TextEdit', 'Группа': 'TextEdit', 'Категория': 'TextEdit', 'Комментарий': 'TextEdit', 'Фото': 'TextEdit', });
lyr__8.set('fieldImages', {'Номер': 'TextEdit', 'Срок': 'TextEdit', 'Адрес': 'TextEdit', 'Группа': 'TextEdit', 'Категория': 'TextEdit', 'Ссылка': 'TextEdit', });
lyr__1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'old_name': 'no label', 'official_status': 'no label', 'name:uk': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'admin_level': 'no label', 'addr:region': 'no label', 'addr:country': 'no label', });
lyr__2.set('fieldLabels', {'name': 'no label', 'Чат-бот': 'inline label - visible with data', 'Добродел': 'inline label - visible with data', 'Дворов': 'inline label - visible with data', 'Общ.пространств': 'inline label - visible with data', 'МКД': 'inline label - visible with data', 'Площадь, м2': 'hidden field', });
lyr__3.set('fieldLabels', {'name': 'no label', 'Исполнитель': 'no label', 'SKPDI ID': 'no label', 'Тип покрытия': 'no label', 'Категория': 'no label', 'Протяженность': 'no label', });
lyr__4.set('fieldLabels', {'name': 'no label', 'Исполнитель': 'no label', 'SKPDI ID': 'no label', 'Тип покрытия': 'no label', 'Категория': 'no label', 'Протяженность': 'no label', });
lyr__5.set('fieldLabels', {'name': 'no label', 'description': 'no label', 'skpdi': 'no label', });
lyr__6.set('fieldLabels', {'name': 'no label', 'description': 'no label', 'skpdi': 'no label', });
lyr__7.set('fieldLabels', {'ID': 'no label', 'Дата': 'no label', 'Адрес': 'no label', 'Группа': 'no label', 'Категория': 'no label', 'Комментарий': 'no label', 'Фото': 'no label', });
lyr__8.set('fieldLabels', {'Номер': 'no label', 'Срок': 'no label', 'Адрес': 'no label', 'Группа': 'no label', 'Категория': 'no label', 'Ссылка': 'no label', });
lyr__8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});