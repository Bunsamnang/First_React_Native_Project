import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "../../constants";

interface EmptyStateProps {
  title: string;
  subTitle: string;
}

const EmptyState = ({ title, subTitle }: EmptyStateProps) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={images.empty} className="w-72 h-72" resizeMode="contain" />
      <View className="items-center gap-3">
        <Text className="text-sm font-pmedium text-gray-100">{subTitle}</Text>
        <Text className="text-xl text-white font-psemibold">{title}</Text>
      </View>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({});
