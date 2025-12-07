import { Text, View } from "react-native";
import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { Progress } from "@/components/Progress";
import { PageHeader } from "@/components/PageHeader";
import { router, useLocalSearchParams } from "expo-router";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { Transaction, TransactionProps } from "@/components/Transaction";

const details = {
  current: "R$ 582,00",
  target: "R$ 2520,00",
  percentage: 28,
};

const transactions: TransactionProps[] = [
  {
    id: "1",
    value: "R$ 250,00",
    date: "15/09/2025",
    description: "Poupança banco do Brasil",
    type: TransactionTypes.Input,
  },
  {
    id: "2",
    value: "R$ 280,00",
    date: "15/09/2025",
    description: "Poupança banco do Itaú",
    type: TransactionTypes.Output,
  },
];

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, padding: 24, gap: 32, marginBottom: 28 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{
          icon: "edit",
          onPress: () => {},
        }}
      />

      <Progress data={details} />

      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
        emptyMessage="Nenhuma transação. Toque em nova transação para guardar seu dinheiro aqui."
      />

      <Button
        title="Nova Transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />
    </View>
  );
}
