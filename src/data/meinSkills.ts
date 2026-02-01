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
      { name: "Python", proficiency: 95, icon: "🐍" },
      { name: "TensorFlow", proficiency: 88, icon: "📊" },
      { name: "PyTorch", proficiency: 85, icon: "🔥" },
      { name: "Computer Vision", proficiency: 82, icon: "👁️" },
      { name: "NLP", proficiency: 80, icon: "📝" },
      { name: "scikit-learn", proficiency: 90, icon: "🎯" },
    ],
  },
  {
    category: "Web Development",
    icon: "💻",
    skills: [
      { name: "React", proficiency: 92, icon: "⚛️" },
      { name: "TypeScript", proficiency: 88, icon: "📘" },
      { name: "JavaScript", proficiency: 95, icon: "✨" },
      { name: "HTML/CSS", proficiency: 93, icon: "🎨" },
      { name: "Vite", proficiency: 85, icon: "⚡" },
      { name: "Bootstrap", proficiency: 90, icon: "🅱️" },
    ],
  },
  {
    category: "Backend & Databases",
    icon: "🔧",
    skills: [
      { name: "Node.js", proficiency: 88, icon: "🟢" },
      { name: "Django", proficiency: 85, icon: "🐍" },
      { name: "PostgreSQL", proficiency: 87, icon: "🗄️" },
      { name: "MongoDB", proficiency: 83, icon: "🍃" },
      { name: "REST APIs", proficiency: 90, icon: "🔌" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git", proficiency: 92, icon: "🌳" },
      { name: "Docker", proficiency: 85, icon: "🐳" },
      { name: "Linux", proficiency: 88, icon: "🐧" },
      { name: "Jupyter", proficiency: 89, icon: "📓" },
      { name: "VS Code", proficiency: 95, icon: "💬" },
      { name: "AWS", proficiency: 78, icon: "☁️" },
    ],
  },
];

export default mySkills;
