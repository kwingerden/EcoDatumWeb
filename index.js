// Righetti High School
const ERHS_MAP_CENTER = {
    lat: 34.884147,
    lng: -120.421879
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

function addERHSSite(lat, lng, title, imageSrc) {
    let site = document.createElement("div");
    site.id = title;
    let image = document.createElement("img");
    image.src = imageSrc;
    image.width = 400;
    image.alt = title;
    site.appendChild(image);

    let sites = document.getElementById('sites');
    sites.appendChild(site);

    let infoWindow = new google.maps.InfoWindow({
        content: site
    });
    let markerLabel = {
        text: title,
        color: 'white',
        fontSize: '10px'
    };
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        title: title,
        label: markerLabel,
        icon: 'marker.png',
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
        'Tree 1',
        'ehrs/site1/2.png');
    addERHSSite(
        34.884032,
        -120.421759,
        'Tree 2',
        'ehrs/site2/2.png');
    addERHSSite(
        34.884147,
        -120.421879,
        'Tree 3',
        'ehrs/site2/3.png');
    addERHSSite(
        34.884036,
        -120.421627,
        'Tree 7',
        'ehrs/site2/5.png');
}

function addAmazonSites() {

}
