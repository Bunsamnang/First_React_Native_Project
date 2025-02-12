import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  isLoading: boolean;
  textStyle?: object;
  handlePress: () => void;
}

const CustomeButton = ({
  title,
  isLoading,
  textStyle,
  handlePress,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={`w-full lg:w-1/2 min-h-[60px] bg-secondary justify-center items-center rounded-xl mt-10 ${
        isLoading ? "opacity-50" : ""
      } `}
      disabled={isLoading}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text className={`text-xl ${textStyle} font-psemibold text-primary`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomeButton;
