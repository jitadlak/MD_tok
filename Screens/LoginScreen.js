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

const LoginScreen = ({navigation}) => {
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
          <TextInput placeholder="Username" style={styles.inputField} />
          <View style={{...styles.inputField,flexDirection:'row',height:60}}>
          <TextInput placeholder="Password"  />
          {/* <Ionicons name="ios-eye-sharp" size={32} color="#8B8B8B" style={{marginLeft:'75%',height:29,marginTop:-9}} /> */}
          </View>
        </View>
         <View style={{padding:23}}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('TabNavigatorS')}>
          <Text style={{alignSelf:'center',color:'white'}}>Log In</Text>
        </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('OtpLogin')}>
            <Text style={{alignSelf:'center'}}>Login using Phone number</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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