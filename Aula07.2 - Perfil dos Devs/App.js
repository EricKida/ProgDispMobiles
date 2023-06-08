import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Clipboard,
  Image,
  StatusBar,
  Linking,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import api from './src/services/api';
import { styles } from './styles';
import moment from 'moment';
import 'moment/locale/pt-br';

export default function App() {
  const [perfil, setPerfil] = useState('');
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [repos, setRepos] = useState('');
  const [criado, setCriado] = useState('');
  const [seguidores, setSeguidores] = useState('');
  const [seguindo, setSeguindo] = useState('');
  const [foto, setFoto] = useState('');
  const [msg, setMsg] = useState('');
  const [html, setHtml] = useState('');
  moment.locale('pt-br');
  const date = moment(criado).format('MMMM/YYYY');
  const [exibirPerfil, setExibirPerfil] = useState(false);

  const consultaPerfil = async () => {
    const response = await api.get('/' + perfil);
    setId(response.data.id);
    setNome(response.data.name);
    setRepos(response.data.public_repos);
    setCriado(response.data.created_at);
    setSeguidores(response.data.followers);
    setSeguindo(response.data.following);
    setMsg(response.data.message);
    setFoto(response.data.avatar_url);
    setHtml(response.data.html_url);
    setExibirPerfil(true);
  };

  const handleOpenLink = () => {
    Linking.openURL(html);
  };

  const exibePerfil = () => {
    return (
      <View style={styles.perfil}>
        <View style={styles.areaPessoa}>
          <View style={styles.areaFotoPessoa}>
            <Image style={styles.infoFoto} source={{ uri: foto }} />
          </View>
          <View style={styles.areaTextPessoa}>
            <TouchableOpacity onPress={handleOpenLink} style={styles.btnLink}>
              <Text style={styles.infoNome}>{nome}</Text>
              <FontAwesome name="external-link" size={10} color="#388bfd" />
            </TouchableOpacity>
            <Text style={styles.infoId}>ID: {id}</Text>
          </View>
        </View>

        <View style={styles.areaInfoPerfil}>
          <View style={styles.areaInfoFollowingPerfil}>
            <Text style={styles.infoFlNumber}>{seguindo}</Text>
            <Text style={styles.infoFl}>Segue</Text>
          </View>
          <View style={styles.areaInfoFollowersPerfil}>
            <Text style={styles.infoFlNumber}>{seguidores}</Text>
            <Text style={styles.infoFl}>Seguidores</Text>
          </View>
        </View>

        <View style={styles.areaInfoPerfil}>
          <View style={styles.areaInfoCreatePerfil}>
            <Text style={styles.infoRpNumber}>{date}</Text>
            <Text style={styles.infoFl}>Criado em</Text>
          </View>
          <View style={styles.areaInfoReposPerfil}>
            <Text style={styles.infoRpNumber}>{repos}</Text>
            <Text style={styles.infoFl}>Repositórios</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.input}>
        <View style={styles.areaInput}>
          <View style={styles.divInputPerfil}>
            <TextInput
              value={perfil}
              onChangeText={(texto) => setPerfil(texto)}
              placeholder="Pesquisar usuário GitHub"
              style={styles.inputPerfil}
            />
            <TouchableOpacity
              style={styles.btnInputTarefa}
              onPress={consultaPerfil}>
              <FontAwesome name="github" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {exibirPerfil && exibePerfil()}
    </View>
  );
}
