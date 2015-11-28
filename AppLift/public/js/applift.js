var map, heatmap;
var dd = {};

function initMap() {
    $.get('js/data.json', function(respdata) {
        var arrLatLng = new Array();
        for (var i = 0; i < respdata.length; i++) {
            arrLatLng.push({
                location: new google.maps.LatLng(Number(respdata[i].Latitude), Number(respdata[i].Longitude)),
                weight: 3
            });
        }
        // var counts = {};
        // respdata.forEach(function(x) {
        //     counts[Number(x.Latitude)] = (counts[Number(x.Latitude)] || 0) + 1;
        // });
        // var max = 0;
        // var lati = 0;
        // for (var keys in counts) {
        //     if (counts[keys] >= max){
        //         max = counts[keys];
        //         lati = keys;
        //     }
        // }
        // console.log(max);
        // console.log(lati);
        dd = arrLatLng;
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: {
                lat: 42.3213115,
                lng: -101.2331318
            },
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
        heatmap = new google.maps.visualization.HeatmapLayer({
            radius: 20,
            data: arrLatLng,
            map: map
        });
        //var gradient = ['rgba(0, 255, 255, 0)', 'rgba(0, 255, 255, 1)', 'rgba(0, 191, 255, 1)', 'rgba(0, 127, 255, 1)', 'rgba(0, 63, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 0, 223, 1)', 'rgba(0, 0, 191, 1)', 'rgba(0, 0, 159, 1)', 'rgba(0, 0, 127, 1)', 'rgba(63, 0, 91, 1)', 'rgba(127, 0, 63, 1)', 'rgba(191, 0, 31, 1)', 'rgba(255, 0, 0, 1)']
        //heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
    });
}

function changeGradient() {
    var gradient = ['rgba(0, 255, 255, 0)', 'rgba(0, 255, 255, 1)', 'rgba(0, 191, 255, 1)', 'rgba(0, 127, 255, 1)', 'rgba(0, 63, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 0, 223, 1)', 'rgba(0, 0, 191, 1)', 'rgba(0, 0, 159, 1)', 'rgba(0, 0, 127, 1)', 'rgba(63, 0, 91, 1)', 'rgba(127, 0, 63, 1)', 'rgba(191, 0, 31, 1)', 'rgba(255, 0, 0, 1)']
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function getPoints() {
    $.get('js/data.json', function(respdata) {
        var arrLatLng = new Array();
        for (var i = 0; i < respdata.length; i++) {
            arrLatLng.push(new google.maps.LatLng(respdata[i].Latitude, respdata[i].Longitude))
        }
        return arrLatLng;
    });
}