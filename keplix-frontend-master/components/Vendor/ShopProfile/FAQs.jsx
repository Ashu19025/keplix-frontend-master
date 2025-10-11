import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // For dropdown icons
import { Ionicons } from '@expo/vector-icons'; // For back arrow icon

const faqData = [
  { id: 1, question: 'Lorem Ipsum', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 2, question: 'Lorem Ipsum dolor sit', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, question: 'Lorem Ipsum', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, question: 'Lorem Ipsum dolor sit', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 5, question: 'Lorem Ipsum', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 6, question: 'Lorem Ipsum dolor sit', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 7, question: 'Lorem Ipsum dolor sit', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 8, question: 'Lorem Ipsum', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 9, question: 'Lorem Ipsum dolor sit', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

export default function FAQScreen({navigation}) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={()=> navigation.navigate("SupportandHelp")}
        >
          <View style={styles.backIconWrapper}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>

      <Text style={styles.title}>Frequently Asked Questions</Text>
      <Text style={styles.subtitle}>(FAQ’s)</Text>

      {faqData.map((item) => (
        <View key={item.id} style={styles.card}>
          <TouchableOpacity style={styles.cardHeader} onPress={() => toggleExpand(item.id)}>
            <Text style={styles.question}>{item.question}</Text>
             <View style={{
                borderWidth: 1,
                height: 22,
                width: 30,
                borderRadius: 5,
                borderColor: 'black'
              }}>

            <AntDesign name={expandedId === item.id ? 'up' : 'down'} size={18} color="black" style={{ marginTop: 1, marginLeft: 5}} /> </View>
          </TouchableOpacity>
          {expandedId === item.id && (
            <Text style={styles.answer}>{item.answer}</Text>
          )}
        </View>
      ))}

      <View style={styles.bottomline}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
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

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30,

  },
  subtitle: {
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },
  question: {
    fontSize: 16,
    color: '#000',
  },
  answer: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 14,
    paddingBottom: 12,
    marginTop: 2,
    borderTopWidth: 2,
    borderTopColor: '#D3D3D3',
  },
   bottomline: {
    maxWidth: '40%',
    borderRadius: 3,
    height: 5,
    backgroundColor: '#000',
    marginTop: '26%',
    marginLeft: '30%',
    
  },

});