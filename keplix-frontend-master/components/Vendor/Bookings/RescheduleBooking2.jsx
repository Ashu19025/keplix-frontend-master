import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Switch,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function RescheduleBooking2({ route, navigation }) {
  const { booking } = route.params; 
  const [date, setDate] = useState(new Date(booking.date) || new Date());
  const [time, setTime] = useState(booking.time || "");
  const [notify, setNotify] = useState(true);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setShowDatePicker(false); 
      setDate(selectedDate);
    }
  };

  const onTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setShowTimePicker(false); 
      setTime(selectedTime.toLocaleTimeString()); 
    }
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
      </View>

      <Text style={styles.title}>Reschedule Booking</Text>

      <View style={styles.notificationContainer}>
      <View style={styles.leftSection}>
        <FontAwesome6 name={"business-time"} style={styles.bookingIcon} />
        <Text style={styles.notificationText}>Notify Customers</Text>
      </View>
       <View style={[
          styles.trackContainer,
          { backgroundColor: notify ? "#4E46B4" : "#767577" }, 
        ]}>
        <Switch
          value={notify}
          onValueChange={(value) => setNotify(value)}
          trackColor={{ false: "#767577", true: "#4E46B4" }}
          thumbColor={notify ? "#ffffff" : "#f4f3f4"}
          style={styles.switch}
        />
      </View>
    </View>


      <Text style={styles.subtitle}>For Rescheduling the time slots</Text>

  
      <View style={styles.cardContainer}>
        <View style={styles.iconTitleRow}>
        <View style={styles.iconTitleContainer}>
          <MaterialCommunityIcons name="engine" style={styles.bookingIcon} />
          <Text style={styles.cardTitle}>{booking.title}</Text>
        </View>
        <Text style={styles.bookingNo}>{booking.bookingNo}</Text>
      </View>

      <Text style={styles.bookingNumber}>Booking Number:</Text>

        <View style={styles.divider} />

        <Text style={styles.bookingNumber}>Booking Details:</Text>
        <Text style={styles.cardDetail}>
          Name: <Text style={styles.value}>         {booking.name}</Text>
        </Text>
        <Text style={styles.cardDetail}>
          Date: <Text style={styles.value}>          {booking.date}</Text>
        </Text>
        <Text style={styles.cardDetail}>
          Time: <Text style={styles.value}>          {booking.time}</Text>
        </Text>
        <Text style={styles.cardDetail}>
          Payment: <Text style={styles.value}>     {booking.payment}</Text>
        </Text>
      </View>

      <View style={styles.pickerContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Alternate Date:</Text>
          <View style={styles.inputWrapper}>
          <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
            <Text>{date.toDateString()}</Text>
            <FontAwesome6 name={"calendar"} style={styles.bookingIcon} />
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Alternate Time:</Text>
          <TouchableOpacity style={styles.timeInput} onPress={() => setShowTimePicker(true)}>
            <Text>{time}</Text>
            <MaterialIcons name="keyboard-arrow-down" style={styles.dropdownIcon}/>
          </TouchableOpacity>
        </View>
      </View>


      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="calendar"
          onChange={onDateChange}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          value={new Date(date.setHours(time.split(":")[0], time.split(":")[1]))}
          mode="time"
          display="default"
          onChange={onTimeChange}
        />
      )}

      <TouchableOpacity style={styles.rescheduleButton}  onPress={() => navigation.navigate('RescheduledBooking')}>
        <Text style={styles.buttonText}>Reschedule Booking</Text>
      </TouchableOpacity>
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
    alignItems: "center",
    marginBottom: 40,
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
    marginRight: 30,
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
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    marginLeft:10,
  },
  cardContainer: {
  padding: 24,
  borderColor: "#E2E2E2",
  borderWidth: 2,
  borderRadius: 24,
  backgroundColor: "#fff",
},
iconTitleRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between", 
},
iconTitleContainer: {
  flexDirection: "row", 
  alignItems: "center",
  flex: 1, 
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
  fontFamily: "DM",
},
bookingNo: {
  fontSize: 16,
  fontWeight: "600",
  color: "#000000",
  fontFamily: "DM",
  borderColor: "#E2E2E2",
  borderWidth: 2,
  borderRadius: 25, 
  textAlign: "center",
  width: 40, 
  height: 40, 
  lineHeight: 34, 
},
bookingNumber: {
  fontSize: 14,
  color: "#0000008F",
  fontWeight: "500",
  fontFamily: "DM",
  marginBottom:10,
},
cardDetail: {
  fontSize: 14,
  color: "#0000008F",
  fontWeight: "500",
  fontFamily: "DM",
  marginBottom: 10,
},
  notificationContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 10,
},
leftSection: {
  flexDirection: "row",
  alignItems: "center",
},
notificationText: {
  fontSize: 20,
  fontWeight: "600",
  color: "#000000",
  fontFamily: "DM",
},
  trackContainer: {
    width: 60,
    height: 34, 
    backgroundColor: "#4E46B4", 
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
  },
  pickerContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginVertical: 20,
},
inputGroup: {
  flex: 0.48, 
},
label: {
  fontSize: 16,
  color: "#0000008F",
  fontWeight:'500',
  marginBottom: 5,
  fontFamily: "DM",
  marginLeft:5, 
},
inputWrapper: {
    flex: 1,
    position: 'relative',
  },
dateInput: {
  fontSize: 16,
  padding: 10,
  borderColor: "#E2E2E2",
  borderWidth: 2,
  borderRadius: 70,
},
timeInput: {
  fontSize: 16,
  padding: 10,
  borderColor: "#E2E2E2",
  borderWidth: 2,
  borderRadius: 70,
  justifyContent: "center",
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
  rescheduleButton: {
  backgroundColor: "#4E46B4",
  borderRadius: 70,
  paddingVertical: 15,
  alignItems: "center",
  marginBottom: 10, 
  position: "absolute", 
  bottom: 20, 
  left: 20, 
  right: 20, 
},
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    fontFamily: "DM",
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
