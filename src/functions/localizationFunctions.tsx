interface Coordenadas {
  lat: number;
  lng: number;
}

export function getDistanceInKm(
  coord1: Coordenadas,
  coord2: Coordenadas
): number {
  const R = 6371; // raio da Terra em km
  const lat1 = coord1.lat * (Math.PI / 180); // converter graus em radianos
  const lat2 = coord2.lat * (Math.PI / 180);
  const dLat = (coord2.lat - coord1.lat) * (Math.PI / 180);
  const dLon = (coord2.lng - coord1.lng) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // distância em km

  return distance;
}
