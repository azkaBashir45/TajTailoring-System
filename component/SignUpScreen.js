import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Label, Item, Input,Button,Text } from 'native-base';


export default class SignUpScreen extends Component{
    render(){
  return (
      
    <KeyboardAvoidingView
    behavior="position"
     style={styles.container}>
         
       <View style={{marginTop:"25%",backgroundColor:"#F4F4F0",borderRadius:10,padding:20,margin:20,height:"70%"}}>
       <Text style={{justifyContent:"center",textAlign:"center",fontSize:"30sp",fontWeight:"bolds"}}>Create a New Account</Text>
              <Item  style={styles.itemInput} floatingLabel>
              <Label style={styles.labelstyle}>Full Name</Label>
              <Input />
             </Item>
            <Item  style={styles.itemInput} floatingLabel>
              <Label>Email</Label>
              <Input keyboardType="email-address"/>
            </Item>
            <Item 
            style={styles.itemInput} floatingLabel>
              <Label>Phone Number</Label>
              <Input keyboardType="number-pad" />
            </Item>
            <Item style={styles.itemInput} floatingLabel>
              <Label>Password</Label>
              {/* //password hidden */}
              <Input keyboardType="visible-password" secureTextEntry={true} />
            </Item>
            <Item style={styles.itemInput} floatingLabel>
              <Label>Confirm Password</Label>
              <Input />
            </Item>
            <Button onPress={()=>this.props.navigation.navigate('Login')} style={{margin:10,width:"80%",backgroundColor:"#3D66F5"}}rounded success>
            <Text>Sign Up</Text>
            </Button>
            <Button onPress={()=>this.props.navigation.navigate('Login')} style={{margin:10,width:"80%",backgroundColor:"#3D66F5"}}rounded success>
            <Text>Login</Text>
            </Button>
            </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99FFEB'
  },
  itemInput:{
    marginTop:20
},
labelstyle:{
  marginLeft:5,
  color:"#0C0B0B"
}
});
