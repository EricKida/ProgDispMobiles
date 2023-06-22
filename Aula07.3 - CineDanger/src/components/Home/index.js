import React, { useState, useEffect } from 'react';
import { View, FlatList, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import Filme from '../Filme';
import HeaderHome from '../HeaderHome';
import { styles } from './styles';

export default function Home() {
  const [infoFilmes, setInfoFilmes] = useState([]);

  useEffect(() => {
    consultarFilmes();
  }, []);

  const consultarFilmes = async () => {
    const response = await api.get('/');
    setInfoFilmes(response.data);
  };

  return (
    <View style={styles.container}>
      <HeaderHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal
          data={infoFilmes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Filme data={item} />}
        />
      </ScrollView>
    </View>
  );
}
