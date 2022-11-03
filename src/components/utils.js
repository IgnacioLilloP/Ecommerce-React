import productList from '../products.json';

let products = []

products = productList.map((item) => {
    return item
})

export const getProducts = () => {
    let getAllProducts = new Promise((res) => {
        setTimeout(() => {
            res(products)
        }, 1000)
    })
    return getAllProducts

}



export const getProductByCategory = (category) => {
    let getByCategory = new Promise((res) => {
        setTimeout(() => {
            res(products.filter((item) => {
                return item.category == category
            }
            ))
        }, 100)
    })

    return getByCategory
}


export const getProductById = (productId) => {
    let getById = new Promise((res) => {
        setTimeout(() => {
            res(products.find(item => item.id == productId))
        }, 1000)
    })
    return getById
}
