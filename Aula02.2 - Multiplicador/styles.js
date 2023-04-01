import {StyleSheet} from 'react-native';

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
  resultV: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
  },  
  rr: {
    marginTop: 2,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  rresult: {
    marginTop: 2,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
})

export {styles};
