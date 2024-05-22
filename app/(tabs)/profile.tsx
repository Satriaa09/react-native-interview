import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import styles from '../style';

const Profile: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('John Doe');
    const [bio, setBio] = useState('Software Developer');
    const [location, setLocation] = useState('New York');
    const [email, setEmail] = useState('john.doe@example.com');

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    return (
        <View style={styles.containerProfile}>
            <Image style={styles.profileImage} source={require('../../img/profile.png')} />
            <Text style={styles.profileLabel}>Name:</Text>
            <TextInput
                style={[styles.profileInput, !isEditing && styles.disabledInput]}
                value={name}
                onChangeText={setName}
                editable={isEditing}
            />
            <Text style={styles.profileLabel}>Bio:</Text>
            <TextInput
                style={[styles.profileInput, !isEditing && styles.disabledInput]}
                value={bio}
                onChangeText={setBio}
                editable={isEditing}
            />
            <Text style={styles.profileLabel}>Location:</Text>
            <TextInput
                style={[styles.profileInput, !isEditing && styles.disabledInput]}
                value={location}
                onChangeText={setLocation}
                editable={isEditing}
            />
            <Text style={styles.profileLabel}>Email:</Text>
            <TextInput
                style={[styles.profileInput, !isEditing && styles.disabledInput]}
                value={email}
                onChangeText={setEmail}
                editable={isEditing}
            />
            {!isEditing ? (
                <TouchableOpacity style={styles.editButton} onPress={handleEditToggle}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
            ) : (
                <>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleEditToggle}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

export default Profile;
