export const GH = "https://github.com/prethul";
export const LI = "https://www.linkedin.com/in/dipto-howlader-prethul-603808333/";
export const EMAIL = "howladerdipto18@gmail.com";
export type Cat = "Generative AI" | "Machine Learning" | "Deep Learning";
export interface Project { title: string; cat: Cat; desc: string; stack: string[]; repo: string; live?: string }
// Repo links point to your GitHub profile unless the exact repo URL is verified. Replace with exact repo URLs.
export const projects: Project[] = [
  { title: "Promptica-AI — Multi-Agent Research System", cat: "Generative AI", repo: GH,
    desc: "Four LLM agents work in sequence: search (Tavily), reader, writer and critic, producing a reviewed research report through a Streamlit UI.",
    stack: ["LangChain","Gemini","Tavily","Streamlit"] },
  { title: "Medi-Hub — AI Healthcare Booking", cat: "Generative AI", repo: GH,
    desc: "AI symptom-checker chat before booking; confirmed appointments are logged to Google Sheets and confirmed by Gmail, all on an n8n backend.",
    stack: ["n8n","OpenAI/Gemini","Google Sheets","Gmail"] },
  { title: "Piku — AI Shop Order Automation", cat: "Generative AI", repo: GH,
    desc: "n8n automation that parses, organizes and routes incoming shop orders with AI, removing manual order handling.",
    stack: ["n8n","LLM APIs","Webhooks"] },
  { title: "NLP Text Summarizer", cat: "Deep Learning", repo: GH,
    desc: "Summarization web app using a fine-tuned Hugging Face T5 model (PyTorch) served by FastAPI, deployed on Render.",
    stack: ["PyTorch","T5","FastAPI","Render"] },
  { title: "Titanic Survival Prediction", cat: "Machine Learning", repo: GH,
    desc: "Cleaned and engineered features, compared several classifiers, and deployed the result as a live web app.",
    stack: ["Python","Pandas","Scikit-learn"] },
  { title: "NYC Predictor", cat: "Machine Learning", repo: GH,
    desc: "Predictive model on NYC-related data covering cleaning through evaluation.", stack: ["Python","Pandas","NumPy"] },
  { title: "Mental Health Detector", cat: "Machine Learning", repo: GH,
    desc: "ML/NLP system that flags possible mental-health indicators in text for low-friction early screening.", stack: ["Python","NLP"] },
  { title: "Movie Recommendation System", cat: "Machine Learning", repo: GH,
    desc: "Content-based recommender suggesting similar movies using feature similarity.", stack: ["Python","Pandas"] },
];
export const skills: Record<string, string[]> = {
  "AI & Machine Learning": ["Supervised & Unsupervised Learning","NLP","Feature Engineering","Data Preprocessing","Model Evaluation"],
  "Generative AI & LLMs": ["LangChain","Multi-Agent Systems","Google Gemini","OpenAI","Hugging Face (T5 fine-tuning)","Prompt Engineering"],
  "Deep Learning": ["PyTorch","ANN"],
  "Programming & Data": ["Python","NumPy","Pandas","Matplotlib","SQL","JavaScript"],
  "Backend & Automation": ["FastAPI","Streamlit","n8n","REST APIs","Webhooks","Git & GitHub"],
};
export const experience = [
  { role: "Python & ML Instructor", org: "Uttara University Machine Learning Club (UUMLC)", when: "Present",
    desc: "Conducts online classes on Python and machine learning, guiding students from fundamentals to hands-on model building." },
  { role: "Coding Instructor (Remote)", org: "Kishore Coder", when: "Present",
    desc: "Delivers online lessons and helps learners build practical programming skills." },
];
