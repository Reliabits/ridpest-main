import Toast from "react-native-simple-toast";

export const customToast = (message) => {
  Toast.show(message.toString(), Toast.LONG, Toast.BOTTOM);
};
