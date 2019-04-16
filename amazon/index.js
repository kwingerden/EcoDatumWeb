'use strict';

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
                title: 'Site',
                url: 'ACTS_Colpa/0.jpg',
                date: '2018-07-11'
            }
        ],
        data: [

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
                title: 'Site',
                url: 'ACTS_Light_Gap_1/0.jpg',
                date: '2018-07-11'
            },
            {
                title: 'Front',
                url: 'ACTS_Light_Gap_1/1.jpg',
                date: '2018-07-11'
            },
            {
                title: 'Top',
                url: 'ACTS_Light_Gap_1/2.jpg',
                date: '2018-07-11'
            }
        ],
        data: [

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
                title: 'Site',
                url: 'ACTS_Stream_5C_Site_1/0.jpg',
                date: '2018-06-03'
            }
        ],
        data: [
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Phosphorus',
                value: '15',
                unit: 'lb/a'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Nitrogen',
                value: '0',
                unit: 'lb/a'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'Turbidity',
                value: '60',
                unit: 'JTU (Jackson Turbidity Units)'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'Nitrate',
                value: '0',
                unit: 'ppm (Parts Per Million)'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'Phosphate',
                value: '2',
                unit: 'ppm (Parts Per Million)'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'pH',
                value: '6',
                unit: 'Water pH Scale'
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
                title: 'Site',
                url: 'ACTS_Stream_5C_Site_2/0.jpg',
                date: '2018-06-03'
            }
        ],
        data: [

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
                title: 'Site',
                url: 'ACTS_Stream_5C_Site_3/0.jpg',
                date: '2018-06-03'
            }
        ],
        data: [

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

function setSelectedMarker(marker, scroll = true) {
    markers.forEach(function (marker, index) {
        marker.infoWindow.close();
        let siteIndex = index + 1;
        marker.setZIndex(siteIndex);
        let rowElement = document.getElementById('site-row-' + siteIndex);
        rowElement.style.background = 'white';
    });
    let rowElement = document.getElementById('site-row-' + marker.zIndex);
    rowElement.style.background = 'lightgray';
    if (scroll) {
        rowElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
    marker.infoWindow.open(map, marker);
    map.panTo(marker.siteData.location);
    marker.setZIndex(100);
}

function prepareForModal() {
    /*
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
    */

    let dataCarousel = document.getElementById('data-carousel');
    dataCarousel.innerHTML = '';
    let dataTable = document.getElementById('data-table');
    //dataTable.innerHTML = '';

    return {
        dataCarousel: dataCarousel
    };
}

function showSiteDetails(marker) {
    let dataCarousel = document.getElementById('data-carousel');
    dataCarousel.innerHTML = '';

    let owlCarouselDiv = document.createElement('div');
    owlCarouselDiv.className = 'owl-carousel owl-theme';
    dataCarousel.appendChild(owlCarouselDiv);

    marker.siteData.images.forEach(function (img) {
        let titleElement = document.createElement('p');
        titleElement.style.textAlign = 'center';
        titleElement.style.fontSize = '10px';
        titleElement.innerText = img.title == null ? ' ' : img.title;

        let imgElement = document.createElement('img');
        imgElement.src = img.url;

        let dateLabel = document.createElement('p');
        dateLabel.style.textAlign = 'center';
        dateLabel.style.fontSize = '10px';
        dateLabel.innerText = img.date;

        let itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.appendChild(titleElement);
        itemDiv.appendChild(imgElement);
        itemDiv.appendChild(dateLabel);

        owlCarouselDiv.appendChild(itemDiv);
    });

    $('.owl-carousel').owlCarousel({
        loop: false,
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

    let dataTable = document.getElementById('data-table');
    dataTable.style.display = 'none';
    let dataTableBody = document.getElementById('data-table-body');
    dataTableBody.innerHTML = '';
    if (marker.siteData.data.length > 0) {
        marker.siteData.data.forEach(function (data) {
            let dateColumn = document.createElement('td');
            dateColumn.innerText = data.date;

            let factorColumn = document.createElement('td');
            factorColumn.innerText = data.factor;

            let typeColumn = document.createElement('td');
            typeColumn.innerText = data.type;

            let valueColumn = document.createElement('td');
            valueColumn.innerText = data.value;

            let unitColumn = document.createElement('td');
            unitColumn.innerText = data.unit;

            let tableRow = document.createElement('tr');
            tableRow.appendChild(dateColumn);
            tableRow.appendChild(factorColumn);
            tableRow.appendChild(typeColumn);
            tableRow.appendChild(valueColumn);
            tableRow.appendChild(unitColumn);

            dataTableBody.appendChild(tableRow);
        });
        $('#data').DataTable();
        dataTable.style.display = 'block';
    }

    $('#site-data-modal').dialog({
        title: marker.siteData.title,
        modal: true,
        width: $(window).width() - 100,
        height: $(window).height() - 100
    });
    let topElement = document.getElementById('top');
    topElement.scrollIntoView();
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
        setSelectedMarker(marker, false);
        showSiteDetails(marker);
    };

    let siteTitle = document.getElementById('site-title-' + siteIndex);
    siteTitle.innerText = siteIndex + '.' + siteData.title;
    siteTitle.onclick = function () {
        setSelectedMarker(marker, false);
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
        setSelectedMarker(marker, false);
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