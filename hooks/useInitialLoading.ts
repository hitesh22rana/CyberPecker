import { useEffect, useState } from 'react'

function useInitialLoading() {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return isLoading
}

export default useInitialLoading
