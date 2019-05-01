export class ProductService {
  constructor() {
    this.products = [
      {
        id: '123-456-789-012',
        name: '',
        price: 133.7,
        weight: 3.56,
      },
      {
        id: '123-789-789-012',
        name: 'T-shirt',
        price: 42.99,
        weight: 0.2,
      },
    ];
  }

  async listProducts() {
    return this.products;
  }

  async getProduct(id) {
    return this.products.find(product => product.id === id);
  }
}

export default ProductService;
