import { useEffect, useState } from 'react'

function useInitialLoading() {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        async function changeLoadingState() {
            setIsLoading(false)
        }

        changeLoadingState()
    }, [])

    return isLoading
}

export default useInitialLoading
