import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, Switch, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      name: '',
      year: '',
      sex: 1,
      schooling: 1,
      value: 0,
      brazil: false
    };
    this.confirmar = this.confirmar.bind(this);
  }
 
  confirmar(){
    if (this.state.name === ''){
      alert('Opa! Você esqueceu de inserir seu nome.')
      return;
    }else if(this.state.year === ''){
      alert('Opa! Você esqueceu de inserir sua idade.')
      return;
    }else if(this.state.year > 120 || this.state.year < 18){
      alert('Informe sua idade correta!')
      return;
    }
    this.setState({dataTitle: 'Dados Informados'});
    this.setState({nome: ' '  + this.state.name});
    this.setState({idade: ' ' + this.state.year + ' anos'});

    if(this.state.sex == 1){
      this.setState({sexo: ' Masculino'});
    }else if(this.state.sex == 2){
      this.setState({sexo: ' Feminino'})
    }

    if(this.state.schooling == 1){
      this.setState({escolaridade: ' Fundamental'});
    }else if(this.state.schooling == 2){
      this.setState({escolaridade: ' Médio Incompleto'})
    }else if(this.state.schooling == 3){
      this.setState({escolaridade: ' Médio Completo'})
    }else if(this.state.schooling == 4){
      this.setState({escolaridade: ' Superior Incompleto'})
    }else if(this.state.schooling == 5){
      this.setState({escolaridade: ' Superior Completo'})
    }

    this.setState({valor: ' R$' + Math.round(this.state.value) + ',00'});

    if(this.state.brazil == true){
     this.setState({nacionalidade: ' SIM'})
    }else{
      this.setState({nacionalidade: ' NÃO'})
    }
  }

 render(){

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Abertura de Conta</Text>
      <ScrollView>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Nome: </Text>
          <TextInput
            style={styles.inputType1}
            placeholder=" Insira seu nome"
            onChangeText={ (texto) => this.setState({name: texto})}
            keyboardType="text"
            />
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Idade:  </Text>
          <TextInput
            style={styles.inputType2}
            placeholder=" Insira sua idade"
            onChangeText={ (texto) => this.setState({year: texto})}
            keyboardType="numeric"
            />
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Sexo:   </Text>
          <Picker style={styles.inputType2}
          onValueChange={ (itemLabel) => this.setState({sex: itemLabel}) }
          >
            <Picker.Item key={1} value={1} label="Masculino" />
            <Picker.Item key={2} value={2} label="Feminino" />
          </Picker>
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Escolaridade: </Text>
          <Picker style={styles.inputType2}
           onValueChange={(itemLabel) => this.setState({schooling: itemLabel})}>
            <Picker.Item key={1} value={1} label="Fundamental" />
            <Picker.Item key={2} value={2} label="Médio Incompleto" />
            <Picker.Item key={3} value={3} label="Médio Completo" />
            <Picker.Item key={4} value={4} label="Superior Incompleto" />
            <Picker.Item key={5} value={5} label="Superior Completo" />
          </Picker>
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Limite:  </Text>
          <Text style={styles.limitInput}>R$ {this.state.value.toFixed(0)},00</Text>
        </View>
          <Slider
            minimumValue={0}
            maximumValue={200}
            onValueChange={ (valorSelecionado) => this.setState({value: valorSelecionado})}
            value={this.state.value}
            style={styles.sliderInput}
            step={10}
          />

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Brasileiro:  </Text>
          <Switch 
            value={this.state.brazil}
            style={styles.switchInput}
            onValueChange={ (valorSwitch) => this.setState({brazil: valorSwitch})}
          />
        </View>

        <View style={styles.viewButton}>
          <Pressable style={styles.button} onPress={this.confirmar}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </Pressable>
        </View>

        <View style={styles.dataView}>
          <Text style={styles.titleData}> Dados Informados </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Nome:</Text>
            <Text style={styles.textData}>{this.state.nome}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Idade:</Text>
            <Text style={styles.textData}>{this.state.idade}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Sexo:</Text>
            <Text style={styles.textData}>{this.state.sexo}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Escolaridade:</Text>
            <Text style={styles.textData}>{this.state.escolaridade}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Limite:</Text>
            <Text style={styles.textData}>{this.state.valor}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Brasileiro:</Text>
            <Text style={styles.textData}>{this.state.nacionalidade}</Text>
          </Text>

        </View>
      </ScrollView>
    </View>
   );
 }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
    padding: 1,
  },
  titlePage: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 50,
  },
  titleInput: {
    color: '#fff',
    marginTop: 10
  },
  divInput: {
    flexDirection: 'row',
    padding: 10,
  },
  inputType1: {
    backgroundColor: '#fff',
    padding: 4,
    marginTop: 3,
    width: 300,
    borderRadius: 4,
    marginLeft: 10,
  },
  inputType2: {
    backgroundColor: '#fff',
    padding: 4,
    marginTop: 3,
    width: 200,
    borderRadius: 4,
    marginLeft: 10,
  },
  limitInput: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  sliderInput:{
    padding: 10
  },
  switchInput: {
    marginTop: -4,
  },
  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
  viewButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTopic: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20
  },
  textData: {
    color: '#fff',
    fontSize: 16,
  },
  titleData: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  dataView: {
    marginTop: 25,
    borderRadius: 20,
  },
  topic: {
    marginTop: 5,
    padding: 15
  },
});

