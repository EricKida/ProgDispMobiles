import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
    padding: 1,
  },
  titlePage: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 50,
  },
  titleInput: {
    color: '#fff',
    marginTop: 10
  },
  divInput: {
    flexDirection: 'row',
    padding: 10,
  },
  inputType1: {
    backgroundColor: '#fff',
    padding: 4,
    marginTop: 3,
    width: 300,
    borderRadius: 4,
    marginLeft: 10,
  },
  inputType2: {
    backgroundColor: '#fff',
    padding: 4,
    marginTop: 3,
    width: 200,
    borderRadius: 4,
    marginLeft: 10,
  },
  limitInput: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  sliderInput:{
    padding: 10
  },
  switchInput: {
    marginTop: -4,
  },
  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
  viewButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTopic: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20
  },
  textData: {
    color: '#fff',
    fontSize: 16,
  },
  titleData: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  dataView: {
    marginTop: 25,
    borderRadius: 20,
  },
  topic: {
    marginTop: 5,
    padding: 15
  },
})

export {styles};