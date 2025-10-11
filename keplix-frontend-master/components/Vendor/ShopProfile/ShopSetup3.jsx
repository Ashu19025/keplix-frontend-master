import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function OperatingHours({ navigation, route }) {
  const [startTime, setStartTime] = useState('10:00 AM');
  const [endTime, setEndTime] = useState('8:00 PM');
  const [entries, setEntries] = useState([]);

 useEffect(() => {
  if (route.params?.newEntry) {
    setEntries((prevEntries) => {
      return [...prevEntries, route.params.newEntry];
    });
  }
}, [route.params?.newEntry]);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Business</Text>
        </View>
      </View>

      <Text style={styles.title}>Operating Hours</Text>
      <Text style={styles.subtitle}>Fill up the following details</Text>

      <Text style={styles.label}>Set business hours</Text>
      <View style={styles.timeContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.timeInput}
            value={startTime}
            onChangeText={setStartTime}
            placeholder="Start Time"
            placeholderTextColor="#aaa"
          />
          <MaterialIcons
            name="keyboard-arrow-down"
            style={styles.dropdownIcon}
          />
        </View>

        <Text style={styles.toText}>To</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.timeInput}
            value={endTime}
            onChangeText={setEndTime}
            placeholder="End Time"
            placeholderTextColor="#aaa"
          />
          <MaterialIcons
            name="keyboard-arrow-down"
            style={styles.dropdownIcon}
          />
        </View>
      </View>

      {entries.length > 0 && (
        <>
          <Text style={styles.label}>Breaks / Holidays:</Text>
          {entries.map((entry, index) => (
            <View key={index} style={styles.entryItem}>
              <Text style={styles.entryText}>
                {entry.type === "Breaks"
                  ? `${entry.type}: ${entry.from} - ${entry.to}`
                  : `${entry.type}: ${entry.day}`}
              </Text>
            </View>
          ))}

        </>
      )}

      <Text style={styles.label}>Want to add Breaks / Holidays?</Text>
      <TouchableOpacity
        style={styles.addBreak}
        onPress={() => navigation.navigate('HolidayBreak')}
      >
        <Entypo name="squared-plus" size={20} color="#0000008F" />
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ServiceList")}>
        <Text style={styles.buttonText}>Setup Shop</Text>
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
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    fontSize: 30,
    color: '#000',
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 50,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginRight: 30,
    color: '#0000008F',
    fontFamily: 'DM',
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    marginBottom: 10,
    fontFamily: 'DM',
  },
  subtitle: {
    fontSize: 16,
    color: '#0000008F',
    marginBottom: 30,
    fontFamily: 'DM',
  },
  label: {
    fontSize: 16,
    color: '#0000008F',
    fontWeight: '500',
    marginBottom: 20,
    fontFamily: 'DM',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  inputWrapper: {
    flex: 1,
    position: 'relative',
  },
  timeInput: {
    borderWidth: 2,
    borderColor: '#E2E2E2',
    borderRadius: 20,
    padding: 10,
    paddingRight: 40,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'DM',
    color: '#000',
  },
  dropdownIcon: {
    width: 24,
    height: 16, 
    fontSize: 20, 
    color: '#0000008F',
    textAlign: "center", 
    lineHeight: 16,
    borderColor: "rgba(0, 0, 0, 0.56)",
    borderWidth: 1.5,
    borderRadius: 4,
    position: 'absolute',
    right: 10,
    top: '50%',
    marginTop: -10,
    
  },
  toText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#0000008F',
    fontFamily: 'DM',
  },
  addBreak: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E2E2E2',
    borderRadius: 70,
    padding: 15,
    justifyContent: 'center',
    marginBottom: 30,
  },
  addText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#0000008F',
    fontFamily: 'DM',
  },
  entryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  entryText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'DM',
  },
  button: {
    backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
});
