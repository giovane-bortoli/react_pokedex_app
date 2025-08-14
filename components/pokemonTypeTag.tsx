import { StyleSheet, Text, View } from "react-native";

type TypeTagProps = {
  label: string;
  color: string;
};

export default function TypeTag({ label, color }: TypeTagProps) {
  return (
    <View style={styles.typeRow}>
      <View style={[styles.typeTag, { backgroundColor: color }]}>
        <Text style={styles.typeTagText}>{label}</Text>
      </View>
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
