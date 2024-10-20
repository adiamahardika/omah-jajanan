import React from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

const foodData = [
  {
    id: "1",
    title: "Bakso",
    description: "Bakso lezat dengan kuah gurih",
    long_description:
      "Bakso ini terbuat dari daging sapi pilihan, disajikan dengan kuah kaldu yang kaya rasa, lengkap dengan pelengkap mie, tahu, dan sayuran. Cocok disantap saat cuaca dingin atau sebagai makan siang yang mengenyangkan.",
    image: require("../assets/bakso.jpg"),
    price: 20000,
  },
  {
    id: "2",
    title: "Mi Ayam",
    description: "Mi ayam dengan potongan daging ayam",
    long_description:
      "Mi ayam dengan tekstur lembut yang dipadukan dengan potongan daging ayam yang dimasak dengan bumbu kecap. Disajikan bersama kuah kaldu yang ringan dan sayuran segar untuk memberikan rasa yang seimbang.",
    image: require("../assets/mie-ayam.jpg"),
    price: 15000,
  },
  {
    id: "3",
    title: "Nasi Goreng",
    description: "Nasi goreng spesial dengan telur dan ayam",
    long_description:
      "Nasi goreng yang dimasak dengan bumbu rahasia, disajikan dengan telur mata sapi, potongan ayam, dan acar. Rasa yang gurih dan pedas menjadikan hidangan ini favorit banyak orang di berbagai kesempatan.",
    image: require("../assets/nasi-goreng.jpg"),
    price: 25000,
  },
  {
    id: "4",
    title: "Sate Ayam",
    description: "Sate ayam dengan bumbu kacang",
    long_description:
      "Sate ayam yang dipanggang hingga matang sempurna, disajikan dengan saus kacang yang gurih dan sedikit manis. Dilengkapi dengan lontong dan acar sebagai pelengkap yang menyegarkan.",
    image: require("../assets/sate-ayam.jpg"),
    price: 30000,
  },
  {
    id: "5",
    title: "Rendang",
    description: "Rendang daging sapi khas Padang",
    long_description:
      "Rendang daging sapi yang dimasak perlahan dengan rempah-rempah khas, memberikan rasa gurih, pedas, dan kaya akan rempah. Daging yang empuk dan kuah yang kental membuat rendang ini istimewa.",
    image: require("../assets/rendang.jpg"),
    price: 35000,
  },
  {
    id: "6",
    title: "Gado-Gado",
    description: "Salad sayuran dengan bumbu kacang",
    long_description:
      "Gado-gado merupakan campuran sayuran rebus, tempe, tahu, dan telur yang disajikan dengan bumbu kacang yang kental. Hidangan ini sehat dan penuh rasa, cocok untuk penggemar makanan vegetarian.",
    image: require("../assets/gado-gado.jpg"),
    price: 20000,
  },
  {
    id: "7",
    title: "Soto Ayam",
    description: "Soto ayam dengan kuah kuning",
    long_description:
      "Soto ayam dengan kuah kuning dari kunyit, dilengkapi dengan suwiran ayam, telur rebus, dan bihun. Disajikan panas-panas dengan perasan jeruk nipis dan sambal untuk menambah kenikmatan.",
    image: require("../assets/soto-ayam.jpeg"),
    price: 25000,
  },
  {
    id: "8",
    title: "Pempek",
    description: "Pempek ikan khas Palembang",
    long_description:
      "Pempek terbuat dari ikan dan tepung sagu, digoreng hingga garing di luar dan lembut di dalam. Disajikan dengan cuko (saus asam pedas manis) khas Palembang, yang memberikan kombinasi rasa yang unik.",
    image: require("../assets/pempek.jpg"),
    price: 30000,
  },
  {
    id: "9",
    title: "Martabak Manis",
    description: "Martabak manis dengan berbagai topping",
    long_description:
      "Martabak manis yang lembut dan tebal, bisa dinikmati dengan berbagai topping seperti cokelat, keju, kacang, dan susu kental manis. Setiap gigitan memberikan sensasi manis yang memanjakan lidah.",
    image: require("../assets/martabak-manis.jpg"),
    price: 25000,
  },
  {
    id: "10",
    title: "Es Teler",
    description: "Es teler segar dengan campuran buah",
    long_description:
      "Es teler yang terdiri dari kelapa muda, alpukat, nangka, dan kolang-kaling, disajikan dengan sirup manis dan es serut. Minuman yang menyegarkan ini cocok untuk dinikmati saat cuaca panas.",
    image: require("../assets/es-teler.jpg"),
    price: 20000,
  },
];

const FoodListScreen = ({ navigation }: any) => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Food Detail", { item })}
    >
      <Card style={styles.itemContainer}>
        <Card.Cover source={item.image} />
        <Card.Content>
          <Title style={styles.itemTitle}>{item.title}</Title>
          <Paragraph style={styles.itemDescription}>
            {item.description}
          </Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={foodData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        icon="cart"
        style={styles.cart}
        mode="outlined"
        onPress={() => navigation.navigate("Keranjang")}
        textColor="#41210a"
      >
        Buka Keranjang
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  itemContainer: {
    marginVertical: 10,
  },
  itemImage: { width: 80, height: 80 },
  itemTitle: { fontSize: 18, fontWeight: "bold" },
  itemDescription: { color: "#666" },
  cart: { marginTop: 5 },
});

export default FoodListScreen;
