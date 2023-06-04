import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  areaInput: {
    marginTop: 10,
    alignItems: 'center',
  },
  areaTitle: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'center',
    padding: 25,
  },
  textTitlePage1: {
    color: 'black',
    fontSize: 25,
    fontWeight: '100',
  },
  textTitlePage2: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  iconTitlePage: {
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  divInputCep: {
    backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    borderRadius: 30,
    width: '100%',
  },
  inputCep: {
    marginStart: 20,
    flex: 1,
  },
  btnInputTarefa: {
    width: 58,
    borderRadius: 30,
    marginLeft: 'auto',
    padding: 15,
    backgroundColor: '#4f79db',
    alignItems: 'center',
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20
  },
  textTitleInput: {
    fontSize: 15,
    marginLeft: 20,
    fontWeight: '400',
    marginBottom: -5,
  },
  infosCep: {
    padding: 20,
  },
  infoError: {
    padding: 20,
  },
  campoItem: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleItem: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
  },
  textContainer: {
    flexDirection: 'column',
  },
  btnCopy: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#4f79db',
    borderWidth: 2,
  },
  campoItemError: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#c74242',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleItemError: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
  },
  btnError: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#b82e2e'
  },
  infoItemError: {
    color: '#fff',
  }
});

export {styles};