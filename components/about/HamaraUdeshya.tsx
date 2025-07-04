import React from 'react';

const HamaraUdeshya = () => {
  const objectives = [
    "जो आत्मनिर्भर हो",
    "आधुनिक समाज की जटिल चुनौतियों का समाधान निकाल सके",
    "भारतीय संस्कृति, परंपरा और राष्ट्रभक्ति से प्रेरित हो",
    "जो शारीरिक, मानसिक, बौद्धिक और आध्यात्मिक दृष्टि से पूर्ण विकसित हो",
    "जो वैश्विक सोच के साथ स्थानीय जड़ों से जुड़ी रहे",
    "जो तकनीक का प्रयोग गांव की उन्नति के लिए करे"
  ];

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            हमारा संकल्प: गांव के समग्र विकास के लिए समर्पण
          </h1>
        </div>

        {/* Introduction Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            प्रस्तावना
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-base md:text-lg">
              हमारा देश गांवों से बना है — भारत की आत्मा गांवों में बसती है। बिहार की लगभग 90% जनसंख्या गाँवों में रहती है। गांव न केवल हमारी संस्कृति और परंपरा का केंद्र हैं, बल्कि ये हमारे देश की रीढ़ भी हैं।
            </p>
            
            <p className="text-base md:text-lg">
              लेकिन आज गांवों से शिक्षित, जागरूक और बौद्धिक रूप से सक्षम युवाओं का लगातार पलायन हो रहा है। ये युवा शहरों की चकाचौंध और अवसरों की ओर खिंच जाते हैं, जबकि उनके गांव सामाजिक, आर्थिक और शैक्षणिक रूप से पिछड़े रह जाते हैं।
            </p>
            
            <p className="text-base md:text-lg">
              यह स्थिति केवल गांवों के लिए नहीं, बल्कि पूरे राष्ट्र के लिए चिंता का विषय है। जब गांव के युवा शहरों में छोटे-मोटे कामों में लग जाते हैं, तब उनकी रचनात्मकता, उद्यमिता और ऊर्जा गांव के उत्थान के बजाय महानगरों की भीड़ में गुम हो जाती है।
            </p>
            
            <p className="text-base md:text-lg">
              अगर गांवों से सभी बौद्धिक रूप से सशक्त लोग पलायन कर जाएंगे, तो गांवों की देखभाल कौन करेगा? वहां के बच्चों, किसानों, महिलाओं, बुजुर्गों की प्रगति कौन सुनिश्चित करेगा?
            </p>
            
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-base md:text-lg font-medium text-gray-800">
                इन्हीं प्रश्नों को आत्मसात करते हुए हमने यह निश्चय किया है कि हम अपने शरीर, मन और जीवन को गांव के पुनरुत्थान के कार्य में समर्पित करेंगे। हम न केवल शिक्षा बल्कि रोजगार, कृषि, संस्कृति और स्वाभिमान जगाने के लिए कार्य कर रहे हैं ताकि गांव आत्मनिर्भर और गौरवशाली बन सके।
              </p>
            </div>
          </div>
        </div>

        {/* Objective Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            हमारा उद्देश्य
          </h2>
          
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg mb-8">
            <p className="text-lg md:text-xl text-gray-800 mb-4">
              हमारा उद्देश्य एक ऐसी <span className="text-orange-600 font-semibold">युवा पीढ़ी</span> का निर्माण करना है:
            </p>
          </div>
          
          <div className="space-y-4">
            {objectives.map((objective, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
              >
                <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mt-1 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 md:p-8 rounded-lg text-center">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            "हम यह मानते हैं कि जब तक गांव नहीं उठेंगे, तब तक बिहार और भारत का सम्पूर्ण विकास संभव नहीं है।"
          </p>
          <p className="text-base md:text-lg font-medium">
            "जब गांव जागेंगे, तभी देश प्रगति करेगा।"
          </p>
        </div>

      </div>
    </div>
  );
};

export default HamaraUdeshya;