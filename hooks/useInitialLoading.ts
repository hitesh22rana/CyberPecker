import { useEffect, useState } from 'react'

function useInitialLoading() {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        function changeLoadingState() {
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        }

        changeLoadingState()
    }, [])

    return isLoading
}

export default useInitialLoading
