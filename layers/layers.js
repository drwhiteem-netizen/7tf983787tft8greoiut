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
                popuplayertitle: 'Районы',
                interactive: true,
    title: 'Районы<br />\
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
    <img src="styles/legend/_1_12.png" /> Павшинская Пойма<br />\
    <img src="styles/legend/_1_13.png" /> Путилково<br />\
    <img src="styles/legend/_1_14.png" /> Райцентр<br />\
    <img src="styles/legend/_1_15.png" /> Сабурово<br />\
    <img src="styles/legend/_1_16.png" /> Теплый бетон<br />\
    <img src="styles/legend/_1_17.png" /> ТО Ильинское<br />\
    <img src="styles/legend/_1_18.png" /> ТО Красногорск<br />\
    <img src="styles/legend/_1_19.png" /> ТО Нахабино<br />\
    <img src="styles/legend/_1_20.png" /> ТО Отрадненское<br />\
    <img src="styles/legend/_1_21.png" /> ТО Павшинская Пойма<br />\
    <img src="styles/legend/_1_22.png" /> Турецкий городок<br />\
    <img src="styles/legend/_1_23.png" /> Чернево-1<br />\
    <img src="styles/legend/_1_24.png" /> Чернево-2<br />\
    <img src="styles/legend/_1_25.png" /> Южный<br />\
    <img src="styles/legend/_1_26.png" /> <br />' });
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
                popuplayertitle: 'Чат-бот ручной',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> Чат-бот ручной'
            });

lyr_2gisMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6];
lyr__1.set('fieldAliases', {'id': 'id', '_id': '_id', 'name': 'name', 'styleUrl': 'styleUrl', });
lyr__2.set('fieldAliases', {'name': 'name', 'description': 'description', 'skpdi': 'skpdi', });
lyr__3.set('fieldAliases', {'name': 'name', 'Исполнитель': 'Исполнитель', 'SKPDI ID': 'SKPDI ID', 'Тип покрытия': 'Тип покрытия', 'Категория': 'Категория', 'Протяженность': 'Протяженность', });
lyr__4.set('fieldAliases', {'name': 'name', 'Исполнитель': 'Исполнитель', 'SKPDI ID': 'SKPDI ID', 'Тип покрытия': 'Тип покрытия', 'Категория': 'Категория', 'Протяженность': 'Протяженность', });
lyr__5.set('fieldAliases', {'name': 'name', 'description': 'description', 'skpdi': 'skpdi', });
lyr__6.set('fieldAliases', {'ID': 'ID', 'Дата_и_время': 'Дата_и_время', 'Адрес': 'Адрес', 'Категория': 'Категория', 'Комментарий': 'Комментарий', 'Фото': 'Фото', });
lyr__1.set('fieldImages', {'id': '', '_id': '', 'name': '', 'styleUrl': '', });
lyr__2.set('fieldImages', {'name': '', 'description': '', 'skpdi': '', });
lyr__3.set('fieldImages', {'name': '', 'Исполнитель': '', 'SKPDI ID': '', 'Тип покрытия': '', 'Категория': '', 'Протяженность': '', });
lyr__4.set('fieldImages', {'name': '', 'Исполнитель': '', 'SKPDI ID': '', 'Тип покрытия': '', 'Категория': '', 'Протяженность': '', });
lyr__5.set('fieldImages', {'name': '', 'description': '', 'skpdi': '', });
lyr__6.set('fieldImages', {'ID': 'Range', 'Дата_и_время': 'TextEdit', 'Адрес': 'TextEdit', 'Категория': 'TextEdit', 'Комментарий': 'TextEdit', 'Фото': 'TextEdit', });
lyr__1.set('fieldLabels', {'id': 'no label', '_id': 'no label', 'name': 'no label', 'styleUrl': 'no label', });
lyr__2.set('fieldLabels', {'name': 'no label', 'description': 'no label', 'skpdi': 'no label', });
lyr__3.set('fieldLabels', {'name': 'no label', 'Исполнитель': 'no label', 'SKPDI ID': 'no label', 'Тип покрытия': 'no label', 'Категория': 'no label', 'Протяженность': 'no label', });
lyr__4.set('fieldLabels', {'name': 'no label', 'Исполнитель': 'no label', 'SKPDI ID': 'no label', 'Тип покрытия': 'no label', 'Категория': 'no label', 'Протяженность': 'no label', });
lyr__5.set('fieldLabels', {'name': 'no label', 'description': 'no label', 'skpdi': 'no label', });
lyr__6.set('fieldLabels', {'ID': 'no label', 'Дата_и_время': 'no label', 'Адрес': 'no label', 'Категория': 'no label', 'Комментарий': 'no label', 'Фото': 'no label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});