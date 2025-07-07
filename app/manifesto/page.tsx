import Link from "next/link"
import { Download, Home } from "lucide-react"

export default function ManifestoPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-orange-700 font-devanagari mb-2 tracking-tight drop-shadow">ग्राम विकास संकल्प</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Gram Vikas Manifesto</h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
          Our vision and commitment for the holistic development of rural Bihar. This is our guiding document—read, share, or download to join the movement.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-sm">
          <a
            href="/Gram Vikas Manifesto.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
          <a
            href="/gram_vikas_manifesto.md"
            download
            className="group flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
          >
            <Download className="w-4 h-4" />
            Download .md
          </a>
        </div>
      </header>

      {/* Manifesto Content */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-orange-700 mb-4 border-b-4 border-orange-200 pb-2">हमारा संकल्प: गांव के समग्र विकास के लिए समर्पण</h3>
        <div className="space-y-4 text-lg leading-relaxed text-gray-800">
          <p>हमारा देश गांवों से बना है — भारत की आत्मा गांवों में बसती है। बिहार की लगभग 90% जनसंख्या गाँवों में रहती है। गांव न केवल हमारी संस्कृति और परंपरा का केंद्र हैं, बल्कि ये हमारे देश की रीढ़ भी हैं। लेकिन आज गांवों से शिक्षित, जागरूक और बौद्धिक रूप से सक्षम युवाओं का लगातार पलायन हो रहा है। ये युवा शहरों की चकाचौंध और अवसरों की ओर खिंच जाते हैं, जबकि उनके गांव सामाजिक, आर्थिक और शैक्षणिक रूप से पिछड़े रह जाते हैं।</p>
          <p>यह स्थिति केवल गांवों के लिए नहीं, बल्कि पूरे राष्ट्र के लिए चिंता का विषय है। जब गांव के युवा शहरों में छोटे-मोटे कामों में लग जाते हैं, तब उनकी रचनात्मकता, उद्यमिता और ऊर्जा गांव के उत्थान के बजाय महानगरों की भीड़ में गुम हो जाती है।</p>
          <p>अगर गांवों से सभी बौद्धिक रूप से सशक्त लोग पलायन कर जाएंगे, तो गांवों की देखभाल कौन करेगा? वहां के बच्चों, किसानों, महिलाओं, बुजुर्गों की प्रगति कौन सुनिश्चित करेगा?</p>
          <p>इन्हीं प्रश्नों को आत्मसात करते हुए हमने यह निश्चय किया है कि हम अपने शरीर, मन और जीवन को गांव के पुनरुत्थान के कार्य में समर्पित करेंगे। हम न केवल शिक्षा बल्कि रोजगार, कृषि, संस्कृति और स्वाभिमान जगाने के लिए कार्य कर रहे हैं ताकि गांव आत्मनिर्भर और गौरवशाली बन सके।</p>
        </div>
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-green-700 mb-4 border-b-4 border-green-200 pb-2">हमारा उद्देश्य</h3>
        <p className="mb-4 text-lg text-gray-800">हमारा उद्देश्य एक ऐसी <b>युवा पीढ़ी</b> का निर्माण करना है:</p>
        <ul className="list-disc pl-8 mb-4 text-lg text-gray-800 space-y-1">
          <li>जो आत्मनिर्भर हो</li>
          <li>आधुनिक समाज की जटिल चुनौतियों का समाधान निकाल सके</li>
          <li>भारतीय संस्कृति, परंपरा और राष्ट्रभक्ति से प्रेरित हो</li>
          <li>जो शारीरिक, मानसिक, बौद्धिक और आध्यात्मिक दृष्टि से पूर्ण विकसित हो</li>
          <li>जो वैश्विक सोच के साथ स्थानीय जड़ों से जुड़ी रहे</li>
          <li>जो तकनीक का प्रयोग गांव की उन्नति के लिए करे</li>
        </ul>
        <p className="text-lg text-gray-800">हम यह मानते हैं कि जब तक गांव नहीं उठेंगे, तब तक बिहार और भारत का सम्पूर्ण विकास संभव नहीं है। जब गांव जागेंगे, तभी देश प्रगति करेगा।</p>
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b-4 border-blue-200 pb-2">हमारे कार्यक्षेत्र</h3>
        <div className="mb-8">
          <h4 className="font-semibold text-lg text-orange-700 mb-2">1. शिक्षा</h4>
          <ul className="list-disc pl-8 text-lg text-gray-800 space-y-1">
            <li>गांव के बच्चों को कम लागत में उच्च गुणवत्ता की शिक्षा देना</li>
            <li>प्रतियोगी परीक्षाओं की तैयारी करवाना (जैसे सिमुलतला, नवोदय, <i>रामानुजन टैलेंट सर्च परीक्षा</i>, JEE, NEET)</li>
            <li>बच्चों को संस्कारों, योग, और प्रकृति से जोड़ना</li>
            <li>क्लासरूम के तनावपूर्ण माहौल से अलग, <i>प्राकृतिक वातावरण में शिक्षा</i> देना</li>
            <li>बच्चों की जिज्ञासा को पोषित करने के लिए विज्ञान, गणित और भाषा की प्रयोगात्मक कक्षाएं</li>
            <li>डिजिटल शिक्षा और कंप्यूटर साक्षरता को गांव तक पहुंचाना</li>
            <li>बच्चों को उनकी रुचियों और प्रतिभाओं के अनुसार करियर मार्गदर्शन देना</li>
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="font-semibold text-lg text-green-700 mb-2">2. कृषि और जैविक खेती</h4>
          <ul className="list-disc pl-8 text-lg text-gray-800 space-y-1">
            <li>जैविक खेती और एग्रोफोरेस्ट्री को बढ़ावा देना</li>
            <li>किसानों को विषमुक्त उत्पादन की ओर मार्गदर्शन</li>
            <li>भूमि की उर्वरता और पर्यावरण की रक्षा</li>
            <li>किसानों की आमदनी में वृद्धि</li>
            <li>परंपरागत ज्ञान और आधुनिक कृषि विज्ञान का समन्वय</li>
            <li>प्राकृतिक कीटनाशक और खाद के प्रयोग का प्रशिक्षण</li>
            <li>कृषि आधारित उद्योगों को बढ़ावा देना जैसे - जैविक सब्जी बिक्री, मशरूम उत्पादन, एग्रोफॉरेस्ट्री आधारित फल-वृक्ष उत्पादन, बांस और अन्य बहुवर्षीय पौधों की खेती, औषधीय पौधों का व्यवसायिक उपयोग, ग्रामीण नर्सरी और वृक्षारोपण केंद्रों की स्थापना</li>
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="font-semibold text-lg text-blue-700 mb-2">3. उद्यमिता विकास</h4>
          <ul className="list-disc pl-8 text-lg text-gray-800 space-y-1">
            <li>गांवों में स्वरोजगार को बढ़ावा देना</li>
            <li>युवाओं को स्थानीय संसाधनों के आधार पर उद्यमी बनाना</li>
            <li>शहरों की झुग्गियों से बचाकर गांवों में सम्मानजनक जीवन देना</li>
            <li>कौशल विकास प्रशिक्षण (Skill Development Workshops)</li>
            <li>महिला स्वयं सहायता समूहों को आर्थिक रूप से सशक्त बनाना</li>
            <li>कुटीर उद्योगों और हस्तशिल्प के लिए बाजार तक पहुंच बनाना</li>
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="font-semibold text-lg text-pink-700 mb-2">4. गौशाला का विकास</h4>
          <ul className="list-disc pl-8 text-lg text-gray-800 space-y-1">
            <li>देशी गायों का संरक्षण व पालन</li>
            <li>स्वदेशी नस्लों के माध्यम से शुद्ध दूध का उत्पादन</li>
            <li>गोशाला निर्माण हेतु भूमि व संसाधनों की व्यवस्था</li>
            <li>जैविक खाद और पंचगव्य निर्माण में गायों की भूमिका</li>
            <li>गोपालन को आधुनिक व्यवस्थाओं से जोड़ना</li>
            <li>ग्राम स्तर पर गौशाला आधारित आत्मनिर्भर मॉडल विकसित करना</li>
            <li>ग्रामीण जीवन में गायों की पारंपरिक भूमिका को पुनर्जीवित करना</li>
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="font-semibold text-lg text-yellow-700 mb-2">5. संस्कृति और चेतना</h4>
          <ul className="list-disc pl-8 text-lg text-gray-800 space-y-1">
            <li>योग दिवस, उत्सव, ग्राम भ्रमण, आदि कार्यक्रमों का आयोजन</li>
            <li>गांव की प्रतिभाओं को मंच देना</li>
            <li>ग्राम्य जीवन को गौरवमयी बनाना</li>
            <li>पारंपरिक संगीत, कला, और लोक विधाओं का संरक्षण</li>
            <li>ग्राम स्वराज और आत्मनिर्भर भारत की भावना को जागृत करना</li>
            <li>युवाओं को नेतृत्व और सेवा के लिए प्रेरित करना</li>
          </ul>
        </div>
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-red-700 mb-4 border-b-4 border-red-200 pb-2">आपका सहयोग</h3>
        <div className="space-y-4 text-lg leading-relaxed text-gray-800">
          <p>हर संवेदनशील नागरिक समाज के लिए कुछ करना चाहता है। हम गांवों की दुर्दशा से व्यथित हैं, और भारत के भविष्य को उज्ज्वल देखना चाहते हैं, तो आइए साथ मिलकर इस यज्ञ में आहुति दें। हम आपकी भागीदारी को आमंत्रित करते हैं—यह आंदोलन केवल हमारा नहीं, बल्कि हम सबका है।</p>
          <p><b>हम सब अपना योगदान तीन रूपों में दे सकते हैं:</b></p>
          <ol className="list-decimal pl-8 mb-2">
            <li><b>तन</b> – स्वयंसेवक के रूप में समय और सेवा देकर</li>
            <li><b>मन</b> – सुझाव, अनुभव और मार्गदर्शन देकर</li>
            <li><b>धन</b> – आर्थिक सहयोग देकर, ताकि इन कार्यों को धरातल पर उतारा जा सके</li>
          </ol>
          <blockquote className="border-l-4 border-orange-600 pl-4 italic text-orange-700 text-lg">ऐसा छोटा योगदान, गांव की बड़ी मुस्कान बन सकता है।</blockquote>
          <p>हम यह मानते हैं कि वास्तविक परिवर्तन केवल योजनाओं से नहीं, बल्कि एकजुट और अटूट संकल्प तथा सतत प्रयासों से सम्भव होता है।</p>
        </div>
      </section>
      <footer className="flex flex-col items-center gap-4 mt-12">
        <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-sm">
          <a
            href="/Gram Vikas Manifesto.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
          <a
            href="/gram_vikas_manifesto.md"
            download
            className="group flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
          >
            <Download className="w-4 h-4" />
            Download .md
          </a>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2">
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </footer>
    </main>
  )
} 