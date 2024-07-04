import React, { useContext } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import products from '../../constants/product'
import ProductItem from '../../components/productItem'
import { CartContext } from '../../context/cartContext'

const  Product = ()=>{
  const { addToCart } = useContext(CartContext)

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item })=>(
          <ProductItem
            product={item}
            addToCart={addToCart}
          />
        )}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

export default Product

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    paddingHorizontal:10,
    backgroundColor:'white'
  },
  grid:{
    justify: 'space-between'
  },
})
