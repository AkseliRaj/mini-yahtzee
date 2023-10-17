import { useState } from "react";
import { TextInput, Text, View, Pressable, Keyboard, ScrollView } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from './Header';
import Footer from './Footer';
import { NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS, BONUS_POINTS_LIMIT } from "../constants/Game";
import styles from '../style/style';

export default Home = ({ navigation }) => {

    const [playerName, setPlayerName] = useState('');
    const [hasPlayerName, setHasPlayerName] = useState(false);

    const handlePlayerName = (value) => {
        if (value.trim().length > 0 ) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    }

    return(
        <>
        <ScrollView>
            <Header />
            <View style={styles.homeContainer}>
                <View style={styles.homeContent}>
                    <MaterialCommunityIcons name="information-outline" size={80} color="white" />
                    {!hasPlayerName ?
                    <>
                        <Text style={[styles.text, styles.homeText]}>For scoreboard enter your name</Text>
                        <TextInput style={styles.textInput} onChangeText={setPlayerName} autoFocus={true} />
                        <Pressable
                            style={styles.button}
                            onPress={ () => handlePlayerName(playerName) }
                            ><Text style={styles.buttonText}>OK</Text>
                        </Pressable>
                    </>
                    :
                    <>
                        <View style={styles.ruleTextContainer}>
                            <Text style={[styles.text, styles.rulesText]}>Rules of the game...</Text>
                            <Text style={[styles.text, styles.rulesText]} multiline="true">
                            THE GAME: Upper section of the classic Yahtzee
                            dice game. You have {NBR_OF_DICES} dices and
                            for the every dice you have {NBR_OF_THROWS}
                             throws. After each throw you can keep dices in
                            order to get same dice spot counts as many as
                            possible. In the end of the turn you must select
                            your points from {MIN_SPOT} to {MAX_SPOT}.
                            Game ends when all points have been selected.
                            The order for selecting those is free.
                            </Text>
                            <Text style={[styles.text, styles.rulesText]} multiline="true">
                            POINTS: After each turn game calculates the sum
                            for the dices you selected. Only the dices having
                            the same spot count are calculated. Inside the
                            game you can not select same points from
                            {MIN_SPOT} to {MAX_SPOT} again.
                            </Text>
                            <Text style={[styles.text, styles.rulesText]} multiline="true">
                            GOAL: To get points as much as possible.
                            {BONUS_POINTS_LIMIT} points is the limit of
                            getting bonus which gives you {BONUS_POINTS}
                            points more.
                            </Text>
                            <Text style={[styles.text, styles.rulesText]}>Good luck, {playerName}</Text>
                        </View>
                        <Pressable
                            style={styles.button}
                            onPress={()=> navigation.navigate('Gameboard', {player: playerName})}
                        >
                            <Text style={styles.buttonText}>PLAY</Text>
                        </Pressable>

                    </>

                    }
                </View>
            </View>
            <View>
                <Footer />
            </View>
        </ScrollView>
        </>
    )

}