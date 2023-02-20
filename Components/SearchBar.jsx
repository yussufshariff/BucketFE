import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const SearchBar = ({ placeholder, onChangeText }) => {
  const [text, setText] = useState("");

  const handleChangeText = (value) => {
    setText(value);
    onChangeText(value);
  };

  return (
    <TextInput
      style={styles.searchBar}
      placeholder={placeholder}
      value={text}
      onChangeText={handleChangeText}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default SearchBar;
