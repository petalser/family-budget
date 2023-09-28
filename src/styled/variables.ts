type Color = {
    textDefault: string,
    bgDefault: string,
    borderDefault: string
}

type Sizes = {
    textDefault: string,
    buttonHeight: string,
    borderRadSmall: string,
    gap: string
}

type Constatns = {
    colors: Color,
    sizes: Sizes
}

const scale: number = 2
const vars: Constatns = {
    colors: {
        textDefault: "#030",
        bgDefault: "#0f0",
        borderDefault: "#8f8"
    },
    sizes: {
        textDefault: `${scale/2}rem`,
        buttonHeight: `${scale}rem`,
        borderRadSmall: `${scale/5}rem`,
        gap: `${scale/10}rem`
    }
}

export default vars;