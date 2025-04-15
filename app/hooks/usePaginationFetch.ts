import { useEffect, useState } from 'react'

interface PaginationData<T> {
    data: T[]
    total_pages: number
    current_page: number
    total_jobs?: number
}

export function usePaginatedFetch<T>(baseUrl: string) {
    const [data, setData] = useState<T[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/${baseUrl}?page=${currentPage}`)
            if (!res.ok) throw new Error('Failed to fetch data')
            const json = await res.json()
            setData(json?.data?.jobs || [])
            setTotalPages(json?.data?.total_pages || 1)
        } catch (err: any) {
            setError(err.message || 'Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [currentPage])

    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    }

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1))
    }

    return {
        data,
        loading,
        error,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        setPage: setCurrentPage,
    }
}
