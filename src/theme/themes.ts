const colors = {
    red: '#EB212E',
    blue: '#2E67F8',
    yellow: '#FFE81F',
    white: '#FFFFFF',
    grayLight: '#EEEEEE',
    grayDark: '#373737',
    black: '#111111',
}

export const themes = {
    primaryColors: {
        red: colors.red,
        blue: colors.blue,
        yellow: colors.yellow,
    },
    light: {
        bodyBackground: colors.white,
        background: colors.yellow,
        outline: colors.grayDark,
        font: colors.grayDark,
        primary: colors.blue
    },
    dark: {
        bodyBackground: colors.grayDark,
        background: colors.black,
        outline: colors.yellow,
        font: colors.grayLight,
        primary: colors.red
    }
}