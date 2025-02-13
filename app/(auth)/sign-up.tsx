import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { Controller, useForm } from "react-hook-form";
import FormField from "../components/FormField";
import { zodResolver } from "@hookform/resolvers/zod/src/zod";
import { SignUpCredential, signupSchema } from "@/auth/auth.model";
import CustomeButton from "../components/CustomButton";
const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpCredential>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (formData: SignUpCredential) => {
    console.log(formData);
    alert("You submitted");
  };

  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center items-center py-4 px-10">
          <View className="w-full">
            <View className="items-center">
              <Image
                source={images.logo}
                className="w-32 h-9"
                resizeMode="contain"
              />

              <Text className="text-gray-100 text-3xl my-10">
                Sign up to Aora
              </Text>
            </View>

            <View className="gap-3">
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormField
                    title="Username"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Enter your username"
                  />
                )}
              />
              {errors.username && (
                <Text className="text-red-500">{errors.username.message}</Text>
              )}
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormField
                    title="Email"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Enter your email"
                  />
                )}
              />
              {errors.email && (
                <Text className="text-red-500">{errors.email.message}</Text>
              )}

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormField
                    title="Password"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Enter your password"
                  />
                )}
              />
              {errors.password && (
                <Text className="text-red-500">{errors.password.message}</Text>
              )}

              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormField
                    title="Confirm Password"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder=""
                  />
                )}
              />
              {errors.confirmPassword && (
                <Text className="text-red-500">
                  {errors.confirmPassword.message}
                </Text>
              )}

              <CustomeButton
                isLoading={isSubmitting}
                title="Sign up"
                handlePress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
