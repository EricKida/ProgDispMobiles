import React, { Component } from 'react';
import { Text, View, Pressable, TextInput, Image } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      result: '',
      altura: '',
      peso: '',
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular(){
    if ( (this.state.peso === '') || (this.state.altura === '') ){
      alert('Opa! Faltou alguma informação, verifique novamente se os campos foram preenchidos.')
      return;
    }

    res = (this.state.peso / (this.state.altura * this.state.altura)).toFixed(1)

    if(res < 18.5){
      this.setState({resultado: 'Abaixo do peso'});
      this.setState({colorTxt: '#ffe933'});
    }
    else if(res <= 24.9){
      this.setState({resultado: 'Peso Normal'});
      this.setState({colorTxt: '#6cff00'});
    }
    else if(res <= 29.9){
      this.setState({resultado: 'Sobrepeso'});
      this.setState({colorTxt: '#ff7e00'});
    }
    else if(res <= 34.9){
      this.setState({resultado: 'Obesidade Grau 1'});
      this.setState({colorTxt: '#ff4e00'});
    }
    else if(res <= 39.9){
      this.setState({resultado: 'Obesidade Grau 2'});
      this.setState({colorTxt: '#ff3600'});

    }else{
      this.setState({resultado: 'Obesidade Grau 3'});
      this.setState({colorTxt: '#ff0000'});
    }
    this.setState({imc: 'Nível IMC: ' + res});
  }

  render() {
    let color_Font = this.state.colorTxt;
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
            onChangeText={(valor) => this.setState({ peso: valor })}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.viewInput}>
          <Text style={styles.titleInput}>Altura</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira sua altura"
            onChangeText={(valor) => this.setState({ altura: valor })}
            keyboardType="numeric"
          />
        </View>

        <Pressable style={styles.button} onPress={this.calcular}>
          <Text style={styles.text}>Verificar</Text>
        </Pressable>

        <View style={styles.resultado}>
          <Text style={styles.titleResult}>Classificação</Text>
          <Text style={[styles.textClassification, { color: color_Font}]}>{this.state.resultado}</Text>
          <Text style={styles.textResult}>{this.state.imc}</Text>
        </View>
      </View>
    );
  }
}

export default App;
