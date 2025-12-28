import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Form from '../components/Form';

const AddNewLead = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.formContainer}>
      <Form />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Done adding?</Text>
        <Text
          style={styles.navText}
          onPress={() => navigation.navigate('ListScreen')}
        >
          See the list
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AddNewLead;

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    padding: 20,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    marginBottom: 16,
    color: '#666',
    textAlign: 'center',
    marginRight: 10,
  },
  navText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
