// Righetti High School
const ERHS_MAP_INFO = {
    mapCenter: {
        lat: 34.883910,
        lng: -120.421557
    },
    startZoom: 20,
    urlHash: '#erhs'
};

const AMAZON_MAP_INFO = {
    mapCenter: {
        lat: -3.254096,
        lng: -72.911224
    },
    startZoom: 16,
    urlHash: '#amazon'
};

const MAP_TYPE_ID = 'satellite';

let mapInfo = window.location.hash === ERHS_MAP_INFO.urlHash ? ERHS_MAP_INFO : AMAZON_MAP_INFO;
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
};

function googleMapsCallback() {
    mapElement = document.getElementById('map');
    maxZoomService = new google.maps.MaxZoomService();
    map = new google.maps.Map(mapElement, {
        center: mapInfo.mapCenter,
        mapTypeId: MAP_TYPE_ID,
        zoom: mapInfo.startZoom,
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
    addAmazonSites();
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
        title: siteTitle,
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

function addAmazonSite(lat, lng, markerText, siteImageSrc, siteTitle) {
    let header = document.createElement('h2');
    header.innerText = siteTitle;

    let image = document.createElement('img');
    image.src = siteImageSrc;
    image.width = 400;
    image.alt = markerText;

    let p = document.createElement('p');
    //p.innerHTML = '<b>2018: </b> ' + kgCarbon + 'kg of Carbon';

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
        title: siteTitle,
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

function addAmazonSites() {
    addAmazonSite(
        -3.254096,
        -72.911224,
        '1',
        'amazon/ACTS_Colpa/0.jpg',
        'ACTS Colpa');
    addAmazonSite(
        -3.251925,
        -72.906870,
        '2',
        'amazon/ACTS_Light_Gap_1/0.jpg',
        'ACTS Light Gap 1');
    addAmazonSite(
        -3.252082,
        -72.909280,
        '3',
        'amazon/ACTS_Stream_5C_Site_1/0.jpg',
        'ACTS Stream 5C Site 1');
    addAmazonSite(
        -3.252321,
        -72.909226,
        '4',
        'amazon/ACTS_Stream_5C_Site_2/0.jpg',
        'ACTS Stream 5C Site 2');
    addAmazonSite(
        -3.252352,
        -72.909386,
        '5',
        'amazon/ACTS_Stream_5C_Site_3/0.jpg',
        'ACTS Stream 5C Site 3');
    addAmazonSite(
        -3.252294,
        -72.909422,
        '6',
        'amazon/ACTS_Stream_5C_Site_4/0.jpg',
        'ACTS Stream 5C Site 4');
    addAmazonSite(
        -3.252444,
        -72.909214,
        '7',
        'amazon/ACTS_Stream_5C_Site_5/0.jpg',
        'ACTS Stream 5C Site 5');
    addAmazonSite(
        -3.248916,
        -72.908256,
        '7',
        'amazon/ACTS_Stream_A/0.jpg',
        'ACTS Stream A');
    addAmazonSite(
        -3.250191,
        -72.908406,
        '7',
        'amazon/ACTS_Stream_B/0.jpg',
        'ACTS Stream B');
    addAmazonSite(
        -3.249309,
        -72.910340,
        '7',
        'amazon/ACTS_Stream_D/0.jpg',
        'ACTS Stream D');
    addAmazonSite(
        -3.251251,
        -72.907290,
        '7',
        'amazon/ACTS_Tree_5/0.jpg',
        'ACTS Tree 5');
    addAmazonSite(
        -3.251281,
        -72.907121,
        '7',
        'amazon/ACTS_Tree_5a/0.jpg',
        'ACTS Tree 5a');
    addAmazonSite(
        -3.251281,
        -72.906731,
        '7',
        'amazon/ACTS_Tree_8/0.jpg',
        'ACTS Tree 8');
    addAmazonSite(
        -3.252049,
        -72.906150,
        '7',
        'amazon/ACTS_Tree_11/0.jpg',
        'ACTS Tree 11');
    addAmazonSite(
        -3.257822,
        -72.917472,
        '7',
        'amazon/Napo_Lodge/0.jpg',
        'Napo Lodge');
    addAmazonSite(
        -3.258941,
        -72.915703,
        '7',
        'amazon/ReNuPeru_Fish_Pond/0.jpg',
        'ReNuPeru Fish Pond');
}

