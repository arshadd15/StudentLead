import { Alert, FlatList, StyleSheet, Text } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/Card';
import { StudentContext } from '../contexts/Student.Context';
import { useNavigation } from '@react-navigation/core';

const ListScreen = () => {
  const navigation = useNavigation<any>();
  const context = useContext(StudentContext);
  if (!context) return null;
  const { students, deleteStudent } = context;
  // Imported required params from context

  return (
    <SafeAreaView style={styles.container}>
      {/* FlatList to display the students */}
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No students yet.
          </Text>
        }
        renderItem={({ item }) => (
          <Card
            id={item.id}
            name={item.name}
            email={item.email}
            role={item.role}
            onEdit={() =>
              navigation.navigate('AddNewLead', { studentToEdit: item })
            }
            onDelete={() => {
              Alert.alert('Delete?', 'Are you sure?', [
                { text: 'Cancel' },
                {
                  text: 'Delete',
                  style: 'destructive',
                  onPress: () => deleteStudent(item.id),
                },
              ]);
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: { marginHorizontal: 10, marginBottom: 20, flex: 1 },
});
