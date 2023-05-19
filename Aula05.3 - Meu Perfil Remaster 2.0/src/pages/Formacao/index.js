import React, { useState } from 'react';
import { Text, View, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  
  const [escola1] = useState('Centro Educ. Pirâmide');
  const [escola2] = useState('ETEC de Itanhaém');
  const [escola3] = useState('FATEC de Praia Grande');

  const [dur1] = useState('2006 - 2017');
  const [dur2] = useState('2018 - 2020');
  const [dur3] = useState('2021 - Atual');

  const [tec2] = useState('Informática p/ Internet');
  const [tec3] = useState('Análise e Desenvolvimento de Sistemas');

  return (
    <ScrollView style={styles.container}>

      <View style={styles.divItem}>
      </View>
      
      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="graduation-cap" size={20} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Ensino Fundamental</Text>
          <Text style={styles.textInfItem}>{escola1}</Text>
          <Text style={styles.textSubinfSubitem}>{dur1}</Text>
        </View>
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="graduation-cap" size={20} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Ensino Médio</Text>
          <Text style={styles.textInfItem}>{escola2}</Text>
          <Text style={styles.textSubinfSubitem}>{dur2}</Text>
        </View>
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="graduation-cap" size={20} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Ensino Técnico</Text>
          <Text style={styles.textInfItem}>{tec2}</Text>
          <Text style={styles.textInfSubitem}>{escola2}</Text>
          <Text style={styles.textSubinfSubitem}>{dur2}</Text>
        </View>
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="graduation-cap" size={20} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Ensino Superior</Text>
          <Text style={styles.textInfItem}>{tec3}</Text>
          <Text style={styles.textInfSubitem}>{escola3}</Text>
          <Text style={styles.textSubinfSubitem}>{dur3}</Text>
        </View>
      </View>

    </ScrollView>
  );
}