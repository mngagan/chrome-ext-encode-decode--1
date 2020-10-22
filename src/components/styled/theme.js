export const themeList = ['light', 'dark', "scheme1", "scheme2", "scheme3", "grayRed"]
export const theme = ({ mode = 'light' }) => {

    let colors = {
        primary: '#264653',
        text: '#e76f51',

    }
    if (mode == 'dark') {
        colors = {
            ...colors,
            primary: '#2a9d8f',
            text: '#e9c46a'
        }
    }
    else if (mode == 'scheme1') {
        colors.primary = '#6b705c'
        colors.text = '#b7b7a4'
    }
    else if (mode == 'scheme2') {
        colors.primary = '#1d3557'
        colors.text = '#e63946'
    }
    else if (mode == 'scheme3') {
        colors.primary = 'black'
        colors.text = '#ddbea9'
    }
    else if (mode == 'grayRed') {
        colors.primary = '#2b2d42'
        colors.text = '#d90429'
    }
    let result = {
        colors,
        fonts: ["sans-serif", "Roboto"],
        fontSizes: {
            small: "1em",
            medium: "2em",
            large: "3em"
        }
    }
    return result
}