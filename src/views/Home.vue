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
    <div class="experience"></div>
    <h1></h1>
    <div class="education"></div>
    <div class="skills"></div>
    <div class="capstone"></div>
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
        github_url: "github.com/brandon"
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
