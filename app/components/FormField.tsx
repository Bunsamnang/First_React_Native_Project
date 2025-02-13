import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
interface FormFieldProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const FormField = ({
  title,
  placeholder,
  value,
  onChangeText,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = title === "Password" || title === "Confirm Password";
  return (
    <View className="gap-2 w-full">
      <Text className="text-start text-gray-100">{title}</Text>

      <View className="w-full h-16 relative px-4 bg-black-200 border-2 border-black-300 rounded-xl justify-center">
        <TextInput
          className="flex-1 border-none outline-none text-white text-base "
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPasswordField && !showPassword}
        />

        {isPasswordField && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-5"
          >
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
