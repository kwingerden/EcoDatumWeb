// Righetti High School
const ERHS_MAP_CENTER = {
    lat: 34.883910,
    lng: -120.421557
};
const MAP_TYPE_ID = 'satellite';

let mapCenter = ERHS_MAP_CENTER;
let mapElement;
let map;
let maxZoomService;

function panToAndMaxZoomAtLatLng(latlng) {
    maxZoomService.getMaxZoomAtLatLng(latlng, function (response) {
        if (response.status === 'OK') {
            console.log('Max zoom at ' + latlng + ' is ' + response.zoom);
            map.setZoom(response.zoom);
            map.panTo(latlng);
        } else {
            console.log('Failed to get max zoom at ' + latlng);
        }
    })
}

function googleMapsCallback() {
    mapElement = document.getElementById('map');
    maxZoomService = new google.maps.MaxZoomService();
    map = new google.maps.Map(mapElement, {
        center: mapCenter,
        mapTypeId: MAP_TYPE_ID,
        zoom: 20,
        tilt: 45,
        fullscreenControl: true,
        mapTypeControl: false,
        panControl: true,
        rotateControl: true,
        scaleControl: true,
        streetViewControl: false,
        zoomControl : true
    });

    addERHSSites();
}

function addERHSSite(lat, lng, markerText, siteImageSrc, siteTitle, kgCarbon) {
    let header = document.createElement('h2');
    header.innerText = siteTitle;

    let image = document.createElement('img');
    image.src = siteImageSrc;
    image.width = 400;
    image.alt = markerText;

    let p = document.createElement('p');
    p.innerHTML = '<b>2018: </b> ' + kgCarbon + 'kg of Carbon';

    let content = document.createElement('div');
    content.appendChild(header);
    content.appendChild(image);
    content.appendChild(p);

    let infoWindow = new google.maps.InfoWindow({
        content: content
    });
    let markerLabel = {
        text: markerText,
        color: 'black',
        fontSize: '10px',
        fontWeight: 'bold'
    };
    let icon = {
        labelOrigin: new google.maps.Point(16, 12),
        url: 'tree.png'
    };
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        title: markerLabel,
        label: markerLabel,
        icon: icon,
        map: map,
        animation: google.maps.Animation.DROP
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
        panToAndMaxZoomAtLatLng(marker.getPosition());
    });
}

function addERHSSites() {
    addERHSSite(
        34.883979,
        -120.422244,
        '1',
        'ehrs/site1/2.png',
        'Tree 1',
        33);
    addERHSSite(
        34.884032,
        -120.421759,
        '2',
        'ehrs/site2/2.png',
        'Tree 2',
        139);
    addERHSSite(
        34.884147,
        -120.421879,
        '3',
        'ehrs/site2/3.png',
        'Tree 3',
        276);
    addERHSSite(
        34.884177,
        -120.421666,
        '4',
        'ehrs/site4/2.png',
        'Tree 4',
        124);
    addERHSSite(
        34.884130,
        -120.421577,
        '5',
        'ehrs/site2/4.png',
        'Tree 5',
        67);
    addERHSSite(
        34.884085,
        -120.421600,
        '6',
        'ehrs/site2/6.png',
        'Tree 6',
        33);
    addERHSSite(
        34.884036,
        -120.421627,
        '7',
        'ehrs/site2/5.png',
        'Tree 7',
        24);
    addERHSSite(
        34.883844,
        -120.421487,
        '8',
        'ehrs/site3/2.png',
        'Tree 8',
        132);
    addERHSSite(
        34.883953,
        -120.421279,
        '9',
        'ehrs/site3/4.png',
        'Tree 9',
        25);
    addERHSSite(
        34.883964,
        -120.421024,
        '10',
        'ehrs/site3/3.png',
        'Tree 10',
        57);
}

function addAmazonSites() {

}
