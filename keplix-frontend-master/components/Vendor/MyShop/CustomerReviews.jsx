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
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function CustomerReviews({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [customer, setCustomer] = useState("");
  const [service, setService] = useState("");

  const bookings = [
    { id: "1", name: "Nithish Kumar", service: "Repair service", time: "4:30PM",date:"28 Dec 2024", rating:"4.0 Rating" },
    { id: "2", name: "Aryan Kumar", service: "Change service", time: "4:30PM",date:"28 Dec 2024",rating:"3.0 Rating" },
    { id: "3", name: "Nithish Kumar", service: "Repair service", time: "4:30PM",date:"28 Dec 2024",rating:"2.0 Rating" },
    { id: "4", name: "Nithish Kumar", service: "Repair service", time: "4:30PM",date:"28 Dec 2024",rating:"4.5 Rating" },
    { id: "5", name: "Nithish Kumar", service: "Repair service", time: "4:30PM",date:"28 Dec 2024",rating:"4.6 Rating" },
     { id: "6", name: "Nithish Kumar", service: "Repair service", time: "4:30PM",date:"28 Dec 2024",rating:"4.7 Rating" },
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
            <Text style={{ color: "#4E46B4" }}>{item.rating}</Text> | {item.date} |{" "}
            <Text style={{ color: "#000" }}>{item.name}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CustomerFeedback", { cardDetails: item })}
        >
          <MaterialIcons name="keyboard-arrow-right" style={styles.dropdownIcon} />
        </TouchableOpacity>
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
        <Text style={styles.title}>Customer reviews</Text>
       <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Foundation name="filter" size={24} color="rgba(78, 70, 180, 1)" style={styles.icon1} />
        </TouchableOpacity>
        </View>


    <FlatList
        data={bookings}
        renderItem={renderBooking}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.bookingsList}
        showsVerticalScrollIndicator={false}
        />

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
            <View style={styles.headerRightPlaceholder} />
          </View>

         <Text style={styles.dropdownTitle}>Date</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="calendar-clear" size={20} color="#888" />
            <TouchableOpacity
              style={styles.input}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.inputText}>
                {date.toLocaleDateString("en-US")}
              </Text>
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}

          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownTitle}>Customer Name</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={customer}
                onValueChange={(itemValue) => setCustomer(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select a customer" value="" />
                {customers.map((name, index) => (
                  <Picker.Item key={index} label={name} value={name} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownTitle}>Service</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={service}
                onValueChange={(itemValue) => setService(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select a service" value="" />
                {services.map((type, index) => (
                  <Picker.Item key={index} label={type} value={type} />
                ))}
              </Picker>
            </View>
          </View>

          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.applyButtonText}>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

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
  justifyContent: "flex-start",
},
  serviceTitle: {
  fontSize: 20,
  fontFamily: "DM",
  fontWeight: "500",
  color: "rgba(30, 30, 30, 1)",
  marginBottom: 0, 
},
  serviceDetails: {
  fontSize: 12,
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
  headerRightPlaceholder: {
    width: 24, 
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(226, 226, 226, 1)",
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 16,
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
    marginBottom: 16,
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
