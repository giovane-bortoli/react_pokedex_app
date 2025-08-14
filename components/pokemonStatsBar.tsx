import { StyleSheet, Text, View } from "react-native";

export default function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <View style={styles.statRow}>
      <Text style={[styles.statLabel, { color }]}>{label}</Text>
      <Text style={[styles.statValue, { color }]}>{value.toString().padStart(3, "0")}</Text>
      <View style={styles.statBarBg}>
        <View style={[styles.statBarFill, { width: `${value / 1.5}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  statLabel: {
    width: 40,
    fontWeight: "bold",
    fontSize: 13,
  },
  statValue: {
    width: 32,
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "right",
    marginRight: 8,
  },
  statBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: "#ECECEC",
    borderRadius: 4,
    overflow: "hidden",
  },
  statBarFill: {
    height: 8,
    borderRadius: 4,
  },
});
