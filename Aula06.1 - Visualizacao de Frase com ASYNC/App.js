import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Switch, Keyboard, AsyncStorage } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [bg, setBg] = useState(false);
  const [size, setSize] = useState(false);

  useEffect(() => {
    const recuperarBg = async () => {
      const bgColor = await AsyncStorage.getItem('bg');
      setBg(bgColor === 'true');
    };

    const recuperarSize = async () => {
      const valueSize = await AsyncStorage.getItem('size');
      setSize(valueSize === 'true');
    };

    recuperarBg();
    recuperarSize();
  }, []);

  const trocaCor = async () => {
    setBg(!bg);
    Keyboard.dismiss();
    await AsyncStorage.setItem('bg', (!bg).toString());
  };

  const trocaTamanho = async () => {
    setSize(!size);
    Keyboard.dismiss();
    await AsyncStorage.setItem('size', (!size).toString());
  };

  const bgColors = {
    false: '#fff',
    true: '#121212',
  };

  const textColors = {
    false: 'black',
    true: '#fff',
  };

  const textSizes = {
    false: 16,
    true: 25,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.divTitlePage}>
        <Text style={styles.textTitlePage}>Frases</Text>
      </View>

      <View style={styles.divSupSwitchs}>
        <View style={styles.divSwitchs}>
          <Text style={styles.textSwitchs}>Dia</Text>
          <Switch
            trackColor={{ false: 'lightgray', true: 'gray' }}
            thumbColor={bg ? 'white' : 'gray'}
            value={bg}
            style={styles.switchInput}
            onValueChange={trocaCor}
          />
        </View>
        <View style={styles.divSwitchs}>
          <Text style={styles.textSwitchs}>Pequeno</Text>
          <Switch
            trackColor={{ false: 'lightgray', true: 'gray' }}
            thumbColor={size ? 'white' : 'gray'}
            value={size}
            style={styles.switchInput}
            onValueChange={(valorSwitch) => {
              setSize(valorSwitch);
              AsyncStorage.setItem('size', valorSwitch.toString());
            }}
          />
        </View>
      </View>

      <View style={[styles.divFrase, { backgroundColor: bg ? bgColors.true : bgColors.false }]}>
        <Text style={[styles.textFrase, { color: bg ? textColors.true : textColors.false, fontSize: size ? textSizes.true : textSizes.false }]}>
          "A vingança nunca é plena, mata a alma e envenena" (Seu Madruga)
        </Text>
      </View>
    </ScrollView>
  );
}
