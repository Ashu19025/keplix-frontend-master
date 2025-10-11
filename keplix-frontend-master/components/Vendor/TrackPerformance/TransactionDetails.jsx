import React, { useEffect, useState } from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
   Animated, } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TransactionDetails = ({ navigation,route }) => {

    const [scale] = useState(new Animated.Value(0));
    
      useEffect(() => {
        Animated.spring(scale, {
          toValue: 1,
          friction: 3,
          tension: 100,
          useNativeDriver: true,
        }).start();
      }, []);

  const { earning } = route.params;

  const totalAmount = parseFloat(earning.amount) + 13.0;

  return (
     <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name={"arrow-back-outline"} style={styles.icon} />
              </TouchableOpacity>
              <View style={styles.titleContainer}>
                <Text style={styles.text}>Earnings</Text>
              </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.entryRow}>
          <MaterialCommunityIcons
            name={
              earning.category === "Refunded"
                ? "arrow-top-right"
                : "arrow-bottom-left"
            }
            size={30}
            color={earning.category === "Refunded" ? "#000" : "#fff"}
            style={[
              styles.entryIcon,
              earning.category === "Refunded" && styles.refundedIcon,
            ]}
          />
          <View style={styles.entryDetails}>
            <Text style={styles.entryTitle}>{earning.title}</Text>
            <Text style={styles.entrySubtitle}>{earning.time} | {earning.category}</Text>
          </View>
        </View>


      <View style={styles.detailsContainer}>
        <View style={styles.statusContainer}>
        <Animated.View style={[styles.checkContainer, { transform: [{ scale }] }]}>
                <Ionicons name="checkmark-circle" style={styles.checkIcon} />
              </Animated.View>
        <Text style={styles.statusText}>Payment Completed!</Text>
        <Text style={styles.amount}>₹{totalAmount.toLocaleString("en-IN")}</Text>
      </View>
        <View style={styles.divider} />
        <TextRow label="Receiver" value="Dwarka Mor Service" />
        <TextRow label="Trxn Number" value="000085752257" />
        <TextRow label="Payment Time" value="11-10-2024, 6:30PM" />
        <TextRow label="Payment Method" value="Debit Card" />
        <TextRow label="Sender Name" value="Nithish Kumar" />
        <View style={styles.divider} />
        <TextRow label="Amount" value={`₹${totalAmount.toFixed(2)}`} />
        <TextRow label="Processing Fee" value="₹13.00" />
      </View>
    <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Download receipt</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const TextRow = ({ label, value }) => (
  <View style={styles.textRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
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
    color: "#000000",
    fontFamily: "DM",
  },
  titleContainer: {
    marginLeft:10,
  },
  content: {
    paddingHorizontal: 20,
  },
  entryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 10, 
    paddingHorizontal: 15,
    borderColor: "#E2E2E2", 
    borderWidth: 2, 
    borderRadius: 24, 
  },
  entryIcon: {
    padding: 10,
    backgroundColor: "#4E46B4",
    borderRadius: 30,
    marginRight: 10,
  },
  refundedIcon: {
    backgroundColor: "#E2E2E2",
  },
  entryDetails: {
    flex: 1,
  },
  entryTitle: {
    fontSize: 16,
    color: "#1E1E1E",
    fontFamily: "DM",
  },
  entrySubtitle: {
    fontSize: 14,
    color: "#8A8A8A",
    fontFamily: "DM",
  },
  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderColor: "#E2E2E2", 
    borderWidth: 2, 
    borderRadius: 70, 
    alignItems: "center",
  },
  buttonText: {
    color: "#4E46B4",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "DM",
  },
  statusContainer: {
    alignItems: "center",
  },
   checkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7F9F2',
    borderRadius: 100,
    width:60,
    height:60,
  },
  checkIcon: {
    fontSize: 50,
    color: '#40A69F',
  },
  statusText: {
    fontSize: 18,
    color: "#40A69F",
    fontFamily: "DM",
    marginVertical: 8,
    fontWeight: "500",
  },
  amount: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    fontFamily: "DM",
  },
  detailsContainer: {
   marginBottom: 20,
    paddingVertical: 10, 
    paddingHorizontal: 15,
    borderColor: "#E2E2E2", 
    borderWidth: 2, 
    borderRadius: 24, 
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: "#888",
    fontFamily: "DM",
    flex: 1,
  },
  value: {
    fontSize: 16,
    color: "#000000",
    fontFamily: "DM",
    textAlign: "right",
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginVertical: 10,
  },
});

export default TransactionDetails;
