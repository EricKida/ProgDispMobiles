import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  titlePage: {
    marginTop: 20,
    padding: 15,
  },
  textTitlePage: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
  },
  divInputTarefa: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  inputTarefa: {
    backgroundColor: '#fff',
    width: '75%',
    paddingLeft: 20,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  btnInputTarefa: {
    padding: 20,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#3fa65c',
  },
  textBtnTarefa: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemTarefa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    width: '89%',
    marginLeft: '5.5%',
    backgroundColor: '#1a1a1a',
    borderRadius: 5,
  },
  itemTarefaID: {
    marginRight: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemTarefaText: {
    flex: 1,
    marginRight: 10,
    color: '#fff',
  },
  itemTarefaDelete: {
    color: '#fff',
    backgroundColor: '#b53838',
    padding: 10,
    borderRadius: 10,
  },
});

export {styles};