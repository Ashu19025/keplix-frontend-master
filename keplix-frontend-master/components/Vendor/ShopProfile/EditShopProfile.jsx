import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons'

const EditProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      
      {/* Back Button */}
      <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("ShopProfile")}
        >
          <View style={styles.backIconWrapper}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image
          style={styles.profileImage}
        />
        <TouchableOpacity>
          <Text style={styles.editProfileText}>
            <Icon name="camera" size={16} color="#5A32EA" /> Edit Profile
          </Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Shop Name</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Enter Shop Name" />
          <Icon name="pencil-outline" size={20} color="#888" />
        </View>

        <Text style={styles.label}>Location</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Enter Location" />
          <Icon name="pencil-outline" size={20} color="#888" />
        </View>

        <Text style={styles.label}>Contact number</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Enter Contact Number" keyboardType="phone-pad" />
          <Icon name="pencil-outline" size={20} color="#888" />
        </View>

        {/* Operating Hours */}
        <Text style={styles.label}>Operating Hours</Text>
        <View style={styles.timeRow}>
          <view style={styles.from}>
           <Text style={styles.text}>From</Text>
          <View style={styles.timeInput}>
            <TextInput style={styles.input} placeholder="Time" />
            <Icon name="chevron-down" size={20} color="#888"  />
          </View>
          </view>
          <view style={styles.from}>
              <Text style={styles.text}>To</Text>
              <View style={styles.timeInput}>
                <TextInput style={styles.input} placeholder="Time" />
                 <Icon name="chevron-down" size={20} color="#888" />
               </View>
          </view>
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save changes</Text>
      </TouchableOpacity>

      <View style={styles.bottomline}/>

    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
   backButton: {
    marginTop: 60,
    marginLeft: 10,
  },
  backIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },

  profileContainer: {
    alignItems: 'center',
    marginVertical: 30,
    
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  editProfileText: {
    color: '#5A32EA',
    marginTop: 8,
    fontSize: 14,
  },
  inputContainer: {
    marginTop: 10,
    
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 20,
    marginBottom: 6,
    
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    outlineStyle: 'none', 
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  from: {
    flexDirection: 'column',
   
  },
  timeInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    width: '95%',
    height: 50,
    justifyContent: 'space-between',
  },
  text: {
    marginHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#5A32EA',
    borderRadius: 24,
    marginTop: 42,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
   bottomline: {
    maxWidth: '40%',
    borderRadius: 3,
    height: 5,
    backgroundColor: '#000',
    marginTop: '28%',
    marginLeft: '30%',
    
  },

});

export default EditProfileScreen;