import { Quote } from "lucide-react";

const MissionStatement = () => (
  <section className="py-10 bg-white">
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-gradient-to-r from-green-50 to-yellow-50 border-l-4 border-green-500 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-700 text-center">Our Mission & Vision</h2>
        <p className="text-base md:text-lg text-gray-700 mb-2 text-center">
          हमारा उद्देश्य एक ऐसी युवा पीढ़ी का निर्माण करना है जो आत्मनिर्भर हो, राष्ट्रभक्ति और भारतीय संस्कृति से प्रेरित हो, और आधुनिक चुनौतियों का समाधान निकाल सके।
        </p>
        <p className="text-base md:text-lg text-gray-700 text-center">
          We are committed to reviving rural Bihar through quality education, sustainable agriculture, grassroots entrepreneurship, and cultural consciousness—so that every village becomes self-reliant and dignified.
        </p>
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2 text-green-700">
            <Quote className="w-5 h-5" />
            <span className="italic">"जब गांव जागेंगे, तभी देश प्रगति करेगा।"</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MissionStatement;
