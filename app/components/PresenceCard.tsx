import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { UserStatus } from "../index";

/*
  Props define exactly what this component expects.
*/
type Props = {
  username: string;
  initialStatus: UserStatus;
};

/*
  Each possible status maps to a color.
*/
const STATUS_COLORS: Record<UserStatus, string> = {
  online: "#2ecc71",
  away: "#f39c12",
  offline: "#95a5a6",
};

export default function PresenceCard({ username, initialStatus }: Props) {
  /*
    TODO 3:
    - Create state called "status"
    - Initialize it using initialStatus
  */

  /*
    TODO 4:
    - Create state for "lastUpdated"
    - What type should it be?
  */

  /*
    TODO 5:
    - Write a useEffect that runs whenever "status" changes
    - Update lastUpdated to current time
    - Hint: search Google for "JavaScript Date object toLocaleTimeString"
      Example: new Date().toLocaleTimeString()
  */

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{username}</Text>

      <View style={styles.statusRow}>
        {/* TODO 6:
            - Display a colored dot using STATUS_COLORS and current status
            - Display the status text in ALL CAPS
        */}
        <View
          style={[
            styles.dot,
            { backgroundColor: STATUS_COLORS["online"] /* TODO: replace with dynamic status */ },
          ]}
        />
        <Text>{/* TODO: Display status in ALL CAPS */}</Text>
      </View>

      {/* TODO 7:
          - Display "Last updated: ..." using lastUpdated state
      */}
      <Text style={{ fontSize: 12, color: "#666" }}>
        {/* TODO: Fill in last updated text */}
      </Text>

      <View style={styles.buttonRow}>
        {/* TODO 8:
            - Clicking each button should update status state
        */}
        <Pressable
          style={styles.button}
          onPress={() => {
            // TODO: set status to "online"
          }}
        >
          <Text>online</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            // TODO: set status to "away"
          }}
        >
          <Text>away</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            // TODO: set status to "offline"
          }}
        >
          <Text>offline</Text>
        </Pressable>
      </View>
    </View>
  );
}

/*
  Styling note:
  Ignore styles for now.
*/
const styles = StyleSheet.create({
  card: {
    width: 280,
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    padding: 6,
    marginHorizontal: 4,
    borderRadius: 6,
    backgroundColor: "#eee",
  },
});
