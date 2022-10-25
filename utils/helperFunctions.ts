export function capitalize(str: string): string {
    return str?.charAt(0).toUpperCase() + str?.slice(1)
}

export function handleScrollToTop() {
    window.scroll(0, 0)
}
