import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function TrackPerformance({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Business</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate("HamburgerMenu")}>
        <Ionicons name="menu-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Track Performance</Text>

      <View style={styles.menuContainer}>
         <TouchableOpacity style={styles.menuItem}>
                             <View>
                             <Text style={styles.menuText}>Financial Reports</Text>
                             <Text style={styles.menusubText}>Earnings, expenses, profit margins</Text>
                             </View>
                             <TouchableOpacity onPress={()=> navigation.navigate("FinancialReports")}>
                             <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon}/>
                             </TouchableOpacity>
                         </TouchableOpacity>
                 
                         <TouchableOpacity style={styles.menuItem}>
                             <View>
                             <Text style={styles.menuText}>Promotion Performance</Text>
                             <Text style={styles.menusubText}>Card, cashbacks & discounts, bundle offers</Text>
                             </View>
                             <TouchableOpacity onPress={()=> navigation.navigate("PromotionPerformance")}>
                             <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon}/>
                             </TouchableOpacity>
                         </TouchableOpacity>
                 
                         <TouchableOpacity style={styles.menuItem}>
                             <View>
                             <Text style={styles.menuText}>Track Earnings</Text>
                             <Text style={styles.menusubText}>All services earnings</Text>
                             </View>
                             <TouchableOpacity onPress={()=> navigation.navigate("Earnings")}>
                             <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon}/>
                             </TouchableOpacity>
                         </TouchableOpacity>

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
    fontWeight: '500',
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'DM',
    marginLeft:20
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
  width:"92%",
  marginLeft:15, 
  borderColor: "#E2E2E2", 
  borderWidth: 2, 
  borderRadius: 16, 
  marginBottom: 20, 
  backgroundColor: "#fff", 
  gap:10,
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
});
