import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    padding: 30,
    backgroundColor: '#1a222e',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textHeader: {
    alignItems: 'center',
    flex: 1,
  },
  textTitleHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textSubtitleHeader: {
    color: '#8c8c8c',
    fontSize: 13,
  },
});

export { styles };
