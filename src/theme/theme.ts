import { extendTheme } from "native-base";


export const Theme = extendTheme({
    components: {
        Heading: {
            baseStyle: (props: any) =>{
                return {
                    _light : {color: '#1F1F1F'},
                    _dark : {color: '#FFFFFF'},
                }
            }
        },

    },
    colors: {
        gray: {
            300: '#8D8D99'
        },
        blue: {
            500: '#339CFF',
            800: '#0B3B60'
        },
    }, 
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    },
    
    config: {
        initialColorMode: 'light'
    }
})