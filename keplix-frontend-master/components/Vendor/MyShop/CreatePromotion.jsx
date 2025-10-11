import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from "react-native-vector-icons/Entypo";


export default function CreateCardOffer({ navigation }) {
  const [cardName, setCardName] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const [minimumOrder, setMinimumOrder] = useState('');


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name={'arrow-back-outline'} style={styles.icon} />
              </TouchableOpacity>
              <View style={styles.titleContainer}>
                <Text style={styles.text}>New Card Offer</Text>
              </View>
            </View>

      
      <TouchableOpacity style={styles.logoContainer}>
              <Ionicons name="image" size={60} color="#ededed"  />
              <View style={styles.row}>
              <Entypo name="squared-plus" size={20} color="#4E46B4" />
              <Text style={styles.uploadText}> Upload banner</Text>
              </View>
      
            </TouchableOpacity>

     
      <View style={styles.formContainer}>
        <Text style={styles.label}>Enter card name</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder=" SBI Credit and Debit card"
            placeholderTextColor="#000000"
            value={cardName}
            onChangeText={setCardName}
          />
        </View>

        <Text style={styles.label}>Discount Percent</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder=" 15% up to ₹1750"
            placeholderTextColor="#000000"
            value={discountPercent}
            onChangeText={setDiscountPercent}
          />
        </View>

        <Text style={styles.label}>Minimum Order</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder=" Order Above ₹4999"
            placeholderTextColor="#000000"
            value={minimumOrder}
            onChangeText={setMinimumOrder}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate("CardConfirm")} >
        <Text style={styles.createButtonText}>Create Promotion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop:20,
  },
  backContainer: {
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
  row: {
  flexDirection: 'row',
  alignItems: 'center',
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginRight: 30,
    color: '#000000',
    fontFamily: 'DM',
  },
  uploadBannerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadBannerButton: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  uploadBannerText: {
    marginTop: 10,
    fontSize: 16,
    color: '#A9A9A9',
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#0000008F',
    fontFamily: 'DM',
    fontWeight: '600',
    marginBottom: 5,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 70,
    marginBottom: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    fontSize: 16,
    color: '#000000',
  },
  createButton: {
  position: 'absolute', 
  bottom: 20, 
  left: 20,
  right: 20, 
  backgroundColor: '#4E46B4',
  padding: 15,
  alignItems: 'center',
  borderRadius: 70,
  elevation: 5, 
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
},
createButtonText: {
  fontSize: 18,
  color: '#fff',
  fontFamily: 'DM',
  fontWeight: '600',
},

  logoContainer: {
  justifyContent: 'center', 
  alignItems: 'center', 
  marginBottom: 30,
  borderColor: '#E2E2E2',
  borderWidth: 2,
  borderRadius: 30,
  padding: 20,
  height:150 
},
uploadText: {
  fontSize: 16,
  color: '#4E46B4',
  fontFamily: 'DM',
  textAlign: 'center', 
},

});
