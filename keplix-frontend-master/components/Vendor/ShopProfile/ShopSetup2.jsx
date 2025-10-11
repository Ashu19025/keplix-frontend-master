import React, { useState } from 'react';
import { View,Text,TouchableOpacity,StyleSheet,SafeAreaView,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from "react-native-vector-icons/Entypo";


export default function ShopSetup2({ navigation }) {
  const [shopLogo, setShopLogo] = useState(null);
  const [shopImages, setShopImages] = useState([]);
  const [banners, setBanners] = useState([]);

  const handleUploadLogo = () => {
    
  };

  const handleUploadImages = () => {
    // Logic to upload shop images
  };

  const handleUploadBanner = () => {
    // Logic to upload promotional banners
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={'arrow-back-outline'} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Business</Text>
        </View>
      </View>

      <Text style={styles.title}>Shop Information</Text>
      <Text style={styles.subtitle}>Fill up your shop details</Text>

      <TouchableOpacity style={styles.logoContainer} onPress={handleUploadLogo}>
        <Ionicons name="image" size={40} color="#ededed" style={styles.icon1} />
        <View style={styles.row}>
        <Entypo name="squared-plus" size={20} color="#4E46B4" />
        <Text style={styles.uploadText}>Upload shop logo</Text>
        </View>

      </TouchableOpacity>

      <View>
      <Text style={styles.sectionTitle}>Upload shop images</Text>
      <View style={styles.uploadRow}>
        <TouchableOpacity style={styles.uploadBox} onPress={handleUploadImages}>
          <Entypo name="squared-plus" size={30} color="#0000008F" />
          <Text style={styles.sectionTitle}>Upload</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image source={require( '../../../assets/images/carimage.png' )} style={styles.previewImage} />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>+5 more</Text>
          </View>
        </View>
      </View>
    </View>


      <View>
        <Text style={styles.sectionTitle}>Promotional banners (Optional)</Text>
        <TouchableOpacity
          style={[styles.uploadBox1]}
          onPress={handleUploadBanner}>
            <View style={styles.row}>
          <Entypo name="squared-plus" size={20} color="#0000008F" />
          <Text style={styles.sectionTitle1}>Upload banner</Text>
          </View>
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ShopSetup3")}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    fontSize: 30,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 50,
  },
  icon1: {
    fontSize: 50,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 30,
    padding:30,
    marginBottom:10,
  },
  row: {
  flexDirection: 'row',
  alignItems: 'center',
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginRight: 30,
    color: '#0000008F',
    fontFamily: 'DM',
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    marginBottom: 10,
    fontFamily: 'DM',
  },
  subtitle: {
    fontSize: 16,
    color: '#0000008F',
    marginBottom: 30,
    fontFamily: 'DM',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#0000008F',
    marginBottom: 10,
    fontFamily: 'DM',
  },
  uploadRow: {
  flexDirection: 'row', 
  alignItems: 'center',
  marginTop: 10, 
},
imageContainer: {
  position: 'relative', 
  width: 70,
  height: 130,
  marginLeft: 15, 
  borderRadius: 20,
  overflow: 'hidden', 
},
previewImage: {
  width: '100%',
  height: '100%',
},

overlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  justifyContent: 'center',
  alignItems: 'center',
},

overlayText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
},
  sectionTitle1:{
    fontSize: 16,
    color: '#0000008F',
    fontFamily: 'DM',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 16,
    color: '#4E46B4',
    fontFamily: 'DM',
    marginLeft:5,
  },
  uploadBox: {
    width: '270',
    height: 130,
    backgroundColor:"#ededed",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadBox1:{
    width: '100%',
    height: 60,
    borderRadius: 70,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageCount: {
    textAlign: 'right',
    fontSize: 16,
    color: '#aaa',
    marginTop: -20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4E46B4',
    borderRadius: 70,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop:50
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
});
