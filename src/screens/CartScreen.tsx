import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useCart } from "../context/CartContext";
import { Button, IconButton } from "react-native-paper";
import { formatRupiah } from "../helpers/helper";

const CartScreen = () => {
  const { cartItems, decreaseQuantity, increaseQuantity, clearCart } =
    useCart();

  const renderCartItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>
          Harga: {formatRupiah(item.price * item.quantity)}
        </Text>
        <View style={styles.quantityContainer}>
          <IconButton
            icon="minus"
            size={20}
            onPress={() => decreaseQuantity(item.id)}
            mode="contained"
            iconColor="#41210a"
            containerColor="#ffff"
          />
          <Text style={styles.itemQuantity}>{item.quantity}</Text>
          <IconButton
            icon="plus"
            size={20}
            onPress={() => increaseQuantity(item.id)}
            mode="contained"
            iconColor="#41210a"
            containerColor="#ffff"
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Keranjang Anda kosong</Text>
      ) : (
        <View>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item: any) => item.id}
          />
          <Button
            buttonColor="#41210a"
            mode="contained"
            onPress={() => {
              alert("Pesanan berhasil dibuat");
              clearCart();
            }}
          >
            Buat Pesanan
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 50,
  },
  itemContainer: { flexDirection: "row", marginBottom: 20 },
  itemImage: { width: 80, height: 80, marginRight: 20 },
  itemTitle: { fontSize: 18, fontWeight: "bold" },
  itemQuantity: { fontSize: 16, color: "#666" },
  itemPrice: { fontSize: 16, color: "#666", marginBottom: 10 },
  quantityContainer: { flexDirection: "row", alignItems: "center" },
});

export default CartScreen;
