import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Modal,
  TextInput
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function CustomerFeedback({ navigation, route }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { cardDetails } = route.params;

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

    const customerDetails = {
    name: cardDetails.name,
    phone: "+919123456789",
    email: "abcd@example.com",
    rating: parseFloat(cardDetails.rating), 
    image: require("../../../assets/images/1.jpg"), 
};

 const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); 
  const hasHalfStar = rating % 1 !== 0; 
  const maxStars = 5;

  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.ratingText}>Ratings:<Text style={styles.rating}>            {rating} </Text></Text>
      <View style={styles.stars}>
        {Array.from({ length: maxStars }).map((_, index) => {
          if (index < fullStars) {
            return (
              <FontAwesome
                key={index}
                name="star"
                size={20}
                color="#4E46B4"
                style={styles.starIcon}
              />
            );
          } else if (index === fullStars && hasHalfStar) {
            return (
              <FontAwesome
                key={index}
                name="star-half-full"
                size={20}
                color="#4E46B4"
                style={styles.starIcon}
              />
            );
          } else {
            return (
              <FontAwesome
                key={index}
                name="star-o"
                size={20}
                color="#4E46B4"
                style={styles.starIcon}
              />
            );
          }
        })}
      </View>
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
        <TouchableOpacity onPress={()=> navigation.navigate("HamburgerMenu")}>
        <Ionicons name="menu-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Customer Feedback</Text>

      <View style={styles.ongoingCard}>
        <View style={styles.serviceContent}>
          <View style={styles.leftContent}>
            <MaterialCommunityIcons name="engine" style={styles.bookingIcon} />
            <View style={styles.textContent}>
              <Text style={styles.serviceTitle}>Engine Repair</Text>
              <Text style={styles.serviceDetails}>
                {cardDetails.date} |{" "}
                <Text style={{ color: "#000" }}>{cardDetails.name}</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>

       <View style={styles.customerDetailsCard}>
  <Text style={styles.Details}>Customer Details: </Text>
  <View style={styles.rowContainer}>
    <Image source={customerDetails.image} style={styles.profileImage} />
    <View style={styles.textContainer}>
      <Text style={styles.customerName}>{customerDetails.name}</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.customerEmail}>{customerDetails.phone} |</Text>
        <Text style={styles.customerEmail}> {customerDetails.email}</Text>
      </View>
    </View>
  </View>
  <View style={styles.divider} />
  <Text style={styles.Details}>Review Details: </Text>
  <StarRating rating={customerDetails.rating} />
  <Text style={styles.customerRating}>
    Comment:         <Text  style={styles.customerText} >Lorem ipsum dolor sit</Text>
  </Text>
  <TouchableOpacity
          style={styles.button}
          onPress={toggleModal}
        >
          <Text style={styles.buttonText}>Reply To Feedback</Text>
        </TouchableOpacity>
</View>

           <TouchableOpacity
            onPress={() =>
              navigation.navigate("CustomerChat", { customerDetails })
            }
          >
            <Text style={styles.containerlink}>
              Chat{" "}
              <Text style={styles.chat}>with {customerDetails.name}</Text>
            </Text>
          </TouchableOpacity>

    <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={toggleModal}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Reply to Nithish Kumar Review:</Text>

                <TextInput
        style={styles.inputField}  
        placeholder="Type here...."
        placeholderTextColor="#0000008F"  
      />
                
                   <View style={styles.footer}>
                  <TouchableOpacity style={styles.acceptButton} onPress={()=> navigation.navigate("CustomerReviews")}>
                    <Text style={styles.buttonText}>Publish</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={toggleModal}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
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
    marginBottom: 20,
    fontFamily: 'DM',
    marginLeft:20
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
customerDetailsCard: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "rgba(226, 226, 226, 1)",
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    margin: 12,
    alignItems: "left",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  customerText: {
    fontSize: 16,
    color: "#000",
    fontFamily: "DM",
  },
  textContainer: {
    marginLeft: 16,
    flex: 1, 
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    resizeMode: "cover",
  },
  customerName: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "DM",
  },
  contactInfo: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center", 
  },
  customerEmail: {
    fontSize: 14,
    color: "gray",
    fontFamily: "DM",
  },
  customerRating: {
    fontSize: 16,
    color: "#0000008F",
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
    fontFamily:'DM',
  },
  profileImage: {
    width: 50, 
    height: 50, 
    borderRadius: 10,   
    resizeMode: "cover", 
  },
  Details: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 30,
    color: "#0000008F",
    fontFamily: "DM",
  },
  divider: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginVertical: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom:10
  },
  ratingText: {
    fontSize: 16,
    color: "#0000008F",
  },
  rating:{
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "DM",
  },
  stars: {
    flexDirection: "row",
    
  },
  starIcon: {
    marginHorizontal: 4,
  },
  chat: {
    color: '#666',
    fontWeight: 500,
    fontFamily:'DM',
  },
  containerlink: {
    borderRadius:70,
    textAlign: 'center',
    color: '#4E46B4',
    fontSize: 14,
    borderColor:'#E2E2E2',
    borderWidth:2,
    padding:15,
    fontFamily:'DM',
    width:'95%',
    marginHorizontal: 10,
    marginTop:50
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
    height:"50%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 15,
  },
  inputField: {
    fontSize: 20,
  },
  footer: {
    position: "absolute", 
    bottom: 0,            
    width: "100%",         
    paddingVertical: 20,
    marginHorizontal:20             
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
});
