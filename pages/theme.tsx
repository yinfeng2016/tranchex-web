import {extendTheme} from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const fonts = {
    action: `Urbanist`, 
    desc: 'DM Sans',
    foot: `'Rubik', sans-serif`,
    heading: 'PalanquinDark', 
    body: `'Plus Jakarta Sans', sans-serif`,
}

const breakpoints = {
    xs: '20em',
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
}

const colors = {
    lightblue: '#01B7FF',
    foreBlack: "#171717",
    mainColor: "#4B2EF5"
}

const width = { maxWidth: "1000px" }

export const theme = extendTheme({
    initialColorMode: "dark",
    semanticTokens: {
        colors: {
            // text: {
            //     default: '#16161D',
            //     _dark: '#ffffff',
            // },
            primary: {
                default: colors.mainColor,
                _dark: '#ffffff',
            },
            background: "white"
        },
    },
    styles: {
        global: (props: any) => ({
            // Optionally set global CSS styles
            body: {
                // color: mode(
                //     colors.backBlack,
                //     "#ffffff")(props),
            },
        }),
    },
    components: {
        Button: {
            variants: {
              // override existing variants
              solid: (props: StyleFunctionProps) => ({
                bg: colors.mainColor,
                color: "white"
              }),
              outline: (props: StyleFunctionProps) => ({
                bg: "white",
                color: colors.mainColor,
              })
            }
        },
    },
    colors,
    fonts,
    breakpoints,
    width
})


