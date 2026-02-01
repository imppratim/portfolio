import fauLogo from "../images/friedrich-alexander-universitaet-fau-logo-b.jpg";
import gtuLogo from "../images/png-clipart-gujarat-technological-university-anand-agricultural-university-c-k-pithawala-college-of-engineering-and-technology-institute-of-technology-student-blue-people.png";

export interface EducationItem {
  university: string;
  degree: string;
  field: string;
  year: string;
  grade: string;
  logo?: string;
  location: string;
  thesis?: string;
  highlights?: string[];
  courses?: string[];
  scholarship?: string;
  finalProject?: string;
}

const education: EducationItem[] = [
  {
    university: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
    degree: "Master of Science",
    field: "Data Science",
    year: "October 2021 - January 2026",
    grade: "In Progress",
    logo: fauLogo,
    location: "Erlangen, Germany",
    thesis:
      "Exploring zero-shot computer vision models for the annotation and detection in the context of weed detection (collaborative thesis with the University of Hohenheim - submitted)",
    highlights: [
      "Evaluated deep learning zero-shot vision models (CLIP, Grounding DINO, and Grounded-SAM 2) for classification, object detection, and segmentation in agricultural imagery",
      "Performed statistical evaluation and comparative analysis to analyze model's performance and deployment feasibility",
      "Ran large scale experiments on high performance computing (HPC) cluster with experience in SLURM batch scripts for GPU resource management",
    ],
    courses: [
      "Deep Learning",
      "Machine Learning in Finance",
      "Machine Learning in Signal Processing",
      "Pattern Recognition",
      "Machine Learning in Time Series",
    ],
  },
  {
    university: "Gujarat Technological University",
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    year: "August 2016 - August 2020",
    grade: "2.1",
    logo: gtuLogo,
    location: "Ahmedabad, India",
    scholarship: "Recipient of a fully funded Government Scholarship (ICCR)",
    finalProject: "Real-Time Bus Fare Comparison Android app",
    courses: [
      "Software Engineering",
      "Artificial Intelligence",
      "Big Data Analysis",
      "Object Oriented Programming in JAVA",
      "Web Technologies",
      "Data Structure",
      "Advanced Design of Algorithms",
    ],
  },
];

export default education;
