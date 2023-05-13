import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

export default function Result({ route }) {
  const navigation = useNavigation();
  const currentYear = new Date().getFullYear();
  const lastTwoDigits = parseInt(currentYear.toString().slice(-2), 10);
  const year = lastTwoDigits + 5;

  let numberNac = ""
  if(route.params?.nac == "Brasileiro"){
    numberNac = "1";
  }else{
    numberNac = "0";
  }

  let numeroCartao = "";
  if (route.params?.age > 100) {
    if(route.params?.value >= 100){
      numeroCartao = "4174 8312 7699 " + route.params?.value + numberNac;
    }else{
      numeroCartao = "4174 8312 7699 " + route.params?.value + "2" + numberNac;
    }
  }else{
    if(route.params?.value >= 100){
      numeroCartao = "4174 8312 76" + route.params?.age + " " +route.params?.value + numberNac;
    }else{
      numeroCartao = "4174 8312 76" + route.params?.age + " " + route.params?.value + "4" + numberNac;
    }

  }

  let cvvCartao = "";
  if (route.params?.age >= 100) {
    cvvCartao = route.params?.age;
  }else{
    cvvCartao = route.params?.age + "4";
  }

  return (
    <View style={styles.container}>
      <View style={styles.titlePage}>
        <TouchableOpacity style={styles.btnGoBack} onPress={() => navigation.goBack()}>
          <FontAwesome name='arrow-left' size={16} color='#FFF'/>
         </TouchableOpacity>
        <Text style={styles.textTitlePageUp}>Seus Dados</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.divCard}>
          <View style={styles.card}>
            <View style={styles.cardLine_1}>
              <Image source={require('./img/logoVisa.png')} style={styles.imageLogoVisa} />
              <Text style={styles.txtCard}>dinheiro em conta</Text>
            </View>
            <View style={styles.cardLine_2}>
              <Text style={styles.numCard}>{numeroCartao}</Text>
            </View>
            <View style={styles.cardLine_3}>
              <Text style={styles.nameCard}>{route.params?.name}</Text>
            </View>
            <View style={styles.cardLine_4}>
              <Text style={styles.venCard}>Vencimento 06/{year}    </Text>
              <Text style={styles.pipe}>|</Text>
              <Text style={styles.cvvCard}>     CVV {cvvCartao}</Text>
            </View>
          </View>
        </View>

        <View style={styles.divDinheiroDisponivel}>
          <View style={styles.leftContainer}>
            <Text>Dinheiro disponivel</Text>
            <Text style={styles.valorDinheiroDisponivel}>R$ {route.params?.value},00</Text>
          </View>
          <TouchableOpacity style={styles.btnDepositar}>
            <Text style={styles.btnTxt}>Depositar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divInformacoes}>
          <View style={styles.titleInformacoes}>
            <Text>Informações da sua Conta</Text>
          </View>
          
          <View style={styles.divItemResp}>
            <Text style={styles.itemResp}>Nome: </Text>
            <Text style={styles.itemRespR}>{route.params?.name}</Text>
          </View>

          <View style={styles.divItemResp}>
            <Text style={styles.itemResp}>Idade: </Text>
            <Text style={styles.itemRespR}>{route.params?.age} anos</Text>
          </View>

          <View style={styles.divItemResp}>
            <Text style={styles.itemResp}>Sexo: </Text>
            <Text style={styles.itemRespR}>{route.params?.sex}</Text>
          </View>

          <View style={styles.divItemResp}>
            <Text style={styles.itemResp}>Escolaridade: </Text>
            <Text style={styles.itemRespR}>{route.params?.esc}</Text>
          </View>

          <View style={styles.divItemResp}>
            <Text style={styles.itemResp}>Limite: </Text>
            <Text style={styles.itemRespR}>R$ {route.params?.value},00</Text>
          </View>
  
          <View style={styles.divItemResp}>
            <Text style={styles.itemResp}>Nacionalidade: </Text>
            <Text style={styles.itemRespR}>{route.params?.nac}</Text>
          </View>
        </View>

        <View style={styles.divButton}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>VOLTAR</Text>
          </TouchableOpacity>
        </View>
      
      </ScrollView>
    </View>
  );
}
