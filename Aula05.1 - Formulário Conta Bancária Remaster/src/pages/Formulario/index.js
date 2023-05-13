import { useState } from 'react';
import {View, Text, ScrollView, TextInput, Switch, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  const [nome, setNome] = useState();
  const [idade, setIdade] = useState(0);
  const [sexo, setSexo] = useState('Masculino');
  const [escolaridade, setEscolaridade] = useState('Médio');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(true);

  function confirmar() {
    if(nome == null){
      alert("O campo 'Nome' está vazio. Preencha todos os dados por-favor.");
    }else if(idade == 0){
      alert("O campo 'Idade' está vazio. Preencha todos os dados por-favor.");
    }else if(idade <= 17){
      alert("Infelizmente não podemos abrir uma conta para menores de 18 anos.");
    }else if(idade >= 150){
      alert("Nosso sistema verificou um erro na sua idade, verifique sua idade novamente e coloque os dados corretos.");
    }else if(limite == 0){
      alert("Não é possível abrir uma conta com um valor de limite igual a zero (0).");
    }else{
      navigation.navigate('Sobre', {
        name: nome,
        age: idade,
        sex: sexo,
        esc: escolaridade,
        value: limite,
        nac: brasileiro ? 'Brasileiro' : 'Estrangeiro',
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titlePage}>
        <Text style={styles.textTitlePageUp}>Abertura de Conta</Text>
      </View>
      <ScrollView>
        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Nome</Text>
          <TextInput
            style={styles.formInput}
            placeholder=" Insira seu nome"
            onChangeText={(nome) => setNome(nome)}
            keyboardType="text"
          />
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Idade</Text>
          <TextInput
            style={styles.formInput}
            placeholder=" Insira sua idade"
            onChangeText={(idade) => setIdade(idade)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Sexo</Text>
          <Picker
            style={styles.formInput}
            selectedValue={sexo}
            onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
            <Picker.Item key={1} value="Masculino" label="Masculino" />
            <Picker.Item key={2} value="Feminino" label="Feminino" />
          </Picker>
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Escolaridade</Text>
          <Picker
            style={styles.formInput}
            selectedValue={escolaridade}
            onValueChange={(itemValue, itemIndex) =>
              setEscolaridade(itemValue)
            }>
            <Picker.Item key={1} value="Médio" label="Médio" />
            <Picker.Item key={2} value="Graduação" label="Graduação" />
            <Picker.Item key={3} value="Pós Graduação" label="Pós Graduação" />
            <Picker.Item key={4} value="MBA" label="MBA" />
          </Picker>
        </View>

        <View style={styles.divInput}>
          <View style={styles.divLimit}>
            <Text style={styles.titleLimit}>Limite</Text>
            <View style={styles.divLimitValue}>
              <Text style={styles.divLimitTxt}>R$ {limite},00</Text>
            </View>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={200}
            onValueChange={(valorSelecinado) => setLimite(valorSelecinado)}
            value={limite}
            style={styles.sliderInput}
            step={10}
            minimumTrackTintColor="#06AFEC"
            maximumTrackTintColor="gray"
            thumbTintColor="#06AFEC"
          />
        </View>

        <View style={styles.divInput}>
          <Text style={styles.titleInput}>Brasileiro</Text>
          <View style={styles.divSwitch}>
            <Text style={styles.txtSwitch}>Eu me declaro brasileiro.</Text>
            <Switch
              trackColor={{ false: 'gray', true: '#40b4de' }}
              thumbColor={'#06AFEC'}
              value={brasileiro}
              style={styles.switchInput}
              onValueChange={(valorSwitch) => setBrasileiro(valorSwitch)}
            />
          </View>
        </View>

        <View style={styles.divButton}>
          <TouchableOpacity style={styles.button} onPress={confirmar}>
            <Text style={styles.buttonText}>CONFIRMAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
