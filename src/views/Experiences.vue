<template>
  <div class="container">
    <h1>Edit Experience</h1>
    <div v-for="experience in experiences">
      <h3 class="job-title">{{ experience.job_title }}</h3>
      <h4 class="company-name">{{ experience.company_name }}</h4>
      <p>Start Date: {{ experience.start_date }} - {{ experience.end_date }}</p>
      <p>{{ experience.details }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data: function() {
    return {
      experiences: [
        {
          job_title: "Foreman",
          company_name: "Acme Widgets",
          start_date: "December 7, 1995",
          end_date: "January 1, 2002",
          details: "blah blah blah"
        }
      ]
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
