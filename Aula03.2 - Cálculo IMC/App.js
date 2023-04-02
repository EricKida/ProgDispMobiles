import React, { useState } from 'react';
import { Text, View, Pressable, TextInput, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [peso, setPeso] = useState('0');
  const [altura, setAltura] = useState('0');
  const [resultado, setResultado] = useState('');
  const [imc, setImc] = useState('');
  const [colorTxt, setColorTxt] = useState('');

    function calcular() {
      if (peso === '' || altura === '') {
        alert('Opa! Faltou alguma informação, verifique novamente se os campos foram preenchidos.')
          setResultado('Valores Insuficientes');
          setColorTxt('#FFF');
          setImc('Nível IMC: 0');
      } else {
        const imcTemp = peso / (altura * altura);
        setImc('Nível IMC: ' + imcTemp.toFixed(1));

        if (imcTemp < 18.5) {
          setResultado('Abaixo do peso');
          setColorTxt('#FFC0CB');
        } else if (imcTemp <= 24.9) {
          setResultado('Peso Normal');
          setColorTxt('#7CFC00');
        } else if (imcTemp <= 29.9) {
          setResultado('Sobrepeso');
          setColorTxt('#FFA07A');
        } else if (imcTemp <= 34.9) {
          setResultado('Obesidade Grau 1');
          setColorTxt('#FF8C00');
        } else if (imcTemp <= 39.9) {
          setResultado('Obesidade Grau 2');
          setColorTxt('#FF4500');
        } else if (imcTemp > 39.9) {
          setResultado('Obesidade Grau 3');
          setColorTxt('#FF0000');
        }
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Text style={styles.titlePage}>IMC</Text>
          <Text style={styles.subtitlePage}>Indice de Massa Corporal</Text>
        </View>

        <Image style={styles.imagem} source={require('./img/TabelaIMC.png')} />

        <View style={styles.viewInput}>
          <Text style={styles.titleInput}>Peso</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira seu peso"
            onChangeText={(text) => setPeso(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.viewInput}>
          <Text style={styles.titleInput}>Altura</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira sua altura"
            onChangeText={(text) => setAltura(text)}
            keyboardType="numeric"
          />
        </View>

        <Pressable style={styles.button} onPress={calcular}>
          <Text style={styles.text}>Verificar</Text>
        </Pressable>

        <View style={styles.resultado}>
          <Text style={styles.titleResult}>Classificação</Text>
          <Text style={[styles.textClassification, { color: colorTxt}]}>{resultado}</Text>
          <Text style={styles.textResult}>{imc}</Text>
        </View>
      </View>
    );
  }


