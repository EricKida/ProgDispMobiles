import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [alcool, setAlcool] = useState('0');
  const [gasolina, setGasolina] = useState('0');
  const [resultado, setResultado] = useState('Insira os Valores');

  function calcular() {
    if (alcool === '' || gasolina === '') {
      alert('É necessário digitar os valores!');
      setResultado('Insira os Valores');
    } else {
      conta = alcool / gasolina;
      if (conta < 0.7) {
        setResultado('Melhor utilizar Álcool');
      } else {
        setResultado('Melhor utilizar Gasolina');
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.titlePage}>Álcool ou Gasolina</Text>
      </View>

      <View style={styles.containerImagem}>
        <Image
          style={styles.imagem}
          source={require('./img/combustivel.png')}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.titleInput}>Álcool</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o preço do Álcool"
          onChangeText={(text) => setAlcool(text)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.titleInput}>Gasolina</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o preço da gasolina"
          onChangeText={(text) => setGasolina(text)}
          keyboardType="numeric"
        />
      </View>

      <Pressable style={styles.button} onPress={calcular}>
        <Text style={styles.text}>Verificar</Text>
      </Pressable>

      <View style={styles.viewResultado}>
        <Text style={styles.titleResult}>Resultado</Text>
        <Text style={styles.textResult}>{resultado}</Text>
      </View>
    </View>
  );
}
