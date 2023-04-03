import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
    padding: 1,
  },
  vtitlePage: {
    textAlign: 'center',
  },
  titlePage: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
    marginTop: 30,
  },
  divVaga: {
    backgroundColor: '#1C1C1C',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 30,
    width: 350,
  },
  sv: {
  alignItems: 'center',
  },
  titleLabel: {
    backgroundColor: '#151515',
    padding: 7,
    fontWeight: 'bold',
    width: '100%',
    borderRadius: 10,
    color: '#fff',
  },
  textLabel: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 18,
    color: '#fff',
  },
  descLabel: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    fontSize: 13,
    color: '#fff',
    textAlign: 'justify',
  },
  labelVaga: {
    marginTop: 4,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export {styles};
