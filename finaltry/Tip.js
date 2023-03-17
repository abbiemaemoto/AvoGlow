import { StyleSheet, Text, View, Image } from 'react-native';

export default function Tip({ name, description, imageUrl, id }) {
    return (
        <View style={styles.item}>
            <View style={styles.textSection}>
                <Text style={styles.name}>{name}</Text>
                <Image style={styles.image} source={imageUrl}/>
                <Text style={styles.info}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#D05F66',
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
        marginBottom: 10,
    }
})