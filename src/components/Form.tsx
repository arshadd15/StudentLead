import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StudentContext } from '../contexts/Student.Context';

const Form = ({ onSuccess }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const context = useContext(StudentContext);
  const studentToEdit = route.params?.studentToEdit; // Storing and Checking if the data came through correctly

  // UseEffect to handle the data in form
  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
      setEmail(studentToEdit.email);
      setRole(studentToEdit.role);
    }
  }, [studentToEdit]);

  const validateEmail = (input: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  };

  // Submit handler function
  const handleSubmit = () => {
    if (!context) return;
    const { addStudent, updateStudent } = context;

    // Checking if all fields are filled
    if (!name || !email || !role) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // If we have a student to update, the update function works
    if (studentToEdit) {
      updateStudent(studentToEdit.id, {
        id: studentToEdit.id,
        name,
        email,
        role,
      });
      Alert.alert('Updated!', 'Student details updated.');
    }
    // Otherwise the add function works
    else {
      addStudent({
        id: Date.now().toString(),
        name,
        email,
        role,
      });
    }

    // All the fields are set empty
    setName('');
    setEmail('');
    setRole('');

    // Making sure the studentToEdit is undefined as it can crash
    navigation.setParams({ studentToEdit: undefined });

    if (onSuccess) onSuccess();
    // Navigate to the lists
    else navigation.navigate('ListScreen');
  };

  return (
    <View>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Enter student's name"
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter student's email"
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Text style={styles.label}>Role</Text>
      <TextInput
        placeholder="e.g. Developer"
        style={styles.input}
        value={role}
        onChangeText={text => setRole(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {studentToEdit ? 'Update Student' : 'Submit'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    marginBottom: 15,
    backgroundColor: '#f7f7f7',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
