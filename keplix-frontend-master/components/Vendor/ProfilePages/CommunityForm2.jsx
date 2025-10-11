import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Image
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function CommunityForm2({ navigation, route }) {
    const { user } = route.params;
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello from the other side", sender: "other", time: getCurrentTime() },
  ]);
  const [inputText, setInputText] = useState("");

  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
  }

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: (messages.length + 1).toString(),
        text: inputText,
        sender: "me",
        time: getCurrentTime(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText("");

      setTimeout(() => {
        const autoReply = {
          id: (messages.length + 2).toString(),
          text: "How can I help you?",
          sender: "otherReply",
          time: getCurrentTime(),
        };
        setMessages((prevMessages) => [...prevMessages, autoReply]);
      }, 1000);
    }
  };

 const renderMessage = ({ item }) => {
  const isMe = item.sender === "me";
  const isOtherReply = item.sender === "otherReply";

  return (
    <View
      style={[
        styles.messageWrapper,
        isMe
          ? styles.myMessageWrapper
          : isOtherReply
          ? styles.otherReplyMessageWrapper
          : styles.otherMessageWrapper,
      ]} >
      <View
        style={[
          styles.messageContainer,
          isMe
            ? styles.myMessage
            : isOtherReply
            ? styles.otherReplyMessage
            : styles.otherMessage,
        ]}>
        <Text
          style={[
            styles.messageText,
            isMe ? styles.myMessageText : styles.otherMessageText,
          ]}>
          {item.text} </Text>
        <Text
          style={[
            styles.messageTime,
            isMe ? styles.myMessageTime : styles.otherMessageTime,
          ]}>
          {item.time}</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate("HamburgerMenu")}>
          <MaterialCommunityIcons name="phone" style={styles.icon1} />
        </TouchableOpacity>
      </View>

      <View style={styles.userInfoContainer}>
        <Image source={user.profilePhoto} style={styles.userPhoto} />
        <Text style={styles.userName}>{user.name}</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.chatContainer}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Type a message here"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity style={styles.micButton}>
          <Ionicons name="mic" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  icon1: {
    fontSize: 24,
    color: "#fff",
    backgroundColor: "rgba(78, 70, 180, 1)",
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
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginBottom: 20,
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "DM",
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  messageWrapper: {
    marginVertical: 5,
    alignItems: "flex-start",
  },
  myMessageWrapper: {
    alignItems: "flex-end",
  },
  otherMessageWrapper: {
    alignItems: "flex-start",
  },
  otherReplyMessageWrapper: {
    alignItems: "flex-start",
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },
  myMessage: {
    backgroundColor: "rgba(78, 70, 180, 1)",
    borderTopRightRadius: 2,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
  otherMessage: {
    backgroundColor: "rgba(226, 226, 226, 1)",
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 2,
  },
  otherReplyMessage: {
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 2,
  },
  messageText: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "DM",
  },
  myMessageText: {
    color: "#fff", 
  },
  otherMessageText: {
    color: "rgba(0, 0, 0, 1)", 
  },
  messageTime: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "DM",
    color: "rgba(0, 0, 0, 0.56)",
  },
  myMessageTime: {
    color: "#fff", 
    textAlign: "right",
  },
  otherMessageTime: {
    color: "rgba(0, 0, 0, 0.56)", 
    textAlign: "left",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 50,
    paddingTop: 10,
    borderRadius: 16,
    backgroundColor: "rgba(226, 226, 226, 1)",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  micButton: {
    marginLeft: 10,
    backgroundColor: "rgba(0, 0, 0, 1)",
    padding: 10,
    borderRadius: 20,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "rgba(78, 70, 180, 1)",
    padding: 10,
    borderRadius: 20,
  },
});
