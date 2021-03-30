import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0,
    color: "#ffffff",
    textAlign: 'center',
  },
  iconContainer: {
    paddingRight: 25,
  },

  inputContainer: {
    height: 100
  },
  standaloneRowBack: {
    flex: 1,
    height:80,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
  },
  newTaskStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  iconStyle: {
    color: "white",
    fontSize: 25,
  },
  container: {
    flex: 1,
  },
  newTaskTextStyle: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
  addNewTaskCont: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 10,

  },
  completedCont: {
    flexDirection: "row",
    alignItems: 'center',
    paddingHorizontal: 10,

  },

});
