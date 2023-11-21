import React from 'react';
import { View } from 'react-native';
import Titulo from './componentes/Titulo';
import TelaInicial from './componentes/TelaInicial';
import Contador from './componentes/contador';
import TesteUpperCase from './componentes/UpperCase';

const App = () => {
  return (
    <View>
      <Titulo />
      <TelaInicial />
      <Contador/>
      <TesteUpperCase/>
    </View>
  );
}

export default App;