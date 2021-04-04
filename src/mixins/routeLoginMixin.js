import userService from "@/services/UserService";

export default {
  props: {
    idUser: {
      default: null,
      type: Number
    },
    token: {
      default: null,
      type: String
    }
  },
  methods: {
    manageLogin() {
      if(!this.$store.state.user) {
        if(this.idUser && this.token)
          this.loginWithProps();
        else
          this.$router.push('/login');
      }
    },
    loginWithProps() {
      const userToken = { token: this.token };
      this.$store.commit('login', userToken);
      userService.getById(
        this.idUser, 
        (response) => {
          response.token = this.token;
          this.$store.commit('login', response)
        },
        () => this.$router.push('/login')
      );
    }
  }
};
