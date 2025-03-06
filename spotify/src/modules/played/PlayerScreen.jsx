// Importaciones necesarias de React y React Native
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// Importación del componente Icon de react-native-elements
import { Icon } from "react-native-elements";
// Importación del componente Slider de @react-native-community/slider
import Slider from "@react-native-community/slider";

// Componente principal de la pantalla del reproductor
export default function PlayedScreen({ route, navigation }) {
  // Recibe la canción seleccionada desde la ruta
  const { song } = route.params;
  // Estado para el progreso de la canción
  const [progress, setProgress] = useState(0.2);

  return (
    <View style={styles.container}>
      {/* Botón de regresar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('PlaylistScreen')}
      >
        <Icon name="keyboard-arrow-down" size={30} color="white" />
      </TouchableOpacity>

      {/* Contenedor de la imagen del álbum con el texto sobre ella */}
      <View style={styles.albumCoverContainer}>
        <Image source={{ uri: song.cover }} style={styles.albumCover} />
        
        {/* Información de la canción sobre la imagen */}
        <View style={styles.songInfoOverlay}>
          <Text style={styles.songTitle}>{song.title}</Text>
          <Text style={styles.songArtist}>{song.album}</Text>
        </View>
      </View>

      {/* Barra de progreso */}
      <View style={styles.progressContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={progress}
          onValueChange={(value) => setProgress(value)}
          minimumTrackTintColor="white" // Línea completada en blanco
          maximumTrackTintColor="gray" // Línea restante en gris oscuro
          thumbTintColor="transparent" // Hace que el "thumb" no sea visible
        />
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>0:52</Text>
          <Text style={styles.timeText}>2:59</Text>
        </View>
      </View>

      {/* Controles de reproducción */}
      <View style={styles.controls}>
        <Icon name="shuffle" size={24} color="white" />
        <Icon name="skip-previous" size={40} color="white" />
        <TouchableOpacity style={styles.playButton}>
          <Icon name="play-arrow" size={50} color="black" />
        </TouchableOpacity>
        <Icon name="skip-next" size={40} color="white" />
        <Icon name="repeat" size={24} color="white" />
      </View>

      {/* Icono de dispositivo */}
      <View style={styles.device}>
        <Icon
          name="speaker"
          type="material-community"
          size={30}
          color="white"
        />
      </View>

      {/* Icono de deshacer */}
      <View style={styles.undo}>
        <Icon
          name="arrow-u-left-bottom"
          type="material-community"
          size={30}
          color="white"
        />
      </View>

      {/* Botón de letras */}
      <TouchableOpacity style={styles.lyricsButton}>
        <Text style={styles.lyricsText}>Lyrics</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos para los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    backgroundColor: "#0d0d0d", // Color de fondo oscuro
    alignItems: "center", // Alinea los elementos al centro horizontalmente
    paddingTop: 40, // Espacio en la parte superior
  },
  backButton: { 
    position: "absolute", // Posicionamiento absoluto
    top: 40, // Espacio desde la parte superior
    left: 20, // Espacio desde la izquierda
    zIndex: 10 // Asegura que el botón esté por encima de otros elementos
  },

  // Contenedor de la imagen del álbum
  albumCoverContainer: {
    position: "relative", // Permite superponer elementos sobre la imagen
    width: "100%", // Ancho completo
    height: 450, // Altura fija
  },
  albumCover: {
    width: "100%", // Ancho completo
    height: "100%", // Altura completa
    borderRadius: 20, // Bordes redondeados
  },

  // Contenedor del texto sobre la imagen
  songInfoOverlay: {
    position: "absolute", // Posicionamiento absoluto
    bottom: 5, // Ajusta la posición para que quede sobre la imagen
    left: 20, // Espacio desde la izquierda
    right: 20, // Espacio desde la derecha
    paddingVertical: 10, // Espacio vertical interno
    paddingHorizontal: 15, // Espacio horizontal interno
    borderRadius: 10, // Bordes redondeados
  },
  songTitle: {
    fontSize: 24, // Tamaño de fuente grande
    fontWeight: "bold", // Texto en negrita
    color: "white", // Color de texto blanco
  },
  songArtist: {
    fontSize: 18, // Tamaño de fuente mediano
    color: "gray", // Color de texto gris
  },

  // Contenedor de la barra de progreso
  progressContainer: {
    width: "80%", // Ancho del 80% del contenedor padre
    marginTop: 20, // Espacio en la parte superior
  },
  slider: {
    width: "100%", // Ancho completo
    height: 10, // Hace que la barra sea más delgada
    borderRadius: 5, // Redondea la barra para un mejor diseño
  },
  timeContainer: {
    flexDirection: "row", // Alinea los elementos en fila
    justifyContent: "space-between", // Espacia los elementos equitativamente
    marginTop: -5, // Ajusta el tiempo debajo de la barra de progreso
  },
  timeText: {
    color: "white", // Color de texto blanco
    fontSize: 12, // Tamaño de fuente pequeño
  },

  // Contenedor de los controles de reproducción
  controls: {
    flexDirection: "row", // Alinea los elementos en fila
    justifyContent: "space-between", // Espacia los elementos equitativamente
    marginVertical: 30, // Espacio vertical
    width: "80%", // Ancho del 80% del contenedor padre
  },
  playButton: { 
    backgroundColor: "white", // Color de fondo blanco
    borderRadius: 50, // Bordes redondeados
    padding: 15, // Espacio interno
  },

  // Icono de dispositivo
  device: {
    position: "absolute", // Posicionamiento absoluto
    left: 15, // Espacio desde la izquierda
    bottom: 190, // Espacio desde la parte inferior
  },

  // Icono de deshacer
  undo: {
    position: "absolute", // Posicionamiento absoluto
    right: 15, // Espacio desde la derecha
    bottom: 190, // Espacio desde la parte inferior
  },

  // Botón de letras
  lyricsButton: {
    position: "absolute", // Posicionamiento absoluto
    bottom: -15, // Espacio desde la parte inferior
    left: 15, // Espacio desde la izquierda
    right: 15, // Espacio desde la derecha
    backgroundColor: "#2F818D", // Color de fondo
    padding: 5, // Espacio interno
    borderRadius: 10, // Bordes redondeados
    paddingVertical: 80, // Espacio vertical interno
  },
  lyricsText: {
    color: "white", // Color de texto blanco
    textAlign: "left", // Alineación del texto a la izquierda
    fontSize: 30, // Tamaño de fuente grande
    fontWeight: "bold", // Texto en negrita
    position: 'absolute', // Posicionamiento absoluto
    top: 15, // Espacio desde la parte superior
    left: 15, // Espacio desde la izquierda
  },
});