import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const questionsDB = [
  {id: 1, title: "How do I book a service?",},
  {id: 2, title: "Can I cancel a booking?",},
  {id: 3,title: "How do I view my booking history?",},
  {id: 4,title: "What payment methods are accepted?",},
  {id: 5,title: "What should I do if my payment fails?",},
];

export default function FAQ({ navigation }) {
  const [menuItems, setMenuItems] = useState(questionsDB);

  const renderMenuItems = () => {
  return menuItems.map((item, index) => (
    <TouchableOpacity key={index} style={styles.menuItem}>
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuText}>{item.title}</Text>
      </View>
      <TouchableOpacity>
        <MaterialIcons
          name="keyboard-arrow-down"
          style={styles.dropdownIcon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  ));
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
        <TouchableOpacity
          onPress={() => navigation.navigate("HamburgerMenu")}
        >
          <Ionicons name="menu-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Frequently Asked</Text>
      <Text style={styles.title}>
        Questions <Text style={styles.highlight}>(FAQ’s)</Text>
      </Text>

      <View style={styles.menuContainer}>{renderMenuItems()}</View>
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
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "DM",
    marginLeft: 20,
  },
  highlight: {
    color: "rgba(0, 0, 0, 0.56)",
    fontFamily: "DM",
    fontWeight: "500",
  },
  menuContainer: {
    flex: 1,
    marginTop:20,
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
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  menuTextContainer: {
    flex: 1, 
  },
  menuText: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "DM",
    flexWrap: "wrap",
  },
  dropdownIcon: {
    width:20,
    height: 14,
    fontSize: 18,
    lineHeight:14,
    color: "rgba(0, 0, 0, 0.56)",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.56)",
    borderWidth: 1.5,
    borderRadius: 4,
    backgroundColor: "#fff",
    
  },
});
