import React, { useState } from 'react';
import { View, Text, TextInput, Pressable} from 'react-native';
import { styles } from './styles';

export default function App(){
  const [N1, setN1] = useState('0');
  const [N2, setN2] = useState('0');
  const [resultado, setResultado] = useState('0');

  function multiplicar() {
    if(N1 == '' || N2 == ''){
      if(N1 == '' && N2 == ''){setResultado('Valores N1 e N2 vazios');}
      else if(N1 == ''){setResultado('Valor N1 vazio');}
      else{setResultado('Valor N2 vazio');}
    }else{
      setResultado(parseInt(N1) * parseInt(N2));
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titlePage}>Multiplicador</Text>
      <View style={styles.numeros}>
        <TextInput
          style={styles.input_1}
          placeholder="Digite o 1º número"
          keyboardType="numeric"
          onChangeText={text => setN1(text)}
        />
        <Text style={styles.x}>x</Text>
        <TextInput
          style={styles.input_2}
          placeholder="Digite o 2º número"
          keyboardType="numeric"
          onChangeText={text => setN2(text)}
        />
      </View>
      <Pressable style={styles.button} onPress={multiplicar}>
        <Text style={styles.buttonText}>Calcular</Text>
      </Pressable>
      <View style={styles.resultV}>
        <Text style={styles.rr}>Resultado</Text>
        <Text style={styles.rresult}>{resultado}</Text>
      </View>
    </View>
  );
}
