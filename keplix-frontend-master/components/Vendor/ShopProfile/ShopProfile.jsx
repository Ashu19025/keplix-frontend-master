import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Switch Account */}
        <Text style={styles.switchAccount}>⇅ Switch Account</Text>

        {/* Shop Card */}
        <View style={styles.shopCard}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/80x80.png?text=Image',
            }}
            style={styles.shopImage}
          />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.shopName}>Dwarka Mor Service</Text>
            <Text style={styles.rating}>4.2 ★ Ratings</Text>
            <Text style={styles.shopDetails}>
              10AM - 7:30PM | Dwarka Mor-110078
            </Text>
          </View>
          <Feather name="edit-3" size={18} color="#fff" />
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {[
            {
              icon: 'store',
              title: 'About Shop',
              subtitle: 'Shop profile, Reviews, Payment',
              route: "EditShopProfile",
            },
            {
              icon: 'bookmark',
              title: 'My Bookings',
              subtitle: 'History, Reschedule, Mark as complete',
              route: "MyBookings",
            },
            {
              icon: 'file-document',
              title: 'My Documents',
              subtitle: 'Manage business-related documents',
              route: "MyDocuments",
            },
            {
              icon: 'help-circle',
              title: 'Support & Help',
              subtitle: 'Vendor support, FAQ’s, Community Forum',
              route:"SupportandHelp",
            },
          ].map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.menuItem} onPress={() => navigation.navigate(item.route)}>
              <Icon name={item.icon} size={22} color="#000" />
              <View style={{ marginLeft: 12, flex: 1 }}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#000" />
            </TouchableOpacity>
          ))}

          {/* Log Out */}
          <TouchableOpacity style={styles.logoutItem}>
            <Feather name="log-out" size={25} color="red" />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
          { name: 'home', label: 'Home' },
          { name: 'tool', label: 'Services' },
          { name: 'bookmark', label: 'Bookings' },
          { name: 'user', label: 'Profile', active: true },
        ].map((tab, idx) => (
          <TouchableOpacity key={idx} style={styles.navItem}>
            <Feather
              name={tab.name}
              size={22}
              color={tab.active ? '#4B3CC0' : '#000'}
            />
            <Text
              style={[
                styles.navText,
                tab.active && { color: '#4B3CC0', fontWeight: '600' },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
       <View style={styles.bottomline}></View>

    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  switchAccount: {
    color: '#4B3CC0',
    fontSize: 14,
    fontWeight: '500',
    alignSelf: 'flex-end',
    margin: 16,
    marginTop: 45
  },
  shopCard: {
    backgroundColor: '#4B3CC0',
    borderRadius: 12,
    marginHorizontal: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  shopImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  shopName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  rating: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
  shopDetails: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
  menuContainer: {
    marginTop: 20,
    marginHorizontal: 16,
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginBottom: 12,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#eee',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#555',
  },
  logoutItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  logoutText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'red',
    marginLeft: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#000',
    marginTop: 2,
  },
  bottomline: {
    maxWidth: '40%',
    borderRadius: 3,
    height: 5,
    backgroundColor: '#000',
    marginHorizontal: 16,
    marginBottom: 6,
    marginLeft: '30%',
  },

});