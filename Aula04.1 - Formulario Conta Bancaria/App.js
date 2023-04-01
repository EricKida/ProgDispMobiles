import React, { useState } from 'react';
import {View, Text, ScrollView, TextInput, Switch, Pressable} from 'react-native';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [escolaridade, setEscolaridade] = useState('Médio');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);
  
  const [resultadoNome, setResultadoNome] = useState('');
  const [resultadoIdade, setResultadoIdade] = useState('');
  const [resultadoSexo, setResultadoSexo] = useState('');
  const [resultadoEscolaridade, setResultadoEscolaridade] = useState('');
  const [resultadoLimite, setResultadoLimite] = useState('');
  const [resultadoBrasileiro, setResultadoBrasileiro] = useState('');

  function confirmar() {
    if(nome != '' && idade != ''){

      if(idade > 18){
        setResultadoNome(nome);
        setResultadoIdade(idade);
        setResultadoSexo(sexo);
        setResultadoEscolaridade(escolaridade);
        setResultadoLimite('R$ ' + (limite) + ',00');
        if(brasileiro == 1){
          setResultadoBrasileiro("Sim")
        }else{
          setResultadoBrasileiro("Não")
        }

      }else{
        alert("Você é menor de idade, não podemos abrir uma conta para você :(");
      }

    }else if(nome == ''){
      alert("Você não preencheu o campo 'Nome'")
    }else{
      alert("Você não preencheu o campo 'Idade'")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Abertura de Conta</Text>
      <ScrollView>
        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Nome: </Text>
          <TextInput
            style={styles.inputType1}
            placeholder=" Insira seu nome"
            onChangeText={text => setNome(text)}
            keyboardType="text"
          />
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Idade: </Text>
          <TextInput
            style={styles.inputType2}
            placeholder=" Insira sua idade"
            onChangeText={text => setIdade(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Sexo: </Text>
          <Picker
            style={styles.inputType2}
            selectedValue={sexo}
            onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
            >
            <Picker.Item key={1} value="Masculino" label="Masculino" />
            <Picker.Item key={2} value="Feminino" label="Feminino" />
          </Picker>
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Escolaridade: </Text>
          <Picker
            style={styles.inputType2}
            selectedValue={escolaridade}
            onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)}
            >
            <Picker.Item key={1} value="Médio" label="Médio" />
            <Picker.Item key={2} value="Graduação" label="Graduação" />
            <Picker.Item key={3} value="Pós Graduação" label="Pós Graduação" />
            <Picker.Item key={4} value="MBA" label="MBA" />
          </Picker>
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Limite: </Text>
          <Text style={styles.limitInput}>
            R$ {limite},00
          </Text>
        </View>
        <Slider
          minimumValue={0}
          maximumValue={200}
          onValueChange={(value) => setLimite(value)}
          value={limite}
          style={styles.sliderInput}
          step={10}
        />

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Brasileiro: </Text>
          <Switch
            value={brasileiro}
            style={styles.switchInput}
            onValueChange={(value) => setBrasileiro(value)}
          />
        </View>

        <View style={styles.viewButton}>
          <Pressable style={styles.button} onPress={confirmar}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </Pressable>
        </View>

        <View style={styles.dataView}>
          <Text style={styles.titleData}> Dados Informados </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Nome: </Text>
            <Text style={styles.textData}>{resultadoNome}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Idade: </Text>
            <Text style={styles.textData}>{resultadoIdade}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Sexo: </Text>
            <Text style={styles.textData}>{resultadoSexo}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Escolaridade: </Text>
            <Text style={styles.textData}>{resultadoEscolaridade}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Limite: </Text>
            <Text style={styles.textData}>{resultadoLimite}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Brasileiro: </Text>
            <Text style={styles.textData}>{resultadoBrasileiro}</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
