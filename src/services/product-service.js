export class ProductService {
  constructor(http) {
    this.http = http;
  }

  async listProducts() {
    return this.http.get('products').json();
  }

  async getProduct(id) {
    return this.http.get(`products/${id}`).json();
  }
}

export default ProductService;
