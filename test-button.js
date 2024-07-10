export default {
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