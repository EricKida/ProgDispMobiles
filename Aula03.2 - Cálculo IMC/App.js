import { Component } from 'react';
import { View, Text, TextInput, Image, Pressable} from 'react-native';
import { styles } from './styles';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      imc: '',
      peso: 0,
      altura: 0,
    };
    
    this.calcular = this.calcular.bind(this);
  }

  calcular(){
    if ( (this.state.peso === '') || (this.state.altura === '') ){
      alert('Opa! Faltou alguma informação, verifique novamente se os campos foram preenchidos.')
      return;
    }

    result = this.state.peso / (this.state.altura * this.state.altura)

    if(result < 18.5){
      this.setState({resultado: 'Abaixo do peso'});
      this.setState({imc: 'Nível IMC: ' + Math.round(result)});
      this.setState({colorTxt: '#ffe933'});
    }
    else if(result <= 24.9){
      this.setState({resultado: 'Peso normal'});
      this.setState({imc: 'Nível IMC: ' + Math.round(result)});
      this.setState({colorTxt: '#6cff00'});
    }
    else if(result <= 29.9){
      this.setState({resultado: 'Sobrepeso'});
      this.setState({imc: 'Nível IMC: ' + Math.round(result)});
      this.setState({colorTxt: '#ff7e00'});
    }
    else if(result <= 34.9){
      this.setState({resultado: 'Obesidade Grau 1'});
      this.setState({imc: 'Nível IMC: ' + Math.round(result)});
      this.setState({colorTxt: '#ff4e00'});
    }
    else if(result <= 39.9){
      this.setState({resultado: 'Obesidade Grau 2'});
      this.setState({imc: 'Nível IMC: ' + Math.round(result)});
      this.setState({colorTxt: '#ff3600'});

    }else{
      this.setState({resultado: 'Obesidade Grau 3'});
      this.setState({imc: 'Nível IMC: ' + Math.round(result)});
      this.setState({colorTxt: '#ff0000'});
    }

  }

  render(){
    let colorFont = this.state.colorTxt;
    return(
      <View style={styles.container}>

        <View style={styles.viewTitle}>
          <Text style={styles.titlePage}>IMC</Text>
          <Text style={styles.subtitlePage}>Indice de Massa Corporal</Text>
        </View>

        <Image style={styles.imagem}
        source={require('./img/TabelaIMC.png')}
        />

        <TextInput
        style={styles.input}
        placeholder="Insira seu peso"
        onChangeText={ (valor) => this.setState({peso: valor})}
        keyboardType="numeric"
        />
        <TextInput
        style={styles.input}
        placeholder="Insira sua altura"
        onChangeText={ (valor) => this.setState({altura: valor})}
        keyboardType="numeric"
        />

        <Pressable style={styles.button} onPress={this.calcular}>
          <Text style={styles.text}>Verificar</Text>
        </Pressable>

        <View style={styles.viewResult}>
          <Text style={styles.titleResult}> Classificação </Text>
          <Text style={[styles.textClassification, { color: colorFont}]}>{this.state.resultado}</Text>
          <Text style={styles.textResult}>{this.state.imc}</Text>
        </View>

      </View>
    );
  }
}

export default App;
