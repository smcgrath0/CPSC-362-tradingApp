import { StyleSheet } from 'react-native';
import { useContext } from 'react';

import WatchList from '../components/WatchList';
import { Text, View } from '../components/Themed';
import { StockContext } from '../navigation/Context';

export default function WatchListScreen() {
  const { user, setUser } = useContext(StockContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watch List</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.watchListContainer}>
        <WatchList type="watchList50Day" list={user?.watchList50Day} />
        <WatchList type="watchList200Day" list={user?.watchList200Day}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  watchListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
