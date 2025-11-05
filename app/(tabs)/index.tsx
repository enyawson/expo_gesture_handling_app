import { StyleSheet, View } from "react-native";
import ImageViewer from "@/components/imageViewer";
import Button from "@/components/Button";

const ImagePlaceHolder = require("@/assets/images/soa_tome1.jpg");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={ImagePlaceHolder} />
      </View>
      <View style={styles.footerContainer}>
        <Button label={"Choose a photo"} />
        <Button label={"Use this photo"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,

    alignItems: "center",
  },
});
