const symbolRegex = /[^\w\s]/g

export function capitalize(str: string): string {
    return str && str.charAt(0).toUpperCase() + str.slice(1)
}

export function handleScrollToTop() {
    window.scroll(0, 0)
}

export function removeSymbols(text: string): string {
    return text.replace(symbolRegex, '')
}

export function extractDate(date: string): string {
    const extactedDate = date.split(/\n/)
    return extactedDate[0]
}

export function isValidAuthorName(date: string): boolean {
    const parsedDate = Date.parse(removeSymbols(date))
    return isNaN(parsedDate)
}
