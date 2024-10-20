import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const SplashScreen = ({ navigation }: any) => {
  //   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  //   const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Food List");
    }, 3000); // Durasi splash screen
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      <Button
        icon="login"
        mode="contained"
        onPress={() => navigation.navigate("Food List")}
        buttonColor="#41210a"
      >
        Masuk
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: { width: 300, height: 300, marginBottom: 20 },
});

export default SplashScreen;
