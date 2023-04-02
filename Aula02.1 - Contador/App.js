import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function App(){
  const [count, setCount] = useState(0)

  function decrementCount() {
    if(count <= 0){
      alert('Não é possível decrementar valores menores que 0')
    }else{
    setCount(count - 1)
    }
  }

  function incrementCount() {
    setCount(count + 1)
  }

  return (
      <View style={styles.container}>
        <Text style={styles.titlePage}>Contador</Text>
        <View style={styles.contadorView}>
          <Text style={styles.count}>{count}</Text>
        </View>
        <View style={styles.op}>
          <TouchableOpacity onPress={decrementCount} style={styles.buttonDec}>
            <Text style={styles.Dec}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={incrementCount} style={styles.buttonInc}>
            <Text style={styles.Inc}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
