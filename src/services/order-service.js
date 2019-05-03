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
    console.log(res.headers);
  }
}

export default OrderService;
