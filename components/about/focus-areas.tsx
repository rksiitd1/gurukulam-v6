import { BookOpen, Leaf, Briefcase, Shield, Sparkles } from "lucide-react";

const AREAS = [
  {
    title: "Education",
    desc: "Quality, value-based, and modern education for rural children, nurturing curiosity and holistic growth.",
    icon: <BookOpen className="w-8 h-8 text-orange-600 mb-2" />,
    color: "hover:border-orange-500",
  },
  {
    title: "Agriculture",
    desc: "Promoting organic farming, agroforestry, and farmer prosperity through traditional wisdom and modern science.",
    icon: <Leaf className="w-8 h-8 text-green-600 mb-2" />,
    color: "hover:border-green-500",
  },
  {
    title: "Entrepreneurship",
    desc: "Empowering youth and women with skills, self-employment, and local enterprise opportunities.",
    icon: <Briefcase className="w-8 h-8 text-blue-600 mb-2" />,
    color: "hover:border-blue-500",
  },
  {
    title: "Cow Protection",
    desc: "Conserving indigenous cows and building sustainable, self-reliant rural models.",
    icon: <Shield className="w-8 h-8 text-yellow-600 mb-2" />,
    color: "hover:border-yellow-500",
  },
  {
    title: "Culture & Awareness",
    desc: "Reviving traditional arts, leadership, and community pride for a vibrant rural society.",
    icon: <Sparkles className="w-8 h-8 text-purple-600 mb-2" />,
    color: "hover:border-purple-500",
  },
];

const FocusAreas = () => (
  <section className="py-12 bg-green-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-700 mb-8">Our Focus Areas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {AREAS.map((area) => (
          <div
            key={area.title}
            className={`bg-white rounded-xl shadow p-8 text-center border-2 border-transparent transition-all duration-200 ${area.color}`}
          >
            <div className="flex justify-center">{area.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
            <p className="text-gray-700">{area.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FocusAreas; 