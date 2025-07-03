import { Quote } from "lucide-react";

const MissionStatement = () => (
  <section className="py-10 bg-white">
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-gradient-to-r from-green-50 to-yellow-50 border-l-4 border-green-500 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-700 text-center">Our Mission & Vision</h2>
        <p className="text-base md:text-lg text-gray-700 mb-2 text-center">
          हमारा उद्देश्य एक ऐसी युवा पीढ़ी का निर्माण करना है जो आत्मनिर्भर, राष्ट्रभक्त, और भारतीय संस्कृति से प्रेरित हो।
        </p>
        <p className="text-base md:text-lg text-gray-700 text-center">
          We believe that the true progress of Bihar and India is possible only when our villages rise—through quality education, sustainable agriculture, entrepreneurship, and cultural pride.
        </p>
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2 text-green-700">
            <Quote className="w-5 h-5" />
            <span className="italic">"When villages awaken, the nation prospers."</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MissionStatement; 