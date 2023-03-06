import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Dimensions, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DataTable from './components/DataTable';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [data, setData] = useState([]);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleCountryChange = (value) => {
    setCountry(value);
  };

  const handleSubmit = () => {
    const newData = { name, email, country };
    setData([...data, newData]);
    setName('');
    setEmail('');
    setCountry('');
  };

  // Adjust the table according to the width of the tablet screen.
  const screenWidth = Dimensions.get('window').width;
  const tableWidth = screenWidth > 600 ? screenWidth * 0.8 : screenWidth;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={handleNameChange}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={handleEmailChange}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Picker
          style={styles.input}
          selectedValue={country}
          onValueChange={handleCountryChange}>
          <Picker.Item label="Select country" value="" />
          <Picker.Item label="USA" value="usa" />
          <Picker.Item label="Canada" value="canada" />
          <Picker.Item label="Mexico" value="mexico" />
        </Picker>
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>

        <DataTable
          tableWidth={tableWidth}
          data={data}
        />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    marginVertical: 10,
    minWidth: 350,
    backgroundColor: '#fff',
    fontSize: 24,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  
});

export default App;
