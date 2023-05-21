import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  title: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
    padding: 25,
  },
  textTitlePage1: {
    color: 'black',
    fontSize: 25,
    fontWeight: '100',
    marginBottom: -12,
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
  page: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#f5f5f5',
    shadowColor: 'black',
    elevation: 10,
    alignItems: 'center',
  },
  divInputProduto: {
    marginTop: 20,
    backgroundColor: '#e3e3e3',
    flexDirection: 'row',
    borderRadius: 30,
    width: '90%',
    justifyContent: 'center',
  },
  inputQtd: {
    marginStart: 20,
    padding: 5,
  },
  inputProduto: {
    marginStart: 20,
    flex: 1,
  },
  btnInputTarefa: {
    width: 58,
    borderRadius: 30,
    marginLeft: 'auto',
    padding: 15,
    backgroundColor: '#3fa65c',
    alignItems: 'center',
  },
  textBtnTarefa: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listTarefa: {
    marginTop: 20,
  },
  itemProduto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 25,
    marginLeft: '2.5%',
    width: '95%',
    marginTop: 10,
    borderRadius: 20,
  },
  itemOpcoes: {
    flexDirection: 'row',
  },
  itemOpcoesAlter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e39127',
    borderRadius: 10,
    width: 70,
  },
  itemTarefaAcreQtd: {
    padding: 5,
    justifyContent: 'center'
  },
  itemTerefaDecresQtd: {
    padding: 5,
    justifyContent: 'center'
  },
  textContadorProduto: {
    padding: 5,
  },
  itemContadorProduto: {
    justifyContent: 'center'
  },
  itemSimbolo: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  itemProdutoText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemQtdText: {
    fontSize: 15,
    marginTop: -10,
    fontWeight: '100'
  },
  itemTarefaDelete: {
    marginLeft: 5,
    backgroundColor: '#d62023',
    padding: 10,
    borderRadius: 10,
  }
});

export {styles};