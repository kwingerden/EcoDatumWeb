'use strict';

const mapInfo = {
    mapCenter: {
        lat: 34.883910,
        lng: -120.421557
    },
    mapType: 'satellite',
    startZoom: 20
};

let siteData = [
    {
        title: 'Tree 1',
        location: {
            lat: 34.883979,
            lng: -120.422244
        },
        images: [
            {
                title: 'Tree 1',
                url: 'tree1/2018-05-30.jpg',
                date: '2018-05-30'
            },
            {
                title: 'Tree 1',
                url: 'tree1/2019-05-04.jpg',
                date: '2019-05-04'
            },
            {
                title: 'Tree 1',
                url: 'tree1/2021-06-01.jpg',
                date: '2021-06-01'
            },
            {
                title: 'Tree 1',
                url: 'tree1/2022-05-24.jpg',
                date: '2022-05-24'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Latitude',
                value: '34.883979',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Longitude',
                value: '-120.422244',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '33',
                unit: 'kg'
            },
            {
                date: '2019-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '35.47',
                unit: 'kg'
            },
            {
                date: '2021-06-01',
                factor: 'Biotic',
                type: 'Carbon',
                value: '94',
                unit: 'kg'
            }
        ]
    },
    {
        title: 'Tree 2',
        location: {
            lat: 34.884032,
            lng: -120.421759
        },
        images: [
            {
                title: 'Tree 2',
                url: 'tree2/2018-05-30.jpg',
                date: '2018-05-30'
            },
            {
                title: 'Tree 2',
                url: 'tree2/2019-05-04.jpg',
                date: '2019-05-04'
            },
            {
                title: 'Tree 2',
                url: 'tree2/2021-06-01.jpg',
                date: '2021-06-01'
            },
            {
                title: 'Tree 2',
                url: 'tree2/2022-05-24.jpg',
                date: '2022-05-24'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Latitude',
                value: '34.884032',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Longitude',
                value: '-120.421759',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '139',
                unit: 'kg'
            },
            {
                date: '2019-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '164.62',
                unit: 'kg'
            },
            {
                date: '2021-06-01',
                factor: 'Biotic',
                type: 'Carbon',
                value: '238',
                unit: 'kg'
            },
            {
                date: '2022-05-24',
                factor: 'Biotic',
                type: 'Carbon',
                value: '257',
                unit: 'kg'
            }
        ]
    },
    {
        title: 'Tree 3',
        location: {
            lat: 34.884147,
            lng: -120.421879
        },
        images: [
            {
                title: 'Tree 3',
                url: 'tree3/2018-05-30.jpg',
                date: '2018-05-30'
            },
            {
                title: 'Tree 3',
                url: 'tree3/2019-05-04.jpg',
                date: '2019-05-04'
            },
            {
                title: 'Tree 3',
                url: 'tree3/2021-06-01.jpg',
                date: '2021-06-01'
            },
            {
                title: 'Tree 3',
                url: 'tree3/2022-05-24.jpg',
                date: '2022-05-24'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Latitude',
                value: '34.884147',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Longitude',
                value: '-120.421879',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '276',
                unit: 'kg'
            },
            {
                date: '2019-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '294.28',
                unit: 'kg'
            },
            {
                date: '2021-06-01',
                factor: 'Biotic',
                type: 'Carbon',
                value: '484',
                unit: 'kg'
            },
            {
                date: '2022-05-24',
                factor: 'Biotic',
                type: 'Carbon',
                value: '610',
                unit: 'kg'
            }
        ]
    },
    {
        title: 'Tree 4',
        location: {
            lat: 34.884177,
            lng: -120.421666
        },
        images: [
            {
                title: 'Tree 4',
                url: 'tree4/2018-05-30.jpg',
                date: '2018-05-30'
            },
            {
                title: 'Tree 4',
                url: 'tree4/2019-05-04.jpg',
                date: '2019-05-04'
            },
            {
                title: 'Tree 4',
                url: 'tree4/2021-06-01.jpg',
                date: '2021-06-01'
            },
            {
                title: 'Tree 4',
                url: 'tree4/2022-05-24.jpg',
                date: '2022-05-24'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Latitude',
                value: '34.884177',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Longitude',
                value: '-120.421666',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '124',
                unit: 'kg'
            },
            {
                date: '2019-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '144.94',
                unit: 'kg'
            },
            {
                date: '2021-06-01',
                factor: 'Biotic',
                type: 'Carbon',
                value: '200',
                unit: 'kg'
            },
            {
                date: '2022-05-24',
                factor: 'Biotic',
                type: 'Carbon',
                value: '257',
                unit: 'kg'
            }
        ]
    },
    {
        title: 'Tree 5',
        location: {
            lat: 34.884130,
            lng: -120.421577
        },
        images: [
            {
                title: 'Tree 5',
                url: 'tree5/2018-05-30.jpg',
                date: '2018-05-30'
            },
            {
                title: 'Tree 5',
                url: 'tree5/2019-05-04.jpg',
                date: '2019-05-04'
            },
            {
                title: 'Tree 5',
                url: 'tree5/2021-06-01.jpg',
                date: '2021-06-01'
            },
            {
                title: 'Tree 5',
                url: 'tree5/2022-05-24.jpg',
                date: '2022-05-24'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Latitude',
                value: '34.884130',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Longitude',
                value: '-120.421577',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '67',
                unit: 'kg'
            },
            {
                date: '2019-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '47.69',
                unit: 'kg'
            },
            {
                date: '2021-06-01',
                factor: 'Biotic',
                type: 'Carbon',
                value: '57',
                unit: 'kg'
            },
            {
                date: '2022-05-24',
                factor: 'Biotic',
                type: 'Carbon',
                value: '84',
                unit: 'kg'
            }
        ]
    },
    {
        title: 'Tree 6',
        location: {
            lat: 34.884085,
            lng: -120.421600
        },
        images: [
            {
                title: 'Tree 6',
                url: 'tree6/2018-05-30.jpg',
                date: '2018-05-30'
            },
            {
                title: 'Tree 6',
                url: 'tree6/2019-05-04.jpg',
                date: '2019-05-04'
            },
            {
                title: 'Tree 6',
                url: 'tree6/2021-06-01.jpg',
                date: '2021-06-01'
            },
            {
                title: 'Tree 6',
                url: 'tree6/2022-05-24.jpg',
                date: '2022-05-24'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Latitude',
                value: '34.884085',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Longitude',
                value: '-120.421600',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '33',
                unit: 'kg'
            },
            {
                date: '2019-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '35.67',
                unit: 'kg'
            },
            {
                date: '2021-06-01',
                factor: 'Biotic',
                type: 'Carbon',
                value: '48',
                unit: 'kg'
            },
            {
                date: '2022-05-24',
                factor: 'Biotic',
                type: 'Carbon',
                value: '57',
                unit: 'kg'
            }
        ]
    },
    {
        title: 'Tree 7',
        location: {
            lat: 34.884036,
            lng: -120.421627
        },
        images: [
            {
                title: 'Tree 7',
                url: 'tree7/2018-05-30.jpg',
                date: '2018-05-30'
            }
        ],
        notes: [
            "2019-05-04: Unfortunately, this tree was removed from the Righetti campus and will no longer be tracked."
        ],
        data: [
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Latitude',
                value: '34.884036',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Longitude',
                value: '-120.421627',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '24',
                unit: 'kg'
            }
        ]
    },
    {
        title: 'Tree 8',
        location: {
            lat: 34.883844,
            lng: -120.421487
        },
        images: [
            {
                title: 'Tree 8',
                url: 'tree8/2018-05-30.jpg',
                date: '2018-05-30'
            },
            {
                title: 'Tree 8',
                url: 'tree8/2019-05-04.jpg',
                date: '2019-05-04'
            },
            {
                title: 'Tree 8',
                url: 'tree8/2021-06-01.jpg',
                date: '2021-06-01'
            },
            {
                title: 'Tree 8',
                url: 'tree8/2022-05-24.jpg',
                date: '2022-05-24'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Latitude',
                value: '34.883844',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Longitude',
                value: '-120.421487',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '132',
                unit: 'kg'
            },
            {
                date: '2019-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '113.79',
                unit: 'kg'
            },
            {
                date: '2021-06-01',
                factor: 'Biotic',
                type: 'Carbon',
                value: '124',
                unit: 'kg'
            },
            {
                date: '2022-05-24',
                factor: 'Biotic',
                type: 'Carbon',
                value: '138',
                unit: 'kg'
            }
        ]
    },
    {
        title: 'Tree 9',
        location: {
            lat: 34.883953,
            lng: -120.421279
        },
        images: [
            {
                title: 'Tree 9',
                url: 'tree9/2018-05-30.jpg',
                date: '2018-05-30'
            }
        ],
        notes: [
            "2019-05-04: Unfortunately, this tree was removed from the Righetti campus and will no longer be tracked."
        ],
        data: [
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Latitude',
                value: '34.883953',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Longitude',
                value: '-120.421279',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '25',
                unit: 'kg'
            }
        ]
    },
    {
        title: 'Tree 10',
        location: {
            lat: 34.883964,
            lng: -120.421024
        },
        images: [
            {
                title: 'Tree 10',
                url: 'tree10/2018-05-30.jpg',
                date: '2018-05-30'
            },
            {
                title: 'Tree 10',
                url: 'tree10/2019-05-04.jpg',
                date: '2019-05-04'
            },
            {
                title: 'Tree 10',
                url: 'tree10/2021-06-01.jpg',
                date: '2021-06-01'
            },
            {
                title: 'Tree 10',
                url: 'tree10/2022-05-24.jpg',
                date: '2022-05-24'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Latitude',
                value: '34.883964',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Location',
                type: 'Longitude',
                value: '-120.421024',
                unit: '°'
            },
            {
                date: '2018-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '57',
                unit: 'kg'
            },
            {
                date: '2019-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '45.73',
                unit: 'kg'
            },
            {
                date: '2021-06-01',
                factor: 'Biotic',
                type: 'Carbon',
                value: '60',
                unit: 'kg'
            },
            {
                date: '2022-05-24',
                factor: 'Biotic',
                type: 'Carbon',
                value: '68',
                unit: 'kg'
            }
        ]
    },
    {
        title: 'Tree 11',
        location: {
            lat: 34.884004,
            lng: -120.420957
        },
        images: [
            {
                title: 'Tree 11',
                url: 'tree11/2019-05-04.jpg',
                date: '2019-05-04'
            },
            {
                title: 'Tree 11',
                url: 'tree11/2021-06-01.jpg',
                date: '2021-06-01'
            },
            {
                title: 'Tree 11',
                url: 'tree11/2022-05-24.jpg',
                date: '2022-05-24'
            }
        ],
        notes: [
            "2019-05-30: This is a new tree added to the dataset since trees 7 and 9 have been removed."
        ],
        data: [
            {
                date: '2019-05-04',
                factor: 'Location',
                type: 'Latitude',
                value: '34.884004',
                unit: '°'
            },
            {
                date: '2019-05-04',
                factor: 'Location',
                type: 'Longitude',
                value: '-120.420957',
                unit: '°'
            },
            {
                date: '2019-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '30.57',
                unit: 'kg'
            },
            {
                date: '2021-06-01',
                factor: 'Biotic',
                type: 'Carbon',
                value: '38',
                unit: 'kg'
            },
            {
                date: '2022-05-24',
                factor: 'Biotic',
                type: 'Carbon',
                value: '49',
                unit: 'kg'
            }
        ]
    },
    {
        title: 'Tree 12',
        location: {
            lat: 34.884088,
            lng: -120.420873
        },
        images: [
            {
                title: 'Tree 12',
                url: 'tree12/2019-05-04.jpg',
                date: '2019-05-04'
            }
        ],
        notes: [
            "2019-05-04: This is a new tree added to the dataset since trees 7 and 9 have been removed.\n2021-06-01: This tree has been removed."
        ],
        data: [
            {
                date: '2019-05-04',
                factor: 'Location',
                type: 'Latitude',
                value: '34.884088',
                unit: '°'
            },
            {
                date: '2019-05-04',
                factor: 'Location',
                type: 'Longitude',
                value: '-120.420873',
                unit: '°'
            },
            {
                date: '2019-05-30',
                factor: 'Biotic',
                type: 'Carbon',
                value: '24.88',
                unit: 'kg'
            }
        ]
    },
    {
        title: 'Tree 13',
        location: {
            lat: 34.883797,
            lng: -120.420917
        },
        images: [
            {
                title: 'Tree 13',
                url: 'tree13/2021-06-01.jpg',
                date: '2021-06-01'
            },
            {
                title: 'Tree 13',
                url: 'tree13/2022-05-24.jpg',
                date: '2022-05-24'
            }
        ],
        notes: [
            "2021-06-01: This is a new tree added to the dataset since tree 12 has been removed."
        ],
        data: [
            {
                date: '2021-06-01',
                factor: 'Biotic',
                type: 'Carbon',
                value: '89',
                unit: 'kg'
            },
            {
                date: '2022-05-24',
                factor: 'Biotic',
                type: 'Carbon',
                value: '85',
                unit: 'kg'
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

function showSiteDetails(marker) {
    let dataCarousel = document.getElementById('data-carousel');
    dataCarousel.innerHTML = '';

    let owlCarouselDiv = document.createElement('div');
    owlCarouselDiv.className = 'owl-carousel owl-theme';
    dataCarousel.appendChild(owlCarouselDiv);

    marker.siteData.images.forEach(function (img) {
        let imgElement = document.createElement('img');
        imgElement.src = img.url;

        let dateLabel = document.createElement('p');
        dateLabel.style.textAlign = 'center';
        dateLabel.style.fontSize = '16px';
        dateLabel.innerText = img.date;

        let itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.appendChild(imgElement);
        itemDiv.appendChild(dateLabel);

        owlCarouselDiv.appendChild(itemDiv);
    });

    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        autoHeight: false,
        center: false,
        items: 3
    });

    let dataNotesText = document.getElementById('data-notes-text');
    dataNotesText.value = '';
    marker.siteData.notes.forEach(function (note, index) {
        if (index === 0) {
            dataNotesText.value = note;
        } else {
            dataNotesText.value = dataNotesText.value + '\n' + note;
        }

    });

    let dataTableDiv = document.getElementById('data-table-div');
    dataTableDiv.innerHTML = '';

    let dataTable = document.createElement('table');
    dataTable.id = 'data-table';
    dataTable.className = 'display';
    dataTable.style.width = '100%';

    let dataTableHeader = document.createElement('thead');
    let dataTableHeaderRow = document.createElement('tr');
    let dataTableHeaderDate = document.createElement('th');
    dataTableHeaderDate.innerText = 'Date';
    let dataTableHeaderFactor = document.createElement('th');
    dataTableHeaderFactor.innerText = 'Factor';
    let dataTableHeaderType = document.createElement('th');
    dataTableHeaderType.innerText = 'Type';
    let dataTableHeaderValue = document.createElement('th');
    dataTableHeaderValue.innerText = 'Value';
    let dataTableHeaderUnit = document.createElement('th');
    dataTableHeaderUnit.innerText = 'Unit';
    dataTableHeaderRow.appendChild(dataTableHeaderDate);
    dataTableHeaderRow.appendChild(dataTableHeaderFactor);
    dataTableHeaderRow.appendChild(dataTableHeaderType);
    dataTableHeaderRow.appendChild(dataTableHeaderValue);
    dataTableHeaderRow.appendChild(dataTableHeaderUnit);
    dataTableHeader.appendChild(dataTableHeaderRow);

    let dataTableBody = document.createElement('tbody');

    let dataTableFooter = document.createElement('tfoot');
    let dataTableFooterRow = document.createElement('tr');
    let dataTableFooterDate = document.createElement('th');
    dataTableFooterDate.innerText = 'Date';
    let dataTableFooterFactor = document.createElement('th');
    dataTableFooterFactor.innerText = 'Factor';
    let dataTableFooterType = document.createElement('th');
    dataTableFooterType.innerText = 'Type';
    let dataTableFooterValue = document.createElement('th');
    dataTableFooterValue.innerText = 'Value';
    let dataTableFooterUnit = document.createElement('th');
    dataTableFooterUnit.innerText = 'Unit';
    dataTableFooterRow.appendChild(dataTableFooterDate);
    dataTableFooterRow.appendChild(dataTableFooterFactor);
    dataTableFooterRow.appendChild(dataTableFooterType);
    dataTableFooterRow.appendChild(dataTableFooterValue);
    dataTableFooterRow.appendChild(dataTableFooterUnit);
    dataTableFooter.appendChild(dataTableFooterRow);

    dataTable.appendChild(dataTableHeader);
    dataTable.appendChild(dataTableBody);
    dataTable.appendChild(dataTableFooter);

    dataTableDiv.appendChild(dataTable);

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
            tableRow.style.textAlign = 'center';
            tableRow.appendChild(dateColumn);
            tableRow.appendChild(factorColumn);
            tableRow.appendChild(typeColumn);
            tableRow.appendChild(valueColumn);
            tableRow.appendChild(unitColumn);

            dataTableBody.appendChild(tableRow);
        });
    }
    $('#data-table').DataTable();

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
    titleElement.onclick = function () {
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
    siteTitle.innerText = siteIndex + '. ' + siteData.title;
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

window.onload = function () {
    updateElementHeights();
    if (window.location.hash) {
        let siteNumber = parseInt(window.location.hash.replace("#", "")) - 1;
        let marker = markers[siteNumber];
        setSelectedMarker(marker);
    }
};
window.onresize = updateElementHeights;
