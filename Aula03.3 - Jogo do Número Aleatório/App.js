import React, { useState } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
    const [numero, setNumero] = useState('?');

    function sortear(){
      setNumero(Math.floor(Math.random() * 10));
    }

    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Text style={styles.titlePage}>Número Aleatório</Text>
          <Text style={styles.subtitlePage}>Será que você consegue descobrir o número?</Text>
        </View>

        <Image style={styles.imagem} source={require('./img/Pensativo.png')} />

        <View style={styles.viewText}>
          <Text style={styles.titleInput}>Pense em um Número de 0 a 10</Text>
        </View>

        <View style={styles.viewSorteio}>
          <Text style={styles.numberSorteio}>{numero}</Text>
        </View>

        <Pressable style={styles.button} onPress={sortear}>
          <Text style={styles.text}>Descobrir</Text>
        </Pressable>

      </View>
    );
  }


