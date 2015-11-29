var map, heatmap;
var items = {};

var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length == 1) b[p[0]] = "";
        else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));
var getUnique = function(apiresp, data) {

    var uniqueVal = [];
    for (var i in apiresp) {
        if(typeof(apiresp[i])!=="undefined")
            uniqueVal[apiresp[i][data]] = null;
    }
    uniqueVal = Object.keys(uniqueVal);
    return uniqueVal;
};
var getUniqueDate = function(apiresp) {
    var uniqueDateVal = [];
    for (var i in apiresp) {
        data = (new Date(Number(apiresp[i].Timestamp) * 1000)).toDateString();
        uniqueDateVal[data] = null;
    }
    uniqueDateVal = Object.keys(uniqueDateVal);
    return uniqueDateVal;
};
var getUniqueArray = function(mainarr) {
      var newArray = new Array();
      for (var i = 0; i < mainarr.length; i++) {
        if (mainarr[i]) {
          newArray.push(mainarr[i]);
        }
      }
    // var uniqueVal = [];
    // for (var i in mainarr) {
    //     if(typeof(mainarr[i])!=="undefined")
    //         uniqueVal
    //         uniqueVal[mainarr[i]] = null;
    // }
    // uniqueVal = Object.keys(uniqueVal);
    return newArray;
};
var createList = function(type, uniqueData) {
    var item = "<div style='color: black;'>"+type+"</div>";
    for (var i in uniqueData) {
        item += '<div><input type="radio" name="'+ type +'" class="filter-item" data-type="' + type + '" value="' + uniqueData[i] + '" id="' + type + uniqueData[i] + '"><label for="' + type + uniqueData[i] + '">' + uniqueData[i] + '</label></div>';
    }
    $("#" + type + "_block").html(item);
    $("#Date_block").find('input').prop("checked", true)
};
var mapData = function(value, type) {
    var mappedData = items.map(function(obj) {
        if (obj[type] === value)
            return obj;
        else return null;
        
    });
    var newArrData = getUniqueArray(mappedData);
    //var newArrData = mappedData;
    var arrLatLng = new Array();
    for (var i = 0; i < newArrData.length; i++) {
        arrLatLng.push({
            location: new google.maps.LatLng(Number(newArrData[i].Latitude), Number(newArrData[i].Longitude)),
            weight: 3
        });
    }
    heatmap.setMap(null);
    heatmap = new google.maps.visualization.HeatmapLayer({
        radius: 20,
        data: arrLatLng,
        map: map
    });
    var gradient = ['rgba(0, 255, 255, 0)', 'rgba(0, 255, 255, 1)', 'rgba(0, 191, 255, 1)', 'rgba(0, 127, 255, 1)', 'rgba(0, 63, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 0, 223, 1)', 'rgba(0, 0, 191, 1)', 'rgba(0, 0, 159, 1)', 'rgba(0, 0, 127, 1)', 'rgba(63, 0, 91, 1)', 'rgba(127, 0, 63, 1)', 'rgba(191, 0, 31, 1)', 'rgba(255, 0, 0, 1)']
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
};

function initMap() {
    $.get('/api/getData/' + qs["loc"]).done(function(respdata) {
        var respdata = JSON.parse(respdata.replace(/'/g, '"'));
        items = respdata.slice();
        var arrLatLng = new Array();
        for (var i = 0; i < respdata.length; i++) {
            arrLatLng.push({
                location: new google.maps.LatLng(Number(respdata[i].Latitude), Number(respdata[i].Longitude)),
                weight: 3
            });
        }
        var uniqueDate = getUniqueDate(respdata);
        var uniqueOS = getUnique(respdata, "OS");
        var uniqueManufacturer = getUnique(respdata, "Manufacturer");
        var uniqueExchangeBid = getUnique(respdata, "ExchangeBid");
        var uniqueOutcome = getUnique(respdata, "Outcome");
        createList("Date", uniqueDate);
        createList("OS", uniqueOS);
        createList("Manufacturer", uniqueManufacturer);
        createList("ExchangeBid", uniqueExchangeBid);
        createList("Outcome", uniqueOutcome);
        $(".filter-item").on('click', function(e) {
            if(this.checked)
                mapData(this.value, $(this).attr("data-type"));
        })
        $(".filter").show();
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 3,
            center: {
                lat: Number(respdata[0].Latitude),
                lng: Number(respdata[0].Longitude)
            },
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
        heatmap = new google.maps.visualization.HeatmapLayer({
            radius: 20,
            data: arrLatLng,
            map: map
        });
        var gradient = ['rgba(0, 255, 255, 0)', 'rgba(0, 255, 255, 1)', 'rgba(0, 191, 255, 1)', 'rgba(0, 127, 255, 1)', 'rgba(0, 63, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 0, 223, 1)', 'rgba(0, 0, 191, 1)', 'rgba(0, 0, 159, 1)', 'rgba(0, 0, 127, 1)', 'rgba(63, 0, 91, 1)', 'rgba(127, 0, 63, 1)', 'rgba(191, 0, 31, 1)', 'rgba(255, 0, 0, 1)']
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
    }).fail(function() {
        alert("sorry!! we are not getting data");
        location.href = "/";
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