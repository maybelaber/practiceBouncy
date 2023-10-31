let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  const position = { lat: 40.740467027369526, lng: -73.99002539067882 };
  const mapElement = document.getElementById("map");
  const image = "./img/marker.svg";
  const content = `
    <div class="balloon">
      <p class="balloon__address">Rapaport house, 155 5th Ave, New York, NY 10010, US</p>
      <div class="balloon__contacts">
        <a href="tel:+15555551234">+1 (555) 555-1234</a>
      </div>
    </div>
  `;

  map = new Map(mapElement, {
    zoom: 15,
    center: position,
  });

  addMarker({
    coordinates: position,
    image: image,
    title: "Bouncy Office",
    info: content,
  });

  function addMarker(properties) {
    const marker = new google.maps.Marker({
      position: properties.coordinates,
      map: map,
      icon: properties.image,
      title: properties.title,
    });

    if (properties.image) {
      marker.setIcon(properties.image);
    }

    if (properties.info) {
      const infowindow = new google.maps.InfoWindow({
        content: properties.info,
      });

      infowindow.open(map, marker);

      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
    }
  }
}