import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface FormFieldProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const FormField = ({
  title,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: FormFieldProps) => {
  return (
    <View className="space-y-2">
      <Text className=" text-start text-gray-100">{title}</Text>

      <TextInput
        className="w-full px-4 h-16 bg-black-100 border-2 border-red-500 rounded-xl text-white"
        placeholder={placeholder}
        placeholderTextColor="gray"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});
