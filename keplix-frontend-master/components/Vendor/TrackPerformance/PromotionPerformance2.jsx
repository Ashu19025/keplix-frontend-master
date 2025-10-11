import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PromotionPerformance2({ navigation }) {
  const [data, setData] = useState({
    name: "",
    revenue: "",
    profit: "",
    users: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = {
        name: "HDFC Bank",
        revenue: "₹15L",
        profit: "1K+",
        users: "27%",
      };
      setData(response);
    };

    fetchData();
  }, []);

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
      <Text style={styles.subtitle}>Card Offers</Text>

      <View style={styles.cardContainer}>
  <ImageBackground
    source={require("../../../assets/images/bluegradient.jpeg")}
    style={styles.cardBackground}
    imageStyle={{ borderRadius: 24 }}
  >
    <View style={styles.dataContainer}>
      <Text style={styles.dataName}>{data.name}</Text>
      <View style={styles.dataItemsRow}>
        <Text style={styles.dataItem}>{data.revenue}</Text>
        <Text style={styles.dataItem}>{data.profit}</Text>
        <Text style={styles.dataItem}>{data.users}</Text>
      </View>

            <View style={styles.dataLabelsRow}>
              <Text style={styles.dataLabel}>Revenue</Text>
              <Text style={styles.dataLabel}>Profit</Text>
              <Text style={styles.dataLabel}>Users</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.newCardContainer}>
        <Text style={styles.cardHeading}>Booking Rates:</Text>

        <View style={styles.divider} />

        <Text style={styles.cardSubHeading}>Revenue:</Text>
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
    fontFamily: "DM",
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    marginLeft: 20,
  },
  cardContainer: {
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardBackground: {
    height: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  dataContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  dataName: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 20,
    color: "#fff",
    textAlign: "center",
  },
  dataItemsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginBottom: 5,
  },
  dataLabelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  dataItem: {
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "DM",
    color: "#fff",
    textAlign: "center",
  },
  dataLabel: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM",
    color: "#fff",
    textAlign: "center",
  },
  newCardContainer: {
  marginHorizontal: 20,
  marginTop: 20,
  backgroundColor: "#E2E2E2",
  borderRadius: 24,
  padding: 20,
  height:'40%',
},
cardHeading: {
  fontSize: 16,
  fontWeight: "500",
  fontFamily: "DM",
  color: "#0000008F",
  marginBottom: 90,
},
divider: {
  height: 2,
  backgroundColor: "#fff",
  marginVertical: 15,
  width:'100%'
},
cardSubHeading: {
  fontSize: 16,
  fontWeight: "500",
  fontFamily: "DM",
  color: "#0000008F",
  marginBottom: 10,
},

});
