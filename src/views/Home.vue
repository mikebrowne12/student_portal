<template>
  <div class="container">
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>

    <p>{{ student.email }}</p>
    <p>{{ student.phone_number }}</p>
    <p>{{ student.short_bio }}</p>
    <p>{{ student.linkedin_url }}</p>
    <p>{{ student.twitter_handle }}</p>
    <p>{{ student.personal_website }}</p>
    <p>{{ student.online_resume_url }}</p>
    <p>{{ student.github_url }}</p>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
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
  }
};
</script>
