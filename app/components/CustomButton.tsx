import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title: string;
  isLoading: boolean;
  textStyle?: string;
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
      className={`w-full min-h-[60px] bg-secondary justify-center items-center rounded-xl mt-10 ${
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
