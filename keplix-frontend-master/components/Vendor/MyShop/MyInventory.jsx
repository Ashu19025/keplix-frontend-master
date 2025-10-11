import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Switch,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

export default function MyInventory({ navigation }) {
  const [notify, setNotify] = useState(true);

  const stockData = [
    { id: "1", price: "1500", description: "Tools", name: "Sheet Metal Cutter:" },
    { id: "2", price: "3500", description: "Tools", name: "Drilling Machine" },
  ];

  const searchData = [
    { id: "1", name: "Tools", icon: "hammer" },
    { id: "2", name: "Spare Parts", icon: "settings-outline" },
    { id: "3", name: "Collection", icon: "archive-outline" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Business</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("HamburgerMenu")}>
          <Ionicons name="menu-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>My Inventory</Text>

      {/* Notification Section */}
      <View style={styles.notificationContainer}>
        <View style={styles.leftSection}>
          <MaterialCommunityIcons name={"alert"} style={styles.bookingIcon} />
          <Text style={styles.notificationText}>Low Stock Alerts</Text>
        </View>
        <View
          style={[
            styles.trackContainer,
            { backgroundColor: notify ? "#4E46B4" : "#767577" },
          ]}
        >
          <Switch
            value={notify}
            onValueChange={(value) => setNotify(value)}
            trackColor={{ false: "#767577", true: "#4E46B4" }}
            thumbColor={notify ? "#ffffff" : "#f4f3f4"}
            style={styles.switch}
          />
        </View>
      </View>
      <Text style={styles.subtitle}>
        Notifications when inventory levels fall below a set threshold
      </Text>

      {/* Product Stock Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Product stock levels</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productContainer}>
        {stockData.map((item) => (
          <View key={item.id} style={styles.productCard}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.offerprice}>{item.price}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Search through categories:</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {searchData.map((item) => (
          <View key={item.id} style={styles.categoryCard}>
            <Ionicons
              name={item.icon}
              size={20}
              color="#000"
              style={styles.categoryIcon}
            />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddInventory")}
      >
        <Entypo name="squared-plus" size={20} color="#fff" />
        <Text style={styles.addButtonText}>Add item</Text>
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
    alignItems: "center",
    marginBottom: 40,
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
    marginRight: 30,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center", 
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "DM",
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    marginLeft:10,
    width:'75%',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#0000008F',
    fontFamily: 'DM',
    fontWeight: '500',
  },
  seeAll: {
    fontSize: 16,
    color: '#4E46B4',
    fontWeight: '600',
    fontFamily: 'DM',
  },
bookingIcon: {
  fontSize: 24,
  color: "#1E1E1E",
  marginRight: 10,
},
cardTitle: {
  fontSize: 20,
  fontWeight: "600",
  color: "#1E1E1E",
  fontFamily: "DM",
},
bookingNo: {
  fontSize: 16,
  fontWeight: "600",
  color: "#000000",
  fontFamily: "DM",
  borderColor: "#E2E2E2",
  borderWidth: 2,
  borderRadius: 25, 
  textAlign: "center",
  width: 40, 
  height: 40, 
  lineHeight: 34, 
},
productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
 productCard: {
    width: '48%',
    height:170,
    padding: 15,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 10,
  },
  categoryCard: {
    width: '48%',
    padding: 10,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 10,
  },
  offerprice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    borderRadius: 10,
    backgroundColor:'#40A69F',
    marginBottom: 5,
    paddingHorizontal:10,
    paddingVertical:8,
    textAlign:'center'
  },
  description: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'DM',
  },
  name: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'DM',
    marginBottom:10,
  },
  notificationContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 10,
},
leftSection: {
  flexDirection: "row",
  alignItems: "center",
},
notificationText: {
  fontSize: 20,
  fontWeight: "600",
  color: "#000000",
  fontFamily: "DM",
},
  trackContainer: {
    width: 60,
    height: 34, 
    backgroundColor: "#4E46B4", 
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
  },
  pickerContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginVertical: 20,
},
inputGroup: {
  flex: 0.48, 
},
label: {
  fontSize: 16,
  color: "#0000008F",
  fontWeight:'500',
  marginBottom: 5,
  fontFamily: "DM",
  marginLeft:5, 
},
addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#4E46B4',
    borderRadius: 70,
    padding: 15,
    justifyContent: 'center',
    marginBottom: 30,
    marginHorizontal: 100,
    width:'50%',
  },
  addButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'DM',
  },
  scrollContainer: {
    marginBottom: 20,
  },
  categoryCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 30,
    marginRight: 10,
    height:58
  },
  categoryIcon: {
    marginRight: 10,
    marginBottom:5,
  },
});
