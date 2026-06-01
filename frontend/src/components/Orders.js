import React, { useState, useEffect } from 'react';
import { orderAPI, customerAPI, productAPI } from '../api';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ customer_id: '', items: [{ product_id: '', quantity: '' }] });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
    fetchCustomers();
    fetchProducts();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await orderAPI.getAll();
      setOrders(response.data);
    } catch (err) {
      setError('Failed to load orders');
    }
  };

  const fetchCustomers = async () => {
    try {
      const response = await customerAPI.getAll();
      setCustomers(response.data);
    } catch (err) {
      console.error('Failed to load customers');
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await productAPI.getAll();
      setProducts(response.data);
    } catch (err) {
      console.error('Failed to load products');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        customer_id: parseInt(formData.customer_id),
        items: formData.items.map(item => ({
          product_id: parseInt(item.product_id),
          quantity: parseInt(item.quantity)
        }))
      };
      await orderAPI.create(orderData);
      setSuccess('Order created successfully');
      setShowModal(false);
      setFormData({ customer_id: '', items: [{ product_id: '', quantity: '' }] });
      fetchOrders();
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.response?.data?.detail || 'Operation failed');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        await orderAPI.delete(id);
        setSuccess('Order deleted successfully');
        fetchOrders();
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError('Failed to delete order');
        setTimeout(() => setError(''), 3000);
      }
    }
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { product_id: '', quantity: '' }]
    });
  };

  const removeItem = (index) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: newItems });
  };

  const updateItem = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index][field] = value;
    setFormData({ ...formData, items: newItems });
  };

  const viewOrderDetails = async (orderId) => {
    try {
      const response = await orderAPI.getById(orderId);
      setSelectedOrder(response.data);
    } catch (err) {
      setError('Failed to load order details');
    }
  };

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="page-title">Orders</h1>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>Create Order</button>
      </div>

      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Total Amount</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.customer.full_name}</td>
                  <td>${order.total_amount.toFixed(2)}</td>
                  <td>{new Date(order.created_at).toLocaleDateString()}</td>
                  <td>
                    <button className="btn btn-secondary" style={{ marginRight: '0.5rem' }} onClick={() => viewOrderDetails(order.id)}>View</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(order.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Create Order</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Customer</label>
                <select required value={formData.customer_id} onChange={(e) => setFormData({...formData, customer_id: e.target.value})}>
                  <option value="">Select Customer</option>
                  {customers.map(customer => (
                    <option key={customer.id} value={customer.id}>{customer.full_name}</option>
                  ))}
                </select>
              </div>
              
              <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Order Items</h3>
              {formData.items.map((item, index) => (
                <div key={index} style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
                  <div className="form-group">
                    <label>Product</label>
                    <select required value={item.product_id} onChange={(e) => updateItem(index, 'product_id', e.target.value)}>
                      <option value="">Select Product</option>
                      {products.map(product => (
                        <option key={product.id} value={product.id}>{product.name} (Stock: {product.quantity})</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input type="number" min="1" required value={item.quantity} onChange={(e) => updateItem(index, 'quantity', e.target.value)} />
                  </div>
                  {formData.items.length > 1 && (
                    <button type="button" className="btn btn-danger" onClick={() => removeItem(index)}>Remove Item</button>
                  )}
                </div>
              ))}
              
              <button type="button" className="btn btn-secondary" onClick={addItem} style={{ marginBottom: '1rem' }}>Add Another Item</button>
              
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Create Order</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedOrder && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Order Details #{selectedOrder.id}</h2>
              <button className="close-btn" onClick={() => setSelectedOrder(null)}>&times;</button>
            </div>
            <div>
              <p><strong>Customer:</strong> {selectedOrder.customer.full_name}</p>
              <p><strong>Email:</strong> {selectedOrder.customer.email}</p>
              <p><strong>Date:</strong> {new Date(selectedOrder.created_at).toLocaleString()}</p>
              
              <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Items</h3>
              <table style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.items.map(item => (
                    <tr key={item.id}>
                      <td>{item.product.name}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price_at_order.toFixed(2)}</td>
                      <td>${(item.quantity * item.price_at_order).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <h3 style={{ marginTop: '1.5rem', textAlign: 'right' }}>Total: ${selectedOrder.total_amount.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
