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
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Earnings({ navigation }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Daily");

  const allEarnings = [
    {
      id: "1",
      title: "Engine Repair",
      time: "6:30PM",
      category: "Repair Service",
      amount: 4500,
      period: "Daily",
    },
    {
      id: "2",
      title: "Tyre Puncture",
      time: "4:00PM",
      category: "Repair Service",
      amount: 2000,
      period: "Daily",
    },
    {
      id: "3",
      title: "Detailing | Spray Paint",
      time: "2:30PM",
      category: "Detailing",
      amount: 20000,
      period: "Daily",
    },
    {
      id: "4",
      title: "Mobile Holder",
      time: "12:30PM",
      category: "Accessories",
      amount: 999,
      period: "Daily",
    },
    {
      id: "5",
      title: "Car Interior Mat",
      time: "10:30AM",
      category: "Refunded",
      amount: -849,
      period: "Daily",
    },
  ];

  const yesterdayEarnings = [
    {
      id: "1",
      title: "Engine Repair",
      time: "6:30PM",
      category: "Repair Service",
      amount: 4500,
      period: "Yesterday",
    },
    {
      id: "2",
      title: "Tyre Puncture",
      time: "4:00PM",
      category: "Repair Service",
      amount: 2000,
      period: "Yesterday",
    },
    {
      id: "3",
      title: "Detailing | Spray Paint",
      time: "2:30PM",
      category: "Detailing",
      amount: 20000,
      period: "Yesterday",
    }]

  const totalAmount = (entries) =>
    entries.reduce((total, item) => total + item.amount, 0);

  const renderEarnings = ({ item }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("TransactionDetails", { earning: item })}
    style={[styles.row, { borderBottomWidth: 2, borderBottomColor: "#E2E2E2" }]}
  >
    <View
      style={
        item.category === "Refunded"
          ? styles.refundedIconContainer
          : styles.iconContainer
      }
    >
      <MaterialCommunityIcons
        name={
          item.category === "Refunded"
            ? "arrow-top-right"
            : "arrow-bottom-left"
        }
        size={30}
        color={item.category === "Refunded" ? "#000" : "#fff"}
        style={styles.iconleft}
      />
    </View>
    <View style={styles.info}>
      <Text style={styles.title1}>{item.title}</Text>
      <Text style={styles.subtitle}>
        {item.time} | {item.category}
      </Text>
    </View>
    <Text
      style={[
        styles.amount,
        { color: item.category === "Refunded" ? "#000" : "#4E46B4" },
      ]}
    >
      ₹{item.amount.toLocaleString("en-IN")}
    </Text>
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

    <View style={styles.headerRow}>
      <Text style={styles.title}>Earnings</Text>
      <TouchableOpacity
        style={styles.upcomingButton}
        onPress={() => setDropdownVisible(!dropdownVisible)}
      >
        <Text style={styles.upcomingtext}>{selectedPeriod}</Text>
        <FontAwesome5
          name={dropdownVisible ? "chevron-up" : "chevron-down"}
          style={styles.dropdownIcon}
        />
      </TouchableOpacity>
    </View>

    {/* Dropdown Menu */}
    {dropdownVisible && (
      <View style={styles.dropdown}>
        <TouchableOpacity
          onPress={() => {
            setSelectedPeriod("Daily");
            setDropdownVisible(false);
          }}
        >
          <Text style={styles.dropdownText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedPeriod("Yesterday");
            setDropdownVisible(false);
          }}
        >
          <Text style={styles.dropdownText}>Yesterday</Text>
        </TouchableOpacity>
      </View>
    )}

    {/* Render Earnings based on Selected Period */}
    {selectedPeriod === "Daily" && (
      <>
        <Text style={[styles.sectionHeader, { color: "#0000008F" }]}>
          Today, 24th Dec |{" "}
          <Text style={{ color: "#000" }}>
            ₹{totalAmount(allEarnings).toLocaleString("en-IN")}
          </Text>
        </Text>
        <FlatList
          data={allEarnings}
          renderItem={renderEarnings}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />

        <Text style={[styles.sectionHeader, { color: "#0000008F" }]}>
          23rd Dec |{" "}
          <Text style={{ color: "#000" }}>
            ₹{totalAmount(yesterdayEarnings).toLocaleString("en-IN")}
          </Text>
        </Text>
        <FlatList
          data={yesterdayEarnings}
          renderItem={renderEarnings}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </>
    )}

    {selectedPeriod === "Yesterday" && (
      <>
        <Text style={[styles.sectionHeader, { color: "#0000008F" }]}>
          23rd Dec |{" "}
          <Text style={{ color: "#000" }}>
            ₹{totalAmount(yesterdayEarnings).toLocaleString("en-IN")}
          </Text>
        </Text>
        <FlatList
          data={yesterdayEarnings}
          renderItem={renderEarnings}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </>
    )}
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
    fontFamily: "DM",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  upcomingButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  upcomingtext: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 1)",
    marginRight: 5,
  },
  dropdownIcon: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.56)",
  },
  dropdown: {
    position: "absolute",
    top: 100,
    right: 20,
    backgroundColor: "#fff",
    borderColor: "#E2E2E2",
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    zIndex: 10,
  },
  dropdownText: {
    fontSize: 14,
    padding: 10,
    color: "rgba(0, 0, 0, 0.8)",
  },
  list: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    paddingVertical: 15,
  },
  iconContainer: {
    padding: 4,
    borderRadius: 30,
    backgroundColor: "#4E46B4",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginRight: 10,
  },
  refundedIconContainer: {
    padding: 4,
    borderRadius: 30,
    backgroundColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginRight: 10,
  },
  iconleft: {
    position: "relative",
  },
  info: {
    flex: 1,
  },
  title1: {
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "DM",
  },
  subtitle: {
    color: "#8A8A8A",
    fontWeight: "500",
    fontSize: 12,
    fontFamily: "DM",
  },
  amount: {
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "DM",
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
