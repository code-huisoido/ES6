<template>
  <div id="content">
    <h1>mavon-editor</h1>

    <mavon-editor v-model="value"/>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "hi",
    };
  },
  methods: {
  }
};
</script>