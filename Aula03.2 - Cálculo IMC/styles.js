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
  input: {
    borderColor: '#DCDCDC', 
    borderWidth: 1,
    borderRadius: 10,
    color: '#fff',
    padding: 8,
    width: '70%',
    marginTop: 20,
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
  viewResult: {
    width: 250,
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#1C1C1C',
    marginTop: 20,
    height: '1'
  },
  titleResult: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
  },
  textClassification: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textResult: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
})

export {styles};
