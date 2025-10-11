import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ChatScreen({navigation}) {
  const [messages, setMessages] = useState([
    { id: "1", text: "Good morning, My name is Nithish Kumar", time: "11:30am", sender: "support", date: "Yesterday" },
    { id: "2", text: "Hi Nithish", time: "09:30am", sender: "me", date: "Yesterday" },
    { id: "3", text: "Hello", time: "09:30am", sender: "support", date: "Today" },
    { id: "4", text: "Hello", time: "09:30am", sender: "me", date: "Today" },
  ]);

  const [input, setInput] = useState("");

  const renderMessage = ({ item, index }) => {
    const showDateLabel =
      index === 0 || messages[index - 1].date !== item.date;

    return (
      <>
        {showDateLabel && (
          <Text style={styles.dateLabel}>{item.date}</Text>
        )}
        <View
          style={[
            styles.messageContainer,
            item.sender === "me" ? styles.myMessage : styles.supportMessage,
          ]}
        >
          <Text style={styles.messageText}>{item.text}</Text>
          <View style={styles.messageFooter}>
            <Text style={styles.messageTime}>{item.time}</Text>
            {item.sender === "me" && (
              <FontAwesome5 name="check-double" size={8} color="#0A84FF" />
            )}
          </View>
        </View>
      </>
    );
  };

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: Date.now().toString(),
      text: input,
      time: "09:30am",
      sender: "me",
      date: "Today",
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <TouchableOpacity
          style={styles.backButton}
          onPress={()=> navigation.navigate("SupportandHelp")}
        >
          <View style={styles.backIconWrapper}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>

          
        <Text style={styles.headerTitle}>Keplix support</Text>
        </View>
        
        <Ionicons name="call" size={24} color="black" />
      </View>

      {/* Chat List */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80, marginTop: '80%' }}
        showsVerticalScrollIndicator={false}
      />

      {/* Input Bar */}
      <View style={styles.inputBar}>
        <TouchableOpacity style={styles.plusButton}>
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity>
          <Ionicons name="mic-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    
  },
   backButton: {
    marginLeft: 4,
  },
  backIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: "600",
  },
  dateLabel: {
    textAlign: "center",
    color: "#666",
    fontSize: 12,
    marginVertical: 10,
  },
  messageContainer: {
    maxWidth: "75%",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginVertical: 6,
  },
  myMessage: {
    backgroundColor: "#E3EDFF",
    alignSelf: "flex-end",
    borderBottomRightRadius: 4,
  },
  supportMessage: {
    backgroundColor: "#F1F1F1",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    color: "#000",
  },
  messageFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 4,
    gap: 4,
  },
  messageTime: {
    fontSize: 12,
    color: "#555",
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  plusButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 14,
    marginHorizontal: 8,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#0A84FF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
});