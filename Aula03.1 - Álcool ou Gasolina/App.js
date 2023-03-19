import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, Pressable} from 'react-native';
import { styles } from './styles';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resposta: '',
      alcool: 0,
      gasolina: 0,
    };
    
    this.calcular = this.calcular.bind(this);
  }

  calcular(){

    if ( (this.state.alcool === '') || (this.state.gasolina === '') ){
      alert('É necessário digitar os valores!')
      return;
    }

    res = this.state.alcool / this.state.gasolina

    if(res < 0.7){
    this.setState({resposta: 'Melhor utilizar Álcool'});
    }else{
      this.setState({resposta:  'Melhor utilizar Gasolina'});
    }

  }

  render(){
    return(
      <View style={styles.container}>

      <View style={styles.viewTitle}>
        <Text style={styles.titlePage}>Álcool ou Gasolina</Text>
      </View>

      <View style={styles.containerImagem}>
        <Image style={styles.imagem}
          source={require('./img/combustivel.png')}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.titleInput}>Álcool</Text>
        <TextInput
        style={styles.input}
        placeholder="Digite o preço do Álcool"
        onChangeText={ (valor) => this.setState({alcool: valor})}
        keyboardType="numeric"
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.titleInput}>Gasolina</Text>
        <TextInput
        style={styles.input}
        placeholder="Digite o preço da gasolina"
        onChangeText={ (valor) => this.setState({gasolina: valor})}
        keyboardType="numeric"
        />
      </View>

      <Pressable style={styles.button} onPress={this.calcular}>
        <Text style={styles.text}>Verificar</Text>
      </Pressable>
      
      <View style={styles.viewResultado}>
          <Text style={styles.titleResult}>Resultado</Text>
          <Text style={styles.textResult}>{this.state.resposta}</Text>
      </View>
      
      </View>
    );
  }
}

export default App;