import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "@/components/Header";

export default function AIChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Timket is the Ethiopian celebration of Epiphany, commemorating the baptism of Jesus in the River Jordan.",
      sender: "ai",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://YOUR_IP:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await res.json();

      const aiMessage = {
        id: Date.now().toString() + "_ai",
        text: data.reply,
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);
     } catch (error) 
     {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "Something went wrong 😢",
          sender: "ai",
        },
      ]);
    }

    setLoading(false);
  };

  const renderMessage = ({ item }) => {
    const isUser = item.sender === "user";

    return (
      <View
        style={{
          alignSelf: isUser ? "flex-end" : "flex-start",
          backgroundColor: isUser ? "#2E7D32" : "#F1F1F1",
          marginVertical: 5,
          marginHorizontal: 10,
          padding: 12,
          borderRadius: 15,
          maxWidth: "75%",
        }}
       >
        <Text style={{ color: isUser ? "#fff" : "#000", fontSize: 14 }}>
          {item.text}
        </Text>
      </View>
    );
  };
{/**scroll control */}
  const flatListRef = useRef(null);

  useEffect(() => {
  if (flatListRef.current) {
    flatListRef.current.scrollToEnd({ animated: true });
  }
}, [messages]);



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      
      {/* 🔵 HEADER */}
      <Header title="AI Chat"  showBack={true}/>
     
      {/* 🟢 QUICK QUESTION */}
      <View style={{ padding: 10 }}>
        <TouchableOpacity
          onPress={() => sendMessage("What is Timket?")}
          style={{
            backgroundColor: "#2E7D32",
            alignSelf: "flex-start",
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 13 }}>
            What is Timket?
          </Text>
        </TouchableOpacity>
      </View>

      {/* 💬 CHAT LIST */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ paddingBottom: 90 }}
        showsVerticalScrollIndicator={false}
      />

      {/* ⏳ LOADING */}
      {loading && (
        <View style={{ paddingLeft: 15 }}>
          <ActivityIndicator size="small" color="#0B3C5D" />
          <Text style={{ fontSize: 12 }}>AI is typing...</Text>
        </View>
      )}

      {/* ✏️ INPUT BAR */}
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderTopWidth: 1,
          borderColor: "#ddd",
          alignItems: "center",
        }}
      >
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a question..."
          style={{
            flex: 1,
            backgroundColor: "#F1F1F1",
            borderRadius: 25,
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        />

        <TouchableOpacity
          onPress={() => sendMessage()}
          style={{
            backgroundColor: "#0B3C5D",
            marginLeft: 10,
            padding: 10,
            borderRadius: 25,
          }}
        >
          <Ionicons name="send" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}