import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewAd: {
    backgroundColor: '#1C1C1C',
    marginLeft: 10,
    marginRight: 10,
    height: 340,
    width: 250,
    borderRadius: 10,
    alignItems: 'center',
  },
  imgAd: {
    width: 250,
    height: 150,
  },
  imgAdShadow: {
    marginTop: -182,
    width: 230,
    height: 200,
    opacity: 0.5,
  },
  decorationAd: {
    alignItems: 'center',
    marginTop: 20,
    width: 175,
    height: 175,
    borderRadius: 100,
  },
  textAd: {
    marginTop: 30,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceAd: {
    marginTop: 20,
    color: '#fff',
    fontSize: 16,
  },
  portionAd: {
    color: 'gray',
    fontSize: 12,
    marginTop: -5,
  },
});

export { styles };
