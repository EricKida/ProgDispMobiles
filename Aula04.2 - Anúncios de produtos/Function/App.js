import React, { useState } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Image style={styles.imgLogo} source={require('./img/LogoNike.png')} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: 'lightgray' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/AirForce1.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>Air Force 1</Text>
            <Text style={styles.priceAd}>R$ 1199,99</Text>
            <Text style={styles.portionAd}>ou 10x de R$ 80,00</Text>
          </View>
        </View>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: '#4682B4' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/AirForce1Low.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>Air Force 1 Low</Text>
            <Text style={styles.priceAd}>R$ 1199,99</Text>
            <Text style={styles.portionAd}>ou 10x de R$ 120,00</Text>
          </View>
        </View>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: '#e63946' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/SBChron2.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>SB Chron 2</Text>
            <Text style={styles.priceAd}>R$ 459,99</Text>
            <Text style={styles.portionAd}>ou 7x de R$ 65,71</Text>
          </View>
        </View>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: '#e9c46a' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/SBChron2Slip.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>SB Chron 2 Slip</Text>
            <Text style={styles.priceAd}>R$ 339,99</Text>
            <Text style={styles.portionAd}>ou 5x de R$ 68,00</Text>
          </View>
        </View>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: '#663399' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/AirJordan1ZoomConfort.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>Air Jordan 1 Zoom</Text>
            <Text style={styles.priceAd}>R$ 1099,99</Text>
            <Text style={styles.portionAd}>ou 10x de R$ 110,00</Text>
          </View>
        </View>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: '#fcbf49' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/AirForce1MixNextNature.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>Air Force 1 Next Nature</Text>
            <Text style={styles.priceAd}>R$ 859,99</Text>
            <Text style={styles.portionAd}>ou 10x de R$ 86,00</Text>
          </View>
        </View>

        <View style={styles.viewAd}>
          <View style={[styles.decorationAd, { backgroundColor: '#202020' }]}>
            <Image
              style={styles.imgAd}
              source={require('./src/imgSrc/AirForce1LV8.png')}
            />
            <Image
              style={styles.imgAdShadow}
              source={require('./src/imgSrc/shadow.png')}
            />
          </View>
          <View>
            <Text style={styles.textAd}>Air Force 1 LV8</Text>
            <Text style={styles.priceAd}>R$ 699,99</Text>
            <Text style={styles.portionAd}>ou 10x de R$ 70,00</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
