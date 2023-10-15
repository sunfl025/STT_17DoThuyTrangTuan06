import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_1 from './components/Screen_1';
import Screen_2 from './components/Screen_2';
import Screen_3 from './components/Screen_3';
import Screen_4 from './components/Screen_4';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator(); 
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Screen_1" component={Screen_1} options={{headerShown:false}}/>
        <Stack.Screen name="Screen_2" component={Screen_2} options={{headerShown:false}}/>
        <Stack.Screen name="Screen_3" component={Screen_3} options={{headerShown:false}}/>
        <Stack.Screen name="Screen_4" component={Screen_4} options={{headerShown:false}}/>
        
     
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
