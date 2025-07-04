import React from 'react';

const KathaUpanishadVerse = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Sanskrit Quote */}
        <div className="mb-8">
          <div className="text-3xl md:text-4xl font-serif text-gray-800 leading-relaxed mb-4">
            उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत।<br/>
            क्षुरस्य धारा निशिता दुरत्यया<br/>
            दुर्गं पथस्तत्कवयो वदन्ति॥
          </div>
        </div>

        {/* Decorative Line */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto mb-6"></div>

        {/* English Translation */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
            "Arise! Awake! Having approached the great teachers, learn and understand.<br/>
            The path is sharp like the edge of a razor, difficult to traverse—<br/>
            so declare the wise."
          </p>
        </div>

        {/* Attribution */}
        <div className="text-sm text-gray-600 font-medium">
          - Kaṭha Upaniṣad 1.3.14
        </div>
      </div>
    </section>
  );
};

export default KathaUpanishadVerse; 