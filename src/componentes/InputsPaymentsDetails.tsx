import { TextInput, TextInputProps, StyleSheet } from "react-native"

export function Input ({...rest}: TextInputProps){
    return <TextInput style={styles.inputDetails} {...rest} />
}


const styles = StyleSheet.create ({
    inputDetails:{
        height: 48,
    }
})
