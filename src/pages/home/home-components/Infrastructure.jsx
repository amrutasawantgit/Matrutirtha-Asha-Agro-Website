import React from "react";

const Infrastructure = () => {
    return (
        <div className="info">
            <div class="flex flex-wrap justify-center items-center p-5 bg-amber-50 shadow-lg">
                {/* <!-- Part 1: Image --> */}
                <div class="flex-1 text-center p-3">
                    <img
                        src="/assets/agro_asha_infrastructure.jpg"
                        alt="Agro Asha Infrastructure"
                        class="max-w-full rounded-lg shadow-lg"
                    />
                </div>

                {/* <!-- Part 2: Information --> */}
                <div class="bg-amber-50 p-8 rounded-lg max-w-3xl mx-auto my-8 text-center">
                    <h2 class="text-4xl font-extrabold text-amber-600 mb-6">Agro Asha's Infrastructure</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        <span className="font-bold">Agro Asha’s</span> infrastructure is the backbone of its mission to transform the agricultural landscape. With cutting-edge storage facilities, the company ensures that farm produce stays fresh longer, reducing spoilage and maximizing profits for farmers. Its trade network simplifies the supply chain, seamlessly connecting farmers to vast markets and ensuring efficient product distribution.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Beyond logistics, <span className="font-bold">Agro Asha’s</span> innovative financial services provide small and medium-sized farms with the capital they need to thrive, adopt modern technologies, and scale their operations. By embracing sustainable practices and modern tools, <span className="font-bold">Agro Asha</span> is not only driving growth but also fostering resilience in the farming sector. The company’s infrastructure acts as a catalyst for regional agricultural success, delivering vital services that empower farmers, boost productivity, and ensure long-term sustainability.
                    </p>
                </div>

            </div>



        </div>
    );
}

export default Infrastructure;