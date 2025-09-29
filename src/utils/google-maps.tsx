import React, { useRef, useEffect, useState } from 'react';

const NIDO_LOCATION = { lat: -12.0953743, lng: -77.0624951 };

const GoogleMapsComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (typeof window === 'undefined') return;

      if (window.google && window.google.maps) {
        setIsLoaded(true);
        return;
      }

      const existing = document.querySelector<HTMLScriptElement>('script[data-google-maps]');
      if (existing) {
        // si ya existe el script, escuchar su carga o comprobar si ya está listo
        if ((window as any).google && (window as any).google.maps) {
          setIsLoaded(true);
        } else {
          existing.addEventListener('load', () => setIsLoaded(true));
        }
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.setAttribute('data-google-maps', 'true');
      script.onload = () => setIsLoaded(true);
      script.onerror = () => console.error('Error cargando Google Maps');
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || map) return;

    let markerInstance: google.maps.Marker | null = null;
    let infoWindowInstance: google.maps.InfoWindow | null = null;

    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center: NIDO_LOCATION,
      zoom: 16,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoomControl: true,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }],
        },
      ],
    });

    markerInstance = new window.google.maps.Marker({
      position: NIDO_LOCATION,
      map: mapInstance,
      title: 'Nido El Mundo de GRU',
      animation: window.google.maps.Animation.DROP,
    });

    infoWindowInstance = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 8px; max-width: 200px;">
          <h3 style="margin: 0 0 5px 0; color: #333; font-size: 16px;">Nido El Mundo de GRU</h3>
          <p style="margin: 0; color: #666; font-size: 14px;">Jirón Trujillo 370, Magdalena del Mar</p>
        </div>
      `,
    });

    if (markerInstance) {
      markerInstance.addListener('click', () => {
        infoWindowInstance?.open(mapInstance, markerInstance!);
      });
    }

    setMap(mapInstance);

    return () => {
      // limpieza: quitar listeners y eliminar marker/infoWindow
      if (markerInstance) {
        try {
          window.google.maps.event.clearInstanceListeners(markerInstance);
        } catch (e) {
          // no crítico si falla la limpieza
        }
        markerInstance.setMap(null);
        markerInstance = null;
      }
      if (infoWindowInstance) {
        infoWindowInstance.close();
        infoWindowInstance = null;
      }
      // liberar referencia de estado del mapa
      setMap(null);
    };
  }, [isLoaded, map]);

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
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default GoogleMapsComponent;