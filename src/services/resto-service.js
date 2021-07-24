export default class RestoService {
    _apiBase = 'https://my-json-server.typicode.com/leilamamedova/restodb';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    async getMenuItems() {
        return await this.getResource('/menu/');
    }

    async getItem(id) {
        const res = await this.getResource('/menu/');
        const item = res.find( (el) => {
            return el.id === +id;
        }) 
        console.log(item);
        return item;
    }

    async setOrder(order) {
        const number = await this.getOrderNumber();
        const newOrder = {
            id: number,
            order: order
        }

        const res = await fetch(`http://localhost:3000/orders`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            }, 
            body: JSON.stringify(newOrder)
        });
        if(!res.ok) {
            throw new Error(`JSON error`);
        }
    }

    async getOrderNumber() {
        const res = await this.getResource('/orders/');
        const orderNumber = res.length + 1;
        return orderNumber;
    }

}
