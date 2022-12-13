import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './screens/Login';
import TelaCadastro from './screens/Cadastro';
import ListarTela from './screens/Listar';
import InserirTela from './screens/Inserir';
import AlterarTela from './screens/Alterar';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela de Listar" component={ListarTela} options={{headerShown:false}}/>
        <Stack.Screen name="Tela de Inserir" component={InserirTela} options={{headerShown:false}} />
        <Stack.Screen name="Tela de Alterar" component={AlterarTela} options={{headerShown:false}} />
        <Stack.Screen name="Tela de Login" component={TelaLogin} options={{headerShown:false}} />
        <Stack.Screen name="Tela de Cadastro" component={TelaCadastro} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;