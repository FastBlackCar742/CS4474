let map, directionsService, directionsRenderer;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 40.7128, lng: -74.0060 } // Default to New York
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
}

function getDirections() {
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;

    const request = {
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING'
    };

    directionsService.route(request, function (result, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
        } else {
            alert('Directions request failed due to ' + status);
        }
    });
}

window.onload = initMap;
