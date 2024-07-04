import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { router, useRouter } from 'expo-router'
const OrderSuccessfulScreen = ()=>{
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Order Successful!</Text>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.push('/product')}
      >
        <Text style={styles.buttonText}>Back to Products</Text>
      </TouchableOpacity>
    </View>
  );
}

export default OrderSuccessfulScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
