import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const userDB = [
  { id: 1, name: "Dianne Russell", profilePhoto: require("../../../assets/images/1.jpg") },
  { id: 2, name: "Goa Trip Group", profilePhoto: require("../../../assets/images/2.jpg") },
  { id: 3, name: "Darrell Steward", profilePhoto: require("../../../assets/images/3.jpeg") },
  { id: 4, name: "Kathryn Murphy", profilePhoto: require("../../../assets/images/4.jpeg") },
  { id: 5, name: "Darlene Robertson", profilePhoto:  require("../../../assets/images/5.jpeg") },
  { id: 6, name: "Cameron Williamson", profilePhoto: require("../../../assets/images/6.jpg") },
  { id: 7, name: "Jenny Wilson", profilePhoto: require("../../../assets/images/6.jpg") },
  { id: 8, name: "Esther Howard", profilePhoto: require("../../../assets/images/6.jpg") },
  { id: 9, name: "Jacob Jones", profilePhoto: require("../../../assets/images/6.jpg") },
];

export default function CommunityForm({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userDB);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = userDB.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const renderUserItem = ({ item }) => (
  <TouchableOpacity
    style={styles.userItem}
    onPress={() => navigation.navigate("CommunityForm2", { user: item })}
  >
    <Image source={item.profilePhoto} style={styles.profilePhoto} />
    <Text style={styles.userName}>{item.name}</Text>
  </TouchableOpacity>
);

  return (
    <SafeAreaView style={styles.container}>
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

      <Text style={styles.title}>Community Forum</Text>
      <Text style={styles.subtitle}>
        Discuss issues, share tips, and get advice from other vendors.
      </Text>

      <View style={styles.searchContainer}>
        <TextInput
            style={styles.searchInput}
            placeholder="Search any vendor"
            value={searchText}
            onChangeText={handleSearch}
        />
        <TouchableOpacity>
            <Ionicons name="search-outline" style={styles.searchIcon} />
        </TouchableOpacity>
        </View>


      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUserItem}
        contentContainerStyle={styles.userList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
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
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "DM",
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderColor: "rgba(226, 226, 226, 1)",
    borderWidth: 2,
    borderRadius: 24,
    marginHorizontal: 20,
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
  userList: {
    paddingHorizontal: 20,
    borderColor: "rgba(226, 226, 226, 1)",
    borderWidth: 2,
    borderRadius: 24,
    width:"90%",
    marginHorizontal:20,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
  },
});
