import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Switch, Pressable} from 'react-native';
import { styles } from './styles';
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
      sex: 'Masculino',
      schooling: 'Medio',
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
            selectedValue={this.state.sex}
            onValueChange={ (itemValue, itemIndex) => this.setState({sex: itemValue}) }
          >
            <Picker.Item key={1} value='Masculino' label="Masculino" />
            <Picker.Item key={2} value='Feminino' label="Feminino" />
          </Picker>
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Escolaridade: </Text>
          <Picker style={styles.inputType2}
            selectedValue={this.state.schooling}
            onValueChange={ (itemValue, itemIndex) => this.setState({schooling: itemValue}) }
          >

            <Picker.Item key={1} value='Médio' label="Médio" />
            <Picker.Item key={2} value='Graduação' label="Graduação" />
            <Picker.Item key={3} value='Pós Graduação' label="Pós Graduação" />
            <Picker.Item key={4} value='MBA' label="MBA" />
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
            <Text style={styles.textTopic}>Nome: </Text>
            <Text style={styles.textData}>{this.state.nome}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Idade: </Text>
            <Text style={styles.textData}>{this.state.idade}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Sexo: </Text>
            <Text style={styles.textData}>{this.state.sex}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Escolaridade: </Text>
            <Text style={styles.textData}>{this.state.schooling}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Limite: </Text>
            <Text style={styles.textData}>{this.state.valor}</Text>
          </Text>

          <Text style={styles.topic}>
            <Text style={styles.textTopic}>Brasileiro: </Text>
            <Text style={styles.textData}>{this.state.nacionalidade}</Text>
          </Text>

        </View>
      </ScrollView>
    </View>
   );
 }
}


