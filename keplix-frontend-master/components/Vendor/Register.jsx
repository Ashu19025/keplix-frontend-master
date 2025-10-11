import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [shopName, setshopName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shopAddress, setShopAddress] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backcontainer}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Ionicons name={"arrow-back-outline"} style={styles.icon} />
      </TouchableOpacity>
      <View  style={styles.titleContainer}>
      <Text style={styles.text}>Business</Text>
      </View>
       </View>

      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Fill up your business details</Text>

        <Text style={styles.enter}>Enter your Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
          />  
        </View>

      <Text style={styles.enter}>Enter your phone number</Text>
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="+91"
        placeholderTextColor="#aaa"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      </View>


        <Text style={styles.enter}>Enter your shop name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Shop Name"
            placeholderTextColor="#aaa"
            value={shopName}
            onChangeText={setshopName}
          />  
        </View>

        <Text style={styles.enter}>Enter shop address</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter shop address"
            placeholderTextColor="#aaa"
            value={shopAddress}
            onChangeText={setShopAddress}
          />
        </View>

      <TouchableOpacity
        style={styles.button} onPress={() => navigation.navigate("Verification")} >
        <Text style={styles.buttonText}>Next</Text>
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
  text: {
    fontSize: 24,
    marginRight: 30,
    color: "#0000008F",
    fontFamily:'DM',
  },
  titleContainer: {
  flex: 1, 
  alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 32,
    marginBottom: 10,
    fontFamily: 'DM',
  },
  subtitle: {
    fontSize: 16,
    color: '#0000008F',
    marginBottom: 30,
    fontFamily:'DM',
  },
  enter: {
    fontSize: 16,
    color: '#0000008F',
    marginBottom: 10,
    fontFamily:'DM',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 70,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
    fontFamily:'DM',
  },
  button: {
    backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop:50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily:'DM',
  },
});
