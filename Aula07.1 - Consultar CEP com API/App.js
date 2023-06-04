import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Clipboard,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import api from './src/services/api';
import { styles } from './styles';

export default function App() {
  const [cep, setCep] = useState('');
  const [cepConfirm, setCepConfirm] = useState('teste1');
  const [endereco, setEndereco] = useState('teste2');
  const [bairro, setBairro] = useState('teste3');
  const [cidade, setCidade] = useState('teste4');
  const [estado, setEstado] = useState('teste5');
  const [erro, setErro] = useState(false);
  const [cepPressionado, setCepPressionado] = useState(false);

  const consultaCep = async (cep) => {
    const response = await api.get('/' + cep + '/json/');
    setCepConfirm(response.data.cep);

    if (response.data.logradouro != '') {
      setEndereco(response.data.logradouro);
    } else {
      setEndereco('Não informado.');
    }

    if (response.data.bairro != '') {
      setBairro(response.data.bairro);
    } else {
      setBairro('Não informado.');
    }

    if (response.data.b != '') {
      setCidade(response.data.localidade);
    } else {
      setCidade('Não informado.');
    }

    if (response.data.uf != '') {
      setEstado(response.data.uf);
    } else {
      setEstado('Não informado.');
    }

    setErro(response.data.erro);
    setCepPressionado(true);
  };

  const verificaCep = () => {
    if (cepPressionado && !erro) {
      return (
        <View style={styles.infosCep}>
          {[
            {
              label: 'CEP',
              value: cepConfirm,
              copyFn: () => copy(cep),
            },
            {
              label: 'Endereço',
              value: endereco,
              copyFn: () => copy(endereco),
              disabled: endereco === 'Não informado.',
            },
            {
              label: 'Bairro',
              value: bairro,
              copyFn: () => copy(bairro),
              disabled: bairro === 'Não informado.',
            },
            {
              label: 'Cidade',
              value: cidade,
              copyFn: () => copy(cidade),
              disabled: cidade === 'Não informado.',
            },
            {
              label: 'Estado',
              value: estado,
              copyFn: () => copy(estado),
              disabled: estado === 'Não informado.',
            },
          ].map(({ label, value, copyFn, disabled }) => (
            <View key={label} style={styles.campoItem}>
              <View style={styles.textContainer}>
                <Text style={styles.titleItem}>{label}</Text>
                <Text style={styles.infoItem}>{value}</Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.btnCopy,
                  {
                    borderColor:
                      value === 'Não informado.' ? 'gray' : '#4f79db',
                  },
                ]}
                onPress={copyFn}
                disabled={disabled}>
                <FontAwesome5
                  name="copy"
                  size={25}
                  color={value === 'Não informado.' ? 'gray' : '#4f79db'}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      );
    } else if (cepPressionado && erro) {
      return (
        <View style={styles.infoError}>
          <View style={styles.campoItemError}>
            <View style={styles.textContainer}>
              <Text style={styles.titleItemError}>Erro</Text>
              <Text style={styles.infoItemError}>
                Nenhum CEP foi encontrado.
              </Text>
            </View>
            <FontAwesome5 name="question" style={styles.btnError} size={25} color="#850f0f"/>
          </View>
        </View>
      );
    }
    return null;
  };

  const verificaConsultaCep = () => {
    if (cep.length === 8) {
      consultaCep(cep);
    } else {
      alert('Por favor, insira um CEP válido');
    }
  };

  const copy = (content) => {
    Clipboard.setString(content);
    alert(`Conteúdo copiado:\n${content}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.areaTitle}>
        <View style={styles.titlePage}>
          <Text style={styles.textTitlePage1}>Consultar endereço</Text>
        </View>
        <TouchableOpacity style={styles.iconTitlePage}>
          <FontAwesome5 name="map-marker-alt" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.input}>
        <Text style={styles.textTitleInput}>Informe seu CEP</Text>
        <View style={styles.areaInput}>
          <View style={styles.divInputCep}>
            <TextInput
              value={cep}
              onChangeText={(texto) => setCep(texto)}
              keyboardType="numeric"
              maxLength={8}
              minLength={8}
              placeholder="00000000"
              style={styles.inputCep}
            />
            <TouchableOpacity
              style={styles.btnInputTarefa}
              onPress={verificaConsultaCep}>
              <FontAwesome name="search" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>{verificaCep()}</View>
    </View>
  );
}
