export class OrderService {
  constructor(http) {
    this.http = http;
  }

  async listOrders() {
    return this.http.get('orders').json();
  }

  async createOrder(products) {
    const res = await this.http.post('orders', {
      json: {
        product_list: products.map(p => p.id),
      },
    });
    return res.headers.get('location');
  }

  async getOrder(id) {
    return this.http.get(`orders/${id}`).json();
  }
}

export default OrderService;
