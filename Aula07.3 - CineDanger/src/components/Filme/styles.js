import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  filmeContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  filmeImage: {
    width: 200,
    height: 300,
    tintColor: '#fff',
  },
  nomeFilme: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#1a222ecc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 30,
  },
  textNomeFilme: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export {styles};