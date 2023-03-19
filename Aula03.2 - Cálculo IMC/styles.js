import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 1,
  },
  viewTitle:{
    padding: 30
  }, 
  titlePage: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitlePage: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -5,
  },
  imagem:{
    width: 300,
    height: 210,
    borderRadius: 5,
  },
  viewInput: {
    width: '70%',
    marginTop: 20,
  },
  titleInput: {
    color: '#fff',
    fontSize: 15,
    padding: 3,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#DCDCDC', 
    borderWidth: 1,
    borderRadius: 10,
    color: '#fff',
    padding: 8,
  },
  button:{
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 4,
  },
  text:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  resultado: {
    marginTop: 20,
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    padding: 8,
    width: 220
  },
  titleResult: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
  },
  textClassification: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textResult: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
})

export {styles};
