import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
interface FormFieldProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
}

const FormField = ({
  title,
  placeholder,
  value,
  onChangeText,
  onBlur,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isPasswordField = title === "Password";
  return (
    <View className="gap-2 w-full">
      <Text className="text-start text-gray-100">{title}</Text>

      <View
        className={`w-full h-16 px-4 bg-black-200 border-2 ${
          isFocused ? "border-secondary" : "border-black-300"
        } rounded-xl flex-row items-center `}
      >
        <TextInput
          className="flex-1 h-full border-none outline-none text-white text-base py-2"
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPasswordField && !showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }}
        />

        {isPasswordField && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome
              name={showPassword ? "eye" : "eye-slash"}
              size={20}
              color={"#7b7b8b"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
