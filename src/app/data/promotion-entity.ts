export interface Promotion{
    estado: number,
    msg: string,
    promotion: {
        id?: number,
        name: string,
        description: string,
        startDate: Date,
        endDate: Date
    },
    links: [
        {
            rel: string,
            href: string
        }
    ]
}