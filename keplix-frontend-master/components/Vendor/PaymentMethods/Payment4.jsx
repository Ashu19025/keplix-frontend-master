import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Payment4({ navigation }) {
  const [upiId, setUpiId] = useState("");
  const [isUpiValid, setIsUpiValid] = useState(false);
  const [isVerified, setIsVerified] = useState(false);


    const upiDatabase = {
    GooglePay: "googlepay@upi",
    Paytm: "paytm@upi",
    PhonePe: "phonepe@upi",
    Amazon: "amazon@upi",
  };

 
  const handleUpiInputChange = (input) => {
    setUpiId(input);
    setIsUpiValid(input.trim() !== ""); 
  };

  const handleAppClick = (appName) => {
    const selectedUpiId = upiDatabase[appName];
    setUpiId(selectedUpiId);
    setIsUpiValid(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back-outline"} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Payment</Text>
        <Text style={styles.subtitle}>Select payment method</Text>

        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.menuItem}>
                    <FontAwesome5 name="rupee-sign" size={24} color="#000" style={styles.menuIcon} />
                    <View style={styles.menuTextContainer}>
                      <Text style={styles.menuText}>UPI</Text>
                    </View>
                  </TouchableOpacity>

          <Text style={styles.chooseAppText}>Choose App</Text>

          <View style={styles.appRow}>
            <TouchableOpacity
                style={[styles.appIcon, styles.iconBorder]}
                onPress={() => handleAppClick("GooglePay")}
            >
                <Image
                source={require("../../../assets/images/icons8-google-pay-48.png")}
                style={styles.appImage}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.appIcon, styles.iconBorder]}
                onPress={() => handleAppClick("Paytm")}
            >
                <Image
                source={require("../../../assets/images/icons8-paytm-48.png")}
                style={styles.appImage}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.appIcon, styles.iconBorder]}
                onPress={() => handleAppClick("PhonePe")}
            >
                <Image
                source={require("../../../assets/images/phonepe-icon.png")}
                style={styles.appImage}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.appIcon, styles.iconBorder]}
                onPress={() => handleAppClick("Amazon")}
            >
                <Image
                source={require("../../../assets/images/icons8-amazon-48.png")}
                style={styles.appImage}
                />
            </TouchableOpacity>
            </View>


          <View style={styles.dividerContainer}>
                 <View style={styles.line} />
                 <Text style={styles.orText}>Or</Text>
                 <View style={styles.line} />
               </View>
        
        <Text style={styles.chooseAppText}>Enter UPI ID</Text>
        <View style={styles.menuItem}>
          <TextInput
            style={styles.input}
            placeholder="Enter UPI ID"
            value={upiId}
            onChangeText={handleUpiInputChange}
          />

          <TouchableOpacity
                style={[
                    styles.verifyButton,
                    isUpiValid && { backgroundColor: isVerified ? "#fff" : "#40A69F" },
                ]}
                onPress={() => setIsVerified(true)}
                >
                <Text
                    style={[
                    styles.verifyButtonText,
                    isVerified && { color: "#40A69F" },
                    ]}
                >
                    {isVerified ? "Verified" : "Verify"}
                </Text>
                </TouchableOpacity>


          </View>
        </View>

        <TouchableOpacity  style={[
                styles.payButton,
                isVerified && { backgroundColor: "#4E46B4" },
            ]} 
            onPress={() => navigation.navigate("PaymentSuccess")}>
          <Text style={styles.payButtonText}>Pay ₹10,499</Text>
        </TouchableOpacity>
      </ScrollView>
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
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    fontWeight: '500',
    fontFamily: 'DM',
    marginLeft: 20,
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
    fontFamily: 'DM',
    marginLeft: 23,
  },
  cardContainer: {
    flex: 1, 
    padding: 20,
    marginHorizontal: 15,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  menuItem: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between",
    marginBottom:20,  
  },
  menuIcon: {
    marginRight: 10,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuText: {
    fontSize: 24, 
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
  cardTitle: {
    fontSize: 18,
     fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 15,
  },
  chooseAppText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 10,
  },
  appRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  appIcon: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  appImage: {
    height: 44,
    width: 44,
    resizeMode: 'contain',
  },
  iconBorder: {
    borderWidth: 2,
    borderColor: '#E2E2E2',
    borderRadius: 8,
    padding: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    width: '95%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    color: '#0000008F',
    fontWeight: '600',
    fontFamily:'DM',
  },
  input: {
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    width:'75%',
    marginHorizontal: 5,
  },
  verifyButton: {
    backgroundColor: "#0000008F",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: '600',
    fontFamily:'DM',
  },
  payButton: {
    backgroundColor: "#0000008F",
    padding: 15,
    borderRadius: 70,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 180,
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily:'DM',
  },
});
