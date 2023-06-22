import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Filme(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.filmeContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            sinopse: props.data.sinopse,
            filme: props.data.nome,
            foto: props.data.foto,
          })
        }>
        <View style={{ borderRadius: 30, overflow: 'hidden' }}>
          <ImageBackground
            source={{ uri: props.data.foto }}
            style={styles.filmeImage}>
            <View style={styles.nomeFilme}>
              <Text style={styles.textNomeFilme}>{props.data.nome}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
}
