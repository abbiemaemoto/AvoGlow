import { StyleSheet, Text, View, Image } from 'react-native';

export default function Tip({ name, description, imageUrl, id }) {
<<<<<<< HEAD
    return (
        <View style={styles.item}>
            <View style={styles.textSection}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.info}>
                    <Text>{description}</Text>
                </View>
            </View>
{/*             <Image style={styles.image} source={imageUrl}/> */}
=======
    return (
        <View style={styles.item}>
            <View style={styles.textSection}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.info}>{description}</Text>

            </View>
>>>>>>> ce010ef6 (Evelyn)
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
        fontFamily: 'AvenirNext-DemiBold',
        color: 'white',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        fontFamily: 'AvenirNext-Regular',
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