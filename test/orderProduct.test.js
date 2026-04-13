const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const orderProductController = require('../controllers/orderProductController');
const OrderProduct = require('../models/orderProductModel');

describe('OrderProduct Controller - Unit Tests', () => {
    
    afterEach(() => {
        sinon.restore(); // Pulisce i test dopo ogni esecuzione
    });

    // 1. Happy Path: tutto funziona
    it('Dovrebbe restituire i prodotti di un ordine con successo', async () => {
        const fakeProducts = [{ order_id: 1, product_id: 10, quantita: 2 }];
        const findStub = sinon.stub(OrderProduct, 'findByOrderId').resolves(fakeProducts);

        const req = { params: { order_id: 1 } };
        const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

        await orderProductController.getOrderDetails(req, res);

        expect(res.status.calledWith(200)).to.be.true;
        expect(res.json.calledWith(fakeProducts)).to.be.true;
    });

    // 2. Caso Vuoto: l'ordine esiste ma non ha prodotti
    it('Dovrebbe restituire un array vuoto se non ci sono prodotti nell\'ordine', async () => {
        sinon.stub(OrderProduct, 'findByOrderId').resolves([]);

        const req = { params: { order_id: 99 } };
        const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

        await orderProductController.getOrderDetails(req, res);

        expect(res.status.calledWith(200)).to.be.true;
        expect(res.json.calledWith([])).to.be.true;
    });

    // 3. Caso Errore: il database fallisce (es. server down)
    it('Dovrebbe restituire errore 500 se il database fallisce', async () => {
        sinon.stub(OrderProduct, 'findByOrderId').rejects(new Error('Database error'));

        const req = { params: { order_id: 1 } };
        const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

        await orderProductController.getOrderDetails(req, res);

        expect(res.status.calledWith(500)).to.be.true;
    });
});