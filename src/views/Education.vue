<template>
  <div class="education-edit">
    <div>
      <h4>Edit Education Credentials</h4>
      <button v-on:click="createEducation()">Add Education</button>
      <div v-for="education in education">
        <h3 class="university">{{ education.university_name }}</h3>
        <p>Start Date: {{ education.start_date }} 
        <p>End Date: {{ education.end_date }}</p>
        <p>Degree: {{ education.degree }}</p>
        <p>Details: {{ education.details }}</p>
        <div v-if="!updateHidden">
          Start Date:
          <input type="text" v-model="education.start_date" />
          End Date:
          <input type="text" v-model="education.end_date" />
          Degree:
          <input type="text" v-model="education.degree" />
          University:
          <input type="text" v-model="education.university_name" />
          Details:
          <input type="text" v-model="education.details" />
          <button v-on:click="updateEducation(education)">Update Education</button>
          <button v-on:click="destroyEducation(education)">Delete</button>
          <router-link to="/">Back</router-link>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      education: [
        {
          start_date: "August 6, 2013",
          end_date: "May 5, 2017", 
          degree: "Chemistry", 
          university_name: "University of Actualize",
          details: "Graduated Summa Cum Laude", 
        }
      ], 
      newEducationStartDate: "",
      newEducationEndDate: "",
      newEducationDegree: "",
      newEducationUniversityName: "",
      newEducationDetails: "",
      updateHidden: false, 

    };
  },
  created: function() {
    axios.get("/api/education").then(response => {
      this.education = response.data;
    });
  },
  methods: {
    createEducation: function() {
      console.log("Creating Education");
      var params = {
        start_date: this.newEducationStartDate, 
        end_date: this.newEducationEndDate,
        degree: this.newEducationDegree,
        university_name: this.newEducationUniversityName,
        details: this.newEducationDetails
      };
      axios.post("/api/education", params).then(response => {
        console.log("Success", response.data);
      });
    },
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
  
