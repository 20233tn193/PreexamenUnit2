// Importaciones necesarias de React y React Native
import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// Importación del componente Icon de react-native-elements
import { Icon } from 'react-native-elements';

// Lista de reproducción con datos de ejemplo
const playlist = [
  { id: '1', title: 'Starboy', album: 'The Weeknd', cover: 'https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png' },
  { id: '2', title: 'A Lonely Night', album: 'The Weeknd', cover: 'https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png' },
  { id: '3', title: 'Reminder', album: 'The Weeknd', cover: 'https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png' },
  { id: '4', title: 'False Alarm', album: 'The Weeknd', cover: 'https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png' },
  { id: '5', title: 'Blinding Lights', album: 'The Weeknd', cover: 'https://cdn-images.dzcdn.net/images/cover/fd00ebd6d30d7253f813dba3bb1c66a9/1900x1900-000000-80-0-0.jpg' }
];

// Componente principal de la pantalla de la lista de reproducción
export default function PlaylistScreen({ navigation }) {
  // Estado para almacenar qué canciones están marcadas como favoritas
  const [favorites, setFavorites] = useState({});

  // Función para alternar el estado del favorito
  const toggleFavorite = (songId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [songId]: !prevFavorites[songId], // Alterna entre favorito y no favorito
    }));
  };

  return (
    <View style={styles.container}>
      {/* Contenedor de la imagen con superposición */}
      <View style={styles.imageContainer}>
        <Image source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjfJGuMzoeucUhoqBCUg10Qy8Caec5hlwvg&s' }} style={styles.albumCover} />
        {/* Capa de superposición con texto y botón */}
        <View style={styles.overlay}>
          <Text style={styles.playlistTitle}>WEEKEND PLAYLIST</Text>
          <View style={styles.infoContainer}>
            <Icon name="heart-outline" type="material-community" size={15} color="white" />
            <Text style={styles.likes}> 25,000 Likes</Text>
            <Icon name="timer-sand-complete" type="material-community" size={15} color="white" />
            <Text style={styles.duration}> 2h 25 mins</Text>
          </View>
          {/* Botón de reproducción */}
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play-arrow" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View>
        <Text style={styles.canciones}> Canciones</Text>
      </View>

      {/* Lista de canciones */}
      <FlatList
        marginTop={10}
        data={playlist}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PlayerScreen', { song: item })}>
            <View style={styles.songItem}>
              <Image source={{ uri: item.cover }} style={styles.songImage} />
              <View style={styles.songDetails}>
                <Text style={styles.songTitle}>{item.title}</Text>
                <Text style={styles.songAlbum}>{item.album}</Text>
              </View>

              {/* Ícono de Corazón (Cambia de color al presionar) */}
              <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                <Icon
                  name={favorites[item.id] ? 'favorite' : 'favorite-border'} // Cambia el ícono
                  size={30}
                  color={favorites[item.id] ? 'green' : 'white'} // Cambia el color
                />
              </TouchableOpacity>

              {/* Ícono de opciones (más) */}
              <Icon name="more-vert" size={24} color="white" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// Estilos para los componentes
const styles = StyleSheet.create({
  container: { 
    flex: 1, // Ocupa todo el espacio disponible
    backgroundColor: '#0d0d0d', // Color de fondo oscuro
    paddingTop: 35 // Espacio en la parte superior
  },
  imageContainer: { 
    position: 'relative', // Posicionamiento relativo para superposición
    width: '100%', // Ancho completo
    height: 300 // Altura fija
  },
  albumCover: { 
    width: '100%', // Ancho completo
    height: '100%', // Altura completa
    borderRadius: 10 // Bordes redondeados
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Ocupa todo el contenedor
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'flex-start', // Alinea el contenido a la izquierda
    backgroundColor: 'rgba(71, 71, 71, 0.4)', // Fondo semi-transparente
    borderRadius: 10 // Bordes redondeados
  },
  playlistTitle: { 
    fontSize: 24, // Tamaño de fuente grande
    fontWeight: 'bold', // Texto en negrita
    color: 'white', // Color de texto blanco
    top: 90 // Espacio desde la parte superior
  },
  infoContainer: { 
    flexDirection: 'row', // Alinea los elementos en fila
    position: 'absolute', // Posicionamiento absoluto
    bottom: 20, // Espacio desde la parte inferior
    left: 10 // Espacio desde la izquierda
  },
  likes: { 
    color: 'white', // Color de texto blanco
    fontSize: 14, // Tamaño de fuente pequeño
    marginRight: 10 // Espacio a la derecha
  },
  duration: { 
    color: 'white', // Color de texto blanco
    fontSize: 14 // Tamaño de fuente pequeño
  },
  playButton: {
    position: 'absolute', // Posicionamiento absoluto
    bottom: -20, // Espacio desde la parte inferior
    right: 20, // Espacio desde la derecha
    backgroundColor: '#1db954', // Color de fondo verde
    borderRadius: 50, // Bordes redondeados
    padding: 15 // Espacio interno
  },
  canciones: { 
    fontSize: 30, // Tamaño de fuente grande
    fontWeight: 'bold', // Texto en negrita
    color: 'white', // Color de texto blanco
    top: 10 // Espacio desde la parte superior
  },
  songItem: { 
    flexDirection: 'row', // Alinea los elementos en fila
    alignItems: 'center', // Centra los elementos verticalmente
    marginVertical: 7 // Espacio vertical entre elementos
  },
  songImage: { 
    width: 70, // Ancho fijo
    height: 70, // Altura fija
    borderRadius: 7, // Bordes redondeados
    marginRight: 10 // Espacio a la derecha
  },
  songDetails: { 
    flex: 1 // Ocupa el espacio restante
  },
  songTitle: { 
    fontSize: 18, // Tamaño de fuente mediano
    color: 'white' // Color de texto blanco
  },
  songAlbum: { 
    fontSize: 14, // Tamaño de fuente pequeño
    color: 'gray' // Color de texto gris
  }
});