import { NavigationContainer, Image, View} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import Inicio from './telas/inicio';
import Login from './telas/login';
import Comecar from './telas/vamosComecar';
import Conta from './telas/criarConta';
import home from './telas/home';
import homemenu from './telas/homemenu';
import relatorio from './telas/relatorio';
import relatoriorealizado from './telas/relatoriorealizado';






const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="homemenu">
        <Drawer.Screen 
        name='Inicio'
        component={Inicio}
        options={{ headerShown: false}}/>

        <Drawer.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false}}/>
        
        <Drawer.Screen
        name='vamosComecar'
        component={Comecar}
        options={{ headerShown: false}}/>

        <Drawer.Screen
        name='criarConta'
        component={Conta}
        options={{ headerShown: false}}/>

        <Drawer.Screen
        name='home'
        component={ home}
        options={{ headerShown: false}}/>

        <Drawer.Screen
        name='homemenu'
        component={ homemenu}
        options={{ headerShown: false}}/>

        <Drawer.Screen
        name='relatorio'
        component={ relatorio}
        options={{ headerShown: false}}/>

        <Drawer.Screen
        name='relatoriorealizado'
        component={ relatoriorealizado}
        options={{ headerShown: false}}/>
      </Drawer.Navigator>
    </NavigationContainer>

  )
}


