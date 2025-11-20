import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

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
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row justify-between items-center px-5 py-4 mb-5">
        <Text className="text-2xl font-semibold">
          Keplix <Text className="text-purple-600">Business</Text>
        </Text>
        <TouchableOpacity onPress={()=> navigation?.navigate("HamburgerMenu")} className="border-2 border-gray-200 rounded-full p-1">
          <Ionicons name="menu-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>

<TouchableOpacity onPress={toggleModal} activeOpacity={0.9}>
      <View className="bg-purple-600 p-5 rounded-2xl items-center mx-5 mb-5 shadow-lg">
        <View className="flex-row items-center justify-between w-full">
          {currentCard === 0 ? (
            <Image
              source={require("../../../assets/images/carimage.png")}
              className="w-16 h-16 rounded-xl border-2 border-white"
            />
          ) : (
            <TouchableOpacity onPress={handlePreviousCard}>
              <View className="w-16 h-16 rounded-full bg-white items-center justify-center shadow-md">
                <MaterialCommunityIcons 
                  name="arrow-bottom-left" 
                  size={36} 
                  color="#4E46B4" 
                />
              </View>
            </TouchableOpacity>
          )}

          <View className="flex-1 justify-center items-center">
            {currentCard === 0 ? (
              <>
                <Text className="text-white text-3xl font-bold">
                  {earningsCards[currentCard].amount}
                </Text>
                <Text className="text-white text-sm font-medium mt-1">
                  {earningsCards[currentCard].text}
                </Text>
              </>
            ) : (
              <>
                <Text className="text-white text-lg font-semibold text-center">
                  {repairCards[currentCard].title}
                </Text>
                <Text className="text-white text-sm font-medium text-center mt-1">
                  {repairCards[currentCard].time}
                </Text>
              </>
            )}
          </View>

          {currentCard === 0 ? (
            <TouchableOpacity onPress={handleNextCard}>
              <Ionicons name="arrow-forward-circle" size={40} color="#fff" />
            </TouchableOpacity>
          ) : (
            <Text className="text-white text-2xl font-bold">
              {repairCards[currentCard].price}
            </Text>
          )}
        </View>

        <View className="flex-row justify-center mt-3">
          {[...earningsCards, ...repairCards].map((_, index) => (
            <View
              key={index}
              className={`rounded-full mx-1 ${
                currentCard === index 
                  ? 'w-2 h-2 bg-white shadow-white' 
                  : 'w-1.5 h-1.5 bg-gray-300 opacity-50 mt-0.5'
              }`}
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
        <View className="flex-1 bg-black/35 justify-center items-center">
          <View className="bg-white rounded-3xl p-5 w-11/12 shadow-lg">
            <Text className="text-black/60 text-base font-medium mb-4">
              Want to accept booking:
            </Text>
            <View className="flex-row items-center justify-between mb-4">
              <MaterialCommunityIcons name="engine" size={30} color="#4E46B4" />
              <Text className="flex-1 text-black text-xl font-semibold ml-3">
                Engine Repair
              </Text>
              <Text className="text-purple-600 text-xl font-bold">
                ₹26,649
              </Text>
            </View>
            <Text className="text-black/60 text-sm font-medium mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text className="text-black/60 text-sm font-medium mb-3">
              Details:
            </Text>
            <View className="flex-row justify-between mb-3">
              <Text className="text-black/60 text-lg font-medium">Date:</Text>
              <Text className="text-black text-lg font-semibold">20 | 10 | 2024</Text>
            </View>
            <View className="flex-row justify-between mb-3">
              <Text className="text-black/60 text-lg font-medium">Slot:</Text>
              <Text className="text-black text-lg font-semibold">4:30PM</Text>
            </View>
            <View className="flex-row justify-between mb-5">
              <Text className="text-black/60 text-lg font-medium">Token No:</Text>
              <Text className="text-purple-600 text-lg font-semibold">57</Text>
            </View>

            <TouchableOpacity 
              className="bg-purple-600 rounded-full py-4 items-center mb-3 active:bg-purple-700"
              onPress={()=> navigation?.navigate("Bookings")}
            >
              <Text className="text-white text-base font-medium">Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-white border-2 border-gray-200 rounded-full py-4 items-center"
              onPress={toggleModal}
            >
              <Text className="text-black text-base font-medium">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
     
      <Text className="text-sm text-center text-purple-600 font-semibold mb-3">
        Current Service
      </Text>
      <View className="flex-row justify-center items-center mx-5 my-3 space-x-8">
        <View className="items-center">
          <Text className="text-4xl text-purple-600 font-bold">3</Text>
          <Text className="text-black/60 font-medium">Pending</Text>
        </View>
        <View className="w-px h-12 bg-gray-300" />
        <View className="items-center">
          <Text className="text-4xl text-purple-600 font-bold">4</Text>
          <Text className="text-black/60 font-medium">Ongoing</Text>
        </View>
        <View className="w-px h-12 bg-gray-300" />
        <View className="items-center">
          <Text className="text-4xl text-purple-600 font-bold">15</Text>
          <Text className="text-black/60 font-medium">In Queue</Text>
        </View>
      </View>

      <ScrollView 
        className="flex-1"
        contentContainerClassName="pb-6"
        showsVerticalScrollIndicator={false}
      >
        {/* Ongoing Service Section */}
        <View className="mt-3">
          <Text className="text-sm text-black/60 font-medium px-5 mb-3">
            Ongoing Service
          </Text>
          <TouchableOpacity
            className={`bg-white border-2 border-gray-200 rounded-2xl p-4 mx-5 ${clicked ? 'shadow-md' : ''}`}
            activeOpacity={0.8}
            onPress={() => setClicked((prev) => !prev)}
          >
            <View className="flex-row items-center justify-between">
              <View className="w-8 h-8 rounded-full bg-purple-600 justify-center items-center">
                <Text className="text-white text-sm font-medium">
                  {ongoingService.id}
                </Text>
              </View>
              <View className="flex-1 mx-3">
                <Text className="text-base font-semibold text-gray-900">
                  {ongoingService.title}
                </Text>
                <Text className="text-sm text-gray-500 mt-1">
                  {ongoingService.price} | {ongoingService.time}
                </Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-purple-600">48</Text>
                <Text className="text-sm text-gray-500">min left</Text>
              </View>
            </View>

            {clicked && (
              <View className="mt-5">
                <TouchableOpacity className="bg-teal-500 py-3 rounded-full items-center active:bg-teal-600">
                  <Text className="text-white text-base font-medium">
                    Mark Done
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Upcoming Services Section */}
        <View className="flex-1 p-4 bg-white pb-24">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-sm text-black/60 font-medium">
              Upcoming Services
            </Text>
            <TouchableOpacity onPress={() => navigation?.navigate("Bookings")}>
              <Text className="text-sm text-purple-600 font-semibold">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          {upcomingServices.map((service) => (
            <View 
              key={service.id} 
              className="flex-row items-center p-3 bg-white rounded-lg border-2 border-gray-200 mb-3"
            >
              <View className="w-10 h-10 rounded-full bg-purple-600 justify-center items-center mr-4">
                <Text className="text-white font-semibold text-base">
                  {service.id}
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-900 mb-1">
                  {service.title}
                </Text>
                <Text className="text-xs text-gray-500">
                  {service.price} | {service.date} | {service.category}
                </Text>
              </View>
              <Text className="text-base font-bold text-purple-600">
                {service.time}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>


      <View className="absolute bottom-0 w-full z-10">
        <View className="flex-row justify-around border-t border-gray-200 py-5 bg-white rounded-t-3xl shadow-lg">
          <TouchableOpacity 
            className="items-center" 
            onPress={() => setActivePage("Home")}
          >
            <Foundation 
              name="home" 
              size={30} 
              color={activePage === "Home" ? "#4E46B4" : "#ddd"} 
            />
            <Text className={`text-sm font-medium mt-1 ${
              activePage === "Home" ? "text-purple-600" : "text-gray-300"
            }`}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="items-center" 
            onPress={()=> {
              setActivePage("Bookings");
              navigation?.navigate("Bookings");
            }}
          >
            <FontAwesome5 
              name="book" 
              size={30} 
              color={activePage === "Bookings" ? "#4E46B4" : "#ddd"} 
            />
            <Text className={`text-sm font-medium mt-1 ${
              activePage === "Bookings" ? "text-purple-600" : "text-gray-300"
            }`}>
              Bookings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="items-center" 
            onPress={()=> {
              setActivePage("Profile");
              navigation?.navigate("Profile");
            }}
          >
            <Image
              source={require("../../../assets/images/carimage.png")}
              className="w-8 h-8 rounded-full"
            />
            <Text className={`text-sm font-medium mt-1 ${
              activePage === "Profile" ? "text-purple-600" : "text-gray-300"
            }`}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
}
