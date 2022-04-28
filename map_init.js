var map = L.mapbox.map(mapId, RvTileServer.getStyleUrl(mapOptions.styleType), {
  attributionControl: false,
  zoomControl: false,
  zoomSnap: 0,
  minZoom: 8,
  maxBounds: L.latLngBounds(
  L.latLng(-84, -180),
  L.latLng(84, 180)
    ),
    maxBoundsViscosity: 1.0
});
