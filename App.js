import { createStackNavigator } from 'react-navigation-stack';
import ComponentsScreen from './src/screens/ComponentScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import { createAppContainer } from 'react-navigation';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Component: ComponentsScreen,
  List: ListScreen,
  Image: ImageScreen,
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'First App'
    }
  });

const AppContainer = createAppContainer(navigator);
export default AppContainer;