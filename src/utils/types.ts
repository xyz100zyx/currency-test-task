export type RequestStatus = 'pending' | 'fulfilled' | 'rejected';

export type Rate = {
    date: string,
    historical: string,
    info: {
        rate: number,
        timestamp: number
    },
    query: {
        amount: number,
        from: string,
        to: string
    },
    result: number,
    success: boolean
}

export type CurrencyListResponse = {
    success: boolean,
    symbols: Record<string, string>
}

export type CurrencyRatesResponse = {
    base: string,
    date: string,
    rates: Record<string, string>,
    success: boolean,
    timestamp: number
}

export type FetchedError = {
    error: {
        code: number,
        message: string
    }
}
