import { Text, View } from 'react-native';
import {AuthContext} from '../Context';
import {useContext} from 'react';

export default function HomeScreen({ navigation }) {
  const {nomeUsuario} = useContext(AuthContext);
  return (
    <View style={{ margin: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{textAlign: "center"}}>{nomeUsuario} bem-vindo ao aplicativo de levantamento de dados para o Índice de Preços Toledo (IPT).</Text>
    </View>
  );
}