import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/color";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
      <Tabs
          screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#22049ae4',
              tabBarInactiveTintColor: Colors.text.secondary,
              tabBarShowLabel: false,
              tabBarStyle: {
                  backgroundColor: "#fff",
                  borderTopWidth: 1,
                  borderTopColor: '#F0F0F0',
                  height: 56,
                  paddingTop: 8
              }
      }}
      >
          <Tabs.Screen name="index" options={{
              tabBarIcon: ({ color, focused }) => <Ionicons name={
                  focused? 'home' : 'home-outline'}  size={26} color={color}/>
          }} />

          <Tabs.Screen
           name="explore"
            options={{
           tabBarIcon: ({ focused, color }) => (
          <MaterialIcons
           name={focused ? "category" : "category"}
         size={26}
         color={color}
      />
    ),
  }}
/>
        
   
    <Tabs.Screen name="chat" options={{
              tabBarIcon: ({ focused, color }) => <Ionicons
                  name={focused ? 'chatbubble' : 'chatbubble-outline'}
                  size={26} 
                  color={color} />
          }} />

         

          <Tabs.Screen name="favorite" options={{
              tabBarIcon: ({ focused, color }) => <Ionicons
                  name={focused ? 'heart' : 'heart-outline'}
                  size={26} 
                  color={color} />
          }} />
    </Tabs>
  );
}