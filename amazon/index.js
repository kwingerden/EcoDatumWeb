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
    markers.forEach(function (marker, index) {
        marker.infoWindow.close();
        let siteIndex = index + 1;
        marker.setZIndex(siteIndex);
        let rowElement = document.getElementById('site-row-' + siteIndex);
        rowElement.style.background = 'white';
    });
    let rowElement = document.getElementById('site-row-' + marker.zIndex);
    rowElement.style.background = 'lightgray';
    rowElement.scrollIntoView();
    marker.infoWindow.open(map, marker);
    map.panTo(marker.siteData.location);
    marker.setZIndex(100);
}

function prepareForModal() {
    let siteDataModal = document.getElementById('site-data-modal');
    siteDataModal.style.display = 'block';

    let siteCloseModal = document.getElementById('site-close-modal');
    siteCloseModal.onclick = function () {
        siteDataModal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === siteDataModal) {
            siteDataModal.style.display = 'none';
        }
    };

    let dataCarousel = document.getElementById('data-carousel');
    dataCarousel.innerHTML = '';
    let dataTable = document.getElementById('data-table');
    //dataTable.innerHTML = '';

    return {
        dataCarousel: dataCarousel,
        dataTable: dataTable
    };
}

function showSiteDetails(marker) {
    let dataDivs = prepareForModal();

    let siteTitle = document.createElement('h1');
    siteTitle.innerText = marker.siteData.title;
    dataDivs.dataCarousel.appendChild(siteTitle);

    let owlCarouselDiv = document.createElement('div');
    owlCarouselDiv.className = 'owl-carousel owl-theme';
    dataDivs.dataCarousel.appendChild(owlCarouselDiv);

    for (let i = 1; i < 20; i++) {
        let h4Element = document.createElement('h4');
        h4Element.innerText = i.toString();
        let itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.appendChild(h4Element);
        owlCarouselDiv.appendChild(itemDiv);
    }

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    //let dataTable = document.getElementById('data-table');
    //dataDivs.dataTable.appendChild(dataTable);
    $('#data').DataTable();
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
        zIndex: siteIndex
    });
    markers.push(marker);

    marker.siteData = siteData;

    let titleElement = document.createElement('a');
    titleElement.href = '#';
    titleElement.innerText = siteData.title;
    titleElement.onclick = function() {
        showSiteDetails(marker);
    };
    marker.infoWindow = new google.maps.InfoWindow({
        content: titleElement
    });
    marker.addListener('click', function () {
        setSelectedMarker(marker);
    });

    let siteRow = document.getElementById('site-row-' + siteIndex);
    siteRow.ondblclick = function () {
        setSelectedMarker(marker);
        showSiteDetails(marker);
    };

    let siteTitle = document.getElementById('site-title-' + siteIndex);
    siteTitle.innerText = siteIndex + '.' + siteData.title;
    siteTitle.onclick = function () {
        setSelectedMarker(marker);
    };
    siteTitle.ondblclick = function () {
        showSiteDetails(marker);
    };

    let siteImage = document.getElementById('site-image-' + siteIndex);
    siteImage.src = siteData.images[0].url;
    siteImage.style.cursor = 'pointer';
    siteImage.onmouseover = function () {
        siteImage.style.borderColor = 'blue';
        siteImage.style.borderStyle = 'solid';
        siteImage.style.borderWidth = 'thin';
    };
    siteImage.onmouseout = function () {
        siteImage.style.border = '';
    };
    siteImage.onclick = function () {
        setSelectedMarker(marker);
    };
    siteImage.ondblclick = function () {
        showSiteDetails(marker);
    };
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