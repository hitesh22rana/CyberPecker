export function capitalize(str: string): string {
    return str && str.charAt(0).toUpperCase() + str.slice(1)
}

export function handleScrollToTop() {
    window.scroll(0, 0)
}

const REGEX1 = /\.+\s*/g
const REGEX2 = /\.+/g

export function textFilter(text: string): string {
    return text.trim().replace(REGEX1, '.').replace(REGEX2, '.')
}

export function removeNonAlphanumeric(input: string): string {
    return input.replace(/[^a-zA-Z0-9]/g, '')
}

export function getCurrentWord(text: string, startIndex: number): string {
    let endIndex = startIndex
    while (endIndex < text.length && !/\s/.test(text[endIndex])) {
        endIndex++
    }
    return text.substring(startIndex, endIndex)
}
