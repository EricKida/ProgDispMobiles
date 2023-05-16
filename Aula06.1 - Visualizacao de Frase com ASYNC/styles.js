import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  divTitlePage: {
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    borderRadius: 10,
  },
  divSwitchs: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: 'black',
    padding: 5,
    width: '49%',
    marginLeft: '0%',
    marginRight: '1.5%',
  },
  textSwitchs: {
    fontSize: 18,
    marginTop: 12,
  },
  divSupSwitchs: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  textTitlePage: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 2,
  },
  divFrase: {
    width: '100%',
    height: 200,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: 'black',
  },
});

export {styles};
