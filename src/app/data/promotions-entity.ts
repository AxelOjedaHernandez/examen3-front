export interface Promotions{
    estado: number,
    msg: string,
    promotions: [{
        id?: number,
        name: string,
        description: string,
        startDate: Date,
        endDate: Date
    }],
    links: [
        {
            rel: string,
            href: string
        }
    ]
}