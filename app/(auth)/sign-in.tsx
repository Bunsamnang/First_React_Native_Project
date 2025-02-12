import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../components/FormField";
const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="h-full w-full justify-center  py-4 px-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[118px] h-[35px]"
          />
          <Text className="text-white text-3xl mt-10 font-pbold font-bold ">
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            placeholder=""
            onChangeText={() => {}}
            value="1"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
