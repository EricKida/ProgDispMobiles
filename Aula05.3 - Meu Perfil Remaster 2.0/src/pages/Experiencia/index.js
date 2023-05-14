import React, { useState } from 'react';
import { Text, View, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Home() {

  const [local1] = useState("Erik's Bike");
  const [func1] = useState('Balconista');
  const [desc1] = useState('Atendimento ao cliente, gestão de estoque e limpeza do local.');
  const [dur1] = useState('2020 - 2022');

  return (
    <ScrollView style={styles.container}>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="bicycle" size={20} color="#c1c1c1" />
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
