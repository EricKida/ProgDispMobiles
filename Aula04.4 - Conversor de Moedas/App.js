import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

export default function App() {
  const [valor, setValor] = useState(0);
  const [moedaConversao, setMoedaConversao] = useState(1);
  const [moedaDestino, setMoedaDestino] = useState(1);
  const [mostrarValor, setMostrarValor] = useState('');
  const [valorFinal, setValorFinal] = useState('');

  function calcular() {
    if(valor != 0){
      if(moedaConversao == 1){ // Real
        setMostrarValor("R$ "+ valor + " equilavem a");
        if(moedaDestino == 1){ // Dolar
          setValorFinal("US$ " + (valor*0.19764).toFixed(2));
        }else if(moedaDestino == 2){ // Euro
          setValorFinal("€ " + (valor*0.18107).toFixed(2));
        }else if(moedaDestino == 3){ // Real
          alert("Você não pode converter duas moedas iguais - R$");
          setMostrarValor('');
        }
      }
      else if(moedaConversao == 2){ // Dolar
        setMostrarValor("US$ "+ valor + " equilavem a");
        if(moedaDestino == 1){ // Dolar
          alert("Você não pode converter duas moedas iguais - US$");
          setMostrarValor('');
        }else if(moedaDestino == 2){ // Euro
          setValorFinal("€ " + (valor*0.91615).toFixed(2));
        }else if(moedaDestino == 3){ // Real
          setValorFinal("R$ " + (valor*5.05700).toFixed(2));
        }
      }
      else if(moedaConversao == 3){  // Euro
        setMostrarValor("€ "+ valor + " equilavem a");
        if(moedaDestino == 1){ // Dolar
          setValorFinal("US$ " + (valor*1.09155).toFixed(2));
        }else if(moedaDestino == 2){ // Euro
          alert("Você não pode converter duas moedas iguais - €");
          setMostrarValor('');
        }else if(moedaDestino == 3){ // Real
          setValorFinal("R$ " + (valor*5.52286).toFixed(2));
        }
      }
    }else{
      alert("Nenhum valor foi digitado");
      setMostrarValor('');
      setValorFinal('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.vTitlePage}>
        <Text style={styles.titlePage}>Conversor de Moedas</Text>
        <Text style={styles.subtitlePage}>Real, Dolar e Euro</Text>
      </View>
      <View style={styles.vInput}>
        <View style={styles.vSubInput}>
          <Text style={styles.tInput}>Valor</Text>
          <TextInput
            style={styles.cInput}
            placeholder="Insira o valor"
            onChangeText={(text) => setValor(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.vSubInput}>
          <Text style={styles.tInput}>Desta moeda</Text>
          <Picker
            style={styles.cInputPicker}
            selectedValue={moedaConversao}
            onValueChange={(itemValue, itemIndex) =>
              setMoedaConversao(itemValue)
            }>
            <Picker.Item key={1} value="1" label="Real - R$" />
            <Picker.Item key={2} value="2" label="Dolar - US$" />
            <Picker.Item key={3} value="3" label="Euro - €" />
          </Picker>
        </View>

        <View style={styles.vSubInput}>
          <Text style={styles.tInput}>Para esta moeda</Text>
          <Picker
            style={styles.cInputPicker}
            selectedValue={moedaDestino}
            onValueChange={(itemValue, itemIndex) =>
              setMoedaDestino(itemValue)
            }>
            <Picker.Item key={1} value="1" label="Dolar - US$" />
            <Picker.Item key={2} value="2" label="Euro - €" />
            <Picker.Item key={3} value="3" label="Real - R$" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.button} onPress={calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.vCalculo}>
          <Text style={styles.titleValorFinal}>Conversão</Text>
          <View style={styles.vMostrarValor}>
            <Text style={styles.textMostrarValor}>{mostrarValor}</Text>
          </View>
          <View style={styles.vValorFinal}>
            <Text style={styles.textValorFinal}>{valorFinal}</Text>
          </View>
        </View>
    </View>
  );
}
