import { StyleSheet, View } from "react-native";
import { Tabs, Redirect } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center flex-1 justify-center">
                <Ionicons
                  name={focused ? "home-sharp" : "home-outline"}
                  color={color}
                  size={20}
                />
                {/* <Text className="text-[0.4rem] " style={{ color: color }}>
                  Home
                </Text> */}
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center flex-1 justify-center  ">
                <Ionicons
                  name={focused ? "bookmark-sharp" : "bookmark-outline"}
                  color={color}
                  size={20}
                />
                {/* <Text className="text-[0.4rem] " style={{ color: color }}>
                  Bookmark
                </Text> */}
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center flex-1 justify-center">
                <Ionicons
                  name={focused ? "create-sharp" : "create-outline"}
                  color={color}
                  size={20}
                />
                {/* <Text className="text-[0.4rem] " style={{ color: color }}>
                  Create
                </Text> */}
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center flex-1 justify-center">
                <Ionicons
                  name={focused ? "person-sharp" : "person-outline"}
                  color={color}
                  size={20}
                />
                {/* <Text className="text-[0.4rem] " style={{ color: color }}>
                  Profile
                </Text> */}
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
