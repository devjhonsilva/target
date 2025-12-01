import { HomeHeader } from "@/components/HomeHeader";
import { View, StatusBar } from "react-native";
import { Target } from "@/components/Target";
import { List } from "@/components/List";
import { Button } from "@/components/Button";

import { router } from "expo-router";

const summary = {
  total: "R$ 1.501,00",
  input: { label: "Entradas", value: "R$ 652,00" },
  output: { label: "Saídas", value: "-R$ 937,00" },
};

const targets = [
  {
    id: "1",
    name: "Cadeira",
    current: "900,00",
    percentage: "75%",
    target: "1.350,00",
  },
  {
    id: "2",
    name: "mesa escritorio",
    current: "3.500,00",
    percentage: "55%",
    target: "1.550,00",
  },
  {
    id: "3",
    name: "Smathphone",
    current: "7.900,00",
    percentage: "9%",
    target: "650,00",
  },
];

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <HomeHeader data={summary} />

      <List
        data={targets}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        title="Metas"
        keyExtractor={(item) => item.id}
        emptyMessage="Nenhuma meta, tecle em adicionar para criar novas metas."
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, paddingBottom: 70 }}>
        <Button title="Nova Meta" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}
