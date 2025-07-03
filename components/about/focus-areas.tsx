import { BookOpen, Leaf, Briefcase, Shield, Sparkles } from "lucide-react";

const AREAS = [
  {
    hiTitle: "शिक्षा",
    enTitle: "Education",
    hiDesc: "गांव के बच्चों को संस्कार, विज्ञान, और प्रकृति से जोड़ती शिक्षा—जहाँ हर जिज्ञासा को पंख मिलें।",
    enDesc: "Value-based, modern education for rural children, nurturing curiosity and holistic growth.",
    icon: <BookOpen className="w-9 h-9 text-orange-500 mb-2" />,
    accent: "border-orange-200",
  },
  {
    hiTitle: "कृषि और जैविक खेती",
    enTitle: "Agriculture",
    hiDesc: "जैविक खेती, एग्रोफोरेस्ट्री, और किसान की समृद्धि—धरती माँ की उर्वरता और पर्यावरण की रक्षा।",
    enDesc: "Organic farming, agroforestry, and farmer prosperity—protecting soil and environment.",
    icon: <Leaf className="w-9 h-9 text-green-600 mb-2" />,
    accent: "border-green-200",
  },
  {
    hiTitle: "उद्यमिता विकास",
    enTitle: "Entrepreneurship",
    hiDesc: "गांवों में स्वरोजगार, कौशल विकास, और महिला सशक्तिकरण—हर हाथ को काम, हर मन को सम्मान।",
    enDesc: "Self-employment, skill development, and women's empowerment in villages.",
    icon: <Briefcase className="w-9 h-9 text-blue-600 mb-2" />,
    accent: "border-blue-200",
  },
  {
    hiTitle: "गौशाला और संरक्षण",
    enTitle: "Cow Protection",
    hiDesc: "देशी गायों का संरक्षण, जैविक खाद, और आत्मनिर्भर ग्राम—ग्राम्य जीवन की परंपरा को पुनर्जीवित करना।",
    enDesc: "Indigenous cow conservation, organic manure, and self-reliant rural models.",
    icon: <Shield className="w-9 h-9 text-yellow-600 mb-2" />,
    accent: "border-yellow-200",
  },
  {
    hiTitle: "संस्कृति और चेतना",
    enTitle: "Culture & Awareness",
    hiDesc: "योग, उत्सव, लोककला, और ग्राम स्वराज—गांव की चेतना और गौरव को जगाना।",
    enDesc: "Yoga, festivals, folk arts, and village pride—reviving rural spirit.",
    icon: <Sparkles className="w-9 h-9 text-purple-600 mb-2" />,
    accent: "border-purple-200",
  },
];

const FocusAreas = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 font-devanagari mb-1">
        हमारे कार्यक्षेत्र
      </h2>
      <p className="text-base md:text-lg text-center text-gray-500 mb-10">
        Our Core Focus Areas
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 3-2 grid for 5 items: hide last card on lg, show below */}
        {AREAS.slice(0, 3).map((area, idx) => (
          <div
            key={area.hiTitle}
            className={`bg-white border-2 ${area.accent} rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-200 hover:shadow-lg animate-fade-in-up`}
            style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
          >
            <div className="flex justify-center items-center mb-2">{area.icon}</div>
            <h3 className="text-xl md:text-2xl font-bold text-green-900 font-devanagari mb-1">{area.hiTitle}</h3>
            <div className="text-sm text-gray-500 mb-2">{area.enTitle}</div>
            <p className="text-gray-800 font-devanagari text-base md:text-lg mb-1">{area.hiDesc}</p>
            <p className="text-gray-500 text-sm md:text-base">{area.enDesc}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 lg:mx-auto lg:w-2/3">
        {AREAS.slice(3).map((area, idx) => (
          <div
            key={area.hiTitle}
            className={`bg-white border-2 ${area.accent} rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-200 hover:shadow-lg animate-fade-in-up`}
            style={{ animationDelay: `${(idx + 3) * 0.1 + 0.2}s` }}
          >
            <div className="flex justify-center items-center mb-2">{area.icon}</div>
            <h3 className="text-xl md:text-2xl font-bold text-green-900 font-devanagari mb-1">{area.hiTitle}</h3>
            <div className="text-sm text-gray-500 mb-2">{area.enTitle}</div>
            <p className="text-gray-800 font-devanagari text-base md:text-lg mb-1">{area.hiDesc}</p>
            <p className="text-gray-500 text-sm md:text-base">{area.enDesc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FocusAreas; 