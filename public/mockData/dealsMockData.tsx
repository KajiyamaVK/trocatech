import IDeal from "@/interfaces/IDeal/IDeal";

function gerarCoordenadasAleatorias() {
  // Coordenadas aproximadas de São Paulo
  const minLatitude = -23.5505;
  const maxLatitude = -23.3405;
  const minLongitude = -46.8354;
  const maxLongitude = -46.3654;

  // Gerar latitude aleatória entre minLatitude e maxLatitude
  const latitude = Math.random() * (maxLatitude - minLatitude) + minLatitude;

  // Gerar longitude aleatória entre minLongitude e maxLongitude
  const longitude =
    Math.random() * (maxLongitude - minLongitude) + minLongitude;

  return { latitude, longitude };
}

const dealMockData: IDeal[] = [
  {
    type: 1,
    value: 2500.0,
    description: "Venda de notebook Dell em ótimo estado",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 3,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 1800.0,
    description: "Troca de MacBook Pro por iMac",
    trade_for: "iMac",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 3,
      limit_date: "2025-08-12",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um mouse sem fio Logitech",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Piracicaba, 789",
      city: "Piracicaba",
      state: "SP",
      zip_code: 13400999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-11-20",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 1200.0,
    description: "Venda de teclado mecânico Razer",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Diadema, 147",
      city: "Diadema",
      state: "SP",
      zip_code: 19900999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-12-15",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 900.0,
    description: "Troca de monitor Dell por monitor LG ultrawide",
    trade_for: "monitor LG ultrawide",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São José dos Campos, 259",
      city: "São José dos Campos",
      state: "SP",
      zip_code: 12200999,
    },
    urgency: {
      type: 3,
      limit_date: "2024-06-05",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um fone de ouvido sem fio Sony",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Limeira, 333",
      city: "Limeira",
      state: "SP",
      zip_code: 13480999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-03-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 1500.0,
    description: "Venda de placa de vídeo Nvidia RTX 2080",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 1800.0,
    description: "Troca de MacBook Pro por iMac",
    trade_for: "iMac",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 3,
      limit_date: "2025-08-12",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um MacBook Pro",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-09-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 3000.0,
    description: "Venda de iMac",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 4000.0,
    description: "Troca de iMac por MacBook Pro",
    trade_for: "MacBook Pro",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 3,
      limit_date: "2024-06-05",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um iMac",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-03-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 2000.0,
    description: "Venda de iPhone 11",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 2500.0,
    description: "Troca de iPhone 11 por iPhone 12",
    trade_for: "iPhone 12",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 3,
      limit_date: "2024-06-05",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um iPhone 11",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-03-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 3000.0,
    description: "Venda de iPad",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 2500.0,
    description: "Venda de notebook Dell em ótimo estado",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 1800.0,
    description: "Troca de MacBook Pro por iMac",
    trade_for: "iMac",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 3,
      limit_date: "2025-08-12",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um mouse sem fio Logitech",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Piracicaba, 789",
      city: "Piracicaba",
      state: "SP",
      zip_code: 13400999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-11-20",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 1200.0,
    description: "Venda de teclado mecânico Razer",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Diadema, 147",
      city: "Diadema",
      state: "SP",
      zip_code: 19900999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-12-15",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 900.0,
    description: "Troca de monitor Dell por monitor LG ultrawide",
    trade_for: "monitor LG ultrawide",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São José dos Campos, 259",
      city: "São José dos Campos",
      state: "SP",
      zip_code: 12200999,
    },
    urgency: {
      type: 3,
      limit_date: "2024-06-05",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um fone de ouvido sem fio Sony",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Limeira, 333",
      city: "Limeira",
      state: "SP",
      zip_code: 13480999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-03-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 1500.0,
    description: "Venda de placa de vídeo Nvidia RTX 2080",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 1800.0,
    description: "Troca de MacBook Pro por iMac",
    trade_for: "iMac",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 3,
      limit_date: "2025-08-12",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um MacBook Pro",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-09-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 3000.0,
    description: "Venda de iMac",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 4000.0,
    description: "Troca de iMac por MacBook Pro",
    trade_for: "MacBook Pro",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 3,
      limit_date: "2024-06-05",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um iMac",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-03-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 2000.0,
    description: "Venda de iPhone 11",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 2500.0,
    description: "Troca de iPhone 11 por iPhone 12",
    trade_for: "iPhone 12",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 3,
      limit_date: "2024-06-05",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um iPhone 11",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-03-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 3000.0,
    description: "Venda de iPad",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 2500.0,
    description: "Venda de notebook Dell em ótimo estado",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 1800.0,
    description: "Troca de MacBook Pro por iMac",
    trade_for: "iMac",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 3,
      limit_date: "2025-08-12",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um mouse sem fio Logitech",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Piracicaba, 789",
      city: "Piracicaba",
      state: "SP",
      zip_code: 13400999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-11-20",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 1200.0,
    description: "Venda de teclado mecânico Razer",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Diadema, 147",
      city: "Diadema",
      state: "SP",
      zip_code: 19900999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-12-15",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 900.0,
    description: "Troca de monitor Dell por monitor LG ultrawide",
    trade_for: "monitor LG ultrawide",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São José dos Campos, 259",
      city: "São José dos Campos",
      state: "SP",
      zip_code: 12200999,
    },
    urgency: {
      type: 3,
      limit_date: "2024-06-05",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um fone de ouvido sem fio Sony",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Limeira, 333",
      city: "Limeira",
      state: "SP",
      zip_code: 13480999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-03-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 1500.0,
    description: "Venda de placa de vídeo Nvidia RTX 2080",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 1800.0,
    description: "Troca de MacBook Pro por iMac",
    trade_for: "iMac",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 3,
      limit_date: "2025-08-12",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um MacBook Pro",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-09-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 3000.0,
    description: "Venda de iMac",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 4000.0,
    description: "Troca de iMac por MacBook Pro",
    trade_for: "MacBook Pro",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 3,
      limit_date: "2024-06-05",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um iMac",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-03-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 2000.0,
    description: "Venda de iPhone 11",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 2500.0,
    description: "Troca de iPhone 11 por iPhone 12",
    trade_for: "iPhone 12",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 3,
      limit_date: "2024-06-05",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um iPhone 11",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-03-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 3000.0,
    description: "Venda de iPad",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 2500.0,
    description: "Venda de notebook Dell em ótimo estado",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 1800.0,
    description: "Troca de MacBook Pro por iMac",
    trade_for: "iMac",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 3,
      limit_date: "2025-08-12",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um mouse sem fio Logitech",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Piracicaba, 789",
      city: "Piracicaba",
      state: "SP",
      zip_code: 13400999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-11-20",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 1200.0,
    description: "Venda de teclado mecânico Razer",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Diadema, 147",
      city: "Diadema",
      state: "SP",
      zip_code: 19900999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-12-15",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 900.0,
    description: "Troca de monitor Dell por monitor LG ultrawide",
    trade_for: "monitor LG ultrawide",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São José dos Campos, 259",
      city: "São José dos Campos",
      state: "SP",
      zip_code: 12200999,
    },
    urgency: {
      type: 3,
      limit_date: "2024-06-05",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um fone de ouvido sem fio Sony",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Limeira, 333",
      city: "Limeira",
      state: "SP",
      zip_code: 13480999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-03-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 1500.0,
    description: "Venda de placa de vídeo Nvidia RTX 2080",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 1800.0,
    description: "Troca de MacBook Pro por iMac",
    trade_for: "iMac",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 3,
      limit_date: "2025-08-12",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um MacBook Pro",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-09-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 3000.0,
    description: "Venda de iMac",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 4000.0,
    description: "Troca de iMac por MacBook Pro",
    trade_for: "MacBook Pro",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 3,
      limit_date: "2024-06-05",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um iMac",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua Campinas, 456",
      city: "Campinas",
      state: "SP",
      zip_code: 13000999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-03-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 2000.0,
    description: "Venda de iPhone 11",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 2,
    value: 2500.0,
    description: "Troca de iPhone 11 por iPhone 12",
    trade_for: "iPhone 12",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 3,
      limit_date: "2024-06-05",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 3,
    value: 0,
    description: "Desejo comprar um iPhone 11",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },
    urgency: {
      type: 1,
      limit_date: "2024-03-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
  {
    type: 1,
    value: 3000.0,
    description: "Venda de iPad",
    trade_for: "",
    location: {
      lat: gerarCoordenadasAleatorias().latitude,
      lng: gerarCoordenadasAleatorias().longitude,
      address: "Rua São Paulo, 123",
      city: "São Paulo",
      state: "SP",
      zip_code: 11000999,
    },

    urgency: {
      type: 2,
      limit_date: "2025-05-10",
    },
    photos: [
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
      {
        src: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
      },
    ],
  },
];

export default dealMockData;
