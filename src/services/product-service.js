export class ProductService {
  constructor(http) {
    this.http = http;
  }

  async listProducts(searchParams) {
    return this.http.get('products', { searchParams }).json();
  }

  async getProduct(id) {
    return this.http.get(`products/${id}`).json();
  }
}

export default ProductService;
