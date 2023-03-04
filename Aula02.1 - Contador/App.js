import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Classe do componente 
class App extends Component {

// Utilizando Props
  constructor(props) {
    super(props);

// Prop de Count
    this.state = {
      count: 0
    };
  }

// Caso botão com método incrementCount for acionado, acrescente 1 no count
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

// Caso botão com método incrementCount for acionado e o count for diferente de 0, tire 1 no count. Caso count = 0, emita um alert.
  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }else{
      alert("Não é possível retirar um valor de 0")
    }
  }

  render() {

// Perfumaria de tamanho de fonte/margem
    const {count} = this.state;
    let countFontSize = 130;
    let margin = 0;
    if (count > 99 && count <= 999) {
      countFontSize = 100;
      margin = 25;
    }else if(count > 999){
      countFontSize = 70;
      margin = 45;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titlePage}>Contador</Text>
        <View style={styles.contadorView}>
          <Text style={[styles.count, { fontSize: countFontSize, marginTop: margin}]}>{this.state.count}</Text>
        </View>
        <View style={styles.op}>
          <TouchableOpacity onPress={this.incrementCount} style={styles.buttonInc}>
            <Text style={styles.Inc}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.decrementCount} style={styles.buttonDec}>
            <Text style={styles.Dec}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 1,
  },
  contadorView: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#1C1C1C',
    width: 200,
    height: 200,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#1C1C1C',
    marginBottom: 20
  },
  count: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  op: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonInc: {
    width: 100,
    height: 50,
    backgroundColor: 'green',
    marginRight: 15,
    borderRadius: 10
  },
  Inc: {
    color: '#fff',
    fontSize: 31,
    textAlign: 'center'
  },
  buttonDec: {
    width: 100,
    height: 50,
    color: '#fff',
    backgroundColor: 'red',
    borderRadius: 10
  },
  Dec: {
    color: '#fff',
    fontSize: 31,
    textAlign: 'center'
  },
  titlePage: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 40,
  },
});


export default App;
