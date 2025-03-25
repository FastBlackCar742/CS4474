let map, directionsService, directionsRenderer, originAutocomplete, destinationAutocomplete;

function initMap() {
    const defaultLocation = { lat: 43.0086, lng: -81.2732 }; // UWO

    map = new google.maps.Map(document.getElementById("map"), {
        center: defaultLocation,
        zoom: 17,
        minZoom: 17,
        mapId: "706df79c8d75965d",
        tilt: 47.5
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // Initialize autocomplete for origin and destination inputs
    const originInput = document.getElementById("origin");
    const destinationInput = document.getElementById("destination");

    originAutocomplete = new google.maps.places.Autocomplete(originInput);
    destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);

    const westernBounds = new google.maps.LatLngBounds(
        { lat: 43.004, lng: -81.282 },
        { lat: 43.012, lng: -81.265 }
    );

    originAutocomplete.setBounds(westernBounds);
    destinationAutocomplete.setBounds(westernBounds);
    originAutocomplete.setOptions({ strictBounds: true });
    destinationAutocomplete.setOptions({ strictBounds: true });
}

function getDirections() {
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;

    const request = {
        origin: origin,
            destination: destination,
        travelMode: google.maps.TravelMode.WALKING // Mode of transportation
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