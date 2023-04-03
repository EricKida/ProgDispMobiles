import React, { useState } from 'react';
import {View, FlatList, Text, ScrollView, TouchableOpacity, Linking} from 'react-native';
import { styles } from './styles';

export default function App() {
  const [feed] = useState([
    {
      id: 1,
      vaga: 'Engenheiro de Software Senior',
      empresa: 'Spotify',
      salario: 'R$ 100.000,00',
      descricao: 'Venha trabalhar conosco na equipe do Spotify.',
      contato: 'https://www.lifeatspotify.com/jobs',
      colorBg: '#3f8f00',
    },
    {
      id: 2,
      vaga: 'Designer UX/UI',
      empresa: '99',
      salario: 'R$ 4.500,00',
      descricao: 'Profissional responsável por projetar a experiência do usuário (UX) e a interface do usuário (UI) de um produto digital.',
      contato: 'https://carreiras.99app.com',
      colorBg: 'gold',
    },
    {
      id: 3,
      vaga: 'Dev. Front-end Júnior',
      empresa: 'Magazine Luiza',
      salario: 'R$ 2.800,00',
      descricao: 'O objetivo do desenvolvedor front-end é garantir que o usuário final tenha uma experiência de uso agradável e intuitiva.',
      contato: 'https://carreiras.magazineluiza.com.br/vagas',
      colorBg: '#007bff',
    },
  ]);

  const Vagas = ({ data }) => {
    const handlePress = () => {
      Linking.openURL(data.contato);
    };
    return (
      <View style={styles.divVaga}>
        <View style={styles.labelVaga}>
          <Text style={styles.titleLabel}>Vaga</Text>
          <Text style={styles.textLabel}>{data.vaga}</Text>
        </View>

        <View style={styles.labelVaga}>
          <Text style={styles.titleLabel}>Empresa</Text>
          <Text style={styles.textLabel}>{data.empresa}</Text>
        </View>

        <View style={styles.labelVaga}>
          <Text style={styles.titleLabel}>Salario</Text>
          <Text style={styles.textLabel}>{data.salario}</Text>
        </View>

        <View style={styles.labelVaga}>
          <Text style={styles.titleLabel}>Descrição</Text>
          <Text style={styles.descLabel}>{data.descricao}</Text>
        </View>

        <TouchableOpacity style={[styles.button, { backgroundColor: (data.colorBg) }]} onPress={handlePress}>
          <Text style={styles.buttonText}>Tenho Interesse</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.vTitlePage}>
        <Text style={styles.titlePage}>Vagas</Text>
      </View>
      <ScrollView style={styles.sv}>
        <FlatList
          data={feed}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Vagas data={item} />}
        />
      </ScrollView>
    </View>
  );
}
