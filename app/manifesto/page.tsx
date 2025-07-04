import Link from "next/link"

export default function ManifestoPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-orange-700 font-devanagari text-center mb-2">ग्राम विकास संकल्प</h1>
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Gram Vikas Manifesto</h2>
      <p className="text-lg text-gray-700 text-center mb-8">
        Our vision and commitment for the holistic development of rural Bihar. Read, share, or download our guiding principles!
      </p>
      <div className="flex justify-center gap-4 mb-8">
        <a href="/Gram Vikas Manifesto.pdf" download className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded font-semibold">Download PDF</a>
        <a href="/gram_vikas_manifesto.md" download className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded font-semibold">Download Markdown</a>
      </div>

      {/* Manifesto Content */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">हमारा संकल्प: गांव के समग्र विकास के लिए समर्पण</h3>
        <p className="mb-2">हमारा देश गांवों से बना है — भारत की आत्मा गांवों में बसती है। बिहार की लगभग 90% जनसंख्या गाँवों में रहती है। गांव न केवल हमारी संस्कृति और परंपरा का केंद्र हैं, बल्कि ये हमारे देश की रीढ़ भी हैं। लेकिन आज गांवों से शिक्षित, जागरूक और बौद्धिक रूप से सक्षम युवाओं का लगातार पलायन हो रहा है...</p>
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">हमारा उद्देश्य</h3>
        <ul className="list-disc pl-6 mb-2">
          <li>जो आत्मनिर्भर हो</li>
          <li>आधुनिक समाज की जटिल चुनौतियों का समाधान निकाल सके</li>
          <li>भारतीय संस्कृति, परंपरा और राष्ट्रभक्ति से प्रेरित हो</li>
          <li>जो शारीरिक, मानसिक, बौद्धिक और आध्यात्मिक दृष्टि से पूर्ण विकसित हो</li>
          <li>जो वैश्विक सोच के साथ स्थानीय जड़ों से जुड़ी रहे</li>
          <li>जो तकनीक का प्रयोग गांव की उन्नति के लिए करे</li>
        </ul>
        <p className="mb-2">हम यह मानते हैं कि जब तक गांव नहीं उठेंगे, तब तक बिहार और भारत का सम्पूर्ण विकास संभव नहीं है। जब गांव जागेंगे, तभी देश प्रगति करेगा।</p>
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">हमारे कार्यक्षेत्र</h3>
        <div className="mb-4">
          <h4 className="font-semibold mb-1">1. शिक्षा</h4>
          <ul className="list-disc pl-6">
            <li>गांव के बच्चों को कम लागत में उच्च गुणवत्ता की शिक्षा देना</li>
            <li>प्रतियोगी परीक्षाओं की तैयारी करवाना (जैसे सिमुलतला, नवोदय, JEE, NEET)</li>
            <li>बच्चों को संस्कारों, योग, और प्रकृति से जोड़ना</li>
            <li>प्राकृतिक वातावरण में शिक्षा देना</li>
            <li>विज्ञान, गणित और भाषा की प्रयोगात्मक कक्षाएं</li>
            <li>डिजिटल शिक्षा और कंप्यूटर साक्षरता को गांव तक पहुंचाना</li>
            <li>रुचियों और प्रतिभाओं के अनुसार करियर मार्गदर्शन</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-1">2. कृषि और जैविक खेती</h4>
          <ul className="list-disc pl-6">
            <li>जैविक खेती और एग्रोफोरेस्ट्री को बढ़ावा देना</li>
            <li>किसानों को विषमुक्त उत्पादन की ओर मार्गदर्शन</li>
            <li>भूमि की उर्वरता और पर्यावरण की रक्षा</li>
            <li>किसानों की आमदनी में वृद्धि</li>
            <li>परंपरागत ज्ञान और आधुनिक कृषि विज्ञान का समन्वय</li>
            <li>प्राकृतिक कीटनाशक और खाद के प्रयोग का प्रशिक्षण</li>
            <li>कृषि आधारित उद्योगों को बढ़ावा देना</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-1">3. उद्यमिता विकास</h4>
          <ul className="list-disc pl-6">
            <li>गांवों में स्वरोजगार को बढ़ावा देना</li>
            <li>युवाओं को स्थानीय संसाधनों के आधार पर उद्यमी बनाना</li>
            <li>कौशल विकास प्रशिक्षण</li>
            <li>महिला स्वयं सहायता समूहों को आर्थिक रूप से सशक्त बनाना</li>
            <li>कुटीर उद्योगों और हस्तशिल्प के लिए बाजार तक पहुंच बनाना</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-1">4. गौशाला का विकास</h4>
          <ul className="list-disc pl-6">
            <li>देशी गायों का संरक्षण व पालन</li>
            <li>गोशाला निर्माण हेतु भूमि व संसाधनों की व्यवस्था</li>
            <li>जैविक खाद और पंचगव्य निर्माण में गायों की भूमिका</li>
            <li>ग्राम स्तर पर गौशाला आधारित आत्मनिर्भर मॉडल विकसित करना</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-1">5. संस्कृति और चेतना</h4>
          <ul className="list-disc pl-6">
            <li>योग दिवस, उत्सव, ग्राम भ्रमण, आदि कार्यक्रमों का आयोजन</li>
            <li>गांव की प्रतिभाओं को मंच देना</li>
            <li>पारंपरिक संगीत, कला, और लोक विधाओं का संरक्षण</li>
            <li>ग्राम स्वराज और आत्मनिर्भर भारत की भावना को जागृत करना</li>
            <li>युवाओं को नेतृत्व और सेवा के लिए प्रेरित करना</li>
          </ul>
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">अनुमानित बजट आवश्यकताएं (Indicative)</h3>
        <ul className="list-disc pl-6 mb-2">
          <li>शिक्षा (DBG Gurukulam Model School): ₹1.5 Crore</li>
          <li>एग्रोफॉरेस्ट्री (Initial Demonstration Farm Setup): ₹1.25 Crore</li>
          <li>गौशाला: (Land, Construction, Veterinary, Fodder, etc.)</li>
        </ul>
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">आपका सहयोग</h3>
        <p className="mb-2">हर संवेदनशील नागरिक समाज के लिए कुछ करना चाहता है। हम गांवों की दुर्दशा से व्यथित हैं, और भारत के भविष्य को उज्ज्वल देखना चाहते हैं, तो आइए साथ मिलकर इस यज्ञ में आहुति दें। हम आपकी भागीदारी को आमंत्रित करते हैं—यह आंदोलन केवल हमारा नहीं, बल्कि हम सबका है।</p>
        <ol className="list-decimal pl-6 mb-2">
          <li><b>तन</b> – स्वयंसेवक के रूप में समय और सेवा देकर</li>
          <li><b>मन</b> – सुझाव, अनुभव और मार्गदर्शन देकर</li>
          <li><b>धन</b> – आर्थिक सहयोग देकर, ताकि इन कार्यों को धरातल पर उतारा जा सके</li>
        </ol>
        <blockquote className="border-l-4 border-orange-600 pl-4 italic text-orange-700">ऐसा छोटा योगदान, गांव की बड़ी मुस्कान बन सकता है।</blockquote>
      </section>
      <div className="flex justify-center gap-4 mt-8">
        <a href="/Gram Vikas Manifesto.pdf" download className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded font-semibold">Download PDF</a>
        <a href="/gram_vikas_manifesto.md" download className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded font-semibold">Download Markdown</a>
      </div>
      <div className="text-center mt-8">
        <Link href="/" className="text-orange-700 hover:underline font-semibold">Back to Home</Link>
      </div>
    </main>
  )
} 