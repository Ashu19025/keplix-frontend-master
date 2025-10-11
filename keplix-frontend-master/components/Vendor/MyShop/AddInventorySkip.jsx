import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AddInventorySkip({ navigation }) {
  const previouslyOrdered = [
    { id: 1, name: "Metal Cutter", price: "\u20b93500", quantity: 7, image: require("../../../assets/images/metalcutter.jpg") },
    { id: 2, name: "Spanner Set", price: "\u20b91999", quantity: 25, image: require("../../../assets/images/spannerSet.jpg") },
  ];

  const categories = [
    { id: 1, name: "Detailing", icon: "construct-outline" },
    { id: 2, name: "Repairs", icon: "hammer-outline" },
    { id: 3, name: "Accessories", icon: "cube-outline" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => navigation.navigate("InventoryManagement")}>
          <Ionicons name="bag" size={30}/>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Add Inventory</Text>

      <View style={styles.searchContainer}>
        <TextInput placeholder="Search any inventory" style={styles.searchInput} />

        <TouchableOpacity>
            <Ionicons name="search-outline" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

     
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Previously ordered</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} 
        style={styles.contentContainer}
      >
        {previouslyOrdered.map((item) => (
          <View key={item.id} style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name} ({item.quantity})</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>


      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryCard}>
            <Ionicons name={category.icon} size={20} color="#000" />
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  title: {
    fontWeight: "500",
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "DM",
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderColor: "rgba(226, 226, 226, 1)",
    borderWidth: 2,
    borderRadius: 24,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.56)",
    fontWeight: "500",
    fontFamily: "DM",
  },
  searchIcon: {
    fontSize: 24,
    color: "rgba(0, 0, 0, 0.56)",
    marginLeft: 10,
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
  contentContainer:
  {
     marginBottom: '-70%' 
    },
  productCard: {
    height:200,
    padding: 15,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 30,
    marginRight:10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productImage: {
    borderRadius: 10,
    height: 80,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: 'DM',
    textAlign: "center",
    marginBottom: 10,
  },
  productPrice: {
    width:100,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: 'DM',
    color: "#fff",
    backgroundColor: '#40A69F',
    borderRadius: 30,
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  categoryCard: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 30,
    padding: 10,
    marginRight: 10,
    height:50,
  },
  categoryName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
     fontFamily: 'DM',
  },
});
