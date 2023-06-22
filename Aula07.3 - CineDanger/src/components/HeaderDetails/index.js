import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HeaderDetails({ imgFilme, nomeFilme }) {
  const navigation = useNavigation();

  return (
    <ImageBackground source={{ uri: imgFilme }} style={styles.filmeImage}>
      <View style={styles.headerContainer}>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.btnGoBack}
            onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={16} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.nomeFilme}>
          <Text style={styles.textNomeFilme}>{nomeFilme}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
