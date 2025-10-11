import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HamburgerMenu({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Business</Text>
        </View>
      </View>

      <View style={styles.profileSection}>
        <Image
         source={require("../../../assets/images/carimage.png")}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>Dwarka Mor Service</Text>
          <Text style={styles.profileRating}>
            4.2 <Ionicons name="star" size={14} color="rgba(78, 70, 180, 1)" /> Ratings
          </Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}  onPress={()=> navigation.navigate("MyShop")}>
            <FontAwesome6 name="shop" size={24} color="#000" />
            <Text style={styles.menuText}>My Shop</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("TrackPerformance")}>
            <Ionicons name="bar-chart" size={24} color="#000" />
            <Text style={styles.menuText}>Track Performance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("Bookings")}>
            <FontAwesome5 name="book" size={24}  color="#000" />
            <Text style={styles.menuText}>Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("Support")}>
            <Ionicons name="help-circle" size={24} color="#000" />
            <Text style={styles.menuText}>Support & Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("Documents")}>
            <Ionicons name="document" size={24} color="#000" />
            <Text style={styles.menuText}>My Documents</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("MyPromotions")}>
            <MaterialCommunityIcons name="brightness-percent" size={24} color="#000" />
            <Text style={styles.menuText}>Promotions</Text>
        </TouchableOpacity>
       
     <TouchableOpacity style={styles.logoutContainer} onPress={()=> navigation.navigate("SignIn")}>
        <Ionicons name="log-out-outline" style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    fontSize: 30,
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
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 16,
    marginRight: 15,
  },
  profileName: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "DM",
  },
  profileRating: {
    fontSize: 16,
    color: "rgba(78, 70, 180, 1)",
    fontWeight: "500",
    fontFamily: "DM",
  },
  menuContainer: {
    flex: 1,
    padding:10
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  menuText: {
    marginLeft: 20,
    color: "rgba(30, 30, 30, 1)",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "DM",
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  logoutIcon: {
    fontSize: 35,
    color: "rgba(64, 166, 159, 1)",
    marginRight: 10,
  },
  logoutText: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "DM",
    color: "rgba(64, 166, 159, 1)",
  },
});
