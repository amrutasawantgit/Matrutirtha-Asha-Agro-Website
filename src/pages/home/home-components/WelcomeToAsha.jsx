import React from "react";

const CountService = () => {
    return (
        <div className="count">
            <h1 className="text-3xl font-bold text-center">Welcome to Asha Agro</h1>
            <div className="farmers">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '20px' }}>
                    {/* Card 1 */}
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            margin: '10px',
                            padding: '10px',
                            textAlign: 'center',
                            width: '23%',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                        }}
                    >
                        <img
                            src="/assets/registered_farmers.jpg"
                            loading="lazy"
                            alt="Registered Farmers"
                            style={{ width: '120px', height: '100px', borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%', marginLeft: '100px' }}
                        />
                        <div style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0', color: '#FFBF00' }}>5,000+</div>
                        <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Registered Farmers</h3>
                    </div>

                    {/* Card 2 */}
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            margin: '10px',
                            padding: '10px',
                            textAlign: 'center',
                            width: '23%',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                        }}
                    >
                        <img
                            src="/assets/land.jpg"
                            loading="lazy"
                            style={{ width: '120px', height: '100px', borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%', marginLeft: '100px' }}
                        />
                        <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#FFBF00', margin: '10px 0' }}>15,000+</div>
                        <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Acres of Land Served</h3>
                    </div>

                    {/* Card 3 */}
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            margin: '10px',
                            padding: '10px',
                            textAlign: 'center',
                            width: '23%',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                        }}
                    >
                        <img
                            src="/assets/products_traded.jpg"
                            loading="lazy"
                            style={{ width: '120px', height: '100px', borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%', marginLeft: '100px' }}
                        />
                        <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#FFBF00', margin: '10px 0' }}>50,000 tons</div>
                        <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Products Traded Annually</h3>
                    </div>

                    {/* Card 4 */}
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            margin: '10px',
                            padding: '10px',
                            textAlign: 'center',
                            width: '23%',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                        }}
                    >
                        <img
                            src="/assets/finance.jpg"
                            loading="lazy"
                            style={{ width: '120px', height: '100px', borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%', marginLeft: '100px' }}
                        />
                        <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#FFBF00', margin: '10px 0' }}>2,000+</div>
                        <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Financing Transactions</h3>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '20px' }}>
                    {/* Card 1 */}
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            margin: '10px',
                            padding: '10px',
                            textAlign: 'center',
                            width: '23%',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                        }}
                    >
                        <img
                            src="/assets/storage.jpg"
                            loading="lazy"
                            style={{ width: '120px', height: '100px', borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%', marginLeft: '100px' }}
                        />
                        <div style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0', color: '#FFBF00' }}>10,000 tons</div>
                        <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Storage Capacity</h3>
                    </div>

                    {/* Card 2 */}
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            margin: '10px',
                            padding: '10px',
                            textAlign: 'center',
                            width: '23%',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                        }}
                    >
                        <img
                            src="/assets/products.jpg"
                            loading="lazy"
                            style={{ width: '120px', height: '100px', borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39% ', marginLeft: '100px' }}
                        />
                        <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#FFBF00', margin: '10px 0' }}>100+</div>
                        <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Different Products Available</h3>
                    </div>

                    {/* Card 3 */}
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            margin: '10px',
                            padding: '10px',
                            textAlign: 'center',
                            width: '23%',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                        }}
                    >
                        <img
                            src="/assets/workshop.jpg"
                            loading="lazy"
                            style={{ width: '120px', height: '100px', borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%', marginLeft: '100px' }}
                        />
                        <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#FFBF00', margin: '10px 0' }}>150+</div>
                        <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Workshops Conducted</h3>
                    </div>

                    {/* Card 4 */}
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            margin: '10px',
                            padding: '10px',
                            textAlign: 'center',
                            width: '23%',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                        }}
                    >
                        <img
                            src="/assets/business.jpg"
                            loading="lazy"
                            style={{ width: '120px', height: '100px', borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39% ', marginLeft: '100px' }}
                        />
                        <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#FFBF00', margin: '10px 0' }}>300+</div>
                        <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Businesses Served</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountService;
