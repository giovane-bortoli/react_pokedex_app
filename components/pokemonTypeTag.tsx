import { FONTS } from "@/styles/theme";
import { StyleSheet, Text, View } from "react-native";

type TypeTagProps = {
  types: { type: { name: string; color: string } }[];
  color: string;
};

export default function TypeTag({ types, color }: TypeTagProps) {
  return (
    <View style={styles.typeRow}>
      {types.map((type, index) => (
        <View key={index} style={[styles.typeTag, { backgroundColor: type.type.color }]}>
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
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginHorizontal: 4,
  },
  typeTagText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
});
