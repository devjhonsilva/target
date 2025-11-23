import { HomeHeader } from "@/components/HomeHeader";
import { View } from "react-native";

const summary = {
  total: "R$ 1.501,00",
  input: { label: "Entradas", value: "R$ 652,00" },
  output: { label: "Saídas", value: "-R$ 937,00" },
};

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
    </View>
  );
}
