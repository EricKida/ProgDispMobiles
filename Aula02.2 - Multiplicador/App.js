import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';

// Classe do componente 
class App extends Component{
  constructor(props){
    super(props);
    
    // Definindo states
    this.state = {
      resultado: '',
      numero1: 0,
      numero2: 0,
    };
    
    this.calcular = this.calcular.bind(this);
  }


  calcular(){

    // Caso falte valores em qualquer local
    if ( (this.state.numero1 === '') || (this.state.numero2 === '') ){
      alert('É necessário digitar os valores!')
      return;
    }

    // Operação
    result = this.state.numero1 * this.state.numero2

    // Exibição
    this.setState({resultado: 'Resultado: '+ result});
  }

  render(){
    return(
      <View style={styles.container}>

        <Text style={styles.titlePage}>Multiplicador</Text>

        <View style={styles.numeros}>
          <TextInput
          style={styles.input_1}
          placeholder="Digite o 1º número"
          onChangeText={ (valor) => this.setState({numero1: valor})}
          keyboardType="numeric"
          />
          <Text style={styles.x}>x</Text>
          <TextInput
          style={styles.input_2}
          placeholder="Digite o 2º número"
          onChangeText={ (valor) => this.setState({numero2: valor})}
          keyboardType="numeric"
          />

        </View>

        <Pressable style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </Pressable>

        <View style={styles.resultView}>
          <Text style={styles.rr}>{this.state.resultado}</Text>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 1,
  },
  titlePage: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 40,
  },
  numeros: {
    width: 300,
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#1C1C1C',
    marginBottom: 20,
  },
  input_1: {
    borderColor: '#DCDCDC', 
    borderWidth: 1,
    borderRadius: 10,
    color: '#fff',
    padding: 8,
    width: '90%',
    marginTop: 16,
  },
  x: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
  },
  input_2: {
    borderColor: '#DCDCDC', 
    borderWidth: 1,
    borderRadius: 10,
    color: '#fff',
    padding: 8,
    width: '90%',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  rr: {
    marginTop: 16,
    fontSize: 20,
    color: '#fff',
  },
})


export default App;

