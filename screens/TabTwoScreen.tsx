import React, { useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";

export default function TabTwoScreen() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  useEffect(() => {
    const checkForSubscription = setTimeout(() => {
      setIsModalVisible(() => !isModalVisible);
    }, 1500);
    return () => clearTimeout(checkForSubscription);
  }, []);

  const handleDecline = () => setIsModalVisible(() => !isModalVisible);

  const handleSignUp = () => {
    // sign up the user and close the modal
    setIsModalVisible(() => !isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Premium stuff here</Text>
      <View style={styles.separator} />
      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <Modal.Header title="LogRocket is fab!" />
          <Modal.Body>
            <Text style={styles.text}>
              Want access? We just need your email address
            </Text>
            <TextInput
              style={styles.input}
              placeholder="email"
              keyboardType="email-address"
            />
          </Modal.Body>
          <Modal.Footer>
            <View style={styles.button}>
              <Button title="No thanks" onPress={handleDecline} />
              <Button title="Sign me up!" onPress={handleSignUp} />
            </View>
          </Modal.Footer>
        </Modal.Container>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    paddingTop: 10,
    borderColor: "grey",
    borderBottomWidth: 2,
  },
  button: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
});
