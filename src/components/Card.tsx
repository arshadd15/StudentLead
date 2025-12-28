import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Pen, Trash } from 'lucide-react-native';

// Structure of the props for card
type cardProps = {
  id: string;
  name: string;
  email: string;
  role: string;
  onEdit: () => void;
  onDelete: () => void;
};

const Card = ({ name, email, role, onEdit, onDelete }: cardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
        }}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.details}>{email}</Text>
        <Text style={styles.details}>{role}</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={onEdit}>
          <Pen size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={onDelete}>
          <Trash size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
    color: '#666',
  },
  actionContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    padding: 5,
  },
});
