<template>
  <div class="container">
    <h1>Edit Experience</h1>
    <button v-on:click="createExperience()">Add Experience</button>
    <div v-for="experience in experiences">
      <h3 class="job-title">{{ experience.job_title }}</h3>
      <h4 class="company-name">{{ experience.company_name }}</h4>
      <p>Start Date: {{ experience.start_date }} - {{ experience.end_date }}</p>
      <p>{{ experience.details }}</p>
      <div v-if="!updateHidden">
        Job Title:
        <input type="text" v-model="experience.job_title" />
        Company Name:
        <input type="text" v-model="experience.company_name" />
        Start Date:
        <input type="date" v-model="experience.start_date" />
        End Date:
        <input type="date" v-model="experience.end_date" />
        Details:
        <input type="text" v-model="experience.details" />
        <button v-on:click="updateExperience">Submit</button>
      </div>
      <button v-on:click="updateHidden = !updateHidden">Update Experience</button>
      <button v-on:click="destroyEducation(experience)">Delete Experience</button>
    </div>
    <router-link to="/">Back</router-link>
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
        },
        {
          job_title: "Boss",
          company_name: "This Company",
          start_date: "January 1, 2002",
          end_date: "October 24, 2014",
          details: "blah blah blah"
        }
      ],
      updateHidden: true
    };
  },
  // created: function() {
  //   axios.get("/api/experience").then(response => {
  //     this.experience = response.data;
  //   });
  // },
  methods: {
    // createExperience: function() {
    //   console.log("Creating Education");
    //   var params = {
    //     start_date: this.newEducationStartDate,
    //     end_date: this.newEducationEndDate,
    //     degree: this.newEducationDegree,
    //     university_name: this.newEducationUniversityName,
    //     details: this.newEducationDetails
    //   };
    //   axios.post("/api/education", params).then(response => {
    //     console.log("Success", response.data);
    //   });
    // },
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
    },
    destroyEducation: function(education) {
      axios.delete("/api/education").then(response => {
        console.log("Successfully destroyed education", response.data);
        this.$router.push("/");
      });
    }
  }
};
</script>
