import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles } from './styles';
import HeaderDetails from '../HeaderDetails';

export default function Details({ route }) {
  return (
    <View style={styles.detailsContainer}>
      <StatusBar barStyle="light-content" />
      <HeaderDetails
        imgFilme={route.params?.foto}
        nomeFilme={route.params?.filme}
      />
      <View style={styles.sinopseContainer}>
        <Text style={styles.sinopseTitle}>Sinopse</Text>
        <Text style={styles.sinopseText}>{route.params?.sinopse}</Text>
      </View>
    </View>
  );
}
