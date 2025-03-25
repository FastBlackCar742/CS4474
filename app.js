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

    const middlesexPolygonCoords = [
        //circle
        { lat: 43.00905872951798, lng: -81.27019767690736 },
        { lat: 43.00905835872149, lng: -81.27020799864289 },
        { lat: 43.00905724990301, lng: -81.27021822097407 },
        { lat: 43.009055413741116, lng: -81.27022824545395 },
        { lat: 43.0090528679191, lng: -81.27023797554095 },
        { lat: 43.00904963695471, lng: -81.27024731752873 },
        { lat: 43.00904575196401, lng: -81.27025618144863 },
        { lat: 43.009041250361705, lng: -81.27026448193604 },
        { lat: 43.0090361755008, lng: -81.27027213905265 },
        { lat: 43.00903057625515, lng: -81.2702790790562 },
        { lat: 43.00902450654866, lng: -81.27028523511068 },
        { lat: 43.00901802483605, lng: -81.27029054793005 },
        { lat: 43.00901119353989, lng: -81.27029496634911 },
        { lat: 43.0090040784494, lng: -81.27029844781633 },
        { lat: 43.008996748086865, lng: -81.27030095880355 },
        { lat: 43.00898927304775, lng: -81.27030247512893 },
        { lat: 43.00898172532082, lng: -81.27030298218976 },
        { lat: 43.008974177594816, lng: -81.27030247510316 },
        { lat: 43.00896670255845, lng: -81.27030095875301 },
        { lat: 43.00895937220038, lng: -81.27029844774299 },
        { lat: 43.00895225711588, lng: -81.27029496625576 },
        { lat: 43.008945425827044, lng: -81.27029054782028 },
        { lat: 43.008938944122775, lng: -81.2702852349887 },
        { lat: 43.008932874425334, lng: -81.2702790789267 },
        { lat: 43.0089272751891, lng: -81.27027213892063 },
        { lat: 43.00892220033762, lng: -81.27026448180656 },
        { lat: 43.00891769874437, lng: -81.27025618132666 },
        { lat: 43.00891381376202, lng: -81.27024731741896 },
        { lat: 43.008910582804944, lng: -81.2702379754476 },
        { lat: 43.00890803698893, lng: -81.2702282453806 },
        { lat: 43.0089062008315, lng: -81.27021822092355 },
        { lat: 43.00890509201576, lng: -81.27020799861712 },
        { lat: 43.008904721220205, lng: -81.27019767690736 },
        { lat: 43.00890509201576, lng: -81.27018735519759 },
        { lat: 43.0089062008315, lng: -81.27017713289116 },
        { lat: 43.00890803698893, lng: -81.27016710843412 },
        { lat: 43.008910582804944, lng: -81.27015737836713 },
        { lat: 43.00891381376202, lng: -81.27014803639577 },
        { lat: 43.00891769874437, lng: -81.27013917248807 },
        { lat: 43.00892220033762, lng: -81.27013087200817 },
        { lat: 43.0089272751891, lng: -81.2701232148941 },
        { lat: 43.008932874425334, lng: -81.27011627488803 },
        { lat: 43.008938944122775, lng: -81.27011011882601 },
        { lat: 43.008945425827044, lng: -81.27010480599445 },
        { lat: 43.00895225711588, lng: -81.27010038755897 },
        { lat: 43.00895937220038, lng: -81.27009690607174 },
        { lat: 43.00896670255845, lng: -81.2700943950617 },
        { lat: 43.008974177594816, lng: -81.27009287871157 },
        { lat: 43.00898172532082, lng: -81.27009237162497 },
        { lat: 43.00898927304775, lng: -81.2700928786858 },
        { lat: 43.008996748086865, lng: -81.27009439501117 },
        { lat: 43.0090040784494, lng: -81.2700969059984 },
        { lat: 43.00901119353989, lng: -81.27010038746562 },
        { lat: 43.00901802483605, lng: -81.27010480588469 },
        { lat: 43.00902450654866, lng: -81.27011011870405 },
        { lat: 43.00903057625515, lng: -81.27011627475854 },
        { lat: 43.0090361755008, lng: -81.27012321476208 },
        { lat: 43.009041250361705, lng: -81.27013087187869 },
        { lat: 43.00904575196401, lng: -81.2701391723661 },
        { lat: 43.00904963695471, lng: -81.27014803628599 },
        { lat: 43.0090528679191, lng: -81.27015737827378 },
        { lat: 43.009055413741116, lng: -81.27016710836078 },
        { lat: 43.00905724990301, lng: -81.27017713284064 },
        { lat: 43.00905835872149, lng: -81.27018735517184 },
        { lat: 43.00905872951798, lng: -81.27019767690736 },
        //rest of building
        { lat: 43.00906074663544, lng: -81.27021812141338 },
        { lat: 43.00929140272359, lng: -81.27020935948221 },
        { lat: 43.0093020812254, lng: -81.2702560897809 },
        { lat: 43.00933625241822, lng: -81.27024732784976 },
        { lat: 43.009443037272774, lng: -81.27034370909087 },
        { lat: 43.00965874211326, lng: -81.2707379959849 },
        { lat: 43.009695048794185, lng: -81.27070878954852 },
        { lat: 43.00975057661742, lng: -81.27082853593858 },
        { lat: 43.009803346824214, lng: -81.27076659593759 },
        { lat: 43.009767088708, lng: -81.2706954361612 },
        { lat: 43.009844953104476, lng: -81.27062498427355 },
        { lat: 43.009774753751145, lng: -81.2704745316155 },
        { lat: 43.00974194650942, lng: -81.27048904503677 },
        { lat: 43.00956071199229, lng: -81.27014143550521 },
        { lat: 43.00957586264417, lng: -81.2701263903831 },
        { lat: 43.009503362014044, lng: -81.27000821242335 },
        { lat: 43.009426966832336, lng: -81.26995783143757 },
        { lat: 43.00930478245101, lng: -81.26993135355467 },
        { lat: 43.00929429604787, lng: -81.27002469988717 },
        { lat: 43.00922548108517, lng: -81.27003548287679 },
        { lat: 43.00922475964805, lng: -81.27006485616911 },
        { lat: 43.00907166917088, lng: -81.27010856629754 },
        { lat: 43.009078308326195, lng: -81.27014623757628 },
        { lat: 43.009050975260465, lng: -81.27014927386074 }
    ];

    const physicsPolygonCoords = [
        { lat: 43.009448971761, lng: -81.27267505760132 },
        { lat: 43.009400634391454, lng: -81.27282195349916 },
        { lat: 43.009553702598765, lng: -81.2728990738456 },
        { lat: 43.009564444213254, lng: -81.27286602226887 },
        { lat: 43.00982761317684, lng: -81.27302393535882 },
        { lat: 43.00983298396039, lng: -81.27299455617963 },
        { lat: 43.00995382646366, lng: -81.27307534892309 },
        { lat: 43.010125690947206, lng: -81.27246205854958 },
        { lat: 43.009730938995006, lng: -81.27226007668946 },
        { lat: 43.00973899518212, lng: -81.27220866312564 },
        { lat: 43.00969334343867, lng: -81.27218295634349 },
        { lat: 43.00968260184669, lng: -81.27221233552268 },
        { lat: 43.00958592743663, lng: -81.27214990476631 },
        { lat: 43.00954833179148, lng: -81.27229680066414 },
        { lat: 43.009602039848545, lng: -81.27232985224134 },
        { lat: 43.00949193828029, lng: -81.27270443678098 },
        { lat: 43.00945165716939, lng: -81.27267505760132 }
    ];

    const northCampusPolygonCoords = [
        { lat: 43.0107747753365, lng: -81.26905089040807 },
        { lat: 43.01073788916733, lng: -81.26911297570601 },
        { lat: 43.01075964255182, lng: -81.26914143146722 },
        { lat: 43.0107199189743, lng: -81.2692112774265 },
        { lat: 43.01069532817536, lng: -81.26918799544008 },
        { lat: 43.0103898339668, lng: -81.26970278602907 },
        { lat: 43.01041537069253, lng: -81.26972865490289 },
        { lat: 43.01037375528216, lng: -81.26980626152437 },
        { lat: 43.0103463269281, lng: -81.2697816860942 },
        { lat: 43.01028957857051, lng: -81.26987352059628 },
        { lat: 43.010057855566004, lng: -81.26961871218916 },
        { lat: 43.01007204271383, lng: -81.26960319086487 },
        { lat: 43.010040830984224, lng: -81.26957085477261 },
        { lat: 43.010077717572074, lng: -81.26950876947545 },
        { lat: 43.0100502890858, lng: -81.26948031371421 },
        { lat: 43.01015243648973, lng: -81.2693018184849 },
        { lat: 43.01018081073843, lng: -81.26933027424609 },
        { lat: 43.01051751748986, lng: -81.2687753869019 },
        { lat: 43.01055345798912, lng: -81.26881419021262 },
        { lat: 43.01053170453156, lng: -81.26885558041074 },
        { lat: 43.01057710304289, lng: -81.2689034378273 },
        { lat: 43.01060358549233, lng: -81.26885946074181 },
        { lat: 43.0107747753365, lng: -81.26905089040807 } 
    ];

    const talbotPolygonCoords = [
        { lat: 43.00710423370927, lng: -81.27030472129178 },
        { lat: 43.007358055661456, lng: -81.27023647831123 },
        { lat: 43.007394392834414, lng: -81.27044341839834 },
        { lat: 43.00771362947742, lng: -81.27036324305378 },
        { lat: 43.007719881430745, lng: -81.27041001407396 },
        { lat: 43.00775016048988, lng: -81.27040632603637 },
        { lat: 43.00776903892361, lng: -81.27052936490664 },
        { lat: 43.00773537677321, lng: -81.27053468964408 },
        { lat: 43.00774775808796, lng: -81.27062437600844 },
        { lat: 43.00747754733686, lng: -81.27069653777257 },
        { lat: 43.00750585185696, lng: -81.27090626124317 },
        { lat: 43.00708885490329, lng: -81.27100413708872 },
        { lat: 43.00706224618844, lng: -81.27077348806195 },
        { lat: 43.00703981883984, lng: -81.27077868620596 },
        { lat: 43.007032839369884, lng: -81.27072566513732 },
        { lat: 43.00705482676571, lng: -81.27072000538813 },
        { lat: 43.00699843554648, lng: -81.27032983642897 },
        { lat: 43.00707112330133, lng: -81.27031285718144 },
        { lat: 43.007068536550264, lng: -81.27029127938748 },
        { lat: 43.00710035358409, lng: -81.2702852659042 },
        { lat: 43.00710423370927, lng: -81.27030472129178 }
    ];


    const middlesexPurple = new google.maps.Polygon({
        paths: middlesexPolygonCoords,
        strokeColor: "#800080", //purp
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#800080",
        fillOpacity: 0.5
    });

    const physicsPurple = new google.maps.Polygon({
        paths: physicsPolygonCoords,
        strokeColor: "#800080", //purp
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#800080",
        fillOpacity: 0.5
    });

    const northCampusRed = new google.maps.Polygon({
        paths: northCampusPolygonCoords,
        strokeColor: "#FF0000", //red
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000", //red
        fillOpacity: 0.5
    });

    const talbotCollegeYellow = new google.maps.Polygon({
        paths: talbotPolygonCoords,
        strokeColor: "#FFFF00", //yellow
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFFF00", //yellow
        fillOpacity: 0.5
    });

    middlesexPurple.setMap(map);
    physicsPurple.setMap(map);
    northCampusRed.setMap(map);
    talbotCollegeYellow.setMap(map);


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