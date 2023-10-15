import { useState } from "react";
import { Image, View,Text, TouchableOpacity } from "react-native";


const Screen_3 = ({navigation,route}) => {

    const [image,setImage] = useState(require('../assets/vs_blue.png'))
    const [colorName,setColorName] = useState("xanh")

    
    return ( 
        <View style={{flex:1}}>

            <View style={{flex:2.5,margin:"10px"}}>
                <View style={{flexDirection:"row"}}>
                    <Image source={image} style={{width:"112px",height:"132px"}} resizeMode="contain"></Image>
                    <View style={{marginLeft:"25px",height:"160px",justifyContent:"space-around"}}>
                        <Text style={{fontWeight:600}}>Điện Thoại Vsmart Joy 3 </Text>
                        <Text style={{fontWeight:600}}>Hàng chính hãng</Text>
                        <View style={{flexDirection:"row"}}>
                            <Text>Màu: </Text>
                            <Text style={{fontWeight:700}}>{colorName}</Text>

                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text>Cung cấp bởi </Text>
                            <Text style={{fontWeight:700}}>Tiki Tradding</Text>

                        </View>
                        <Text style={{fontSize:"18px",fontWeight:700}} >1.790.000 đ</Text>
                    </View>
                </View>

            </View>

            <View style={{flex:7.5,backgroundColor:"#C4C4C4",padding:"10px"}}>
                <Text style={{fontWeight:400,fontSize:"18px"}}>Chọn một màu bên dưới:</Text>
                <View style={{alignItems:"center",marginTop:"20px",justifyContent:"space-around",height:"360px"}}>
                    <TouchableOpacity style={{width:"85px",height:"80px",backgroundColor:"#C5F1FB"}} onPress={()=>{setImage(require('../assets/vs_silver.png'),setColorName("bạc"))}}>
                   </TouchableOpacity>
                    <TouchableOpacity style={{width:"85px",height:"80px",backgroundColor:"#F30D0D"}} onPress={()=>{setImage(require('../assets/vs_red.png'),setColorName("đỏ"))}}></TouchableOpacity>
                    <TouchableOpacity style={{width:"85px",height:"80px",backgroundColor:"#000000"}} onPress={()=>{setImage(require('../assets/vs_black.png'),setColorName("đen"))}}></TouchableOpacity>
                    <TouchableOpacity style={{width:"85px",height:"80px",backgroundColor:"#234896"}} onPress={()=>{setImage(require('../assets/vs_blue.png'),setColorName("xanh"))}}></TouchableOpacity>
                                  
                </View>
             
                        <TouchableOpacity style={{backgroundColor:"#1952E2",width:"326px",height:"44px",borderRadius:"10px",alignItems:"center",justifyContent:"center",marginTop:"30px",marginLeft:"20px"}}
                        onPress={() => {
                            // Pass and merge params back to home screen
                            navigation.navigate({
                              name: 'Screen_4',
                              params: { image: image },
                              merge: true,
                            });
                          }}>
                            <Text style={{fontSize:"20px",fontWeight:"500",color:"#F9F2F2"}}>XONG</Text>
                            
                        </TouchableOpacity>
               
              

            </View>

        </View>
     );
}
 
export default Screen_3;