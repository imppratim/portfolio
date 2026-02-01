export interface SkillItem {
  name: string;
  proficiency: number;
  icon?: string;
}

export interface Skill {
  category: string;
  icon: string;
  skills: SkillItem[];
}

const mySkills: Skill[] = [
  {
    category: "Machine Learning & AI",
    icon: "🧠",
    skills: [
      { name: "Python", proficiency: 95 },
      { name: "TensorFlow", proficiency: 88 },
      { name: "PyTorch", proficiency: 85 },
      { name: "Computer Vision", proficiency: 82 },
      { name: "NLP", proficiency: 80 },
      { name: "scikit-learn", proficiency: 90 },
    ],
  },
  {
    category: "Web Development",
    icon: "💻",
    skills: [
      { name: "React", proficiency: 85 },
      { name: "TypeScript", proficiency: 80 },
      { name: "JavaScript", proficiency: 80 },
      { name: "HTML/CSS", proficiency: 95 },
      { name: "Vite", proficiency: 85, icon: "⚡" },
      { name: "Bootstrap", proficiency: 90 },
    ],
  },
  {
    category: "Backend & Databases",
    icon: "🔧",
    skills: [
      { name: "Node.js", proficiency: 70 },
      { name: "Django", proficiency: 50 },
      { name: "REST APIs", proficiency: 70 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git", proficiency: 85 },
      { name: "Docker", proficiency: 85 },
      { name: "Linux", proficiency: 88 },
      { name: "Power BI", proficiency: 65 },
      { name: "Microsoft Excel", proficiency: 80 },
      { name: "Microsoft Word", proficiency: 78 },
      { name: "Microsoft PowerPoint", proficiency: 80 },
      { name: "Wordpress", proficiency: 78 },
    ],
  },
];

export default mySkills;
