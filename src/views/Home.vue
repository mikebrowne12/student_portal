<template>
  <div class="container">
    <div class="student-info">
      <h1>{{ student.first_name }} {{ student.last_name }}</h1>
      <p>{{ student.email }} | {{ student.phone_number }}</p>
      <p>{{ student.short_bio }}</p>
      <p>
        {{ student.linkedin_url }} | {{ student.twitter_handle }} | {{ student.personal_website }} |
        {{ student.online_resume_url }} | {{ student.github_url }}
      </p>
      <button v-on:click="editSection('info')">Edit</button>
    </div>

    <h1>Experience</h1>
    <div v-for="experience in student.experiences">
      <p>{{ experience.job_title }}</p>
      <p>{{ experience.company }}</p>
      <p>{{ experience.start_date }}</p>
      <p>{{ experience.end_date }}</p>
      <p>{{ experience.details }}</p>
      <button v-on:click="editSection('info')">Edit</button>
    </div>

    <h1>Education</h1>
    <div v-for="education in student.educations">
      <p>{{ education.university_name }}</p>
      <p>{{ education.degree }}</p>
      <p>{{ education.start_date }}</p>
      <p>{{ education.end_date }}</p>
      <p>{{ education.details }}</p>
      <button v-on:click="editSection('info')">Edit</button>
    </div>

    <h2>Skills</h2>
    <div v-for="skill in student.skills">
      <p>{{ skill.skill_name }}</p>
      <button v-on:click="editSection('info')">Edit</button>
    </div>

    <h2>Capstone</h2>
    <div v-for="capstone in student.capstones">
      <p>{{ capstone.description }}</p>
      <p>{{ capstone.project_url }}</p>
      <p>{{ capstone.screenshot_url }}</p>
      <button v-on:click="editSection('info')">Edit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data: function() {
    return {
      student: {
        first_name: "Brandon",
        last_name: "Ray",
        email: "brandon@email.com",
        phone_number: "555-555-5555",
        short_bio: "Brandon is a student who studies.",
        linkedin_url: "linkedin.com/brandon",
        twitter_handle: "@brandon",
        personal_website: "www.brandonray.com",
        online_resume_url: "placeholder",
        github_url: "github.com/brandon",
        experiences: [
          {
            job_title: "Manager",
            company: "Actualize",
            start_date: "01/01/01-",
            end_date: "Present",
            details: " Manages Actualize employees."
          },
          {
            job_title: "Fry cook",
            company: "KFC",
            start_date: "01/01/98 -",
            end_date: "04/02/00",
            details: "Fried Chicken."
          }
        ],
        educations: [
          {
            university_name: "Harvard",
            degree: "Bachelor in Economics",
            start_date: "03/01/94 -",
            end_date: "06/01/96",
            details: "Cum laude"
          }
        ],
        skills: [
          {
            skill_name: "ProgresSQL, Ruby, Rails, Vue.js, Git, Github "
          }
        ],
        capstones: [
          {
            description: "Actualize Website",
            project_url: "www.actualize.org",
            screenshot_url: ""
          }
        ]
      }
    };
  },
  // created: function() {
  //   axios.get("/api/students/" + this.$route.current_user.id).then(response => {
  //     this.student = response.data;
  //   });
  // },
  methods: {
    // editSection: function(section) {}
  }
};
</script>
