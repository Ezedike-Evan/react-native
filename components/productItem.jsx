import React from 'react'
import { View, Text , Image, StyleSheet, TouchableOpacity } from 'react-native'

const ProductItem = ({ product , addToCart })=>{
  return (
    <View style={styles.product}>
        <View>
            <Image 
                source={product.imageUrl}
                style={styles.image} 
            />
        </View>
        <Text
            style={styles.price}
        >
            Price : ${product.price}
        </Text>
        <TouchableOpacity
            style={styles.button}
            onPress={()=> addToCart(product)} 
        >
            <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    product: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      margin: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
    },
    price : {
        fontSize: 25,
        fontFamily:'outfit',
        textAlign:'center',
        marginVertical:10
    },
    button:{
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText:{
        color:'white',
        fontSize:18,
        fontFamily:'outfit',
    },
    image: {
      width: 140,
      height: 140,
    }
})