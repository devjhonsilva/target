import { ColorValue, Pressable, PressableProps, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/theme";

type Props = PressableProps & {
  isSelected: boolean;
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  SelectedColor: ColorValue;
};

export function Option({
  isSelected,
  title,
  icon,
  SelectedColor,
  ...rest
}: Props) {
  return (
    <Pressable
      style={[styles.option, isSelected && { backgroundColor: SelectedColor }]}
      {...rest}
    >
      <MaterialIcons
        name={icon}
        size={24}
        color={isSelected ? colors.white : colors.gray[500]}
      />
      <Text style={[styles.title, isSelected && { color: colors.white }]}>
        {title}
      </Text>
    </Pressable>
  );
}
