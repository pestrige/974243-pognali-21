{
  function initMap() {

    const uluru = { lat: 59.93621193405666, lng: 30.321726596813022 };
    const markerPos = { lat:59.93621193405666, lng: 30.321726596813022 };
    const markerIcon = './img/icons/map-pin.svg';

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
      disableDefaultUI: true,
    });

    const marker = new google.maps.Marker({
      position: markerPos,
      map: map,
      icon: markerIcon,
    });
  }
}

// 59.93621193405666, 30.321726596813022

//map id 1edc6f337d15f752
