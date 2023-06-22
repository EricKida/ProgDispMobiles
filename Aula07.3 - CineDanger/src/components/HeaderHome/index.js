import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function HeaderHome() {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.textHeader}>
        <Text style={styles.textTitleHeader}>CineDanger</Text>
        <Text style={styles.textSubtitleHeader}>Somente filmes perigosos</Text>
      </View>
    </View>
  );
}
