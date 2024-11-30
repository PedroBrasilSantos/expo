import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from "react-native";
import Image1 from "./assets/image1.jpeg";
import Image2 from "./assets/image2.jpeg";
import Image3 from "./assets/image3.jpeg";
import Image4 from "./assets/image4.jpeg";
import Image5 from "./assets/image5.jpeg";
import Image6 from "./assets/image6.jpg";



const App = () => {
  const openWhatsApp = () => {
    const phoneNumber = "5551993741134"; // constante que segura o numero de contato
    const message = "Olá! Estou entrando em contato para saber mais sobre incensos e cristais.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir o WhatsApp", err)
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Bem-vindo Witch's Bless!</Text>

      <Text style={styles.subtitle} >Beneficions do Incenso</Text>
      <Text style={styles.description} >O incenso, elixir ancestral, transporta-nos para um reino de serenidade e espiritualidade.
      Seus aromas, como melodias sutis, acalmam a alma e purificam o ambiente, criando um espaço sagrado para a meditação e a conexão com o divino.
      Permita-se envolver por essa experiência sensorial e embarque numa jornada de autoconhecimento.</Text>

      {/* Exibição das imagens com textos */}
      <View style={styles.imageContainer}>
        <View style={styles.imageBox}>
          <Image source={Image1} style={styles.image} />
          <Text style={styles.caption}>Pau Santo</Text>
        </View>
        <View style={styles.imageBox}>
          <Image source={Image2} style={styles.image} />
          <Text style={styles.caption}>Incensários Diversificados</Text>
        </View>
        <View style={styles.imageBox}>
          <Image source={Image3} style={styles.image} />
          <Text style={styles.caption}>Incensos em Bastão Comuns</Text>
        </View>
        <View style={styles.imageBox}>
          <Image source={Image4} style={styles.image} />
          <Text style={styles.caption}>Incensos em Cone</Text>
        </View>
        <View style={styles.imageBox}>
          <Image source={Image5} style={styles.image} />
          <Text style={styles.caption}>Incensos Naturais</Text>
        </View>
        <View style={styles.imageBox}>
          <Image source={Image6} style={styles.image} />
          <Text style={styles.caption}>Cristais</Text>
        </View>
      </View>

      {/* Botão para WhatsApp */}
      <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
        <Text style={styles.buttonText}>Fale Conosco no WhatsApp</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#714db3',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18, // Tamanho menor que o título
    color: "#999", // Cor cinza suave para descrição
    textAlign: "center", // Centralizado
    marginBottom: 20, // Espaço após a descrição
    lineHeight: 20, // Linha mais espaçada para melhor leitura
    paddingHorizontal: 10, // Pequena margem lateral
  },
  description: {
    fontSize: 14, // Tamanho menor que o título
    color: "#999", // Cor cinza suave para descrição
    textAlign: "center", // Centralizado
    marginBottom: 20, // Espaço após a descrição
    lineHeight: 20, // Linha mais espaçada para melhor leitura
    paddingHorizontal: 10, // Pequena margem lateral
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  imageBox: {
    width: "48%", 
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    maxWidth:350,
    height: 250,
    borderRadius: 10,
    resizeMode: "cover",
  },
  caption: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
    color: "#999",
  },
  button: {
    backgroundColor: "#25D366",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;