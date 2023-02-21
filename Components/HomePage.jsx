import { StyleSheet, View, Text, Button } from "react-native";

export default HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your List</Text>
      <Button
        title="Add an item"
        onPress={() => navigation.navigate("AddLocation")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 40,
  },
});
