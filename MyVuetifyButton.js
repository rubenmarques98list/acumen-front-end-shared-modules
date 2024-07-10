// MyVuetifyButton.js

// Define the Vuetify button component
const MyVuetifyButton = {
    template: `
      <v-btn color="primary" @click="handleClick">
        Click Me
      </v-btn>
    `,
    methods: {
      handleClick() {
        alert('Button clicked!');
      }
    }
  };
  
  export default MyVuetifyButton;
  