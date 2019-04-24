<template>
  <div class="capstone-edit">
    <h1>Edit Experience</h1>
    <button v-on:click="createCapstone()">Add Capstone</button>
    <div v-for="capstone in capstone">
      <h3 class="description">{{ capstone.description }}</h3>
      <p>Project URL: {{ capstone.project_url }} 
      <p>Screenshot URL: {{ capstone.screenshot_url }}</p>
      <div v-if="!updateHidden">
        <h4>Edit Capstone Credentials</h4>
        Description:
        <input type="text" v-model="capstone.description" />
        Project URL:
        <input type="text" v-model="capstone.project_url" />
        Screenshot URL:
        <input type="text" v-model="capstone.screenshot_url" />
        <button v-on:click="updateCapstone(capstone)">Update Capstone</button>
        <button v-on:click="destroyCapstone(capstone)">Delete</button>
        <router-link to="/">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      capstone: [
        { description: "My Awesome Capstone", 
          project_url: "my_project.url", 
          screenshot_url: "my_screenshot.url"
        }, 

      ],
      newCapstoneDescription: "", 
      newCapstoneProjectUrl: "",
      newCapstoneScreenshotUrl: "",
      updateHidden: false, 

    };
  },
  created: function() {
    axios.get("/api/capstone").then(response => {
      this.capstone = response.data;
    });
  },
  methods: {
    createCapstone: function() {
      console.log("Creating Capstone");
      var params = {
        description: this.newCapstoneDescription, 
        project_url: this.newCapstoneProjectUrl,
        screenshot_url: this.newCapstoneScreenshotUrl,
      };
      axios.post("/api/capstone", params).then(response => {
        console.log("Success", response.data);
      });
    },
    updateCapstone: function(capstone) {
      var params = {
        description: capstone.description,
        project_url: capstone.project_url,
        screenshot_url: capstone.screenshot_url,

      };
      axios.patch("/api/capstone", params).then(response => {
        console.log("Successfully updated", response.data);
        capstone = response.data;
        this.$router.push("/");
      });
    }, 
    destroyCapstone: function(capstone) {
      axios.delete("/api/capstone").then(response => {
        console.log("Successfully destroyed capstone", response.data);
        this.$router.push("/");
      });
    }
  }
};
</script>
  
