# Passion-First Personalized Career & Education Advisor

## 📌 Overview
Choosing a career without understanding one’s passion often leads to confusion, poor decisions, and wasted potential—especially among students from rural and semi-urban areas.

This project introduces a **Passion-First Career & Education Guidance Platform** that helps students first discover their passions and then maps them to realistic career paths with clear roadmaps and salary insights.

The system follows a **See → Try → Choose** approach and is designed to work even in **low-internet or offline environments**.

---

## 🎯 Objectives
- Discover students’ passions using activity-based inputs
- Map passions to realistic and achievable careers
- Provide personalized learning and career roadmaps
- Support parents with transparent salary and ROI insights
- Enable offline-first accessibility

---

## 🔄 System Flow
```
Student
  ↓
Passion Discovery
  ↓
Passion Profile (Primary & Secondary)
  ↓
Career Mapping
  ↓
Career Recommendation
  ↓
Roadmap + Salary Insights
```

---

## ✨ Key Features
- **Passion Discovery Engine**
  - Activity-based scoring
  - No psychological jargon
  - Identifies primary and secondary passions

- **Passion to Career Mapping**
  - Connects interests with realistic career options
  - Avoids forcing passions into unsuitable careers

- **Personalized Career Roadmap**
  - Required skills
  - Learning duration
  - Expected salary range

- **Offline-First Design**
  - Works in low or no internet environments
  - Ready for IndexedDB / SQLite integration

- **Parent-Friendly Insights**
  - Clear salary expectations
  - Transparent decision-making support

---

## 🛠️ Tech Stack

### Backend
- Python
- Flask (REST API)

### Frontend
- HTML
- CSS
- JavaScript

### Storage
- JSON / LocalStorage
- SQLite (planned)

---

## 📁 Project Structure
```
career-advisor/
│
├── backend/
│   ├── app.py
│   ├── passion_data.py
│   ├── career_mapping.py
│   └── roadmap_data.py
│
└── frontend/
    ├── index.html
    ├── script.js
    └── style.css
```

---

## ▶️ How to Run the Project

### Backend Setup
```
cd backend
pip install flask
python app.py
```

Backend runs at:
```
http://127.0.0.1:5000
```

---

### Frontend Setup
- Open `frontend/index.html` in a browser
- Enter passion scores
- Submit to view results

---

## 📡 API Details

### Endpoint
```
POST /analyze
```

### Sample Request
```json
{
  "answers": {
    "Technology": 8,
    "Creativity": 5,
    "Communication": 4,
    "HandsOn": 3,
    "Helping": 2,
    "Data": 6
  }
}
```

### Sample Response
```json
{
  "passion_profile": {
    "primary_passion": "Technology",
    "secondary_passion": "Data"
  },
  "recommended_career": "Software Developer",
  "roadmap": {
    "skills": ["Python", "DSA", "Web Development"],
    "duration": "12 Months",
    "salary": "₹4–8 LPA"
  }
}
```

---

## 🌟 Unique Value Proposition
Unlike generic career guidance platforms, this system **discovers passion first** and then maps it to **realistic career paths** with clear roadmaps and salary insights—making students confident and parents supportive.

---

## 🔮 Future Enhancements
- Mini career challenges (Try phase)
- Parent ROI dashboard
- Local language support
- Mentor interaction module
- Mobile app with SQLite offline support

---

## 🏆 Hackathon Details
- **Team Name:** OOPS WE CODED
- **Event:** VIBE CRAFT 2026
- **Theme:** CAREER PATHS EXPOSURE

---

## 👥 Team
OOPS WE CODED
