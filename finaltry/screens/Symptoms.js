
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SkinTypes = ['Oily', 'Dry', 'Normal'];
const BreakoutLocations = ['Chin', 'Forehead', 'Cheeks', 'Nose', 'Back', 'Chest'];
const Redness = ['Yes', 'No'];

const SkinTypeButton = ({label, isSelected, onPress}) => (
    <TouchableOpacity
        onPress = {onPress}
        style = {[styles.button, isSelected ? styles.selectedButton : null]}
    >
        <Text style={[styles.buttonText, isSelected ? styles.selectedButtonText : null]}>{label}</Text>
    </TouchableOpacity>
);

const BreakoutLocationButton = ({ label, isSelected, onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isSelected ? styles.selectedButton : null]}
    >
      <Text style={[styles.buttonText, isSelected ? styles.selectedButtonText : null]}>{label}</Text>
    </TouchableOpacity>
  );
  
  const DrynessOptionButton = ({ label, isSelected, onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isSelected ? styles.selectedButton : null]}
    >
      <Text style={[styles.buttonText, isSelected ? styles.selectedButtonText : null]}>{label}</Text>
    </TouchableOpacity>
  );

export default function Symptoms() {
    const [selectedSkinType, setSelectedSkinType] = useState('');
    const [selectedBreakoutLocations, setSelectedBreakoutLocations] = useState([]);
    const [selectedDrynessOption, setSelectedDrynessOption] = useState('');
  
    const toggleBreakoutLocation = (location) => {
      const isSelected = selectedBreakoutLocations.includes(location);
  
      if (isSelected) {
        setSelectedBreakoutLocations(selectedBreakoutLocations.filter((l) => l !== location));
      } else {
        setSelectedBreakoutLocations([...selectedBreakoutLocations, location]);
      }
    };

    return (
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Select your skin type</Text>
    
            {SkinTypes.map((type) => (
              <SkinTypeButton
                key={type}
                label={type}
                isSelected={selectedSkinType === type}
                onPress={() => setSelectedSkinType(type)}
              />
            ))}
          </View>
          <View style={styles.section}>
            
        <Text style={styles.sectionTitle}>Select the location of your breakouts</Text>

        {BreakoutLocations.map((location) => (
          <BreakoutLocationButton
            key={location}
            label={location}
            isSelected={selectedBreakoutLocations.includes(location)}
            onPress={() => toggleBreakoutLocation(location)}
          />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Are you experiencing skin dryness?</Text>

        {Redness.map((option) => (
          <DrynessOptionButton
            key={option}
            label={option}
            isSelected={selectedDrynessOption === option}
            onPress={() => setSelectedDrynessOption(option)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    section: {
      marginBottom: 32,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#eee',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginBottom: 16,
    },
})