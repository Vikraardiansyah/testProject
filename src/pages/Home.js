import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Divider, Button} from 'react-native-elements';
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Text,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {dataDate} from '../data/Date';

const Home = ({navigation}) => {
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');

  const handleClick = (item) => {
    setDate(item.date);
    if (hour === '') {
      setHour(item.hour);
    } else if (hour === item.hour && date === item.date) {
      setHour('');
    } else {
      setHour(item.hour);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleClick(item)}>
      <View style={styles.detailTab}>
        <View style={styles.list}>
          <Text style={styles.text}>{item.hour}</Text>
          <Divider style={styles.divider} />
        </View>
        {hour === item.hour && date === item.date ? (
          <View style={styles.detail}>
            <View style={styles.line} />
            <Text style={styles.textDetail}>{item.detail}</Text>
          </View>
        ) : (
          <View style={styles.emptyDetail} />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <Container style={styles.container}>
      <Header hasTabs style={styles.header} androidStatusBarColor="#37004d">
        <Left>
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={24}
              color="white"
              onPress={() => navigation.navigate('Maps')}
            />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title>Pick a Time</Title>
        </Body>
        <Right />
      </Header>
      <Tabs
        renderTabBar={() => <ScrollableTab />}
        tabBarUnderlineStyle={styles.tabs}>
        {dataDate.map((data) => (
          <Tab
            key={data.date}
            heading={
              <View style={styles.textTabView}>
                <Text style={styles.textTab}>{data.day}</Text>
                <Text style={styles.textTab}>{data.date}</Text>
              </View>
            }
            style={styles.tab}
            tabStyle={styles.tabs}>
            <FlatList
              data={data.time}
              renderItem={renderItem}
              keyExtractor={(item) => item.hour}
            />
          </Tab>
        ))}
      </Tabs>
      <Button
        title="Choose Location"
        buttonStyle={styles.button}
        titleStyle={styles.titleButton}
        onPress={() => navigation.navigate('Maps')}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
  },
  header: {
    backgroundColor: '#37004d',
    height: 100,
  },
  tabs: {
    backgroundColor: '#37004d',
  },
  tab: {
    backgroundColor: '#F4F4F4',
    paddingTop: 10,
  },
  detailTab: {
    marginBottom: 3,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 7,
  },
  detail: {
    borderRadius: 1,
    elevation: 1,
    flex: 1,
    flexDirection: 'row',
    marginLeft: 60,
    marginTop: -3,
    marginRight: 20,
    backgroundColor: 'white',
  },
  emptyDetail: {
    height: 52,
  },
  line: {
    borderRadius: 5,
    width: 5,
    marginTop: 1,
    marginBottom: -1,
    height: 55,
    padding: 2,
    backgroundColor: '#37004d',
  },
  divider: {
    flex: 1,
    backgroundColor: 'grey',
    marginLeft: 10,
    marginRight: 20,
  },
  text: {
    color: 'grey',
    fontSize: 12,
    width: 45,
    marginTop: -10,
    paddingLeft: 5,
  },
  textTabView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: 10,
    backgroundColor: '#37004d',
    width: 120,
  },
  textTab: {
    fontSize: 12,
  },
  textDetail: {
    marginLeft: 20,
    textAlignVertical: 'center',
    color: 'gray',
    fontSize: 12,
  },
  button: {
    marginHorizontal: 50,
    marginVertical: 10,
    backgroundColor: '#37004d',
    borderRadius: 10,
  },
  titleButton: {
    fontSize: 13,
    marginVertical: 5,
  },
});

export default Home;
