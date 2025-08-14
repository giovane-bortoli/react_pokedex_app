import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const tag = require("../../assets/images/tag.png");
const text_format = require("../../assets/images/text_format.png");

type SortButtonProps = {
  value: "number" | "name";
  onChange: (value: "number" | "name") => void;
};

export default function SortButton({ value, onChange }: SortButtonProps) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Image style={styles.icon} source={value === "number" ? tag : text_format} />
      </TouchableOpacity>
      <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.title}>Sort by:</Text>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  onChange("number");
                  setVisible(false);
                }}
              >
                <View style={styles.radioCircle}>{value === "number" && <View style={styles.selectedRb} />}</View>
                <Text style={styles.optionText}>Number</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  onChange("name");
                  setVisible(false);
                }}
              >
                <View style={styles.radioCircle}>{value === "name" && <View style={styles.selectedRb} />}</View>
                <Text style={styles.optionText}>Name</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#DC0A2D",
  },
  buttonText: {
    color: "#DC0A2D",
    fontWeight: "bold",
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#DC0A2D",
    borderRadius: 16,
    padding: 24,
    minWidth: 200,
    alignItems: "flex-start",
  },
  modalContainer: {
    backgroundColor: "white",
    width: 150,
    borderRadius: 16,
    padding: 16,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  optionText: {
    color: "black",
    fontSize: 16,
    marginLeft: 8,
  },
  radioCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#DC0A2D",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#DC0A2D",
  },
});
