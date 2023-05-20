import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Switch, Text, View } from 'react-native';[]
import { styles } from './styles';

export default function App() {
  const [bg, setBg] = useState(false);
  const [size, setSize] = useState(false);

  useEffect(() => {
    getData();
    //alert('Abriu o App');
  }, []);

  useEffect(() => {
    //alert('Alterou os valores');
    setData();
  }, [bg, size]);

  async function setData() {
    await AsyncStorage.setItem('bg', String(bg));
    await AsyncStorage.setItem('size', String(size));
  }

  async function getData() {
    const bg = await AsyncStorage.getItem('bg');
    const size = await AsyncStorage.getItem('size');

    setBg(bg === 'true' && true);
    setSize(size === 'true' && true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titlePage}>
        <Text style={styles.titleText}>Frases</Text>
      </View>

      <View style={styles.areaOp}>

        <View style={styles.op}>
          <Text style={styles.opTitle}>Dia</Text>
          <Switch style={styles.opSwitch}
            value={bg} onValueChange={(valor) => setBg(valor)} />
        </View>

        <View style={styles.op}>
          <Text style={styles.opTitle}>Pequeno</Text>
          <Switch style={styles.opSwitch}
            value={size} onValueChange={(valor) => setSize(valor)} />
        </View>

      </View>

        <View style={[styles.areaFrase, bg && styles["bg-light"]]}>
          <Text style={[styles.textFrase, bg && styles["text-dark"], size && styles.small]}>
            "A vingança nunca é plena, mata a alma e envenena"{'\n'}{'\n'}(Seu Madruga)
          </Text>
        </View>
      
    </View>
  );
}
