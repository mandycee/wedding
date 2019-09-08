<template>
  <header v-scroll="onScroll" v-bind:style="toggleBackground">
    <nav>
      <ul>
        <li>
          <router-link to="/" v-bind:style="toggleColor">Our Story</router-link>
        </li>
        <li>
          <router-link to="/wedding" v-bind:style="toggleColor">The Big Day</router-link>
        </li>
        <li class="am-special">
          <router-link to="/" v-bind:style="toggleColor">Amanda & Miguel</router-link>
        </li>
        <li>
          <router-link to="/stay" v-bind:style="toggleColor">Accommodation</router-link>
        </li>
        <li>
          <router-link to="/gift" v-bind:style="toggleColor">Gifts</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      toggleBackground: {},
      toggleColor: {},
      test: null,
    };
  },
  watch: {
    $route() {
      if (this.$route.path === '/') {
        this.toggleBackground = {
          backgroundColor: 'rgba(255, 255, 255, 0)',
        };
        this.toggleColor = {
          color: 'black',
        };
      } else if (this.$route.path !== '/') {
        this.toggleBackground = {
          backgroundColor: 'rgba(42, 76, 131)',
        };
        this.toggleColor = {
          color: '#fff',
        };
      }
    },
  },
  created() {
    if (this.$route.path === '/') {
      this.toggleBackground = {
        backgroundColor: 'rgba(255, 255, 255, 0)',
      };
      this.toggleColor = {
        color: 'black',
      };
    } else if (this.$route.path !== '/') {
      this.toggleBackground = {
        backgroundColor: 'rgba(42, 76, 131)',
      };
      this.toggleColor = {
        color: '#fff',
      };
    }
  },
  methods: {
    onScroll() {
      if (window.location.pathname === '/') {
        if (window.scrollY >= 700) {
          this.toggleBackground = {
            backgroundColor: 'rgba(42, 76, 131)',
            // transition: 'all 0.4s',
          };
          this.toggleColor = {
            color: '#fff',
          };
        } else if (window.scrollY < 700) {
          this.toggleBackground = {
            backgroundColor: 'rgba(255, 255, 255, 0)',
          };
          this.toggleColor = {
            color: 'black',
          };
        }
      }
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: all 0.4s;
  /* background-color: rgba(255, 255, 255, 0); */
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

li {
  font-size: 15px;
  flex: 1 3;
}

a {
  text-decoration: none;
  /* color: #000; */
}

.am-special {
  font-size: 30px;
  flex: 3 1;
}
</style>
