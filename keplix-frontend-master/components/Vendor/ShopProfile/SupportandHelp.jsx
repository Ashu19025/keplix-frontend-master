import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For icons
import { Ionicons } from '@expo/vector-icons'


export default function SupportHelpScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      
        <TouchableOpacity
          style={styles.backButton}
          onPress={()=> navigation.navigate("ShopProfile")}
        >
          <View style={styles.backIconWrapper}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Support & Help</Text>
      

      {/* Subtitle */}
      <Text style={styles.subTitle}>Manage business-related {'\n'}documents</Text>

      {/* Support Options */}
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionBox}>
          <View style={styles.optionLeft}>
            
              <Icon name="call" size={22} color="#000" style={{ marginLeft: 5}}/>
           
            <View>
              <Text style={styles.optionTitle} onPress={()=> navigation.navigate("KeplixSupport")}>Keplix Support</Text>
              <Text style={styles.optionSubText}>Any app-related or business issues.</Text>
            </View>
          </View>
          <View style={{
                borderWidth: 1,
                height: 30,
                width: 20,
                borderRadius: 5,
                borderColor: 'black'
              }}>
          <Icon name="chevron-forward-outline" size={20} color="#555" style={{ marginTop: 3, marginRight: 3}} /> </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBox}>
          <View style={styles.optionLeft}>
            <View style={styles.iconCircle}>
              <Icon name="chatbubble-ellipses" size={22} color="#000" style={{ marginLeft: 5}} />
            </View>
            <View>
              <Text style={styles.optionTitle} onPress={()=> navigation.navigate("FAQs")}>FAQ's</Text>
              <Text style={styles.optionSubText}>Common issues faced by vendors</Text>
            </View>
          </View>
          <View style={{
                borderWidth: 1,
                height: 30,
                width: 20,
                borderRadius: 5,
                borderColor: 'black'
              }}>
          <Icon name="chevron-forward-outline" size={20} color="#555" style={{ marginTop: 3, marginRight: 3}} /></View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomline}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

   backButton: {
    marginTop: 60,
    marginLeft: 4,
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

  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30,
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    marginTop: 10,
  },
  optionContainer: {
    marginTop: 10,
  },
  optionBox: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10,
  },
  optionSubText: {
    fontSize: 12,
    color: '#777',
    marginLeft: 10,
  },
    bottomline: {
    maxWidth: '40%',
    borderRadius: 3,
    height: 5,
    backgroundColor: '#000',
    marginTop: '136%',
    marginLeft: '30%',
    
  },

});