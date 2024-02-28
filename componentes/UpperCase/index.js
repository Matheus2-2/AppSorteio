import React, {useState} from 'react';
import { View, Button, Text } from 'react-native';


export default function TesteUpperCase() {
    const [ frase, setFrase ] = useState('linguagem javascript');
  
    const transformar = () => {
      setFrase(frase.toUpperCase());
    }
    const transformar2 = () => {
        if(frase=='linguagem javascript'){
        alert('Texto já está Minúsculo')
        }
        setFrase(frase.toLowerCase());
      }
    return (
      <View>
        <Text>{frase}</Text>
  
        <Text>Toque no botão para colocar a frase em caixa alta</Text>
  
        <Button title="UpperCase" onPress={transformar} />
        <Button title="LowerCase" onPress={transformar2} />
      </View>
    );
  }