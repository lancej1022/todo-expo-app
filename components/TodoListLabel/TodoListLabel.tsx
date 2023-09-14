import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import { ExternalLink } from "../ExternalLink";
import { Text, View } from "../Themed";

type TodoListLabelProps = {
  name: string;
  totalNumberOfTasks: number;
};
export function TodoListLabel({ name, totalNumberOfTasks = 0 }: TodoListLabelProps) {
  return (
    // TODO: this `View` needs to be wrapped in an Expo `Link` that triggers navigation
    <View role="listitem" className="flex flex-row flex-1 justify-between">
      <FontAwesome aria-hidden size={24} name="list" style={styles.icon} />
      <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
        {name}
      </Text>
      {/* TODO: render the number of items in the todo list */}
      <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
        {totalNumberOfTasks}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: "#38BDF8", // TODO: add this to `Colors` so it doesnt have to be hardcoded everywhere and is easy to update
  },
});
