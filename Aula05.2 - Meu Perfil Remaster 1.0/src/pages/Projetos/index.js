import React, { useState } from 'react';
import { Text, View, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Home() {

  const [local1] = useState("TCC");
  const [func1] = useState('Trampo Certo');
  const [desc1] = useState('Website de busca de serviços');
  const [dur1] = useState('2020');

  return (
    <ScrollView style={styles.container}>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="check" size={20} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>{local1}</Text>
          <Text style={styles.textInfItem}>{func1}</Text>
          <Text style={styles.textInfSubitem}>{desc1}</Text>
          <Text style={styles.textSubinfSubitem}>{dur1}</Text>
        </View>
      </View>

    </ScrollView>
  );
}
