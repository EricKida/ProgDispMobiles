import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
  },
  areaOp: {
    flexDirection: 'row',
  },
  op: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: 'black',
    padding: 5,
    width: '47%',
    marginLeft: '2%',
    justifyContent: 'center',
  },
  opTitle: {
    fontSize: 18,
    marginTop: 11,
  },
  areaFrase: {
    marginTop: 10,
    width: '95%',
    marginLeft: '2.5%',
    height: 200,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: 'black',
    backgroundColor: '#121212'
  },
  "bg-light": {
    backgroundColor: '#fff',
  },
  "text-dark": {
    color: 'black',
  },
  textFrase: {
    fontSize: 22,
    paddingHorizontal: 20,
    color: '#fff',
  },
  small: {
    fontSize: 14,
  },
});

export {styles};
