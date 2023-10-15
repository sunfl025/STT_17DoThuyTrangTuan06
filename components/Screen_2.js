import { useState } from "react";
import { Image, View,Text, TouchableOpacity } from "react-native";


const Screen_2 = () => {
    const [image1,setImage] = useState(require('../assets/vs_blue.png'))
    return ( 
        <View style={{flex:1}}>

            <View style={{flex:2.5,margin:"10px"}}>
                <View style={{flexDirection:"row"}}>
                    <Image source={image1} style={{width:"112px",height:"132px"}} resizeMode="contain"></Image>
                    <View style={{marginLeft:"25px"}}>
                        <Text style={{fontWeight:600}}>Điện Thoại Vsmart Joy 3 </Text>
                        <Text style={{fontWeight:600}}>Hàng chính hãng</Text>
                    </View>
                </View>

            </View>

            <View style={{flex:7.5,backgroundColor:"#C4C4C4",padding:"10px"}}>
                <Text style={{fontWeight:400,fontSize:"18px"}}>Chọn một màu bên dưới:</Text>
                <View style={{alignItems:"center",marginTop:"20px",justifyContent:"space-around",height:"360px"}}>
                    <TouchableOpacity style={{width:"85px",height:"80px",backgroundColor:"#C5F1FB"}} onPress={()=>{setImage(require('../assets/vs_silver.png'))}}>
                   </TouchableOpacity>
                    <TouchableOpacity style={{width:"85px",height:"80px",backgroundColor:"#F30D0D"}} onPress={()=>{setImage(require('../assets/vs_red.png'))}}></TouchableOpacity>
                    <TouchableOpacity style={{width:"85px",height:"80px",backgroundColor:"#000000"}} onPress={()=>{setImage(require('../assets/vs_black.png'))}}></TouchableOpacity>
                    <TouchableOpacity style={{width:"85px",height:"80px",backgroundColor:"#234896"}} onPress={()=>{setImage(require('../assets/vs_blue.png'))}}></TouchableOpacity>
                    
                </View>
             
                        <TouchableOpacity style={{backgroundColor:"#1952E2",width:"326px",height:"44px",borderRadius:"10px",alignItems:"center",justifyContent:"center",marginTop:"30px",marginLeft:"20px"}}>
                            <Text style={{fontSize:"20px",fontWeight:"500",color:"#F9F2F2"}}>XONG</Text>
                            
                        </TouchableOpacity>
               
              

            </View>

        </View>
     );
}
 
export default Screen_2;