import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F0EDF1',
    padding: 1,
  },
titlePage:{
  backgroundColor: '#06AFEC',
  padding: 15,
  alignItems: 'center',
},
textTitlePageUp: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 22,
  marginTop: 30,
},
divInput: {
  backgroundColor: '#F7F6F9',
  padding: 20,
  marginTop: 10,
  borderRadius: 10,
  ...Platform.select({
      android: {
        elevation: 2,
      },
  }),
},
titleInput:{
  fontWeight: '500',
},
formInput: {
 padding: 4,
 borderRadius: 5,
 borderWidth: 0.3,
 borderColor: 'black',
 marginTop: 8,
},
divLimit: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
},
divLimitValue: {
  backgroundColor: '#06AFEC',
  padding: 10,
  borderRadius: 10,
},
divLimitTxt: {
  color: '#fff',
  fontWeight: '900',
},
titleLimit: {
  marginTop: 6,
  fontWeight: '500',
},
divSwitch: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
txtSwitch: {
  marginTop: 13,
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