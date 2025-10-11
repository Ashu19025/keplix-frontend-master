import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Break({ navigation }) {
  const [breaks, setBreaks] = useState([]);
  const [selectedType, setSelectedType] = useState("Breaks");
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const predefinedFromTimes = ["11:00AM", "2:00PM", "4:00PM", "6:00PM"];
  const predefinedToTimes = ["11:30AM", "2:30PM", "4:30PM", "6:30PM"];
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const weekends = ["Saturday", "Sunday"];

  const handleAddBreak = () => {
    if (selectedType === "Breaks") {
      // For breaks, require both from and to times
      if (selectedFrom && selectedTo) {
        navigation.navigate('ShopSetup3', { 
          newEntry: { type: selectedType, from: selectedFrom, to: selectedTo }
        });
      } else {
        alert("Please select both 'From' and 'To' times.");
      }
    } else {
      // For holidays, only require the selected day
      if (selectedFrom) {
        navigation.navigate('ShopSetup3', { 
          newEntry: { type: selectedType, day: selectedFrom }
        });
      } else {
        alert("Please select a day for the holiday.");
      }
    }
  };

  const handleRemoveBreak = (index) => {
    const updatedBreaks = [...breaks];
    updatedBreaks.splice(index, 1);
    setBreaks(updatedBreaks);
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleSelectType = (type) => {
    setSelectedType(type);
    setSelectedFrom("");
    setSelectedTo("");
    setShowDropdown(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Want to add Breaks / Holidays?</Text>

      <View style={styles.dropdownContainer}>
        <TouchableOpacity style={styles.dropdownInput} onPress={toggleDropdown}>
          <Text style={styles.dropdownText}>{selectedType}</Text>
          <Ionicons name="chevron-down-outline" style={styles.dropdownIcon} />
        </TouchableOpacity>
        {showDropdown && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity
              style={styles.dropdownOption}
              onPress={() => handleSelectType("Breaks")}
            >
              <Text style={styles.dropdownOptionText}>Breaks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownOption}
              onPress={() => handleSelectType("Holidays")}
            >
              <Text style={styles.dropdownOptionText}>Holidays</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {selectedType === "Breaks" ? (
        <>
          <View style={styles.timeSelectionContainer}>
            <Text style={styles.label}>From:</Text>
            <View style={styles.timeGrid}>
              {predefinedFromTimes.map((time) => (
                <TouchableOpacity
                  key={time}
                  style={[styles.timeButton, selectedFrom === time && styles.selectedTimeButton]}
                  onPress={() => setSelectedFrom(time)}
                >
                  <Text style={[
                    styles.timeText,
                    selectedFrom === time && styles.selectedTimeText
                  ]}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.timeSelectionContainer}>
            <Text style={styles.label}>To:</Text>
            <View style={styles.timeGrid}>
              {predefinedToTimes.map((time) => (
                <TouchableOpacity
                  key={time}
                  style={[styles.timeButton, selectedTo === time && styles.selectedTimeButton]}
                  onPress={() => setSelectedTo(time)}
                >
                  <Text style={[
                    styles.timeText,
                    selectedTo === time && styles.selectedTimeText
                  ]}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={styles.timeSelectionContainer}>
            <Text style={styles.label}>Weekdays:</Text>
            <View style={styles.timeGrid}>
              {weekdays.map((day) => (
                <TouchableOpacity
                  key={day}
                  style={[styles.timeButton, selectedFrom === day && styles.selectedTimeButton]}
                  onPress={() => setSelectedFrom(day)}
                >
                  <Text style={[
                    styles.timeText,
                    selectedFrom === day && styles.selectedTimeText
                  ]}>{day}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.timeSelectionContainer}>
            <Text style={styles.label}>Weekends:</Text>
            <View style={styles.timeGrid}>
              {weekends.map((day) => (
                <TouchableOpacity
                  key={day}
                  style={[styles.timeButton, selectedFrom === day && styles.selectedTimeButton]}
                  onPress={() => setSelectedFrom(day)}
                >
                  <Text style={[
                    styles.timeText,
                    selectedFrom === day && styles.selectedTimeText
                  ]}>{day}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </>
      )}

      <TouchableOpacity style={styles.addButton} onPress={handleAddBreak}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>

      <FlatList
        data={breaks}
        keyExtractor={(item, index) => `${item.from}-${item.to}-${index}`}
        renderItem={({ item, index }) => (
          <View style={styles.breakItem}>
            <Text style={styles.breakText}>
              {item.type === "Breaks" 
                ? `${item.type}: ${item.from} - ${item.to}`
                : `${item.type}: ${item.day}`
              }
            </Text>
            <TouchableOpacity onPress={() => handleRemoveBreak(index)}>
              <Ionicons name="close-outline" style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backContainer: {
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
  title: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'DM',
    color: "#0000008F",
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    fontFamily: 'DM',
    color: "#0000008F",
  },
  dropdownContainer: {
    width: '100%', // Full width container
    marginBottom: 20, // Space between dropdown and other elements
    position: 'relative', // Ensures child elements like dropdownMenu are positioned correctly
  },
  dropdownInput: {
    flexDirection: 'row', // Align text and icon in a row
    alignItems: 'center', // Center content vertically
    justifyContent: 'space-between', // Space out text and icon
    borderWidth: 2, // Matches timeInput style
    borderColor: '#E2E2E2', // Matches timeInput style
    borderRadius: 20, // Matches timeInput style
    paddingHorizontal: 15, // Padding on left and right
    paddingVertical: 10, // Padding for height consistency
    fontSize: 16, // Matches font size of other inputs
    fontFamily: 'DM', // Matches font family of other inputs
    backgroundColor: '#fff', // Background color for clarity
  },
  dropdownText: {
    fontSize: 16, // Matches other input text size
    fontFamily: 'DM', // Matches font family
    color: '#000', // Text color
    flex: 1, // Ensures text takes available space
  },
  dropdownIcon: {
  width: 30,
  height: 20, 
  fontSize: 20, 
  color: "rgba(0, 0, 0, 0.56)",
  textAlign: "center", 
  lineHeight: 18,
  borderColor: "rgba(0, 0, 0, 0.56)",
  borderWidth: 1.5,
  borderRadius: 4,
  backgroundColor: "#fff",
},
  dropdownMenu: {
    position: 'absolute', // Position menu below input
    top: '100%', // Place menu just below the input
    left: 0, // Align to the left edge of the container
    right: 0, // Align to the right edge of the container
    backgroundColor: '#fff', // Menu background color
    borderWidth: 1, // Add border for visibility
    borderColor: '#E2E2E2', // Matches other borders
    borderRadius: 10, // Rounded corners for menu
    overflow: 'hidden', // Ensure menu items don't overflow
    zIndex: 100, // Bring above other elements
  },
  dropdownOption: {
    padding: 15, // Add padding to options
    borderBottomWidth: 1, // Add separator between options
    borderBottomColor: '#E2E2E2', // Separator color
  },
  dropdownOptionText: {
    fontSize: 16, // Match input text size
    fontFamily: 'DM', // Match input font family
    color: '#000', // Option text color
  },

  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative', // Matches inputWrapper style
  },
  timeButton: {
  borderWidth: 2,
  borderColor: '#E2E2E2',
  borderRadius: 70,
  paddingVertical: 10, // Adjust padding for better height
  paddingHorizontal: 15, // Dynamic horizontal padding
  textAlign: 'center',
  fontSize: 16,
  fontFamily: 'DM',
  color: '#000',
  margin: 5, // Maintain spacing
  alignItems: 'center',
  backgroundColor: '#fff',
},
  selectedTimeButton: {
    backgroundColor: '#4E46B4', // Retains original selected style
    borderColor: '#4E46B4', // Matches selected border color
  },
  timeText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'DM',
  },
  addButton: {
    backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  breakItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  breakText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'DM',
  },
  closeIcon: {
    fontSize: 20,
    color: '#000',
  },
   selectedTimeText: {
    color: '#fff', // Add white text color for selected buttons
  },
});


