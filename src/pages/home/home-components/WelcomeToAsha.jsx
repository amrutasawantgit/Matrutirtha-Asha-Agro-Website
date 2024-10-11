import React from "react";

const CountService = () => {
            return (
                <>
                    <div className="count">
                        <h1 className="text-3xl font-bold text-center">Welcome to Asha Agro</h1>
                        <div className="farmers">
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                    padding: '20px',
                                }}
                            >
                                {/* Card 1 */}
                                <div
                                    style={{
                                        backgroundColor: 'transparent',
                                        margin: '10px',
                                        padding: '10px',
                                        textAlign: 'center',
                                        width: '23%', // Use 23% for larger screens
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                    }}
                                    className="card"
                                >
                                    <img
                                        src="/assets/registered_farmers.jpg"
                                        loading="lazy"
                                        alt="Registered Farmers"
                                        style={{
                                            width: '120px',
                                            height: '100px',
                                            borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%',
                                            margin: '0 auto', // Center the image
                                        }}
                                    />
                                    <div style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0', color: '#FFBF00' }}>5,000+</div>
                                    <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Registered Farmers</h3>
                                </div>
        
                                {/* Card 2 */}
                                <div className="card" style={{ /* Same styling as Card 1 */ }}>
                                    <img
                                        src="/assets/land.jpg"
                                        loading="lazy"
                                        style={{
                                            width: '120px',
                                            height: '100px',
                                            borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%',
                                            margin: '0 auto',
                                        }}
                                    />
                                    <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#FFBF00', margin: '10px 0' }}>15,000+</div>
                                    <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Acres of Land Served</h3>
                                </div>
        
                                {/* Card 3 */}
                                <div className="card" style={{ /* Same styling as Card 1 */ }}>
                                    <img
                                        src="/assets/products_traded.jpg"
                                        loading="lazy"
                                        style={{
                                            width: '120px',
                                            height: '100px',
                                            borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%',
                                            margin: '0 auto',
                                        }}
                                    />
                                    <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#FFBF00', margin: '10px 0' }}>50,000 tons</div>
                                    <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Products Traded Annually</h3>
                                </div>
        
                                {/* Card 4 */}
                                <div className="card" style={{ /* Same styling as Card 1 */ }}>
                                    <img
                                        src="/assets/finance.jpg"
                                        loading="lazy"
                                        style={{
                                            width: '120px',
                                            height: '100px',
                                            borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%',
                                            margin: '0 auto',
                                        }}
                                    />
                                    <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#FFBF00', margin: '10px 0' }}>2,000+</div>
                                    <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Financing Transactions</h3>
                                </div>
                            </div>
        
                            {/* Second Row of Cards */}
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                    padding: '20px',
                                }}
                            >
                                {/* Card 1 */}
                                <div className="card" style={{ /* Same styling as Card 1 */ }}>
                                    <img
                                        src="/assets/storage.jpg"
                                        loading="lazy"
                                        style={{
                                            width: '120px',
                                            height: '100px',
                                            borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%',
                                            margin: '0 auto',
                                        }}
                                    />
                                    <div style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0', color: '#FFBF00' }}>10,000 tons</div>
                                    <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Storage Capacity</h3>
                                </div>
        
                                {/* Card 2 */}
                                <div className="card" style={{ /* Same styling as Card 1 */ }}>
                                    <img
                                        src="/assets/products.jpg"
                                        loading="lazy"
                                        style={{
                                            width: '120px',
                                            height: '100px',
                                            borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%',
                                            margin: '0 auto',
                                        }}
                                    />
                                    <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#FFBF00', margin: '10px 0' }}>100+</div>
                                    <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Different Products Available</h3>
                                </div>
        
                                {/* Card 3 */}
                                <div className="card" style={{ /* Same styling as Card 1 */ }}>
                                    <img
                                        src="/assets/workshop.jpg"
                                        loading="lazy"
                                        style={{
                                            width: '120px',
                                            height: '100px',
                                            borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%',
                                            margin: '0 auto',
                                        }}
                                    />
                                    <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#FFBF00', margin: '10px 0' }}>150+</div>
                                    <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Workshops Conducted</h3>
                                </div>
        
                                {/* Card 4 */}
                                <div className="card" style={{ /* Same styling as Card 1 */ }}>
                                    <img
                                        src="/assets/business.jpg"
                                        loading="lazy"
                                        style={{
                                            width: '120px',
                                            height: '100px',
                                            borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%',
                                            margin: '0 auto',
                                        }}
                                    />
                                    <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#FFBF00', margin: '10px 0' }}>300+</div>
                                    <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Businesses Served</h3>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <style jsx>{`
                        .card {
                            background-color: transparent;
                            margin: 10px;
                            padding: 10px;
                            text-align: center;
                            transition: transform 0.3s, box-shadow 0.3s;
                            width: 23%;
                        }
        
                        @media (max-width: 768px) {
                            .card {
                                width: 45%; /* Adjust to fit two cards per row on small screens */
                            }
                        }
        
                        @media (max-width: 480px) {
                            .card {
                                width: 100%; /* Stack cards on top of each other on extra small screens */
                            }
                        }
                    `}</style>
                </>        
    
    );
};

export default CountService;
