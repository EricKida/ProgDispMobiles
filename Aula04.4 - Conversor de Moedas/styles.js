import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 1,
  },
  vTitlePage: {
    marginTop: 50,
    padding: 10,
  },
  titlePage: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitlePage: {
    color: '#B3B3B3',
    fontSize: 13,
  },
  vInput: {
    backgroundColor: '#1C1C1C',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    width: 320,  
  },
  tInput: {
    fontWeight: 'bold',
    padding: 4,
    color: '#fff',
    placeholderTextColor: '#fff',
  },
  cInput: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1, 
    borderColor: '#C7B8B8',
    color: '#fff',
  },
  cInputPicker: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white', 
    color: 'black',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#49c769',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  vSubInput: {
    marginTop: 10,
  },
  vCalculo: {
    backgroundColor: '#1C1C1C',
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    width: 200, 
    textAlign: 'center',
  },
  titleValorFinal:{
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  textMostrarValor: {
    color: '#B3B3B3',
    fontSize: 13,
    marginTop: 5,
    textAlign: 'center',
  },
  vValorFinal: {
    backgroundColor: '#49c769',
    marginTop: 5,
    padding: 2,
    borderRadius: 5,
  },
  textValorFinal: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
})

export {styles};