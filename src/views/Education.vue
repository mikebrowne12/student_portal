<template>
  <div class="education-edit">
    <div>
      <h4>Edit Education Credentials</h4>
      Start Date:
      <input type="text" v-model="student.education.start_date" />
      End Date:
      <input type="text" v-model="student.education.end_date" />
      Degree:
      <input type="text" v-model="student.education.degree" />
      University:
      <input type="text" v-model="student.education.university_name" />
      Details:
      <input type="text" v-model="student.education.details" />
      Image url:
      <button v-on:click="updateEducation(education)">Update Education</button>
      <router-link to="/">Back</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      education: {}
    };
  },
  created: function() {
    axios.get("/api/education").then(response => {
      this.recipe = response.data;
    });
  },
  methods: {
    updateEducation: function(education) {
      var params = {
        start_date: education.start_date,
        end_date: education.end_date,
        degree: education.degree,
        university_name: education.university_name, 
        details: education.details
      };
      axios.patch("/api/education", params).then(response => {
        console.log("Successfully updated", response.data);
        education = response.data;
        this.$router.push("/");
      });
    }
  }
};
</script>
  
