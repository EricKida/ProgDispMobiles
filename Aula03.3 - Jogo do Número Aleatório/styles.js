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
    fontSize: 22,
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
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  titleInput: {
    color: '#fff',
    fontSize: 15,
    padding: 3,
    fontWeight: 'bold',
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
  numberSorteio: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 10,
  },
  viewSorteio: {
    marginTop: 20,
    width: 150,
    height: 150,
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
})

export {styles};
