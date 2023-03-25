import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

class Produto extends Component {
  render() {

    let imageSource;
    if (this.props.data.id === 1) {
      imageSource = require('./imgSrc/AirForce1.png');
    }else if(this.props.data.id === 2){
      imageSource = require('./imgSrc/AirForce1Low.png');
    }else if(this.props.data.id === 3){
      imageSource = require('./imgSrc/SBChron2.png');
    }else if(this.props.data.id === 4){
      imageSource = require('./imgSrc/SBChron2Slip.png');
    }else if(this.props.data.id === 5){
      imageSource = require('./imgSrc/AirJordan1ZoomConfort.png');
    }else if(this.props.data.id === 6){
      imageSource = require('./imgSrc/AirForce1MixNextNature.png');
    }else if(this.props.data.id === 7){
      imageSource = require('./imgSrc/AirForce1LV8.png');
    }
    let background_color = this.props.data.colorAd;

    return (
      <View style={styles.viewAd}>
        <View style={[styles.decorationAd, { backgroundColor: background_color}]}>
          <Image style={styles.imgAd} source={imageSource} />
          <Image
            style={styles.imgAdShadow}
            source={require('./imgSrc/shadow.png')}
          />
        </View>
        <View>
          <Text style={styles.textAd}>{this.props.data.nomeAd}</Text>
          <Text style={styles.priceAd}>{this.props.data.precoAd}</Text>
          <Text style={styles.portionAd}>{this.props.data.parcelaAd}</Text>
        </View>
      </View>
    );
  }
}

export default Produto;
