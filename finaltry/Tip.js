import { StyleSheet, Text, View, Image } from 'react-native';

export default function Tip({ name, description, imageUrl, id }) {
    return (
        <View style={styles.item}>
            <View style={styles.textSection}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.info}>
                    <Text>{description}</Text>
                </View>
            </View>
            <Image style={styles.image} source={imageUrl}/>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F28482',
        padding: 16,
        marginVertical: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        borderRadius: 10,
    },
    textSection: {
        flex: 1,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        color: 'white',
        padding: 4,
    },
    image: {
        width: 80,
        height: 80,
        margin: 5,
        resizeMode: 'contain',
    }
})