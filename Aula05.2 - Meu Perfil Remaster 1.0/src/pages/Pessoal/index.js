import React, { useState } from 'react';
import { Text, View, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Home() {

  // Calcular minha idade
  function calcularIdade(dataNascimento) {
    const dob = new Date(dataNascimento);
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  // Redirecionamento do Botão/GitHub
  function githubRedirection() {
    Linking.openURL('https://github.com/EricKida');
  }

  // Redirecionamento do Whatsapp
  function whatsappRedirection() {
    Linking.openURL('https://api.whatsapp.com/send?phone=5513974040206&text=Ol%C3%A1,%20me%20chamo%20***%20e%20vim%20aqui%20atrav%C3%A9s%20do%20seu%20trabalho%20no%20React%20Native');
  }

  // Redirecionamento do Instagram
  function instagramRedirection() {
    Linking.openURL('https://www.instagram.com/kinhodzn/');
  }

  // Imagem do perfil do Github
  const [img] = useState(
    'https://avatars.githubusercontent.com/u/51220926?v=4'
  );
  
  const [nome] = useState('Eric Kida Meneses Corrêa');
  const [dataNascimento] = useState('2002-11-14');
  const [idade] = useState(calcularIdade(dataNascimento));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.divImgPessoal}>
        <Image source={{ uri: img }} style={styles.imgPessoal} />
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="user" size={25} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Nome</Text>
          <Text style={styles.textInfItem}>{nome}</Text>
        </View>
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="birthday-cake" size={20} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Idade</Text>
          <Text style={styles.textInfItem}>{idade} anos</Text>
        </View>
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="github" size={25} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>GitHub</Text>
          <TouchableOpacity style={styles.btnGithub} onPress={githubRedirection}>
            <Text style={styles.textInfItem}>EricKida</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="whatsapp" size={25} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>WhatsApp</Text>
          <TouchableOpacity style={styles.btnGithub} onPress={whatsappRedirection}>
            <Text style={styles.textInfItem}>+55 13 97404-0206</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="instagram" size={25} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Instagram</Text>
          <TouchableOpacity style={styles.btnGithub} onPress={instagramRedirection}>
            <Text style={styles.textInfItem}>@kinhodzn</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
}
