import { createDrawerNavigator} from '@react-navigation/drawer';

import Logout from './Logout';
import HomeScreen from '../components/HomeScreen';
import CadastroScreen from '../components/CadastroScreen';
import ListaScreen from '../components/ListaScreen';

const Drawer = createDrawerNavigator();

const Navegacao = () => {

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Cadastro" component={CadastroScreen} />
      <Drawer.Screen name="Lista" component={ListaScreen} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default Navegacao;