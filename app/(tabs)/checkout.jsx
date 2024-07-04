import React, { useContext } from 'react'
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { CartContext } from '../../context/cartContext'
import { router, useRouter } from 'expo-router'

const Checkout = ()=>{
  const { cart , removeFromCart , clearCart } = useContext(CartContext)

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item })=>(
          <View style={styles.product}>
            <Image 
              source={item.imageUrl}
              style={styles.image} 
            />
            <Text style={{fontFamily:'Outfit',fontSize:17,fontWeight:700}}>Price: ${item.price}</Text>
            <Button title="Remove" onPress={()=>removeFromCart(item.id)} />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Your cart is empty</Text>
          </View>
        }
      />
      {cart.length > 0 && (
        <TouchableOpacity 
          style={styles.checkoutButton}
          onPress={()=>{
            router.push('/order-successful')
          }}
        >
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    paddingHorizontal:10,
    backgroundColor:'white'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 500
  },
  emptyText: {
    fontSize: 38,
    fontFamily:'outfit-bold',
    fontWeight: 'bold',
    color: '#888',
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    margin: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  image:{
    height:50,
    width:50
  }
})