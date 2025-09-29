import React, { useRef, useEffect, useState } from 'react';

const GoogleMapsComponent = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Coordenadas exactas del nido (según la dirección proporcionada)
  const nidoLocation = { 
    lat: -12.0953743, 
    lng: -77.0624951 
  };

  useEffect(() => {
    // Cargar el script de Google Maps
    const loadGoogleMapsScript = () => {
      if (window.google && window.google.maps) {
        setIsLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAitjcWt3LFLOslrwy9P1FBUbcTdbJ-axc&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      script.onerror = () => console.error('Error cargando Google Maps');
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  useEffect(() => {
    if (isLoaded && mapRef.current && !map) {
      initializeMap();
    }
  }, [isLoaded, map]);

  const initializeMap = () => {
    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center: nidoLocation,
      zoom: 16,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoomControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ]
    });

    // Marcador del nido
    const marker = new window.google.maps.Marker({
      position: nidoLocation,
      map: mapInstance,
      title: "Nido El Mundo de GRU",
      animation: window.google.maps.Animation.DROP
    });

    // Ventana de información simple
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 8px; max-width: 200px;">
          <h3 style="margin: 0 0 5px 0; color: #333; font-size: 16px;">Nido El Mundo de GRU</h3>
          <p style="margin: 0; color: #666; font-size: 14px;">Jirón Trujillo 370, Magdalena del Mar</p>
        </div>
      `
    });

    marker.addListener('click', () => {
      infoWindow.open(mapInstance, marker);
    });

    setMap(mapInstance);
  };

  if (!isLoaded) {
    return (
      <div className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden">
      <div
        ref={mapRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default GoogleMapsComponent;