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
  imagem:{
    width: 200,
    height: 200,
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
  viewResultado: {
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    width: 300
  },
  titleResult: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
  },
  textResult: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
    marginBottom: 15,
  },
})

export {styles};