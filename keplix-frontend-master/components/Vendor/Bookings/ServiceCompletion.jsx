import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Switch,
  Modal,
  ActivityIndicator,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const mockData = [
  { id: 1, title: "Engine Repair", bookingNo: 55, status: "Completed",date: "15 Oct 2024",
    time: "10:30AM",
    name: "John Doe",
    payment: "Credit Card", },
  { id: 2, title: "Engine Repair", bookingNo: 54, status: "Completed",date: "26 June 2024",
    time: "4:30PM",
    name: "Nithish Kumar",
    payment: "Debit Card", },
  { id: 3, title: "Engine Repair", bookingNo: 53, status: "Completed",date: "30 Sep 2024",
    time: "2:00PM",
    name: "Alice Smith",
    payment: "Cash", },
  { id: 4, title: "Engine Repair", bookingNo: 52, status: "Completed",date: "10 Nov 2024",
    time: "11:00AM",
    name: "Bob Johnson",
    payment: "UPI", },
];

export default function ServiceCompletion({ navigation }) {
  const [data, setData] = useState(
    mockData.map((item) => ({ ...item, notify: item.status === "Completed" }))
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async (item) => {
    setLoading(true);
    try {
      const fetchedDetails = {
        description: `Details for booking no ${item.bookingNo}.`,
        timestamp: new Date().toLocaleString(),
      };
      setModalData({ ...item, ...fetchedDetails });
    } catch (error) {
      console.error("Error fetching details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = (item) => {
  if (item.status === "Ongoing") {
    fetchDetails(item);
    setModalVisible(true);
  } else if (item.status === "Completed") {
    setData((prevData) =>
      prevData.map((i) =>
        i.id === item.id
          ? { ...i, status: "Ongoing", notify: false }
          : i
      )
    );
  }
};

  const markAsDone = () => {
  setData((prevData) =>
    prevData.map((item) =>
      item.id === modalData.id
        ? { ...item, status: "Completed", notify: true }
        : item
    )
  );
  
  setModalVisible(false);
  setModalData(null);
  
  navigation.navigate("ServiceCompleted");
};


  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <MaterialCommunityIcons name="engine" style={styles.bookingIcon} />
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.bookingNo}>{item.bookingNo}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.statusText(item.status)}>{item.status}</Text>
        <Text style={styles.serviceText}>• Repair service</Text>
        <View
          style={[
            styles.trackContainer,
            { backgroundColor: item.notify ? "#4E46B4" : "#767577" },
          ]}
        >
          <Switch
            value={item.notify}
            onValueChange={() => handleToggle(item)}
            trackColor={{ false: "#767577", true: "#4E46B4" }}
            thumbColor={item.notify ? "#ffffff" : "#f4f3f4"}
            style={styles.switch}
          />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate("MyBookings")}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Business</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("HamburgerMenu")}>
          <Ionicons name="menu-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Service Completion</Text>
      <Text style={styles.subtitle}>
        Mark it as done after completion of service
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

     
<Modal
  transparent={true}
  visible={modalVisible}
  animationType="slide"
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setModalVisible(false)}
      >
        <Ionicons name="close-outline" size={24} color="#000" />
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator size="large" color="#4E46B4" />
      ) : (
        <View>
          <Text style={styles.bookingNumber}>
            Booking Number:{" "}
            <Text style={styles.bookingNo1}> {modalData?.bookingNo}</Text>
          </Text>
          <View style={styles.iconTitleRow}>
            <MaterialCommunityIcons
              name="engine"
              style={styles.bookingIcon}
            />
            <Text style={styles.cardTitle}>{modalData?.title}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.textRow}>
            <Text style={styles.bookingNumber}>Booking Details:</Text>
            <Text style={styles.cardDetail}>
              Name: <Text style={styles.value}>{modalData?.name}</Text>
            </Text>
            <Text style={styles.cardDetail}>
              Date: <Text style={styles.value}>{modalData?.date}</Text> •{" "}
              <Text style={styles.value}>{modalData?.time}</Text>
            </Text>
            <Text style={styles.cardDetail}>
              Payment: <Text style={styles.value}>{modalData?.payment}</Text>
            </Text>
          </View>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.markDoneButton}
            onPress={markAsDone}
          >
            <Text style={styles.buttonText}>Mark as Done</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  </View>
</Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  backcontainer: {
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
  title: {
    fontWeight: "500",
    fontSize: 24,
    fontFamily: "DM",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
   borderColor: "#E2E2E2",
   borderWidth: 2,
   borderRadius: 24,
   padding: 15,
   marginBottom: 15,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
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
    fontFamily: "DM",
  },
  bookingContainer: {
    backgroundColor: "#E8E8E8",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
    width: 32, 
    height: 32, 
    lineHeight: 27,
    marginRight:100
  },
  cardBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusText: (status) => ({
    fontSize: 16,
    color: status === "Completed" ? "#000" : "#4E46B4",
    fontWeight: "600",
    fontFamily: "DM",
  }),
  serviceText: {
    fontSize: 16,
    color: "#0000008F",
    fontFamily: "DM",
    fontWeight: "600",
  },
  trackContainer: {
    width: 60,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  modalTimestamp: {
    fontSize: 14,
    color: "#999",
    marginBottom: 20,
  },
  markDoneButton: {
    backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
   fontWeight: "500",
   fontFamily: "DM",
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
  bookingNo1: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    fontFamily: "DM",
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 25, 
    textAlign: "center",
    width: 32, 
    height: 32, 
    lineHeight: 27,
    marginLeft:5 
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
divider: {
    height: 2,
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
