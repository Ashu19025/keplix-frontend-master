import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Modal,
  Dimensions,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const { width } = Dimensions.get("window");

export default function HomePage({navigation}) {
  const [currentCard, setCurrentCard] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [isModalVisible, setIsModalVisible] = useState(false);


  const earningsCards = [
    { id: 1, text: "Today's Earnings (+15%)", amount: "₹26,649" },
  ];

  const repairCards = [
  {},
  {
    title: "Engine Repair",
    time: "4:20PM | 21th OCT",
    price: "₹4,500",
  },
];

  const ongoingService = {
    id: 55,
    title: "Engine Repair",
    price: "₹4,500",
    time: "4:20PM | 21th OCT",
    remainingTime: "48 min left",
  };

  const upcomingServices = [
  { id: 56, title: "Engine Repair", price: "₹2,500", date: "21th OCT", category: "repair service", time: "6:30PM" },
  { id: 57, title: "Tyre Puncture", price: "₹999", date: "22nd OCT", category: "repair service", time: "10:30AM" },
  { id: 58, title: "Tyre Change", price: "₹599", date: "2nd OCT", category: "repair service", time: "1:30PM" },
];

  const handleNextCard = () => {
  setCurrentCard((prev) => (prev + 1 < repairCards.length ? prev + 1 : prev));
};

const handlePreviousCard = () => {
  setCurrentCard((prev) => (prev > 0 ? prev - 1 : prev));
};

const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Keplix <Text style={styles.highlight}>Business</Text>
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate("HamburgerMenu")}>
        <Ionicons name="menu-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>

<TouchableOpacity onPress={toggleModal} >
      <View style={styles.fullCard} >
  <View style={styles.rowContainer}>
    {currentCard === 0 ? (
      <Image
        source={require("../../../assets/images/carimage.png")}
        style={styles.avatarImage}
      />
    ) : (
      <TouchableOpacity onPress={handlePreviousCard}>
        <View style={styles.iconContainer}>
      <MaterialCommunityIcons 
        name="arrow-bottom-left" 
        size={40} 
        color="#4E46B4" 
        style={styles.iconleft}
      />
    </View>
      </TouchableOpacity>
    )}

    <View style={styles.cardTextContainer}>
      {currentCard === 0 ? (
        <>
          <Text style={styles.cardAmount}>
            {earningsCards[currentCard].amount}
          </Text>
          <Text style={styles.cardText}>
            {earningsCards[currentCard].text}
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.cardTitle}>{repairCards[currentCard].title}</Text>
          <Text style={styles.cardTime}>{repairCards[currentCard].time}</Text>
        </>
      )}
    </View>

    {currentCard === 0 ? (
      <TouchableOpacity style={styles.nextButton} onPress={handleNextCard}>
        <Ionicons name="arrow-forward-circle" size={40} color="#fff" />
      </TouchableOpacity>
    ) : (
      <Text style={styles.cardPrice}>
        {repairCards[currentCard].price}
      </Text>
    )}
  </View>

  <View style={styles.dotsContainer}>
      {[...earningsCards, ...repairCards].map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentCard === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
    </View>
    </TouchableOpacity>

<Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Want to accept booking:</Text>
            <View style={styles.headerRow}>
              <MaterialCommunityIcons name="engine" size={30} />
              <Text style={styles.repairTitle}>Engine Repair</Text>
              <Text style={styles.price}>₹26,649</Text>
            </View>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={styles.detailsHeader}>Details:</Text>
            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>Date:</Text>
              <Text style={styles.detailsValue}>20 | 10 | 2024</Text>
            </View>
            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>Slot:</Text>
              <Text style={styles.detailsValue}>4:30PM</Text>
            </View>
            <View style={styles.detailsRow}>
              <Text style={styles.detailsLabel}>Token No:</Text>
              <Text style={styles.detailsValuetoken}>57</Text>
            </View>

              <TouchableOpacity style={styles.acceptButton} onPress={()=> navigation.navigate("Bookings")}>
                <Text style={styles.buttonText}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModal}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
     
      <Text style={styles.currentServiceHeading}>Current Service</Text>
      <View style={styles.currentServiceSection}>
        <View style={styles.statusCard}>
          <Text style={styles.statusCount}>3</Text>
          <Text style={styles.statusLabel}>Pending</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statusCard}>
          <Text style={styles.statusCount}>4</Text>
          <Text style={styles.statusLabel}>Ongoing</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statusCard}>
          <Text style={styles.statusCount}>15</Text>
          <Text style={styles.statusLabel}>In Queue</Text>
        </View>
      </View>

      <ScrollView 
  style={styles.container} 
  contentContainerStyle={styles.contentContainer}
  showsVerticalScrollIndicator={false}
>
  {/* Ongoing Service Section */}
  <View style={styles.ongoingServiceSection}>
    <Text style={styles.sectionTitle}>Ongoing Service</Text>
    <TouchableOpacity
      style={[styles.ongoingCard, clicked && styles.clickedCard]}
      activeOpacity={0.8}
      onPress={() => setClicked((prev) => !prev)}
    >
      <View style={styles.serviceContent}>
        <View style={styles.serviceIdBox}>
          <Text style={styles.serviceId}>{ongoingService.id}</Text>
        </View>
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceTitle}>{ongoingService.title}</Text>
          <Text style={styles.serviceDetails}>
            {ongoingService.price} | {ongoingService.time}
          </Text>
        </View>
        <View style={styles.remainingTimeContainer}>
          <Text style={styles.remainingTimeNumber}>48</Text>
          <Text style={styles.remainingTimeText}>min left</Text>
        </View>
      </View>

      {clicked && (
        <View style={styles.markDoneContainer}>
          <TouchableOpacity style={styles.markDoneButton}>
            <Text style={styles.markDoneText}>Mark Done</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  </View>

  {/* Upcoming Services Section */}
  <View style={styles.upcomingSection}>
    <View style={styles.header1}>
      <Text style={styles.sectionTitle}>Upcoming Services</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Bookings")}>
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>

    {upcomingServices.map((service) => (
      <View key={service.id} style={styles.upcomingCard}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{service.id}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.serviceTitle}>{service.title}</Text>
          <Text style={styles.serviceDetails}>
            {service.price} | {service.date} | {service.category}
          </Text>
        </View>
        <Text style={styles.serviceTime}>{service.time}</Text>
      </View>
    ))}
  </View>
</ScrollView>


        <View style={styles.footerContainer}>
          <View style={styles.footer}>
            <TouchableOpacity 
              style={styles.footerButton} 
              onPress={() => setActivePage("Home")}
            >
              <Foundation name="home" size={30} color={activePage === "Home" ? "#4E46B4" : "#ddd"} />
              <Text style={[styles.footerText, activePage === "Home" && styles.activeText]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.footerButton} 
              onPress={()=> navigation.navigate("Bookings")}
            >
              <FontAwesome5 name="book" size={30} color={activePage === "Bookings" ? "#4E46B4" : "#ddd"} />
              <Text style={[styles.footerText, activePage === "Bookings" && styles.activeText]}>Bookings</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.footerButton} 
              onPress={()=> navigation.navigate("Profile")}
            >
              <Image
                source={require("../../../assets/images/carimage.png")}
                style={styles.profileImage}
              />
              <Text style={[styles.footerText, activePage === "Profile" && styles.activeText]}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff"
   },
   header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding:20,
    marginBottom: 20,
  },
  title: {
  fontSize: 24,
  fontWeight: '600',
  fontFamily:'DM',
  },
  highlight: {
  color: '#4E46B4',
  fontFamily:'DM',
  fontWeight: '500',
  },
  icon: {
    fontSize: 30, 
    borderColor:'#E2E2E2',
    borderWidth:2,
    borderRadius:50,
  },
  fullCard: {
    backgroundColor: "#4E46B4",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  rowContainer: {
  flexDirection: "row",
  alignItems: "center", 
  justifyContent: "space-between", 
  width: "100%", 
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 10,   
    borderColor: '#fff',
    borderWidth: 2,      
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    backgroundColor: '#FFFFFF', 
    alignItems: 'center', 
    justifyContent: 'center', 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  iconleft: {
    position: 'relative', 
  },
  cardTextContainer: {
  flex: 1,
  justifyContent: "center", 
  alignItems: "center", 
},
  cardAmount: { 
    color: "#fff", 
    fontSize: 24, 
    fontFamily:'DM',
    fontWeight: '600', 
  },
  cardText: { 
    color: "#fff", 
    fontSize: 14,
    fontFamily:'DM',
    fontWeight: '500', 
  },
  cardTitle: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "600",
  fontFamily: "DM",
  textAlign: "center",
},
cardTime: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "500",
  fontFamily: "DM",
  textAlign: "center",
  marginTop: 5,
},
cardPrice: {
  color: "#fff",
  fontSize: 24,
  fontWeight: "600",
  fontFamily: "DM",
},
dotsContainer: {
  flexDirection: "row",
  justifyContent: "center",
  marginTop: 10, 
},
dot: {
  width: 8,
  height: 8,
  borderRadius: 10,
  marginHorizontal: 4, 
  backgroundColor: "#ccc", 
},

activeDot: {
  width: 8, 
  height: 8,
  backgroundColor: "white", 
  shadowColor: "#fff", 
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.9,
  shadowRadius: 6,
  elevation: 5, 
},
inactiveDot: {
  width: 5,
  height: 5,
  backgroundColor: "#aaa", 
  opacity: 0.5, 
  marginTop:2,
},
modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(27, 27, 27, 0.35)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    color: "rgba(0, 0, 0, 0.56)",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 15,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  repairTitle: {
    flex: 1,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "DM",
    marginLeft: 10,
  },
  price: {
    fontFamily: "DM",
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(78, 70, 180, 1)",
  },
  description: {
    color: "rgba(0, 0, 0, 0.56)",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 20,
  },
  detailsHeader: {
    color: "rgba(0, 0, 0, 0.56)",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 10,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailsLabel: {
    color: "rgba(0, 0, 0, 0.56)",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "DM",
  },
  detailsValue: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "DM",
  },
  detailsValuetoken: {
    color: "#4E46B4",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "DM",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  acceptButton: {
    backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
    marginTop:20,
  },
  closeButton: {
    backgroundColor: '#fff',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    borderColor:'#E2E2E2',
    borderWidth:2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
    fontFamily:'DM',
  },
  closeButtonText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontFamily:'DM',
  },
  currentServiceHeading: {
    fontSize: 14,
    textAlign: "center",
    color: '#4E46B4',
    fontFamily:'DM',
    fontWeight:'600',
  },
  currentServiceSection: { 
  flexDirection: "row", 
  justifyContent: "center", 
  gap: 30,                 
  marginHorizontal: 20,   
  marginVertical: 10  
},
divider: {
    width: 1,
    height: "70%", 
    backgroundColor: "#ccc",
    alignSelf: "center",
  },
  statusCard: { 
    alignItems: "center"
   },
  statusCount:{ 
    fontSize: 32,  
    color: '#4E46B4',
    fontFamily:'DM',
  },
  statusLabel: { 
    color: "#0000008F",
    fontFamily:'DM',
    fontWeight:'500' 
  },
  ongoingServiceSection:{
    marginTop: 10,
  },
  sectionTitle: { 
    fontSize: 14,
    color:"#0000008F",
    fontFamily:'DM',
    fontWeight:'500',
    paddingLeft: 10
   },
  ongoingCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "rgba(226, 226, 226, 1)",
    borderRadius: 16,
    padding: 16,
    margin: 20,
    flexDirection: "column",
    position: "relative",
  },
  clickedCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  serviceContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  serviceIdBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#4E46B4",
    justifyContent: "center",
    alignItems: "center",
  },
  serviceId: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "DM",
    fontWeight: "500",
  },
  serviceInfo: {
    flex: 1,
    marginLeft: 12,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(30, 30, 30, 1)",
     fontFamily: "DM",
  },
  serviceDetails: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
    fontFamily: "DM",
  },
  remainingTimeContainer: {
    alignItems: "center",
  },
  remainingTimeNumber: {
    fontSize: 24, 
    fontWeight: "bold",
    color: "#4E46B4",
  },
  remainingTimeText: {
    fontSize: 14, 
    color: "gray",
  },
  markDoneContainer: {
    marginTop: 20,
  },
  markDoneButton: {
    backgroundColor: "rgba(64, 166, 159, 1)",
    paddingVertical: 12,
    borderRadius: 22,
    alignItems: "center",
  },
  markDoneText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "DM",
  },
 upcomingSection: {
  flex: 1,  
  padding: 16,
  backgroundColor: "#fff",
  paddingBottom: 80,
},
header1: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
},
seeAll: {
  fontSize: 14,
  color: "#4E46B4",
  fontWeight: "600",
  fontFamily: "DM",
},
contentContainer: {
  padding: 8,
  paddingBottom: 24,
},
upcomingCard: {
  flexDirection: "row",
  alignItems: "center",
  padding: 12,
  backgroundColor: "#fff",
  borderRadius: 8,
  borderColor:'#E2E2E2',
  borderWidth:2,
  marginBottom: 12,
},
circle: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "#5B67CA",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 16,
},
circleText: {
  color: "#fff",
  fontWeight: "600",
  fontSize: 16,
  fontFamily: "DM",
},
cardContent: {
  flex: 1,
},
serviceTitle: {
  fontSize: 16,
  fontWeight: "600",
  color: "rgba(30, 30, 30, 1)",
  fontFamily: "DM",
  marginBottom: 4,
},
serviceDetails: {
  fontSize: 12,
  color: "rgba(138, 138, 138, 1)",
  fontFamily: "DM",
},
serviceTime: {
  fontSize: 16,
  fontWeight: "bold",
  color: "rgba(78, 70, 180, 1)",
  fontFamily: "DM",
},
footerContainer: {
  position: "absolute",
  bottom: 0,
  width: "100%",
  zIndex: 1,
},
footer: {
  flexDirection: "row",
  justifyContent: "space-around",
  borderTopWidth: 1,
  borderColor: "#ddd",
  paddingVertical: 20,
  backgroundColor: "#fff",
  position: "relative",
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
  fontFamily: 'DM',
  fontWeight: '500',
  fontSize: 14,
},
activeText: {
  color: '#4E46B4',
  fontFamily: 'DM',
  fontWeight: '500',
  fontSize: 14,
},
profileImage: {
  width: 30,
  height: 30,
  borderRadius: 15,
},
  
});
