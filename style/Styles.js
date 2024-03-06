import { StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";

export default Style = StyleSheet.create( {
        navigation: {
          flex: 1
        },

        container: {
          flex: 1,
          marginLeft: 10,
          marginRight: 10,
          alignItems: 'stretch',
        },
        
        header: {
          fontSize: 26,
          marginBottom: 20,
          marginTop: 10,
          fontFamily: 'OpenSansSemiBold'
        },

        formFields: {
          marginTop: 15,
          fontSize: 15,
          fontFamily: 'OpenSansSemiBold',
          marginBottom: 15
        },

        textInput: {
          marginTop: 15,
        },

        summaryCard: {
          flex: 1,
          marginHorizontal: 5,
        },

        card: {
          marginVertical: 10,
          padding: 10,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#538c5b',
        },

        summaryRow: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 10,
        },

        circularSummary: {
          alignItems: 'center',
          marginHorizontal: 10, 
        },
         
        summaryText: {
          marginTop: 10,
          fontSize: 20,
          textAlign: 'center', 
          fontFamily: 'OpenSansSemiBold'
        },

        dateSelectorContainer: {
          marginTop: 20,
          alignItems: 'stretch',
          textAlign: 'left',
        },

        modalContainer: {
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 50,
          padding: 20,
        },

        calendar: {
          marginTop: 25,
        },

        addButton: {
          fontFamily: 'OpenSansSemiBold',
          fontSize: 20,
          padding: 5
        },

        unitContainer: {
          borderWidth: 2, 
          borderRadius: 10,
          borderColor: '#538c5b',
          padding: 5,
        },
        
        radioStyle: {
          flexDirection: 'row',
          alignItems: 'center',
        },

        newFont: {
          fontFamily: 'OpenSansSemiBold',
          fontSize: 15
        }
});
    
      export const MyTheme = {
        ...MD3LightTheme,
        roundness: 2,
        colors: {
            ...MD3LightTheme.colors,
            primary: '#538c5b',
            surfaceVariant: '#000000',
            onSurface: '#538c5b',
            secondaryContainer: '#538c5b',
        },
    }