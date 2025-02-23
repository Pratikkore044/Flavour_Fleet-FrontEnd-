import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState(null);
    const fooddataurl = import.meta.env.VITE_BACKEND_URL;
    const fetchMyOrder = async () => {
        try {
            const userEmail = localStorage.getItem('userEmail');
            console.log("Fetching orders for:", userEmail);

            const response = await fetch(`${fooddataurl}/api/myOrderData`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: userEmail })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Fetched order data:", data);
            setOrderData(data);
        } catch (error) {
            console.error("Fetch error:", error.message);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {/* Check if orderData exists before mapping */}
                    {orderData?.orderData?.order_data ? (
                        orderData.orderData.order_data.slice(0).reverse().map((item, index) => (
                            <div key={index}>
                                {item.map((arrayData, idx) => (
                                    <div key={idx} className='col-12 col-md-6 col-lg-3'>
                                        {arrayData.Order_date ? (
                                            <div className='m-auto mt-5'>
                                                <h5>{arrayData.Order_date}</h5>
                                                <hr />
                                            </div>
                                        ) : (
                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                {/* <img src={arrayData.img} className="card-img-top" alt="Product" style={{ height: "120px", objectFit: "fill" }} /> */}
                                                <div className="card-body">
                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                        <span className='m-1'>{arrayData.qty}</span>
                                                        <span className='m-1'>{arrayData.size}</span>
                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5'>
                                                            ₹{arrayData.price}/-
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p className="text-center mt-4">No orders found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}