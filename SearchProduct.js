'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';


export default class SearchProduct extends Component<{}> {

  render(){
    var price;
    if(this.props.listings.price_formatted != null){
      price = this.props.listings.price_formatted.split(' ')[0];
    }
    else{
      price = this.props.listings.price_formatted
    }
    return (
      <View>
        <View style={styles.imageView}>
          <Image style={styles.image} source={{ uri: this.props.listings.img_url }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.title}
              numberOfLines={0}>{this.props.listings.title}</Text>
        </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({

  image: {
    height: 300,
    width: 300,
    marginLeft: 10,
    marginTop: 10
  },
  imageView: {

  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC',
    marginTop: 10,
    marginLeft: 10
  },

  title: {
    fontSize: 20,
    color: '#656565',
    marginTop: 10,
    marginLeft: 10
  },

});