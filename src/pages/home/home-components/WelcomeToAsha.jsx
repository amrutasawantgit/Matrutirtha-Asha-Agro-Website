import React from "react";

const CountService = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Welcome to Agro Asha</h1>
            <div className="farmers">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', flexWrap: 'wrap' }}>
                   <div style={{
                            backgroundColor: 'transparent', // Transparent background
                            margin: '10px',
                            padding: '10px', // Adjusted padding
                            textAlign: 'center',
                            width: '250px',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                        }}
                    >
                        <img
                            src="/assets/registered_farmers.jpg"
                            loading="lazy"
                            alt="Registered Farmers"
                            style={{ width: '100px', height: '100px', borderRadius: '10px' }}
                        />
                        <div style={{
                            fontSize: '2em',
                            fontWeight: 'bold',
                            color: '#4CAF50',
                            margin: '10px 0',
                        }}>
                            5,000+
                        </div>
                        <h3 style={{
                            fontSize: '1.5em',
                            color: '#333',
                            fontWeight : 'bold'
                        }}>
                            Registered Farmers
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountService;
