import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F0EDF1',
    padding: 1,
  },
scroll: {
  alignItems: 'center',
},
titlePage:{
  backgroundColor: '#06AFEC',
  padding: 15,
  alignItems: 'center',
  flexDirection: 'row',
  paddingHorizontal: 20,
  paddingTop: 10,
},
btnGoBack:{
  marginTop: 33,
},
textTitlePageUp: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 22,
  marginTop: 30,
  flex: 1,
  textAlign: 'center',
  marginRight: 20,
},
divCard: {
  alignItems: 'center',
  marginTop: 20,
},
card: {
  backgroundColor: '#232738',
  borderRadius: 10,
  width: 350,
  height: 200,
},
cardLine_1: {
  flexDirection: 'row',
  marginTop: 20,
  marginLeft: 20,
},
imageLogoVisa: {
  width: 68,
  height: 22,
},
txtCard: {
  color: '#9498A7',
  fontWeight: '500',
  marginLeft: 20,
},
cardLine_2: {
  flexDirection: 'row',
  marginTop: 20,
  marginLeft: 20,
},
numCard: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 20,
},
cardLine_3: {
  flexDirection: 'row',
  marginTop: 10,
  marginLeft: 20,
},
nameCard: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 20,
},
cardLine_4: {
  flexDirection: 'row',
  marginTop: 25,
  marginLeft: 20,
},
venCard: {
  fontSize: 15,
  color: '#9498A7',
},
pipe: {
  marginTop: -4,
  fontSize: 20,
  fontWeight: 'bold',
  color: '#9498A7',
},
cvvCard: {
  fontSize: 15,
  color: '#9498A7',
},
divDinheiroDisponivel: {
  marginTop: 15,
  padding: 20,
  width: 350,
  borderRadius: 10,
  backgroundColor: '#F7F6F9',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
},
valorDinheiroDisponivel: {
  fontWeight: '700',
  fontSize: 18,
  textAlign: 'left',
},
btnDepositar: {
  backgroundColor: '#06AFEC',
  padding: 10,
  borderRadius: 5,
},
btnTxt: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 15,
},
leftContainer: {
  flexDirection: 'column',
},
divInformacoes: {
  marginTop: 20,
  padding: 15,
  backgroundColor: '#F7F6F9',
  width: 350,
  borderRadius: 10,
},
titleInformacoes: {
  fontWeight: 'bold',
  marginBottom: 10,
},
divItemResp: {
  flexDirection: 'row',
  padding: 3,
},
itemResp: {
  fontWeight: '800',
},
divButton: {
  padding: 20,
  alignItems: 'center',
},
button: {
  width: 150,
  backgroundColor: '#06AFEC',
  padding: 8,
  alignItems: 'center',
  borderRadius: 5,
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 20,
}
})


export {styles};