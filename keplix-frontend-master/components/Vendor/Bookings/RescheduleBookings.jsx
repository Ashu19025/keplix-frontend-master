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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const bookingData = [
  {
    id: "1",
    bookingNo: 56,
    title: "Tyre Repair",
    date: "15 Oct 2024",
    time: "10:30AM",
    name: "John Doe",
    payment: "Credit Card",
  },
  {
    id: "2",
    bookingNo: 55,
    title: "Engine Repair",
    date: "26 June 2024",
    time: "4:30PM",
    name: "Nithish Kumar",
    payment: "Debit Card",
  },
  {
    id: "3",
    bookingNo: 54,
    title: "Oil Change",
    date: "30 Sep 2024",
    time: "2:00PM",
    name: "Alice Smith",
    payment: "Cash",
  },
  {
    id: "4",
    bookingNo: 53,
    title: "Brake Repair",
    date: "10 Nov 2024",
    time: "11:00AM",
    name: "Bob Johnson",
    payment: "UPI",
  },
];

export default function RescheduleBooking({ navigation }) {
  const [expandedId, setExpandedId] = useState(null);

  const renderMenuItem = ({ item }) => {
  const isExpanded = expandedId === item.id;

  return (
    <View style={styles.menuItemContainer}>
      {!isExpanded ? (
        <View style={styles.menuItem}>
          <Text style={styles.bookingNo}>{item.bookingNo}</Text>
          <View>
            <Text style={styles.menuText}>{item.title}</Text>
            <Text style={styles.menusubText}>{`${item.date} | ${item.time}`}</Text>
          </View>
          <TouchableOpacity onPress={() => setExpandedId(item.id)}>
            <MaterialIcons
              name="keyboard-arrow-down"
              style={styles.dropdownIcon}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.cardContainer}>
          <Text style={styles.bookingNumber}>
            Booking Number:{" "} <Text style={styles.bookingNo}> {item.bookingNo}</Text>
          </Text>
          
          <View style={styles.iconTitleRow}>
            <MaterialCommunityIcons name="engine" style={styles.bookingIcon} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <TouchableOpacity onPress={() => setExpandedId(null)}>
              <MaterialIcons
                name="keyboard-arrow-up"
                style={styles.dropdownIcon1}
              />
            </TouchableOpacity>
          </View>

        <View style={styles.divider} />
          <View style={styles.textRow}>
            <Text style={styles.bookingNumber}> Booking Details:</Text>
            <Text style={styles.cardDetail}>
              Name: <Text style={styles.value}>     {item.name}</Text>
            </Text>
            <Text style={styles.cardDetail}>
              Date: <Text style={styles.value}>     {item.date}</Text> • {" "}<Text style={styles.value}>{item.time}</Text>
            </Text>
            <Text style={styles.cardDetail}>
              Payment: <Text style={styles.value}>  {item.payment}</Text>
            </Text>
            
          </View>

          
            <TouchableOpacity
                style={styles.acceptButton}
                onPress={() =>
                    navigation.navigate("RescheduleBooking2", { booking: item })
                }
                >
                <Text style={styles.buttonText}>Reschedule Booking</Text>
                </TouchableOpacity>

        </View>
      )}
    </View>
  );
};


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

      <Text style={styles.title}>Reschedule Booking</Text>

      <FlatList
        data={bookingData}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
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
  title: {
    fontWeight: "500",
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "DM",
    marginLeft: 20,
  },
  menuItemContainer: {
    marginBottom: 20,
    marginHorizontal: 15,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
   menuText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#1E1E1E",
    fontFamily: "DM",
  },
  menusubText: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.56)",
    fontWeight: "500",
    fontFamily: "DM",
  },
  bookingNo: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    marginRight: 10,
    fontFamily: "DM",
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding:10,
  },
  cardContainer: {
    padding: 24,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 24,
    backgroundColor: "#fff",
  },
  bookingNumber: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
    color: "#0000008F",
    fontFamily: "DM",
  },
  iconTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    marginBottom: 10,
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
    flex: 1, 
    fontFamily: "DM",
  },
  cardDetail: {
    fontSize: 14,
    color: "#0000008F",
    fontWeight: "500",
     fontFamily: "DM",
    marginBottom: 10,
  },
  acceptButton: {
    flex: 0.48,
    backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
    marginTop:10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
   fontWeight: "500",
   fontFamily: "DM",
  },
  dropdownIcon: {
    width: 30, 
    height: 20, 
    fontSize: 18,
    lineHeight: 18, 
    textAlign: "center", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    color: "rgba(0, 0, 0, 0.56)",
    borderColor: "rgba(0, 0, 0, 0.56)",
    borderWidth: 1.5,
    borderRadius: 4,
    backgroundColor: "#fff",
},
dropdownIcon1: {
    width: 30, 
    height: 20, 
    fontSize: 18,
    lineHeight: 18, 
    textAlign: "center", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    color: "#4E46B4",
    borderColor: "#4E46B4",
    borderWidth: 1.5,
    borderRadius: 4,
    backgroundColor: "#fff",
},
divider: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginVertical: 10,
  },
  value: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    fontFamily: "DM",
    textAlign: "right",
    flex: 1,
  },
});
