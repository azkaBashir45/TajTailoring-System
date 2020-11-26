import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { KeyboardAvoidingView, StyleSheet, View ,Text} from 'react-native';
import { Label, Item, Input,Button } from 'native-base';

export default class LoginScreen extends Component{
    render(){
  return (
    <KeyboardAvoidingView
       behavior="position"
     style={styles.container}>
        
       <View style={{marginTop:"25%",backgroundColor:"#F4F4F0",borderRadius:10,padding:20,margin:20,height:"60%"}}>
          
            <Item  style={styles.itemInput} floatingLabel>
              <Label>Email</Label>
              <Input keyboardType="email-address"/>
            </Item>
            <Item style={styles.itemInput} floatingLabel>
              <Label>Password</Label>
              {/* //password hidden */}
              <Input keyboardType="visible-password" secureTextEntry={true} />
            </Item>
            <Button onPress={()=>this.props.navigation.navigate('Login')}  style={{margin:10,width:"90%",justifyContent:"center", backgroundColor:"#3D66F5"}}rounded success>
            <Text>Login</Text>
            </Button>
            <Button onPress={()=>this.props.navigation.navigate('SignUp')} style={{margin:8,width:"90%",justifyContent:"center",color:"#ffff", backgroundColor:"#3D66F5"}}rounded success>
            <Text>Sign Up</Text>
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
