import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function InventoryManagement({ navigation }) {
  const [inventory, setInventory] = useState([
    {
      id: "1",
      name: "Sheet Metal Cutter",
      description: "Lorem ipsum dolor sit amet...",
      price: 3500,
      quantity: 25,
    },
    {
      id: "2",
      name: "Axablade",
      description: "Lorem ipsum dolor sit amet...",
      price: 5500,
      quantity: 25,
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.itemQuantity}>{item.quantity}</Text>
        <Text style={styles.itemPrice}>{item.price.toFixed(1)}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Business</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Ionicons name="bag" size={30} />
        </TouchableOpacity>
      </View>

            <View style={styles.titleSection}>
        <Text style={styles.title}>Add Inventory</Text>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil-sharp" size={20} color="#4E46B4" />
          <Text style={styles.editText}> EDIT</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>
        Add parts and supplies to your inventory (optional)
      </Text>

      <FlatList
        data={inventory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.inventoryList}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("Payment1")}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    fontSize: 24,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  text: {
    fontSize: 24,
    color: "#0000008F",
    fontFamily: "DM",
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
    fontFamily: "DM",
    marginLeft: 10,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  editText: {
    fontSize: 16,
    color: "#4E46B4",
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    marginLeft: 10,
    width: "75%",
  },
  inventoryList: {
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  cardContent: {
    flex: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: "#999",
  },
  cardDetails: {
    alignItems: "flex-end",
    flex: 1,
  },
  itemQuantity: {
    fontSize: 14,
    backgroundColor: "#4E46B4",
    color: "#fff",
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  addButton: {
    backgroundColor: "#4E46B4",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
