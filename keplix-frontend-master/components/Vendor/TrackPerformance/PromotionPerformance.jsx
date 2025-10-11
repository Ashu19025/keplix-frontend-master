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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function PromotionPerformance({ navigation }) {
  const [showCardOffers, setShowCardOffers] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);

  const banks = ["HDFC Bank", "IDBI Bank", "SBI Bank", "CANARA Bank"];

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

      <Text style={styles.title}>Promotion Performance</Text>

      <View style={styles.menuContainer}>
        <View>
          <TouchableOpacity
            style={
              showCardOffers
                ? [styles.menuItem, styles.expandedMenuItem]
                : styles.menuItem
            }
            onPress={() => setShowCardOffers(!showCardOffers)}
          >
            <FontAwesome6 name="credit-card" size={24} color="#000" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>Card Offers</Text>
              <Text style={styles.menusubText}>Last updated 11-10-2024</Text>
            </View>
            <MaterialIcons
              name={showCardOffers ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              style={styles.dropdownIcon}
            />
          </TouchableOpacity>

          {showCardOffers && (
            <View style={styles.bankContainer} >
              {banks.map((bank, index) => (
                <TouchableOpacity
                key={index}
                style={[
                    styles.bankItem,
                    selectedBank === index && styles.bankItemSelected,
                ]}
                onPress={() => {
                    setSelectedBank(index); 
                    navigation.navigate("PromotionPerformance2"); 
                }}
                >
                <Text
                    style={[
                    styles.bankText,
                    selectedBank === index && styles.bankTextSelected,
                    ]}
                >
                    {bank}
                </Text>
                </TouchableOpacity>

              ))}
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.menuItem}>
          <MaterialCommunityIcons name="ticket-percent" size={30} color="#000" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuText}>Cashback & Discounts</Text>
            <Text style={styles.menusubText}>Last updated 11-10-2024</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-down"
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome6 name="cube" size={24} color="#000" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuText}>Bundle Offers</Text>
            <Text style={styles.menusubText}>Last updated 11-10-2024</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-down"
            style={styles.dropdownIcon}
          />
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
    fontWeight: "500",
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "DM",
    marginLeft: 20,
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
    width: "92%",
    marginLeft: 15,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  expandedMenuItem: {
    paddingBottom: 10,
  },
  menuTextContainer: {
    flex: 1,
    marginLeft: 10,
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
    width:28,
    height: 20,
    fontSize: 24,
    lineHeight:20,
    color: "rgba(0, 0, 0, 0.56)",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.56)",
    borderWidth: 1.5,
    borderRadius: 4,
    backgroundColor: "#fff", 
  },
   bankContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E2E2E2",
    marginBottom: 20, // Added bottom margin
    marginLeft: 15,
    width: "92%",
  },
  bankItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#F9F9F9",
    marginBottom: 10,
  },
  bankItemSelected: {
    backgroundColor: "rgba(78, 70, 180, 1)",
  },
  bankText: {
    fontSize: 16,
    color: "#1E1E1E",
    fontWeight: "500",
  },
  bankTextSelected: {
    color: "#fff", 
  },
});
