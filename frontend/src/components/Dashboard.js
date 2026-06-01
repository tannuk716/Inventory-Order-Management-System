import React, { useState, useEffect } from 'react';
import { dashboardAPI } from '../api';

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await dashboardAPI.getStats();
      setStats(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load dashboard statistics');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏳</div>
      <p style={{ color: '#64748b', fontSize: '1.1rem', fontWeight: '500' }}>Loading dashboard...</p>
    </div>
  );
  
  if (error) return <div className="alert alert-error">{error}</div>;
  if (!stats) return null;

  const statCards = [
    {
      title: 'Total Products',
      value: stats.total_products,
      icon: '📦',
      bgColor: '#eff6ff',
      iconColor: '#3b82f6',
      textColor: '#1e40af'
    },
    {
      title: 'Total Customers',
      value: stats.total_customers,
      icon: '👥',
      bgColor: '#fef3c7',
      iconColor: '#f59e0b',
      textColor: '#92400e'
    },
    {
      title: 'Total Orders',
      value: stats.total_orders,
      icon: '🛒',
      bgColor: '#d1fae5',
      iconColor: '#10b981',
      textColor: '#065f46'
    },
    {
      title: 'Low Stock Items',
      value: stats.low_stock_products.length,
      icon: '⚠️',
      bgColor: '#fee2e2',
      iconColor: '#ef4444',
      textColor: '#991b1b'
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashboard Overview</h1>
        <p style={{ color: '#64748b', fontSize: '1rem', fontWeight: '500' }}>
          Monitor your inventory and business metrics at a glance
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
        gap: '1.5rem', 
        marginBottom: '2rem' 
      }}>
        {statCards.map((stat, index) => (
          <div 
            key={index}
            className="card" 
            style={{ 
              background: stat.bgColor,
              border: 'none',
              padding: '1.75rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem'
            }}>
              <div style={{
                fontSize: '2.5rem',
                background: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}>
                {stat.icon}
              </div>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700',
                color: stat.textColor
              }}>
                {stat.value}
              </div>
            </div>
            <p style={{ 
              fontSize: '0.95rem', 
              fontWeight: '600',
              color: stat.textColor,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      {stats.low_stock_products.length > 0 && (
        <div className="card" style={{ 
          border: '2px solid #fca5a5',
          background: '#fef2f2'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ 
              fontSize: '2rem',
              background: '#fee2e2',
              width: '50px',
              height: '50px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              ⚠️
            </div>
            <div>
              <h2 style={{ 
                fontSize: '1.5rem',
                color: '#991b1b',
                fontWeight: '700',
                marginBottom: '0.25rem'
              }}>
                Low Stock Alert
              </h2>
              <p style={{ color: '#dc2626', fontWeight: '500', fontSize: '0.95rem' }}>
                {stats.low_stock_products.length} product{stats.low_stock_products.length !== 1 ? 's' : ''} need restocking
              </p>
            </div>
          </div>
          <div className="table-container" style={{ background: 'white' }}>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>SKU</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {stats.low_stock_products.map(product => (
                  <tr key={product.id}>
                    <td style={{ fontWeight: '600', color: '#1e293b' }}>{product.name}</td>
                    <td>
                      <span style={{
                        background: '#eff6ff',
                        padding: '0.375rem 0.75rem',
                        borderRadius: '6px',
                        fontWeight: '600',
                        color: '#1e40af',
                        fontSize: '0.875rem'
                      }}>
                        {product.sku}
                      </span>
                    </td>
                    <td>
                      <span style={{ 
                        color: '#dc2626', 
                        fontWeight: '700',
                        fontSize: '1rem'
                      }}>
                        {product.quantity}
                      </span>
                    </td>
                    <td style={{ fontWeight: '600', color: '#334155' }}>
                      ${product.price.toFixed(2)}
                    </td>
                    <td>
                      <span style={{
                        background: '#fee2e2',
                        color: '#991b1b',
                        padding: '0.375rem 0.875rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        Low Stock
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {stats.low_stock_products.length === 0 && (
        <div className="card" style={{ 
          textAlign: 'center', 
          padding: '3rem',
          background: '#d1fae5',
          border: '2px solid #6ee7b7'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
          <h3 style={{ 
            fontSize: '1.5rem', 
            color: '#065f46',
            fontWeight: '700',
            marginBottom: '0.5rem'
          }}>
            All Products Well Stocked
          </h3>
          <p style={{ color: '#047857', fontSize: '1rem', fontWeight: '500' }}>
            No action needed. All inventory levels are healthy.
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
