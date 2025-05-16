// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);

// Set your Mapbox access token
mapboxgl.accessToken = 'pk.YOUR_ACTUAL_MAPBOX_ACCESS_TOKEN_HERE';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12', // Replace with your custom style if available
  center: [-71.09415, 42.36027], // Cambridge/Boston
  zoom: 12,
  minZoom: 5,
  maxZoom: 18,
});
