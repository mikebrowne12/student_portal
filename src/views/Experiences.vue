<template>
  <div class="container">
    <h1>Edit Experience</h1>
    <button v-on:click="createHidden = !createHidden">Add Experience</button>
    <div v-if="!createHidden">
      Job Title:
      <input type="text" v-model="newJobTitle" />
      Company Name:
      <input type="text" v-model="newCompanyName" />
      Start Date:
      <input type="date" v-model="newStartDate" />
      End Date:
      <input type="date" v-model="newEndDate" />
      Details:
      <input type="text" v-model="newDetails" />
      <button v-on:click="createExperience">Submit</button>
    </div>
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
        <button v-on:click="updateExperience(experience)">Submit</button>
      </div>
      <button v-on:click="updateHidden = !updateHidden">Update Experience</button>
      <button v-on:click="destroyEducation(experience)">Delete Experience</button>
    </div>
    <div><router-link to="/">Back</router-link></div>
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
      newJobTitle: "",
      newCompanyName: "",
      newStartDate: "",
      newEndDate: "",
      newDetails: "",
      updateHidden: true,
      createHidden: true
    };
  },
  created: function() {
    axios.get("/api/experience").then(response => {
      this.experience = response.data;
    });
  },
  methods: {
    updateExperience: function(experience) {
      var params = {
        start_date: this.newStartDate,
        end_date: this.newEndDate,
        job_title: this.newJobTitle,
        company_name: this.newCompanyName,
        details: this.newDetails
      };
      axios.patch("/api/experiences", params).then(response => {
        experience = response.data;
        this.$router.push("/");
      });
    },
    updateEducation: function(experience) {
      var params = {
        start_date: experience.start_date,
        end_date: experience.end_date,
        degree: experience.degree,
        university_name: experience.university_name,
        details: experience.details
      };
      axios.patch("/api/experiences" + experience.id, params).then(response => {
        console.log("Successfully updated", response.data);
        experience = response.data;
        this.$router.push("/");
      });
    },
    destroyExperience: function(experience) {
      axios.delete("/api/experiences" + experience.id).then(response => {
        console.log("Successfully destroyed experience", response.data);
        this.$router.push("/");
      });
    }
  }
};
</script>
