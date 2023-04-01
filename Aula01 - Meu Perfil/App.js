import React, { useState } from 'react';
import { Text, View, Image, Linking, ScrollView} from 'react-native';
import { styles } from './styles';

export default function App() {

  const [img] = useState('https://avatars.githubusercontent.com/u/51220926?v=4');
  const [imgGitHub] = useState('https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg');
  const [nome] = useState('Eric Kida Meneses Corrêa');
  const [dataNascimento] = useState('2002-11-14');
  const [idade] = useState(calcularIdade(dataNascimento));
  const [experiencia] = useState('2020 - 2022: Balconista de Loja de Bicicletas');
  const [formacao1] = useState('Informática para Internet (ETEC Itanhaém)');
  const [formacao2] = useState('Análise e Desenvolvimento de Sistemas (FATEC Praia Grande)');
  const [projeto] = useState('TCC - Trampo Certo (ETEC Itanhaém)');

  // Calcular a idade do usuário
  function calcularIdade(dataNascimento) {
    const dob = new Date(dataNascimento);
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  // Redirecionamento do Botão/GitHub
  handlePress = () => {
    Linking.openURL('https://github.com/EricKida');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Meu perfil</Text>
      <ScrollView>
        <Image source={{ uri: img }} style={styles.img} />
        <View style={styles.divInfs}>
            <Text style={styles.titleInfs}>Dados Pessoais</Text>
          <Text style={styles.textInfs}>{nome}</Text>
          <Text style={styles.textInfs}>{idade} anos</Text>
          <View style={styles.btnGitHub}>
            <Image source={{ uri: imgGitHub }} style={styles.imgGitHub} />
            <Text onPress={this.handlePress} style={styles.textInfsGithub}>GitHub</Text>
          </View>  
        </View>

        <View style={styles.divInfs}>
          <Text style={styles.titleInfs}>Formação</Text>
          <Text style={styles.textInfs}>- {formacao1}</Text>
          <Text style={styles.textInfs}>- {formacao2}</Text>
          <View style={styles.ajust}></View>
        </View>

        <View style={styles.divInfs}>
          <Text style={styles.titleInfs}>Experiência</Text>
          <Text style={styles.textInfs}>{experiencia}</Text>
          <View style={styles.ajust}></View>
        </View>

        <View style={styles.divInfs}>
          <Text style={styles.titleInfs}>Projetos</Text>
          <Text style={styles.textInfs}>{projeto}</Text>
          <View style={styles.ajust}></View>
        </View>
      </ScrollView>
    </View>
  );
}


