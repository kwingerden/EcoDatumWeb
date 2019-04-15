const mapInfo = {
    mapCenter: {
        lat: -3.254096,
        lng: -72.911224
    },
    mapType: 'satellite',
    startZoom: 16
};

let siteData = [
    {
        zIndex: 1,
        isSelected: false,
        title: 'ACTS Colpa',
        location: {
            lat: -3.254096,
            lng: -72.911224
        },
        images: [
            {
                url: 'ACTS_Colpa/0.jpg',
                date: '2018-06-03'
            }
        ]
    },
    {
        zIndex: 2,
        isSelected: false,
        title: 'ACTS Light Gap 1',
        location: {
            lat: -3.251925,
            lng: -72.906870
        },
        images: [
            {
                url: 'ACTS_Light_Gap_1/0.jpg',
                date: '2018-06-03'
            },
            {
                url: 'ACTS_Light_Gap_1/1.jpg',
                date: '2018-06-03'
            },
            {
                url: 'ACTS_Light_Gap_1/2.jpg',
                date: '2018-06-03'
            }
        ]
    },
    {
        zIndex: 3,
        isSelected: false,
        title: 'ACTS Stream 5C Site 1',
        location: {
            lat: -3.252082,
            lng: -72.909280
        },
        images: [
            {
                url: 'ACTS_Stream_5C_Site_1/0.jpg',
                date: '2018-06-03'
            }
        ]
    },
    {
        index: 4,
        isSelected: false,
        title: 'ACTS Stream 5C Site 2',
        location: {
            lat: -3.252321,
            lng: -72.909226
        },
        images: [
            {
                url: 'ACTS_Stream_5C_Site_2/0.jpg',
                date: '2018-06-03'
            }
        ]
    },
    {
        zIndex: 5,
        isSelected: false,
        title: 'ACTS Stream 5C Site 3',
        location: {
            lat: -3.252352,
            lng: -72.909386
        },
        images: [
            {
                url: 'ACTS_Stream_5C_Site_3/0.jpg',
                date: '2018-06-03'
            }
        ]
    }
];

const mapElement = document.getElementById('map');
const sitesElement = document.getElementById('sites');

const map = new google.maps.Map(
    mapElement,
    {
        center: mapInfo.mapCenter,
        mapTypeId: mapInfo.mapType,
        zoom: mapInfo.startZoom,
        tilt: 45,
        fullscreenControl: true,
        mapTypeControl: false,
        panControl: true,
        rotateControl: true,
        scaleControl: true,
        streetViewControl: false,
        zoomControl: true
    });

const markers = [];

function setSelectedMarker(marker) {
    markers.forEach(function (marker) {
        marker.infoWindow.close();
        marker.siteData.isSelected = false;
        marker.setZIndex(marker.siteData.zIndex);
    });
    marker.infoWindow.open(map, marker);
    map.panTo(marker.siteData.location);
    marker.siteData.isSelected = true;
    marker.setZIndex(100);
}

function showSiteDetails(marker) {
    let siteDataModal = document.getElementById('site-data-modal');
    siteDataModal.style.display = 'block';
    let siteCloseModal = document.getElementById('site-close-modal');
    siteCloseModal.onclick = function() {
        siteDataModal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target === siteDataModal) {
            siteDataModal.style.display = 'none';
        }
    };
    let siteContentModal = document.getElementById('site-content-modal');
    siteContentModal.childNodes.forEach(function (node) {
        node.remove();
    });
    let siteContent = document.createElement('p');
    siteContent.innerText = marker.siteData.title;
    siteContentModal.appendChild(siteContent);
}

siteData.forEach(function (siteData, index) {
    let siteIndex = index + 1;

    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(siteData.location.lat, siteData.location.lng),
        title: siteData.title,
        label: siteIndex.toString(),
        map: map,
        animation: google.maps.Animation.DROP,
        optimized: false,
        zIndex: siteData.zIndex
    });
    markers.push(marker);

    marker.siteData = siteData;

    marker.infoWindow = new google.maps.InfoWindow({
        content: siteData.title
    });
    marker.addListener('click', function() {
        setSelectedMarker(marker);
    });
    marker.addListener('dblclick', function() {
        showSiteDetails(marker);
    });

    let siteRow = document.getElementById('site-row-' + siteIndex);
    siteRow.onclick = function () {
        setSelectedMarker(marker);
    };
    siteRow.ondblclick = function () {
        showSiteDetails(marker);
    };

    let siteTitle = document.getElementById('site-title-' + siteIndex);
    siteTitle.innerText = siteIndex + '.' + siteData.title;

    let siteImage = document.getElementById('site-image-' + siteIndex);
    siteImage.src = siteData.images[0].url;
});

function updateElementHeights() {
    let height = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    sitesElement.style.height = height + 'px';
    mapElement.style.height = height + 'px';
}

window.onload = updateElementHeights;
window.onresize = updateElementHeights;