import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";


export default function Home() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Persistência e Navegação</Text>
        <TextInput style={styles.input} placeholder="Digite algo" />
        <Button title="Salvar" onPress={() => alert("Salvo!")} />
        <TouchableOpacity onPress={() => alert("salvo!")} style={styles.button}>
          <Text style={styles.textButton}>Botão</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      height: 40,
      width: 300,
      borderColor: "gray",
      borderWidth: 1,
      marginTop: 30,
      padding: 10,
    },
    button: {
      backgroundColor: "blue",
      padding: 10,
      marginTop: 20,
      width: 300,
      display: "flex",
      alignItems: "center",
      borderRadius: 10,
  },
    textButton: {
      color: "white",
  },
  });
  