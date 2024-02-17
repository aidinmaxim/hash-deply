import IProduct from "./Product"

export default interface ProductState {
    products: IProduct[]
    error?: string | null
    isLoading?: boolean
}