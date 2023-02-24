import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';


    let img = 'https://avatars.githubusercontent.com/u/51220926?v=4';
    let nome = 'Eric Kida Meneses Corrêa';
    let experiencia = 'Estudante';
    let formacao1 = 'Informática para Internet (ETEC Itanhaém)';
    let formacao2 = 'Análise e Desenvolvimento de Sistemas (FATEC Praia Grande)';
    let projeto = 'TCC - Trampo Certo (ETEC Itanhaém)';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>

      </Text>
        <Image
          source={{ uri: img }}
          style={styles.img}
        />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#121212',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    width: 200, 
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
  },
});
