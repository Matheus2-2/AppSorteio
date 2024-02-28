import React, {useState} from 'react';
import { View, Button, Text } from 'react-native';

export default function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  }

  return (
    <View>
      <Text>Número de toques: {count}</Text>
      <Button onPress = { incrementar } title="Clicar"/>
    </View>
  );
}

