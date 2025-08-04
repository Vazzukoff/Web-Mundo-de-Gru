// components/MapaLeaflet.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrige el ícono del marcador para que se vea correctamente en React
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const icon = L.icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapaLeaflet: React.FC = () => {
  const position: [number, number] = [-12.0953743, -77.0624951];

  return (
    <MapContainer 
      center={position} 
      zoom={17} 
      style={{ 
        height: '250px', 
        width: '100%',
        position: 'relative',
        zIndex: 1 
      }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          Nido El Mundo de GRU <br /> (-12.0953743, -77.0624951)
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaLeaflet;
