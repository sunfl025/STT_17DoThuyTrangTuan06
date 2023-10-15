
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";



const Screen_4= ({navigation,route}) =>{
    
    useEffect(() => {
        if(route.params?.image){
            console.log(route.params?.image)
        }
    },[route.params?.image])

    
    
  return (
    <View style={{flex:1}}>
        <View style={{flex:6,marginTop:"10px"}}>
            <View style={{alignItems:"center"}}>
                <Image style={{width:"301px",height:"361px"}} source={route.params?.image || require('../assets/vs_red.png')} resizeMode="contain"></Image>
               
            </View>
            <View style={{alignItems:"center",marginTop:"10px"}}>
                    <Text style={{fontSize:"16px",fontWeight:700}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>
           
        </View>
       <View  style={{flex:4}}>
                <View style={{justifyContent:"center"}}>
                    <View style={{flexDirection:"row",marginLeft:"20px",justifyContent:"space-around",width:"300px"}}>
                        <TouchableOpacity>
                            <Image source={require("../assets/star.png") } style={{width:"23px",height:"25px"}}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../assets/star.png") } style={{width:"23px",height:"25px"}}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../assets/star.png") } style={{width:"23px",height:"25px"}}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../assets/star.png") } style={{width:"23px",height:"25px"}}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../assets/star.png") } style={{width:"23px",height:"25px"}}></Image>
                        </TouchableOpacity>
                    
                        <View style={{marginLeft:"25px"}}>
                            <TouchableOpacity>
                                    <Text style={{fontSize:"15px",fontWeight:500}}>(Xem 828 đánh giá)</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:"row",marginTop:"20px"}}>
                        <Text style={{fontSize:"18px",fontWeight:700,fontFamily:"Roboto",marginLeft:"20px"}}>1.790.000 đ</Text>
                        <Text style={{marginLeft:"20px",textDecorationLine:"line-through"}}>1.790.000 đ</Text>
                    </View>
                    <View style={{marginTop:"10px", flexDirection:"row"}}>
                       <TouchableOpacity>
                        <Text style={{fontFamily:"Roboto",fontSize:"20px",fontWeight:800,color:"#FA0000",marginLeft:"20px"}}>
                            Ở ĐÂU RẺ HƠN HOÀN TIỀN
                        </Text>
                            
                       </TouchableOpacity>
                       <Image source={require("../assets/Group 1.png")} style={{width:"20px",height:"20px",marginLeft:"10px"}}></Image>
                    </View>
                 
                    <View >
                        <TouchableOpacity style={{borderWidth:1,width:"332px",height:"34px",borderRadius:"10px",alignItems:"center",justifyContent:"center",marginLeft:"25px",borderColor:"#C4C4C4",marginTop:"15px"}}
                        onPress={()=> navigation.navigate('Screen_3')}>
                            <Text style={{fontSize:"15px",fontWeight:700}}>4 MÀU-CHỌN MÀU</Text>
                            <Image source={require("../assets/Vector.png")} style={{width:"11.5px",height:"14px",position:"absolute",right:"15px"}}></Image>
                        </TouchableOpacity>
                        
                    </View>
                   
                    <TouchableOpacity style={{backgroundColor:"#CA1536",width:"326px",height:"44px",borderRadius:"10px",alignItems:"center",justifyContent:"center",marginTop:"50px",marginLeft:"30px"}}
                    >
                       
                            <Text style={{fontSize:"20px",fontWeight:"500",color:"#F9F2F2"}}>CHỌN MUA</Text>
                            
                        
                    </TouchableOpacity>
                    
                </View>
       </View>
    </View>

  );
}
export default Screen_4

