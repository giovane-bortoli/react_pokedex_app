import { StyleSheet, Text, View } from "react-native";

type TypeTagProps = {
  types: { type: { name: string } }[]; // Atualizado para aceitar uma lista de tipos
  color: string;
};

export default function TypeTag({ types, color }: TypeTagProps) {
  return (
    <View style={styles.typeRow}>
      {types.map((type, index) => (
        <View key={index} style={[styles.typeTag, { backgroundColor: color }]}>
          <Text style={styles.typeTagText}>{type.type.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  typeRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32,
    marginBottom: 16,
    gap: 8,
  },
  typeTag: {
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginHorizontal: 4,
  },
  typeTagText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});
