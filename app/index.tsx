import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PresenceCard from "./components/PresenceCard";

/*
  TypeScript note:
  We define allowed status values instead of using strings directly.
*/
export type UserStatus = "online" | "away" | "offline";

/*
  Each user must follow this shape. This is how typescript works -- we must declare type of objects and variables otherwise your code will error.
*/
type User = {
  id: number;
  name: string;
  status: UserStatus;
};

export default function App() {
  /*
    TODO 1:
    - Use useState to store the users list
    - Initialize with the array below
  */
  const initialUsers: User[] = [
    { id: 1, name: "TODO: Newbie 1", status: "online" },
    { id: 2, name: "TODO: Another newbie", status: "away" },
    { id: 3, name: "TODO: Another newbie", status: "offline" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Mobile Dev Club Presence</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {/* 
          TODO 2:
          - Map function loops over users 
          - Render a PresenceCard for each
          - Fill in the props: username, initialStatus, key
        */}
        {users.map((user) => (
          <PresenceCard
            key={user.id}
            username={/*TODO: Fill this out */}
            initialStatus={/*TODO: Fill this out */}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

/* DO NOT WORRY ABOUT THE STYLING RIGHT NOW */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 12,
  },
  list: {
    alignItems: "center",
    paddingBottom: 20,
  },
});
