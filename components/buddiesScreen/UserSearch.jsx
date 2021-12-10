import React from "react";
import { Text, View } from "react-native";

function UserSearch() {

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
        }}>
            <Text style={{
                color: 'white'
            }}>
                User Search Page
            </Text>
        </View>
    )
}

export default UserSearch