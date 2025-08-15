import { StyleSheet, Text, View } from "react-native";

type StatsBarProps = {
  stats: { base_stat: number; stat: { name: string } }[];
  color: string;
};

const stateNameMap: Record<string, string> = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SATK",
  "special-defense": "SDEF",
  speed: "SPD",
};

export default function StatsBar({ stats, color }: StatsBarProps) {
  return (
    <View style={styles.statsContainer}>
      {stats.map((stat, index) => (
        <View key={index} style={styles.statRow}>
          <Text style={[styles.statLabel, { color }]}>
            {stateNameMap[stat.stat.name] || stat.stat.name.slice(0, 3).toUpperCase()}
          </Text>
          <View style={styles.divider} />
          <Text style={[styles.statValue, { color }]}>{stat.base_stat.toString().padStart(3, "0")}</Text>
          <View style={styles.statBarBg}>
            <View style={[styles.statBarFill, { width: `${stat.base_stat / 1.5}%`, backgroundColor: color }]} />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    marginTop: 16,
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  statLabel: {
    width: 30,
    fontWeight: "bold",
    fontSize: 13,
  },
  statValue: {
    width: 40,
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
  divider: {
    width: 2,
    height: "200%",
    backgroundColor: "#ECECEC",
    marginHorizontal: 8,
  },
});
