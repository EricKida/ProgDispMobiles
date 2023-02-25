import { Text, View, StyleSheet, Image, Linking} from 'react-native';

// Calcular a idade do usuário
function calculateAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const diff = Date.now() - dob.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
// Data de nascimento do usuário
const dateOfBirth = '2002-11-14';
const age = calculateAge(dateOfBirth);
console.log(age);

// Redirecionamento do Botão/GitHub
handlePress = () => {
  Linking.openURL('https://github.com/EricKida');
};

// Declarar variáveis
let img = 'https://avatars.githubusercontent.com/u/51220926?v=4';
let imgGitHub = 'https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg';
let nome = 'Eric Kida Meneses Corrêa';
let experiencia = '2020 - 2022: Balconista de Loja de Bicicletas';
let formacao1 = 'Informática para Internet (ETEC Itanhaém)';
let formacao2 = 'Análise e Desenvolvimento de Sistemas (FATEC Praia Grande)';
let projeto = 'TCC - Trampo Certo (ETEC Itanhaém)';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Meu perfil</Text>
      <Image source={{ uri: img }} style={styles.img} />

      <View style={styles.divInfs}>
          <Text style={styles.titleInfs}>Dados Pessoais</Text>
        <Text style={styles.textInfs}>{nome}</Text>
        <Text style={styles.textInfs}>{age} anos</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
    padding: 1,
  },
  titlePage: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
  img: {
    alignSelf: 'center',
    width: 200,
    height: 220,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#1C1C1C',
  },
  divInfs: {
    alignSelf: 'center',
    marginTop: 12,
    width: 320,
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
  },
  titleInfs: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  textInfs: {
    color: '#D3D3D3',
    fontSize: 15,
    fontWeight: 'lighter',
    marginLeft: 15,
    marginRight: 15,
  },
  btnGitHub: { 
    flexDirection: 'row',
    width: 76,
    borderRadius: 4,
    marginLeft: 13,
    marginRight: 3,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#0275d8',
  },
  textInfsGithub: {
    color: '#fff',
    fontWeight: 'bold'
  },
  imgGitHub: {
    width: 16,
    height: 16,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 3,
    marginRight: 3,
  },
  ajust: {
    marginBottom: 10
  },
});
