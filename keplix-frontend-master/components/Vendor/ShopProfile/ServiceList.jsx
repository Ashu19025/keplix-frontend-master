import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function ServiceList({ navigation }) {
  const [services, setServices] = useState([]);

  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };

  const handleRemoveService = (indexToRemove) => {
    setServices(services.filter((_, index) => index !== indexToRemove));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={'arrow-back-outline'} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Business</Text>
        </View>
      </View>

      <Text style={styles.title}>List the services you offer</Text>

      <FlatList
        data={services}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => (
          <View style={styles.serviceRow}>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceText}>{item.name}</Text>
              <Text style={styles.serviceCategory}>{item.category}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveService(index)}>
              <Text style={styles.removeText}>remove</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.subtitle}>Add any number of services</Text>
        }
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddInventoryList')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('AddService', { onSave: handleAddService })
        }
      >
        <Entypo name="squared-plus" size={20} color="#0000008F" />
        <Text style={styles.addButtonText}> Add Service</Text>
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
    color: '#0000008F',
    fontFamily: 'DM',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'DM',
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  serviceInfo: {
    flex: 1,
    padding:10,
  },
  serviceText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  serviceCategory: {
    fontSize: 16,
    color: '#0000008F',
    fontFamily: 'DM',
  },
  removeText: {
    color: '#4E46B4',
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#0000008F',
    marginBottom: 30,
    fontFamily: 'DM',
  },
  button: {
    backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E2E2E2',
    borderRadius: 70,
    padding: 15,
    justifyContent: 'center',
    marginBottom: 30,
  },
  addButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#0000008F',
    fontFamily: 'DM',
  },
});
