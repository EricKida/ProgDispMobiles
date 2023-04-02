import {StyleSheet} from 'react-native';

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
    marginTop: 40,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 80,
  },
  op: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonInc: {
    width: 100,
    height: 50,
    backgroundColor: 'green',
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
    marginRight: 15,
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

export {styles};
