import { useState, useEffect } from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import Header from './Header';
import Footer from './Footer';
import { NBR_OF_SCOREBOARD_ROWS, SCOREBOARD_KEY } from "../constants/Game";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from '../style/style';

export default Scoreboard = ({ navigation }) => {

    const [scores, setScores] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getScoreboardData();
        });
        return unsubscribe;
      }, [navigation]);

    const getScoreboardData = async() => {
        try {
            const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY);
            if (jsonValue !== null) {
                let tmpScores = JSON.parse(jsonValue);
                setScores(tmpScores);
            }
        }
        catch(e) {
            console.log('Read error: ' + e);
        }
    }

    const clearScoreboard = async() => {
        try{
            await AsyncStorage.clear();
            setScores([]);
        }
        catch(e) {
            console.log('Clear error: ' + e);
        }
    }



    return(
        <ScrollView>
        <>
            <Header />
                <View style={styles.scoreboardBox}>
                    { scores.length === 0 ?
                        <Text style={[styles.text, styles.scoreboardEmptyText]}>Scoreboard is empty</Text>
                        :
                        scores.map((player, index) => (
                            index < NBR_OF_SCOREBOARD_ROWS &&
                            <DataTable.Row style={styles.scoreboardBox} key={player.key} >
                                <DataTable.Cell><Text style={[styles.text, styles.scoreboardText]}>{index + 1}.</Text></DataTable.Cell>
                                <DataTable.Cell><Text style={[styles.text, styles.scoreboardText]}>{player.name}</Text></DataTable.Cell>
                                <DataTable.Cell><Text style={[styles.text, styles.scoreboardText]}>{player.date}</Text></DataTable.Cell>
                                <DataTable.Cell><Text style={[styles.text, styles.scoreboardText]}>{player.time}</Text></DataTable.Cell>
                                <DataTable.Cell><Text style={[styles.text, styles.scoreboardText]}>{player.points}</Text></DataTable.Cell>
                            </DataTable.Row>
                        ))

                    }
                </View>
                <View>
                    <Pressable
                    style={[styles.button, styles.throwDicesButton]}
                    onPress={()=> clearScoreboard()}>
                        <Text style={styles.buttonText}>CLEAR SCOREBOARD</Text>
                    </Pressable>

                </View>
            <Footer />
        </>
        </ScrollView>
    )
}