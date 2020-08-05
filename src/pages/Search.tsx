import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import SearchResult, {SearchResultModel} from '../components/SearchResult';

const searchBg = require('../../assets/images/search-bg.jpg');
const searchIcon = require('../../assets/images/search-icon.png');

const results: SearchResultModel[] = [
  {
    id: 0,
    image: 'http://placehold.it/150x150',
    name: 'Wabi Sabi Restaurant',
    place: 'New York, NY, USA',
    rate: 3,
  },
  {
    id: 1,
    image: 'http://placehold.it/150x150/blue',
    name: 'Swa7a Restaurant',
    place: 'Cairo, Egypt',
    rate: 4,
  },
];

const Search: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const filterHelper = ({name}: {name: string}) => {
    return name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  };

  return (
    <ImageBackground source={searchBg} style={styles.cover}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={value}
            onChangeText={setValue}
            placeholder="Search for restaurant"
            style={styles.input}
          />
          <Image source={searchIcon} style={styles.inputIcon} />
        </View>
        <FlatList
          data={value ? results.filter(filterHelper) : []}
          renderItem={({item, index}) => {
            return <SearchResult key={index} result={item} />;
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: '100%',
    width: '100%',
  },
  container: {
    padding: 15,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 25,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    height: 50,
  },
  inputIcon: {
    height: 24,
    width: 24,
    position: 'absolute',
    top: '50%',
    right: 15,
    transform: [{translateY: -12}],
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default Search;
