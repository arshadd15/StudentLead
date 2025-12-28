import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ListScreen from './src/screens/ListScreen';
import AddNewLead from './src/screens/AddNewLead';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StudentProvider } from './src/contexts/Student.Context';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StudentProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="AddNewLead">
            <Stack.Screen
              name="AddNewLead"
              component={AddNewLead}
              options={({ route }: any) => ({
                title: route.params?.studentToEdit
                  ? 'Update Lead'
                  : 'Add New Lead',
              })}
            />
            <Stack.Screen
              name="ListScreen"
              component={ListScreen}
              options={{ title: 'Student list' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StudentProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
