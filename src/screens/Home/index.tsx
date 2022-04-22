import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { api } from '../../services/api';

import { styles } from './styles';
import { ListItem } from '../../components/ListItem';
import { SearchBar } from '../../components/SearchBar';
import { Divider } from '../../components/Divider';

type ShowItem = {
    id: number;
    url: string;
    name: string;
    type: string;
    genres: [string];
    image: {
        medium: string;
    };
    status: string;
    rating: {
        average: number;
    };
}

export function Home(){

    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const [shows, setShows] = useState<ShowItem []>([]);

    async function fetchShows() {

        setLoading(true);
        try{
            const response = await api.get(`shows?page=${page}`);

            setShows(prevState => prevState.concat(...response.data));

            setPage(page + 1);
        }catch(error){

            console.log(error);

        }finally{

            setLoading(false);

        };
    };

    useEffect(() => {fetchShows();}, []);

    const [search, setSearch] = useState('');

    async function fetchSearchedShows() {

        setLoading(true);

        try{
            const response = await api.get(`search/shows?q=${search}`);

            setShows(response.data);

        }catch(error){

            console.log(error);

        }finally{

            setLoading(false);

        };
    };



    return(
        <View style={styles.container}>
            <StatusBar style='light'/>
            <SearchBar onChangeText={(text) => setSearch(text)} onSubmitEditing={() => fetchSearchedShows()} />
            <FlatList
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.2}
            onEndReached={fetchShows}
            style={{width: '100%'}}
            data={shows}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <ListItem average={item.rating.average} image={item.image.medium} title={item.name} status={item.status} genre={item.genres} />}
            ItemSeparatorComponent={() => <Divider />}
            ListFooterComponent={() => <ActivityIndicator color={'#fff'} size={30} style={styles.itemScrollEnd} />}
             />
        </View>
    )
}