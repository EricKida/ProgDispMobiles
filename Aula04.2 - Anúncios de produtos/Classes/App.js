import { Component } from 'react';
import { View, Image, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import Produto from './src/Produto';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [
        {
          id: 1,
          nomeAd: 'Air Force 1',
          precoAd: 'R$ 799,99',
          parcelaAd: 'ou 10x de R$ 80,00',
          colorAd: 'lightgray',
        },
        {
          id: 2,
          nomeAd: 'Air Force 1 Low',
          precoAd: 'R$ 1199,99',
          parcelaAd: 'ou 10x de R$ 120,00',
          colorAd: '#4682B4',
        },
        {
          id: 3,
          nomeAd: 'SB Chron 2',
          precoAd: 'R$ 459,99',
          parcelaAd: 'ou 7x de R$ 65,71',
          colorAd: '#e63946',
        },
        {
          id: 4,
          nomeAd: 'SB Chron 2 Slip',
          precoAd: 'R$ 339,99',
          parcelaAd: 'ou 5x de R$ 68,00',
          colorAd: '#e9c46a',
        },
        {
          id: 5,
          nomeAd: 'Air Jordan 1 Zoom',
          precoAd: 'R$ 1099,99',
          parcelaAd: 'ou 10x de R$ 110,00',
          colorAd: '#663399',
        },
        {
          id: 6,
          nomeAd: 'Air Force 1 Next Nature',
          precoAd: 'R$ 859,99',
          parcelaAd: 'ou 10x de R$ 86,00',
          colorAd: '#fcbf49',
        },
        {
          id: 7,
          nomeAd: 'Air Force 1 LV8',
          precoAd: 'R$ 699,99',
          parcelaAd: 'ou 10x de R$ 70,00',
          colorAd: '#202020',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Image
            style={styles.imgLogo}
            source={require('./img/LogoNike.png')}
          />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList
            data={this.state.produtos}
            horizontal={true}
            renderItem={({ item }) => <Produto data={item} />}
          />
        </ScrollView>
      </View>
    );
  }
}

export default App;
