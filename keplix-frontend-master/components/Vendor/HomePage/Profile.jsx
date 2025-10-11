import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export default function BusinessProfile({ navigation }) {
  const [activePage, setActivePage] = useState("Profile");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Business</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={()=> navigation.navigate("SignIn")}>
          <Text style={styles.logout}>Log out</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require("../../../assets/images/carimage.png")}
          style={styles.profileImageLarge}
        />
        <View style={ styles.profilecontainer}>
          <Text style={styles.profileName}>Dwarka Mor Service</Text>
          <Text style={styles.profileRating}>
            4.2 <Ionicons name="star" size={14} color="#fff" /> Ratings
          </Text>
          <Text style={styles.profileTiming}>
            10AM - 7:30PM | Dwarka Mor-110078
          </Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={()=> navigation.navigate("BusinessProfile")}>
          <MaterialIcons name="edit" size={20} color="rgba(78, 70, 180, 1)" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
         <TouchableOpacity style={styles.menuItem}>
                    <FontAwesome6 name="shop" size={24} color="#000" />
                    <View>
                    <Text style={styles.menuText}>About Shop</Text>
                    <Text style={styles.menusubText}>Reviews, Inventory, Promotions, Payment</Text>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate("MyShop")}>
                    <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon}/>
                    </TouchableOpacity>
                </TouchableOpacity>
        
                <TouchableOpacity style={styles.menuItem}>
                    <FontAwesome5 name="book" size={24}  color="#000" />
                    <View>
                    <Text style={styles.menuText}>My Bookings</Text>
                    <Text style={styles.menusubText}>History, Reschedule, Mark as complete</Text>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate("MyBookings")}>
                    <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon}/>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="bar-chart" size={24} color="#000" />
                    <View>
                    <Text style={styles.menuText}>Track Performance</Text>
                    <Text style={styles.menusubText}>Promotions, Financial Reports, Earnings</Text>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate("TrackPerformance")}>
                    <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon}/>
                    </TouchableOpacity>
                </TouchableOpacity>
        
                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="document" size={24} color="#000" />
                    <View>
                    <Text style={styles.menuText}>My Documents</Text>
                    <Text style={styles.menusubText}>Manage business-related documents</Text>
                    </View>
                    <TouchableOpacity  onPress={()=> navigation.navigate("Documents")}>
                    <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon}/>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                  <Ionicons name="help-circle" size={24} color="#000" />
                   <View>
                    <Text style={styles.menuText}>Support & Help</Text>
                    <Text style={styles.menusubText}>Vendor support, FAQ’s, Community Forum</Text>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate("Support")}>
                    <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon}/>
                    </TouchableOpacity> 
                </TouchableOpacity>
      </View>

      <View style={styles.footercontainer}>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate("HomePage") }
          >
            <Foundation
              name="home"
              size={30}
              color={activePage === "Home" ? "#4E46B4" : "#ddd"}
            />
            <Text
              style={[
                styles.footerText,
                activePage === "Home" && styles.activeText,
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
           onPress={()=> navigation.navigate("Bookings")}
          >
            <FontAwesome5
              name="book"
              size={30}
              color={activePage === "Bookings" ? "#4E46B4" : "#ddd"}
            />
            <Text
              style={[
                styles.footerText,
                activePage === "Bookings" && styles.activeText,
              ]}
            >
              Bookings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => setActivePage("Profile")}
          >
            <Image
              source={require("../../../assets/images/carimage.png")}
              style={styles.profileImage}
            />
            <Text
              style={[
                styles.footerText,
                activePage === "Profile" && styles.activeText,
              ]}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  logoutButton: {
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  logout: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 1)",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    width:"95%",
    marginLeft:10,
    height:100,
    padding: 15,
    gap:10,
    backgroundColor: "rgba(78, 70, 180, 1)",
    borderRadius: 16,
    marginBottom: 20,
    
  },
  profileImageLarge: {
    width: 55,
    height: 55,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
  },
  profilecontainer:{
    width:230,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "DM",
  },
  profileRating: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "DM",
  },
  profileTiming: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "DM",
  },
  iconContainer: {
  width: 30, 
  height: 30, 
  borderRadius: 15,
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 4, 
},

  menuContainer: {
    flex: 1,    
  },
  menuItem: {
  flexDirection: "row", 
  alignItems: "center", 
  justifyContent: "space-between", 
  paddingVertical: 15, 
  paddingHorizontal: 15,
  width:"95%",
  marginLeft:10, 
  borderColor: "#E2E2E2", 
  borderWidth: 2, 
  borderRadius: 16, 
  marginBottom: 10, 
  backgroundColor: "#fff", 
  gap:10,
},
menuTextContainer: {
  flex: 1, 
  width:230, 
},
menuText: {
  fontSize: 20, 
  fontWeight: "500", 
  color: "#1E1E1E",
  fontFamily: "DM", 
},
menusubText: {
  fontSize: 12,
  color: "rgba(0, 0, 0, 0.56)", 
  fontWeight: "500",
  fontFamily: "DM", 
},
dropdownIcon: {
    width:20,
    height: 30,
    fontSize: 18,
    lineHeight:26,
    color: "rgba(0, 0, 0, 0.56)",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.56)",
    borderWidth: 1.5,
    borderRadius: 4,
    backgroundColor: "#fff",
    
  },

  footercontainer: {
    flex: 1,
    justifyContent: "flex-end", 
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 20,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    overflow: "hidden", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 6,
  },

  footerButton: {
    alignItems: "center",
  },
  footerText: {
    color: "#C3C3C4",
    fontSize: 14,
    fontFamily:'DM',
    fontWeight:'500',
  },
   activeText: {
    color: '#4E46B4',
    fontFamily:'DM',
    fontWeight:'500',
    fontSize: 14,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
