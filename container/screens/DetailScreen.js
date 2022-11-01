/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Details = props => {
  const PRODUCT_ID = props.route.params.product_id;
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const url =
      'http://staging.php-dev.in:8844/trainingapp/api/products/getDetail?product_id='+ PRODUCT_ID;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (json.status == 200) {
          setProductData(json.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'red'} />
      {!loading ? (
        <>
          <Image
            source={{
              uri: 'http://staging.php-dev.in:8844/trainingapp/uploads/prod_img/thumb/medium/9dc6234da018916e545011fa1.jpeg',
            }}
            resizeMode="contain"
            style={styles.imageStyle}
          />

          <View style={{padding: 10}}>
            <View style={[styles.rowView, {justifyContent: 'space-between'}]}>
              <Text style={styles.nameStyling}>{productData.name}</Text>
              <Image
                source={require('../utility/images/heart.png')}
                resizeMode="contain"
                style={styles.iconStyling}
              />
            </View>

            <Text style={styles.producerStyling}>{productData.producer}</Text>

            <View style={[styles.rowView, {justifyContent: 'space-between'}]}>
              <Text style={styles.costStyling}>{`Rs.${productData.cost}`}</Text>
              <Text
                style={
                  styles.costStyling
                }>{`Ratings.${productData.rating}`}</Text>
            </View>

            <Text style={styles.producerStyling}>
              {productData.description}
            </Text>
          </View>
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="small" color="red" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomLine: {
    height: 0.5,
    backgroundColor: '#D3D3D3',
  },
  imageStyle: {
    height: windowHeight * 0.3,
    width: windowWidth * 0.8,
    alignSelf: 'center',
  },
  nameStyling: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  producerStyling: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
  },
  costStyling: {
    fontSize: 17,
    fontWeight: '800',
    color: 'red',
  },
  iconStyling: {
    height: 25,
    width: 25,
  },
});
export default Details;
