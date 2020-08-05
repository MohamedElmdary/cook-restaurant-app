import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MenuItem from '../components/MenuItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

export class MenuModel {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public image: string = 'http://placehold.it/250x250',
  ) {}
}

const menuData: MenuModel[] = [
  new MenuModel(0, 'Menu 0', 8),
  new MenuModel(1, 'Menu 1', 6),
  new MenuModel(2, 'Menu 2', 5.4),
  new MenuModel(3, 'Menu 3', 3),
  new MenuModel(4, 'Menu 4', 22),
  new MenuModel(5, 'Menu 5', 6),
  new MenuModel(6, 'Menu 6', 13),
  new MenuModel(7, 'Menu 7', 16),
  new MenuModel(8, 'Menu 8', 17),
];

const RestaurantMenu = () => {
  const [menu] = useState<MenuModel[]>(menuData);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {menu.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default RestaurantMenu;
