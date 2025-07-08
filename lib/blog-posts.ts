// Blog post type definition
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  slug: string;
  category?: string;
  author?: string;
  readTime?: string;
  views?: string;
  likes?: number;
  tags?: string[];
}

// Centralized blog post data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "From IIT Delhi to Bihar Villages: A Journey of Purpose",
    excerpt:
      "How Mukund Agrawal left his corporate career to dedicate his life to transforming rural education in Bihar through dharmic values and modern pedagogy.",
    content: `
      <p>When I graduated from IIT Delhi with a Computer Science degree, everyone expected me to join a multinational corporation or start a tech company. Instead, I chose a different path – one that led me back to the villages of Bihar, where I was born and raised.</p>
      <h2>The Calling</h2>
      <p>During my time at IIT, I witnessed the stark contrast between urban opportunities and rural realities. While my classmates discussed startup ideas and corporate packages, I couldn't stop thinking about the children in my village who had the same potential but lacked access to quality education.</p>
      <p>The turning point came during a visit home in my final year. I met Ravi, a bright 12-year-old who could solve complex mathematical problems in his head but had never seen a computer. His curiosity and intelligence reminded me of myself at that age, but unlike me, he didn't have the privilege of quality education.</p>
      <h2>The Decision</h2>
      <p>That encounter changed everything. I realized that true success isn't measured by personal achievements alone, but by the positive impact we create in others' lives. I decided to dedicate my life to bridging the educational gap between urban and rural India.</p>
      <blockquote>
        <p>"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</p>
      </blockquote>
      <p>This quote resonated deeply with me as I embarked on this journey. I knew that by focusing on education, I could create a ripple effect that would transform entire communities.</p>
      <h2>Building Divya Bihar Mission</h2>
      <p>Starting Divya Bihar Mission wasn't easy. I faced skepticism from family, friends, and even potential beneficiaries. Many questioned why someone with an IIT degree would choose to work in rural areas when lucrative opportunities awaited in cities.</p>
      <p>But I was determined. I started small – with just five students in a rented room in Raghopur. We had no fancy infrastructure, no high-tech equipment, just a whiteboard, some books, and an unwavering belief in the power of education.</p>
      <h2>The Gurukulam Vision</h2>
      <p>The journey of Divya Bihar Mission began with a simple yet powerful vision: to provide quality education to every child in rural Bihar, irrespective of their socio-economic background. Our founder, Mukund Agrawal, an IIT Delhi alumnus, witnessed the stark educational disparities in his home state and was moved to create a system that was both modern in its approach and rooted in Indian values.</p>
      <p>Our founder's vision was not just to build schools, but to create centers of excellence that would serve as beacons of hope and transformation for entire communities. The goal was to nurture students who were not only academically proficient but also culturally aware, socially responsible, and equipped to lead in a global world. This led to the creation of our Gurukulam system – a unique blend of ancient wisdom and contemporary learning.</p>
      <p>In our Gurukulam, students learn Sanskrit alongside Science, practice yoga with mathematics, and understand dharmic values through practical applications. This holistic approach ensures that our students become well-rounded individuals, ready to face life's challenges with confidence and integrity.</p>
      <h2>Impact and Growth</h2>
      <p>Today, six years later, Divya Bihar Mission has grown beyond my wildest dreams. We have:</p>
      <ul>
        <li>Educated over 500 students across multiple programs</li>
        <li>Helped 50+ students gain admission to prestigious colleges</li>
        <li>Trained 200+ farmers in sustainable agriculture practices</li>
        <li>Supported 30+ young entrepreneurs through our Udyamita program</li>
      </ul>
      <p>But numbers don't tell the complete story. The real impact lies in the transformed lives – students who have become the first in their families to attend college, farmers who have doubled their income through organic practices, and young entrepreneurs who are creating jobs in their communities.</p>
      <h2>Challenges and Learnings</h2>
      <p>The journey hasn't been without challenges. We've faced funding constraints, infrastructure limitations, and occasional resistance to change. However, each challenge has taught us valuable lessons and made our mission stronger.</p>
      <p>One of the biggest learnings has been the importance of community involvement. Sustainable change can only happen when the community takes ownership of the transformation process. We've learned to work with local leaders, involve parents in decision-making, and respect traditional knowledge while introducing modern concepts.</p>
      <h2>Looking Ahead</h2>
      <p>As I reflect on this journey, I'm filled with gratitude and excitement for the future. We're planning to expand our reach to more villages, introduce new programs, and create a model that can be replicated across rural India.</p>
      <p>My message to young professionals, especially those from rural backgrounds, is simple: success isn't just about personal achievement. True fulfillment comes from using your skills and knowledge to uplift others. The villages that raised us need our expertise, our passion, and our commitment.</p>
      <p>The journey from IIT Delhi to Bihar villages has been the most rewarding experience of my life. Every day, I wake up knowing that my work has the potential to change lives, preserve our cultural heritage, and build a better future for rural India.</p>
      <p>This is not just my story – it's a call to action for all of us to contribute to the transformation of rural India, one village at a time.</p>
    `,
    date: "2024-01-15",
    image: "/placeholder.svg?height=500&width=800",
    slug: "iit-delhi-to-bihar-villages-journey",
    category: "Founder Story",
    author: "Mukund Agrawal",
    readTime: "8 min read",
    views: "2.5K",
    likes: 156,
    tags: ["Education", "Rural Development", "IIT", "Bihar", "Social Impact"],
  },
  {
    id: 2,
    title: "Gurukulam Education: Bridging Ancient Wisdom with Modern Learning",
    excerpt:
      "Exploring how our Gurukulam system combines traditional Sanskrit education with contemporary subjects to create well-rounded individuals.",
    content: "",
    date: "2024-01-12",
    image: "/placeholder.svg?height=400&width=600",
    slug: "gurukulam-education-ancient-wisdom-modern-learning",
    category: "Education",
    author: "Mukund Agrawal",
    readTime: "7 min read",
    views: "1.8K",
    likes: 120,
    tags: ["Gurukulam", "Sanskrit", "Modern Learning"],
  },
  {
    id: 3,
    title: "Organic Farming Revolution: Students Leading Change",
    excerpt:
      "Meet the young farmers from our Agriculture Program who are transforming their family lands with sustainable organic practices.",
    content: "",
    date: "2024-01-10",
    image: "/placeholder.svg?height=400&width=600",
    slug: "organic-farming-revolution-students-leading-change",
    category: "Agriculture",
    author: "Mukund Agrawal",
    readTime: "6 min read",
    views: "1.2K",
    likes: 90,
    tags: ["Farming", "Organic", "Students"],
  },
  {
    id: 4,
    title: "Udyamita Program: Nurturing Young Entrepreneurs",
    excerpt:
      "How our entrepreneurship program is helping rural youth start their own businesses and become job creators rather than job seekers.",
    content: "",
    date: "2024-01-12",
    image: "/placeholder.svg?height=200&width=350",
    slug: "udyamita-program-nurturing-young-entrepreneurs",
    category: "Entrepreneurship",
    author: "Mukund Agrawal",
    readTime: "7 min read",
    views: "1.8K",
    likes: 120,
    tags: ["Entrepreneurship", "Youth", "Rural"],
  },
  {
    id: 5,
    title: "Traditional Festivals at Gurukulam: Preserving Cultural Heritage",
    excerpt:
      "Celebrating Diwali, Holi, and other festivals at our Gurukulam while teaching students about their cultural significance and values.",
    content: "",
    date: "2024-01-10",
    image: "/placeholder.svg?height=200&width=350",
    slug: "traditional-festivals-gurukulam-cultural-heritage",
    category: "Culture",
    author: "Mukund Agrawal",
    readTime: "6 min read",
    views: "1.2K",
    likes: 90,
    tags: ["Culture", "Festivals", "Heritage"],
  },
  {
    id: 6,
    title: "Sustainable Agriculture: Water Conservation Techniques",
    excerpt:
      "Learn about the innovative water conservation methods our students are implementing to make farming more sustainable and profitable.",
    content: "",
    date: "2024-01-08",
    image: "/placeholder.svg?height=200&width=350",
    slug: "sustainable-agriculture-water-conservation-techniques",
    category: "Agriculture",
    author: "Mukund Agrawal",
    readTime: "5 min read",
    views: "1.1K",
    likes: 80,
    tags: ["Agriculture", "Water Conservation"],
  },
  {
    id: 7,
    title: "Parent Testimonials: Why Families Choose Our Gurukulam",
    excerpt:
      "Hear directly from parents about their experiences with Divya Bihar Mission and why they believe in our educational approach.",
    content: "",
    date: "2024-01-05",
    image: "/placeholder.svg?height=200&width=350",
    slug: "parent-testimonials-families-choose-gurukulam",
    category: "Testimonials",
    author: "Mukund Agrawal",
    readTime: "4 min read",
    views: "900",
    likes: 60,
    tags: ["Testimonials", "Parents"],
  },
  {
    id: 8,
    title: "Digital Learning in Rural Areas: Bridging the Gap",
    excerpt:
      "How we're using technology to enhance education in remote villages while maintaining our focus on traditional values.",
    content: "",
    date: "2024-01-03",
    image: "/placeholder.svg?height=200&width=350",
    slug: "digital-learning-rural-areas-bridging-gap",
    category: "Education",
    author: "Mukund Agrawal",
    readTime: "5 min read",
    views: "1.0K",
    likes: 70,
    tags: ["Digital Learning", "Rural"],
  },
  {
    id: 9,
    title: "Holistic Education: Mind, Body, and Spirit Development",
    excerpt:
      "Understanding our comprehensive approach to education that nurtures students intellectually, physically, and spiritually.",
    content: "",
    date: "2023-12-28",
    image: "/placeholder.svg?height=200&width=350",
    slug: "holistic-education-mind-body-spirit",
    category: "Education",
    author: "Mukund Agrawal",
    readTime: "6 min read",
    views: "950",
    likes: 65,
    tags: ["Holistic Education", "Mind", "Body", "Spirit"],
  },
  {
    id: 10,
    title: "Community Impact: Transforming Rural Villages",
    excerpt:
      "See how our programs are creating positive change in rural communities across India through education and empowerment.",
    content: "",
    date: "2023-12-25",
    image: "/placeholder.svg?height=200&width=350",
    slug: "community-impact-transforming-villages",
    category: "Community",
    author: "Mukund Agrawal",
    readTime: "5 min read",
    views: "800",
    likes: 55,
    tags: ["Community", "Impact"],
  },
  {
    id: 11,
    title: "Student Achievements: Academic Excellence Stories",
    excerpt:
      "Celebrating the remarkable achievements of our students in various academic and competitive examinations.",
    content: "",
    date: "2023-12-22",
    image: "/placeholder.svg?height=200&width=350",
    slug: "student-achievements-academic-excellence",
    category: "Achievements",
    author: "Mukund Agrawal",
    readTime: "4 min read",
    views: "700",
    likes: 50,
    tags: ["Achievements", "Students"],
  },
  {
    id: 12,
    title: "Yoga and Meditation: Daily Practice at Gurukulam",
    excerpt: "A look into the daily yoga and meditation practices at our centers and how they contribute to students' well-being and focus.",
    content: "",
    date: "2023-12-20",
    image: "/placeholder.svg?height=200&width=350",
    slug: "yoga-meditation-daily-practice",
    category: "Wellbeing",
    author: "Mukund Agrawal",
    readTime: "5 min read",
    views: "600",
    likes: 45,
    tags: ["Yoga", "Meditation", "Wellbeing"],
  },
  {
    id: 13,
    title: "Agricultural Innovation: Modern Farming Techniques",
    excerpt:
      "Exploring how our agricultural program combines traditional wisdom with modern technology for better yields.",
    content: "",
    date: "2023-12-18",
    image: "/placeholder.svg?height=200&width=350",
    slug: "agricultural-innovation-modern-farming",
    category: "Agriculture",
    author: "Mukund Agrawal",
    readTime: "6 min read",
    views: "500",
    likes: 40,
    tags: ["Agriculture", "Innovation"],
  },
  {
    id: 14,
    title: "Teacher Training: Preparing Quality Educators",
    excerpt: "Our comprehensive teacher training programs that ensure quality education delivery in rural areas.",
    content: "",
    date: "2023-12-15",
    image: "/placeholder.svg?height=200&width=350",
    slug: "teacher-training-quality-educators",
    category: "Education",
    author: "Mukund Agrawal",
    readTime: "5 min read",
    views: "400",
    likes: 35,
    tags: ["Teacher Training", "Quality", "Educators"],
  },
  {
    id: 15,
    title: "Cultural Programs: Preserving Indian Heritage",
    excerpt: "How our cultural programs help students connect with their roots while preparing for the modern world.",
    content: "",
    date: "2023-12-12",
    image: "/placeholder.svg?height=200&width=350",
    slug: "cultural-programs-indian-heritage",
    category: "Culture",
    author: "Mukund Agrawal",
    readTime: "5 min read",
    views: "300",
    likes: 30,
    tags: ["Culture", "Heritage"],
  },
  {
    id: 16,
    title: "Health and Nutrition: Caring for Student Wellbeing",
    excerpt: "Our comprehensive approach to student health including nutritious meals and regular health checkups.",
    content: "",
    date: "2023-12-10",
    image: "/placeholder.svg?height=200&width=350",
    slug: "health-nutrition-student-wellbeing",
    category: "Wellbeing",
    author: "Mukund Agrawal",
    readTime: "4 min read",
    views: "200",
    likes: 20,
    tags: ["Health", "Nutrition", "Wellbeing"],
  },
  {
    id: 17,
    title: "Alumni Success: Making a Difference in Society",
    excerpt:
      "Stories of our alumni who are now contributing to society in various fields and making a positive impact.",
    content: "",
    date: "2023-12-08",
    image: "/placeholder.svg?height=200&width=350",
    slug: "alumni-success-making-difference",
    category: "Alumni",
    author: "Mukund Agrawal",
    readTime: "5 min read",
    views: "100",
    likes: 10,
    tags: ["Alumni", "Success"],
  },
]; 