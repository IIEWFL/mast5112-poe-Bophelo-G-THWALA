import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddItemsPage from './Pages/Add Items';
import FilterPage from './Pages/Filter';
import HomePage from './Pages/Home';
import MenuPage from './Pages/Menu';
import WelcomePage from './Pages/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={WelcomePage} />
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Menu' component={MenuPage} />
        <Stack.Screen name='AddItems' component={AddItemsPage} />
        <Stack.Screen name='Filter' component={FilterPage} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
