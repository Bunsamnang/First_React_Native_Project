import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface SearchInputProps {
  placeholder: string;
}

const SearchInput = ({ placeholder }: SearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      className={`w-full h-16 px-4  border-2 bg-black-100   rounded-lg flex-row justify-between items-center ${
        isFocused ? "border-secondary" : "border-black-200"
      }`}
    >
      <TextInput
        className="flex-1  text-base text-white mt-0.5 font-pregular"
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        placeholderTextColor={"#7b7b8b"}
        placeholder={placeholder}
      />
      <TouchableOpacity>
        <FontAwesome name="search" size={18} color={"#7b7b8b"} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
