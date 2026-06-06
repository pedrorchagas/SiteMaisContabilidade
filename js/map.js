/* ================================================
   MAIS CONTABILIDADE - Mapa Interativo
   Google Maps Integration
   ================================================ */

// Coordenadas da Mais Contabilidade (Anápolis, GO)
const MAISCONTABILIDADE_COORDS = {
  lat: -16.3272238,
  lng: -48.9444192
};

// Configurações do mapa
const MAP_CONFIG = {
  zoom: 17,
  center: MAISCONTABILIDADE_COORDS,
  mapTypeId: 'roadmap',
  styles: [
    {
      elementType: 'geometry',
      stylers: [{ color: '#f5f5f5' }]
    },
    {
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{ color: '#616161' }]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#f5f5f5' }]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#bdbdbd' }]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{ color: '#eeeeee' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#e5e5e5' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9e9e9e' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#ffffff' }]
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#dadada' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#616161' }]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9e9e9e' }]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{ color: '#e5e5e5' }]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [{ color: '#eeeeee' }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#c9c9c9' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9e9e9e' }]
    }
  ]
};

let mapa = null;
let marker = null;

// Inicializar mapa
function initMapa() {
  const mapaElement = document.getElementById('mapa');
  
  if (!mapaElement) {
    console.warn('Elemento #mapa não encontrado');
    return;
  }

  // Verificar se a Google Maps API está carregada
  if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
    console.warn('Google Maps API não foi carregada');
    return;
  }

  // Criar o mapa
  mapa = new google.maps.Map(mapaElement, MAP_CONFIG);

  // Adicionar marcador
  addMarker();

  // Adicionar info window
  addInfoWindow();

  // Interatividade adicional
  setupMapInteractions();
}

// Adicionar marcador no mapa
function addMarker() {
  const svgMarker = {
    path: 'M 0,-50 C -27.6,-50 -50,-27.6 -50,0 C -50,37.6 0,100 0,100 C 0,100 50,37.6 50,0 C 50,-27.6 27.6,-50 0,-50 Z M 0,-20 C 13.8,-20 25,-8.2 25,0 C 25,8.2 13.8,20 0,20 C -13.8,20 -25,8.2 -25,0 C -25,-8.2 -13.8,-20 0,-20 Z',
    fillColor: '#007B3C',
    fillOpacity: 1,
    strokeColor: '#fff',
    strokeWeight: 2,
    scale: 0.5,
  };

  marker = new google.maps.Marker({
    position: MAISCONTABILIDADE_COORDS,
    map: mapa,
    title: 'Mais Contabilidade',
    icon: svgMarker,
    animation: google.maps.Animation.DROP
  });
}

// Adicionar janela de informações
function addInfoWindow() {
  const infoWindowContent = `
    <div style="font-family: 'Poppins', sans-serif; padding: 10px; max-width: 300px;">
      <h3 style="margin: 0 0 8px 0; color: #007B3C; font-size: 1.1rem;">Mais Contabilidade</h3>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 0.9rem;">
        <strong>Endereço:</strong><br>
        Rua Ângelo Teles Esq. Rua Mestro Simão<br>
        Vila Santa Maria de Nazareth<br>
        Anápolis - Goiás
      </p>
      <p style="margin: 0 0 8px 0; color: #666; font-size: 0.9rem;">
        <strong>Telefone:</strong><br>
        Celular: (62) 99315-4555<br>
        Fixo: (62) 3706-4555
      </p>
      <a href="https://www.google.com/maps/place/Mais+Contabilidade/@-16.327248,-48.9444915,20.77z/data=!4m6!3m5!1s0x935ea57147394f59:0xac90324c591cd5fa!8m2!3d-16.3272238!4d-48.9444192!16s%2Fg%2F11lnhpg_dl?hl=pt-BR" target="_blank" rel="noopener noreferrer" style="color: #007B3C; text-decoration: none; font-weight: 600;">Abrir no Google Maps →</a>
    </div>
  `;

  const infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent,
    maxWidth: 300
  });

  marker.addListener('click', function() {
    infoWindow.open(mapa, marker);
  });

  // Abrir info window por padrão
  infoWindow.open(mapa, marker);
}

// Configurar interatividades do mapa
function setupMapInteractions() {
  // Zoom ao clicar no marcador
  marker.addListener('click', function() {
    mapa.setZoom(19);
  });

  // Voltar ao zoom padrão ao fazer zoom out
  mapa.addListener('zoom_changed', function() {
    if (mapa.getZoom() < 15) {
      mapa.setZoom(15);
    }
  });
}

// Função para obter direções
function getDirections() {
  const mapsUrl = 'https://www.google.com/maps/place/Mais+Contabilidade/@-16.327248,-48.9444915,20.77z/data=!4m6!3m5!1s0x935ea57147394f59:0xac90324c591cd5fa!8m2!3d-16.3272238!4d-48.9444192!16s%2Fg%2F11lnhpg_dl?hl=pt-BR';
  window.open(mapsUrl, '_blank');
}

// Função para chamar via WhatsApp
function openWhatsApp() {
  const phone = '5562993154555'; // Remover símbolos
  const message = 'Olá! Gostaria de conversar com a Mais Contabilidade.';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Função para chamar por telefone
function callPhone(phone) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.href = `tel:${phone}`;
  } else {
    alert(`Telefone: ${phone}`);
  }
}

// Inicializar quando o DOM está pronto
document.addEventListener('DOMContentLoaded', function() {
  // Aguardar um pouco para garantir que o script da Google Maps foi carregado
  if (document.getElementById('mapa')) {
    setTimeout(initMapa, 100);
  }
});

// Reinicializar o mapa se a página for redimensionada
window.addEventListener('resize', function() {
  if (mapa) {
    google.maps.event.trigger(mapa, 'resize');
    mapa.setCenter(MAISCONTABILIDADE_COORDS);
  }
});
