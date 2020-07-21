import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import {Container, Header, Left, Body, Title, Right} from 'native-base';
import {Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

const Maps = ({navigation}) => {
  return (
    <Container style={styles.container}>
      <Header hasTabs style={styles.header} androidStatusBarColor="#37004d">
        <Left>
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={24}
              color="white"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title>Direction</Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.mapView}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: -6.117664,
            longitude: 106.906349,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}>
          <Polyline
            coordinates={[
              {latitude: -6.117664, longitude: 106.906349},
              {latitude: -6.121231, longitude: 106.912838},
            ]}
            strokeColor="#37004d"
            strokeColors={['#7F0000']}
            strokeWidth={10}
          />
        </MapView>
      </View>
      <Button
        title="Calender"
        buttonStyle={styles.button}
        titleStyle={styles.titleButton}
        onPress={() => navigation.navigate('Home')}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  mapView: {
    height: 630,
    width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    backgroundColor: '#F4F4F4',
  },
  header: {
    backgroundColor: '#37004d',
    height: 100,
  },
  button: {
    marginHorizontal: 50,
    marginVertical: 30,
    backgroundColor: '#37004d',
    borderRadius: 10,
  },
  titleButton: {
    fontSize: 13,
    marginVertical: 5,
  },
});

export default Maps;
