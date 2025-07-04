import React from 'react';

const KathaUpanishadVerse = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative SVG Motif */}
        <div className="flex justify-center mb-6">
          <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="32" cy="16" rx="30" ry="10" fill="#fde68a" fillOpacity="0.4" />
            <ellipse cx="32" cy="16" rx="20" ry="6" fill="#f59e42" fillOpacity="0.15" />
            <ellipse cx="32" cy="16" rx="10" ry="3" fill="#22c55e" fillOpacity="0.12" />
          </svg>
        </div>
        {/* Sanskrit Quote */}
        <div className="mb-8">
          <div className="text-3xl md:text-4xl font-[\'Noto Serif Devanagari\',serif] text-gray-800 leading-relaxed mb-4 drop-shadow-md">
            उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत।<br/>
            क्षुरस्य धारा निशिता दुरत्यया<br/>
            दुर्गं पथस्तत्कवयो वदन्ति॥
          </div>
        </div>

        {/* Decorative Line */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto mb-6 rounded-full"></div>

        {/* English Translation */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed italic">
            "Arise! Awake! Having approached the great teachers, learn and understand.<br/>
            The path is sharp like the edge of a razor, difficult to traverse—<br/>
            so declare the wise."
          </p>
        </div>

        {/* Attribution */}
        <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full shadow-sm border border-orange-200">
          Kaṭha Upaniṣad 1.3.14
        </div>
      </div>
    </section>
  );
};

export default KathaUpanishadVerse; 