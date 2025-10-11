import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ImageBackground
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

// Mock database for refunds
const refundsDB = {
  data: [
    {
      id: '56',
      serviceType: 'Engine Repair',
      customerName: 'Nithish Kumar',
      date: '12-10-2024',
      amount: 4500,
      status: 'Pending',
      type: 'canceled'
    },
    {
      id: '55',
      serviceType: 'Engine Repair',
      customerName: 'Nithish Kumar',
      date: '12-10-2024',
      amount: 4500,
      status: 'In Process',
      type: 'canceled'
    },
    {
      id: '54',
      serviceType: 'Engine Repair',
      customerName: 'Nithish Kumar',
      date: '12-10-2024',
      amount: 4500,
      status: 'Refunded',
      type: 'canceled'
    }
  ]
};

export default function PayoutManagement({ navigation }) {
  const [expandedId, setExpandedId] = useState(null);
  const [activeTab, setActiveTab] = useState('Canceled');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const menuData = [
    {
      id: '1',
      icon: "link-sharp",
      title: 'Link Keplix to Bank Account',
      subtitle: 'Bank of Baroda xxxx 0123',
      type: 'bank',
      details: {
        cardNumber: 'xxxx xxxx xxxx 1234',
        bankName: 'BOB Bank',
        expDate: '08/26',
      }
    },
    {
      id: '2',
      icon: "arrow-undo-circle",
      title: 'Manage Refunds',
      subtitle: 'Canceled bookings / dissatisfaction',
      type: 'refund',
      details: {
        refunds: refundsDB.data
      }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return '#6B4EFF';
      case 'In Process':
        return '#000000';
      case 'Refunded':
        return '#00BA88';
      default:
        return '#000000';
    }
  };

  const renderRefundItem = (refund) => {
    return (
      <View style={styles.refundItem} key={refund.id}>
        <View style={styles.refundHeader}>
          <View style={styles.serviceInfo}>
            <MaterialIcons name="videocam" size={20} color="#000" />
            <Text style={styles.serviceName}>
              {refund.serviceType} ({refund.id})
            </Text>
          </View>
          <Text style={[styles.amount]}>₹{refund.amount}</Text>
        </View>
        <View style={styles.refundDetails}>
          <Text style={styles.customerName}>{refund.customerName} • {refund.date}</Text>
          <Text style={[styles.status, { color: getStatusColor(refund.status) }]}>
            {refund.status}
          </Text>
        </View>
        <View style={styles.itemDivider} />
      </View>
    );
  };

  const renderExpandedContent = (item) => {
    if (item.type === 'bank') {
      return (
        <>
          <View style={styles.cardRow}>
            <View style={styles.bankcardContainer}>
              <ImageBackground
                source={require('../../../assets/images/gradient.jpeg')}
                style={styles.bankCard}
                imageStyle={{ borderRadius: 16 }}
              >
                <Text style={styles.cardNumber}>{item.details.cardNumber}</Text>
                <View style={styles.bankDetails}>
                  <Text style={styles.bankName}>{item.details.bankName}</Text>
                  <Text style={styles.expDate}>Exp. date {item.details.expDate}</Text>
                </View>
              </ImageBackground>
            </View>
            <TouchableOpacity style={styles.addBankButton}>
              <Entypo name="squared-plus" size={24} color="#000" marginTop="10" />
              <Text style={styles.addText}>Add bank</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.manageText}>Manage Bank Account</Text>
          </TouchableOpacity>
        </>
      );
    } else if (item.type === 'refund') {
      return (
        <View style={styles.refundContainer}>
          <View style={styles.tabContainer}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Canceled' && styles.activeTab]}
              onPress={() => setActiveTab('Canceled')}
            >
              <Text style={[styles.tabText, activeTab === 'Canceled' && styles.activeTabText]}>
                Canceled
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Dissatisfaction' && styles.activeTab]}
              onPress={() => setActiveTab('Dissatisfaction')}
            >
              <Text style={[styles.tabText, activeTab === 'Dissatisfaction' && styles.activeTabText]}>
                Dissatisfaction
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.refundsList}>
            {item.details.refunds.map(refund => renderRefundItem(refund))}
          </View>
          
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all Refunds</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const renderMenuItem = ({ item }) => {
    const isExpanded = expandedId === item.id;

    return (
      <View style={[styles.ItemContainer, { marginBottom: 15 }]}>
        <View style={styles.menuItemContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => toggleExpand(item.id)}
          >
            <Ionicons name={item.icon} size={30} color="#000" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>{item.title}</Text>
              <Text style={styles.menusubText}>{item.subtitle}</Text>
            </View>
            <MaterialIcons
              name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              style={styles.dropdownIcon}
            />
          </TouchableOpacity>
          {isExpanded && (
            <View style={styles.cardContainer}>
              <View style={styles.divider} />
              {renderExpandedContent(item)}
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Business</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("HamburgerMenu")}>
          <Ionicons name="menu-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Payout Management</Text>

      <FlatList
        data={menuData}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
      />
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
    marginBottom: 20,
    fontFamily: "DM",
    marginLeft: 20,
  },
  ItemContainer: {
    borderColor: "#E2E2E2",
    borderWidth: 2,
    width: "92%",
    borderRadius: 16,
    marginLeft: 15,
  },
  menuItemContainer: {
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    width: "92%",
    marginLeft: 15,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 16,
    backgroundColor: "#fff",
    gap: 10,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1E1E1E",
    fontFamily: "DM",
  },
  addText: {
    fontSize: 14,
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
  dropdownIcon: {
    width: 30,
    height: 20,
    fontSize: 18,
    lineHeight: 18,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.56)",
    borderColor: "rgba(0, 0, 0, 0.56)",
    borderWidth: 1.5,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  cardContainer: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  bankcardContainer: {
    width: '100%',
    alignItems: 'left',
  },
  bankCard: {
    width: '90%',
    borderRadius: 16,
    padding: 15,
    height: 120,
    justifyContent: 'space-between',
  },
  cardNumber: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    fontFamily: "DM",
  },
  bankDetails: {
    flexDirection: "row",
    gap: 30,
  },
  bankName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM",
  },
  expDate: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM",
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 10,
  },
  addBankButton: {
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 120,
    marginLeft: -90,
  },
  manageText: {
    color: "#4E46B4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "DM",
    marginBottom: 20,
  },
  divider: {
    height: 2,
    backgroundColor: "#E2E2E2",
    marginBottom: 20,
    marginHorizontal: 10,
    width: '95%'
  },
  refundContainer: {
    padding: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    marginRight: 20,
    paddingBottom: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'DM',
  },
  activeTabText: {
    color: '#000',
    fontWeight: '500',
  },
  refundsList: {
    marginBottom: 15,
  },
  refundItem: {
    marginBottom: 15,
  },
  refundHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  serviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'DM',
  },
  amount: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'DM',
  },
  refundDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  customerName: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.56)',
    fontFamily: 'DM',
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  itemDivider: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginTop: 15,
  },
  viewAllText: {
    color: '#6B4EFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
    marginTop: 10,
  },
});