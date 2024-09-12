var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_desacpdfix_1 = new ol.format.GeoJSON();
var features_desacpdfix_1 = format_desacpdfix_1.readFeatures(json_desacpdfix_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desacpdfix_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desacpdfix_1.addFeatures(features_desacpdfix_1);
var lyr_desacpdfix_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desacpdfix_1, 
                style: style_desacpdfix_1,
                popuplayertitle: "desacpd fix",
                interactive: true,
                title: '<img src="styles/legend/desacpdfix_1.png" /> desacpd fix'
            });
var format_buffering_2 = new ol.format.GeoJSON();
var features_buffering_2 = format_buffering_2.readFeatures(json_buffering_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffering_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffering_2.addFeatures(features_buffering_2);
var lyr_buffering_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffering_2, 
                style: style_buffering_2,
                popuplayertitle: "buffering",
                interactive: true,
                title: '<img src="styles/legend/buffering_2.png" /> buffering'
            });
var format_vektorctitikperindukan_3 = new ol.format.GeoJSON();
var features_vektorctitikperindukan_3 = format_vektorctitikperindukan_3.readFeatures(json_vektorctitikperindukan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vektorctitikperindukan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vektorctitikperindukan_3.addFeatures(features_vektorctitikperindukan_3);
var lyr_vektorctitikperindukan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vektorctitikperindukan_3, 
                style: style_vektorctitikperindukan_3,
                popuplayertitle: "vektor c titik perindukan",
                interactive: true,
                title: '<img src="styles/legend/vektorctitikperindukan_3.png" /> vektor c titik perindukan'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_desacpdfix_1.setVisible(true);lyr_buffering_2.setVisible(true);lyr_vektorctitikperindukan_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_desacpdfix_1,lyr_buffering_2,lyr_vektorctitikperindukan_3];
lyr_desacpdfix_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_buffering_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_vektorctitikperindukan_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', });
lyr_desacpdfix_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_buffering_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_vektorctitikperindukan_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_desacpdfix_1.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'WADMKC': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_buffering_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_vektorctitikperindukan_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', });
lyr_vektorctitikperindukan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});