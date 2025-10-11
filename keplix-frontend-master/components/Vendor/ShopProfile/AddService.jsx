import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AddService({ route, navigation }) {
  const { onSave } = route.params;

  const [category, setCategory] = useState('Repairs');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('Weekdays');

  const handleSave = () => {
    const newService = { category, name, description, duration, price, availability };
    onSave(newService);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backcontainer}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Ionicons name={"arrow-back-outline"} style={styles.icon} />
      </TouchableOpacity>
       </View>

        <Text style={styles.title}>Choose service: </Text>
      <Text style={styles.label}>Choose Category</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Repairs" value="Repairs" />
          <Picker.Item label="Transport" value="Transport" />
        </Picker>
      </View>

            <View style={styles.inputContainer}>
        {!name && (
            <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderTitle}>Enter Service Name</Text>
            <Text style={styles.placeholderSubtitle}>
                Discription:
            </Text>
            <Text style={styles.placeholderSubtitle}>
                Write details about the service you will be offering...
            </Text>
            </View>
        )}
        <TextInput
            style={styles.inputLarge}
            value={name}
            onChangeText={setName}
            placeholder=""
            multiline={true}
            textAlignVertical="top"
        />
        </View>

      <View style={styles.row}>
        <View style={styles.column}>
            <Text style={styles.label}>Service Duration</Text>
            <TextInput
            style={styles.input}
            placeholder="E.g., 2 Hours"
            value={duration}
            onChangeText={setDuration}
            />
        </View>

        <View style={styles.column}>
            <Text style={styles.label}>Price</Text>
            <TextInput
            style={styles.input}
            placeholder="E.g., ₹1500"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            />
        </View>
        </View>

      <Text style={styles.label}>Availability</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={availability}
          onValueChange={(itemValue) => setAvailability(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Weekdays" value="Weekdays" />
          <Picker.Item label="Weekends" value="Weekends" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Add Service</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    fontSize: 30,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 50,
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'DM',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0000008F',
    marginBottom: 15,
    fontFamily:'DM', 
  },
  inputContainer: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    borderRadius: 20,
    padding: 10,
    height: 150,
    position: 'relative',
  },
  placeholderContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  placeholderTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: '#0000008F',
    fontFamily:'DM',
    marginBottom:20, 
  },
  placeholderSubtitle: {
    fontSize: 14,
    color: '#0000008F',
    fontFamily:'DM', 
    fontWeight: '500',
  },
  inputLarge: {
    flex: 1,
    fontSize: 16,
    color: '#0000008F',
    padding: 0,
  },
  input: { 
    height: 50,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    borderRadius: 70,
    paddingHorizontal: 10,
    fontSize: 14,
   },
   row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
  },
  pickerContainer:
  { borderWidth: 2, borderColor: '#ddd', borderRadius: 70, marginBottom: 20 },
  picker: { fontSize: 14,
    color: '#0000008F',
    fontFamily:'DM', 
    fontWeight: '600', },
  saveButton: { backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50, },
  saveButtonText: { color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily:'DM',},
});
