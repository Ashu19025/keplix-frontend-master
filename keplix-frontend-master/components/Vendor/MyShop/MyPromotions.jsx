import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function MyPromotions({ navigation }) {
  const cardData = [
    {
      id: '1',
      cardNumber: 'xxxx xxxx xxxx 1234',
      bankName: 'BOB Bank',
      expDate: '08/26',
    },
    {
      id: '2',
      cardNumber: 'xxxx xxxx xxxx 1234',
      bankName: 'HDFC Bank',
      expDate: '08/26',
    },
  ];

  const cashbackData = [
    { id: '1', title: '20% OFF', description: 'Lorem ipsum dolor sit amet' },
    { id: '2', title: 'Free Delivery', description: 'Lorem ipsum dolor sit amet' },
  ];

  const bundleData = [
    { id: '1', title: '20% OFF', description: 'Lorem ipsum dolor sit amet' },
    { id: '2', title: 'Free Delivery', description: 'Lorem ipsum dolor sit amet' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Business</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('HamburgerMenu')}>
          <Ionicons name="menu-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>My Promotions</Text>
      <Text style={styles.subtitle}>Can monitor your each promotion</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Card Offers Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Card Offers:</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={cardData}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ImageBackground
              source={
                item.id === '2'
                  ? require('../../../assets/images/bluegradient.jpeg')
                  : require('../../../assets/images/gradient.jpeg')
              }
              style={styles.bankCard}
              imageStyle={{ borderRadius: 16 }}
            >
              <Text style={styles.cardNumber}>{item.cardNumber}</Text>
              <View style={styles.bankDetails}>
                <Text style={styles.bankName}>{item.bankName}</Text>
                <View style={styles.expDateContainer}>
                  <Text style={styles.expDateLabel}>Exp. date</Text>
                  <Text style={styles.expDate}>{item.expDate}</Text>
                </View>
              </View>
            </ImageBackground>
          )}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Cashbacks & Discounts%:</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.offersContainer}>
          {cashbackData.map((item) => (
            <View key={item.id} style={styles.offerCard}>
              <Text style={styles.offerTitle}>{item.title}</Text>
              <Text style={styles.offerDescription}>{item.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Bundle Offers:</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.offersContainer}>
          {bundleData.map((item) => (
            <View key={item.id} style={styles.offerCard}>
              <Text style={styles.bundleofferTitle}>{item.title}</Text>
              <Text style={styles.offerDescription}>{item.description}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('NewPromotion')
        }
      >
        <Entypo name="squared-plus" size={20} color="#fff" />
        <Text style={styles.addButtonText}>Create Promotion</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    fontSize: 30,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 50,
  },
  text: {
    fontSize: 24,
    marginRight: 30,
    color: '#0000008F',
    fontFamily: 'DM',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
    fontFamily: 'DM',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    fontFamily: 'DM',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#0000008F',
    fontFamily: 'DM',
    fontWeight: '500',
  },
  seeAll: {
    fontSize: 16,
    color: '#4E46B4',
    fontWeight: '600',
    fontFamily: 'DM',
  },
  bankCard: {
    width: 220,
    marginRight: 10,
    borderRadius: 16,
    padding: 15,
    height: 120,
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
    fontFamily: 'DM',
  },
  bankDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bankName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  expDateContainer: {
    alignItems: 'flex-start',
  },
  expDateLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'DM',
  },
  expDate: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  offersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  offerCard: {
    width: '48%',
    height:170,
    padding: 15,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 10,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    borderRadius: 10,
    backgroundColor:'#4E46B4',
    marginBottom: 5,
    paddingHorizontal:10,
    paddingVertical:8,
    textAlign:'center'
  },
  offerDescription: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'DM',
  },
  bundleofferTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    borderRadius: 10,
    backgroundColor:'#E2E2E2',
    marginBottom: 5,
    paddingHorizontal:10,
    paddingVertical:8,
    textAlign:'center'
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#40A69F',
    borderRadius: 70,
    padding: 15,
    justifyContent: 'center',
    marginBottom: 30,
    marginHorizontal: 40,
    width:'80%',
  },
  addButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'DM',
  },
});
