import React from 'react'
import { Tabs } from 'expo-router'
import { Image, StyleSheet } from 'react-native'
import { CartProvider } from '../../context/cartContext'
import { NavigationContainer } from '@react-navigation/native'

const Tablayout = () => {
  return (
    <CartProvider>
        <Tabs
            screenOptions={{
                headerShown:false, //this will remove the header of the individual tabs
                tabBarActiveTintColor : styles.focused,
                tabBarLabelStyle : styles.label
            }}  
        >
            <Tabs.Screen name='product'
                options={{
                    tabBarLabel:'product',
                    tabBarIcon : ()=>
                    <Image 
                        source={require('../../assets/icons/product.png')}
                        style={styles.icon} 
                    />
                }} 
            />
            <Tabs.Screen name='checkout' 
                options={{
                    tabBarLabel:'checkout',
                    tabBarIcon : ()=>
                    <Image 
                        source={require('../../assets/icons/checkout.png')}
                        style={styles.icon} 
                    />
                }}
            />
        </Tabs> 
    </CartProvider>
  )
}

export default Tablayout

const styles = StyleSheet.create({
    icon :{
        width:20,
        height:20,
    },
    label :{
        fontSize:18,
        fontFamily:'outfit',
        fontWeight : 900,
        textTransform:'uppercase'
    },
    focused : '#7F57F1'
})