import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const FoodDetailScreen = ({ route }: any) => {
  const { item } = route.params;
  function formatRupiah(number: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  }

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.long_description}</Text>
      <Text style={styles.price}>Harga: {formatRupiah(item.price)}</Text>
      <Button
        icon="cart"
        mode="contained"
        onPress={() => alert("Ditambahkan ke keranjang")}
        style={{ marginBottom: 10 }}
        buttonColor="#41210a"
      >
        Tambah ke Keranjang
      </Button>
      <Button
        icon="share-variant"
        mode="outlined"
        onPress={() => alert("Berbagi Item")}
        textColor="#41210a"
      >
        Share
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: "100%", height: 200, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  description: { fontSize: 16, marginBottom: 20 },
  price: { fontSize: 18, color: "#888", marginBottom: 20 },
});

export default FoodDetailScreen;
