import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
// import { Ionicons } from '@expo/vector-icons';

const OtpLogin = ({navigation}) => {
  return (
    <SafeAreaView>
      <View >
        <View style={{ alignItems: "center", marginTop: Platform.OS == "android" ? "35%":'50%' }}>
          <Image
            source={require("../assets/images/Logo.png")}
            resizeMode="contain"
            style={{ height: 50 }}
          />
        </View>
        <View style={styles.FieldContainer}>
          <TextInput placeholder="Enter Mobile No." style={styles.inputField} keyboardType="number-pad" />
         
          
          {/* <Ionicons name="ios-eye-sharp" size={32} color="#8B8B8B" style={{marginLeft:'75%',height:29,marginTop:-9}} /> */}
         
        </View>
         <View style={{padding:23}}>
        <TouchableOpacity style={styles.button}>
          <Text style={{alignSelf:'center',color:'white'}}>Get Otp</Text>
        </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
            <Text style={{alignSelf:'center'}}>Login using Email and Password</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpLogin;

const styles = StyleSheet.create({
  inputField: {
    padding: 23,
    borderRadius: 13,
    backgroundColor: "#F6F6F6",
    marginTop:10
  },
  FieldContainer: {
    padding: 23,
    marginBottom:-28
  },
  button: {
    padding: 23,
    borderRadius: 13,
    backgroundColor: "#32B7BA",
    
  },
});