import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Modal,
  ScrollView,
  TextInput
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function Bookings({ navigation }) {
  const [activePage, setActivePage] = useState("Bookings");
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [customer, setCustomer] = useState("");
  const [service, setService] = useState("");
  const [filtersApplied, setFiltersApplied] = useState(0);

  const onDateChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setShowDatePicker(false);
  setDate(currentDate);
};

const onApplyFilters = () => {
    let appliedFilters = 0;
    if (customer) appliedFilters += 1;
    if (service) appliedFilters += 1;
    if (date) appliedFilters += 1;

    setFiltersApplied(appliedFilters);
    setModalVisible(false); // Close the modal
  };

  const bookings = [
    { id: "1", name: "Nithish Kumar", service: "Repair service", time: "4:30PM" },
    { id: "2", name: "Aryan Kumar", service: "Change service", time: "4:30PM" },
    { id: "3", name: "Nithish Kumar", service: "Repair service", time: "4:30PM" },
    { id: "4", name: "Nithish Kumar", service: "Repair service", time: "4:30PM" },
    { id: "5", name: "Nithish Kumar", service: "Repair service", time: "4:30PM" },
     { id: "6", name: "Nithish Kumar", service: "Repair service", time: "4:30PM" },
  ];

  const customers = ["Nithish Kumar", "Aryan Kumar", "Ravi Verma"];
  const services = ["Repair", "Change", "Transform"];

  const renderBooking = ({ item }) => (
  <View style={styles.ongoingCard}>
    <View style={styles.serviceContent}>
      <View style={styles.leftContent}>
        <MaterialCommunityIcons name="engine" style={styles.bookingIcon} />
        <View style={styles.textContent}>
          <Text style={styles.serviceTitle}>Engine Repair</Text>
          <Text style={styles.serviceDetails}>
            {item.name} • {item.service}
          </Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.serviceTimeLabel}>Today</Text>
        <Text style={styles.serviceTime}>{item.time}</Text>
      </View>
    </View>
  </View>
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
        <Text style={styles.title}>Bookings</Text>
        <TouchableOpacity style={styles.upcomingButton}>
            <Text style={styles.upcomingtext}>Upcoming</Text>
            <MaterialIcons name="keyboard-arrow-down" style={styles.dropdownIcon} />
        </TouchableOpacity>
        </View>

      <View style={styles.filterContainer}>
        <Text style={styles.dateText}>Today, 11th Oct</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Foundation name="filter" size={24} color="rgba(78, 70, 180, 1)" style={styles.icon1} />
        </TouchableOpacity>
      </View>
      {filtersApplied > 0 && (
        <Text style={styles.filtersAppliedText}>
          {filtersApplied} filter{filtersApplied > 1 ? "s" : ""} applied
        </Text>
      )}

    <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            data={bookings}
            renderItem={renderBooking}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.bookingsList}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
        </ScrollView>



       <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.headerRow1}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Ionicons name="close-outline" size={24} color="black" style={styles.icon2} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Filters</Text>
        </View>

        <Text style={styles.dropdownTitle}>Date</Text>
        <TouchableOpacity
          style={styles.inputContainer}
        >
          <Text style={styles.inputText}>{date.toLocaleDateString("en-US")}</Text>
          <Ionicons name="calendar-clear" size={20} color="#888" style={styles.iconRight} onPress={() => setShowDatePicker(true)}/>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
             onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) setDate(selectedDate);
                }}
              />
            )}

        <Text style={styles.dropdownTitle}>Customer Name</Text>
        <TextInput
          style={styles.inputContainer}
          value={customer}
          placeholder="Enter customer name"
          placeholderTextColor="#888"
          onChangeText={setCustomer}
        />

        <Text style={styles.dropdownTitle}>Service</Text>
        <TextInput
          style={styles.inputContainer}
          value={service}
          placeholder="Enter service name"
          placeholderTextColor="#888"
          onChangeText={setService}
        />

        <TouchableOpacity
          style={styles.applyButton}
          onPress={onApplyFilters}
        >
          <Text style={styles.applyButtonText}>Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>


      <View style={styles.footercontainer}>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate("HomePage")}>
            <Foundation
              name="home"
              size={30}
              color={activePage === "Home" ? "#4E46B4" : "#ddd"}/>
            <Text
              style={[
                styles.footerText,
                activePage === "Home" && styles.activeText, ]}> Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => setActivePage("Bookings")}>
            <FontAwesome5 name="book" size={30} color={activePage === "Bookings" ? "#4E46B4" : "#ddd"}/>
            <Text
              style={[
                styles.footerText,
                activePage === "Bookings" && styles.activeText,]}>
              Bookings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate("Profile")}
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
  title: {
    fontWeight: '500',
    fontSize: 24,
    fontFamily: 'DM',
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
  paddingHorizontal: 15,
  paddingVertical: 5,
},

upcomingtext: {
  fontSize: 14,
  color: "rgba(0, 0, 0, 1)",
  marginRight: 8, 
},

dropdownIcon: {
  width: 20,
  height: 14, 
  fontSize: 14, 
  color: "rgba(0, 0, 0, 0.56)",
  textAlign: "center", 
  lineHeight: 13,
  borderColor: "rgba(0, 0, 0, 0.56)",
  borderWidth: 1.5,
  borderRadius: 4,
  backgroundColor: "#fff"
},
   filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  filtersAppliedText: {
    fontSize: 16,
    fontFamily: "DM",
    fontWeight: "500",
    backgroundColor: "rgba(78, 70, 180, 1)",
    color:'#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 20,
    marginBottom: 10,
    width:'40%',
    borderRadius:70,
  },
  dateText: {
    fontSize: 18,
    color: "#0000008F",
  },
  icon1: {
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  bookingsList: {
    paddingBottom: 20, 
  },
  ongoingCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "rgba(226, 226, 226, 1)",
    borderRadius: 16,
    height: 90, 
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 8,
    marginHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  serviceContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
  },
  bookingIcon: {
    fontSize: 24,
    color: "rgba(0, 0, 0, 1)",
    marginRight: 12,
  },
  textContent: {
    flexDirection: "column",
  },
  serviceTitle: {
    fontSize: 20,
    fontFamily: "DM",
    fontWeight: "500",
    color: "rgba(30, 30, 30, 1)",
  },
  serviceDetails: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.56)",
    fontFamily: "DM",
    fontWeight: "500",
    marginTop: 4,
    textAlign: "left",
  },
  timeContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  serviceTimeLabel: {
    fontSize: 14,
    color: "gray",
    textAlign: "right",
  },
  serviceTime: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4E46B4",
    textAlign: "right",
  },
 modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  headerRow1: {
    flexDirection: "row",
    marginBottom: 16,
    gap:20
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: "DM",
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 16,
    fontFamily: "DM",
    fontWeight: "500",
    borderWidth: 2,
    borderColor: "rgba(226, 226, 226, 1)",
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 16,
    justifyContent: "space-between"
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  inputText: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontFamily: "DM",
    fontWeight: "600",
  },
  dropdownContainer: {
    marginBottom: 10,
  },
  dropdownTitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  pickerWrapper: {
    borderWidth: 2,
    borderColor: "rgba(226, 226, 226, 1)",
    borderRadius: 24,
    height:50,
  },
  picker: {
    height: 40,
  },
  applyButton: {
    backgroundColor: "rgba(78, 70, 180, 1)",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 16,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon2: {
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
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
    fontFamily: "DM",
    fontWeight: "500",
  },
  activeText: {
    color: "#4E46B4",
    fontFamily: "DM",
    fontWeight: "500",
    fontSize: 14,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
