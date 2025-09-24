var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ADMINISTRASIKABUPATEN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKABUPATEN_AR_50K_1 = format_ADMINISTRASIKABUPATEN_AR_50K_1.readFeatures(json_ADMINISTRASIKABUPATEN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKABUPATEN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKABUPATEN_AR_50K_1.addFeatures(features_ADMINISTRASIKABUPATEN_AR_50K_1);
var lyr_ADMINISTRASIKABUPATEN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKABUPATEN_AR_50K_1, 
                style: style_ADMINISTRASIKABUPATEN_AR_50K_1,
                popuplayertitle: 'ADMINISTRASIKABUPATEN_AR_50K',
                interactive: true,
    title: 'ADMINISTRASIKABUPATEN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKABUPATEN_AR_50K_1_0.png" /> Kota Prabumulih<br />\
    <img src="styles/legend/ADMINISTRASIKABUPATEN_AR_50K_1_1.png" /> Muara Enim<br />\
    <img src="styles/legend/ADMINISTRASIKABUPATEN_AR_50K_1_2.png" /> Ogan Ilir<br />\
    <img src="styles/legend/ADMINISTRASIKABUPATEN_AR_50K_1_3.png" /> Penukal Abab Lematang Ilir<br />\
    <img src="styles/legend/ADMINISTRASIKABUPATEN_AR_50K_1_4.png" /> <br />' });

lyr_ESRI_0.setVisible(true);lyr_ADMINISTRASIKABUPATEN_AR_50K_1.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_ADMINISTRASIKABUPATEN_AR_50K_1];
lyr_ADMINISTRASIKABUPATEN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIKABUPATEN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIKABUPATEN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'header label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIKABUPATEN_AR_50K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});