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