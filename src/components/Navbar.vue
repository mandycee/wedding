<template>
  <header v-scroll="onScroll" v-bind:style="toggleBackground">
    <nav v-if="!mobile" class="desktop">
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

    <Slide v-if="mobile" class="slide_menu">
      <ul>
        <li class="am-special">
          <router-link to="/">Amanda & Miguel</router-link>
        </li>
        <li>
          <router-link to="/">Our Story</router-link>
        </li>
        <li>
          <router-link to="/wedding">The Big Day</router-link>
        </li>
        <li>
          <router-link to="/stay">Accommodation</router-link>
        </li>
        <li>
          <router-link to="/gift">Gifts</router-link>
        </li>
      </ul>
    </Slide>
  </header>
</template>

<script>
import { Slide } from 'vue-burger-menu';
export default {
  components: {
    Slide,
  },
  data() {
    return {
      mobile: false,
      toggleBackground: {},
      toggleColor: {},
    };
  },
  watch: {
    $route() {
      if (!this.mobile) {
        if (this.$route.path === '/') {
          this.toggleBackground = {
            backgroundColor: 'rgba(255, 255, 255, 0)',
          };
          this.toggleColor = {
            color: 'rgb(30, 32, 58)',
          };
        } else if (this.$route.path === '/stay') {
          this.toggleBackground = {
            backgroundColor: 'rgba(255, 255, 255, 0)',
          };
          this.toggleColor = {
            color: '#fff',
          };
        } else {
          this.toggleBackground = {
            backgroundColor: 'rgb(30, 32, 58)',
          };
          this.toggleColor = {
            color: '#fff',
          };
        }
      }
    },
  },
  created() {
    this.setBurgerMenu();
    window.addEventListener('resize', this.setBurgerMenu);

    if (!this.mobile) {
      if (this.$route.path === '/') {
        this.toggleBackground = {
          backgroundColor: 'rgba(255, 255, 255, 0)',
        };
        this.toggleColor = {
          color: 'rgb(30, 32, 58)',
        };
      } else if (this.$route.path === '/stay') {
        this.toggleBackground = {
          backgroundColor: 'rgba(255, 255, 255, 0)',
        };
        this.toggleColor = {
          color: '#fff',
        };
      } else {
        this.toggleBackground = {
          backgroundColor: 'rgb(30, 32, 58)',
        };
        this.toggleColor = {
          color: '#fff',
        };
      }
    }
  },
  destroy() {
    window.removeEventListener(
      'resize',
      this.debounce(300, this.setBurgerMenu)
    );
  },
  methods: {
    onScroll() {
      if (window.location.pathname === '/' && !this.mobile) {
        if (window.scrollY >= 500) {
          this.toggleBackground = {
            backgroundColor: 'rgb(30, 32, 58)',
            // transition: 'all 0.4s',
          };
          this.toggleColor = {
            color: '#fff',
          };
        } else if (window.scrollY < 500) {
          this.toggleBackground = {
            backgroundColor: 'rgba(255, 255, 255, 0)',
          };
          this.toggleColor = {
            color: 'rgb(30, 32, 58)',
          };
        }
      }
      if (window.location.pathname === '/stay' && !this.mobile) {
        if (window.scrollY >= 50) {
          this.toggleBackground = {
            backgroundColor: 'rgb(30, 32, 58)',
          };
          this.toggleColor = {
            color: '#fff',
          };
        } else if (window.scrollY < 50) {
          this.toggleBackground = {
            backgroundColor: 'rgba(255, 255, 255, 0)',
          };
          this.toggleColor = {
            color: '#fff',
          };
        }
      }
    },
    setBurgerMenu() {
      if (window.innerWidth >= 1100) {
        this.mobile = false;
      }
      if (window.innerWidth < 1100) {
        this.mobile = true;
      }
    },
  },
};
</script>

<style>
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
}

.am-special {
  font-size: 30px;
  flex: 3 1;
}

.slide_menu {
  display: flex;
  align-items: center;
}

.slide_menu .bm-menu {
  background-color: rgb(30, 32, 58);
}

.slide_menu .bm-item-list {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.slide_menu ul {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  width: 100%;
}

.slide_menu ul li {
  font-size: 18px;
  margin: 12px;
}

.slide_menu ul li a {
  text-decoration: none;
  color: #fff;
}

.slide_menu .am-special {
  font-size: 25px;
  border-bottom: 2px solid #fff;
  padding: 5px;
}

/* Desktops and laptops ----------- */
@media only screen and (max-width: 1300px) {
  ul {
    width: 50%;
  }
  li {
    font-size: 13px;
  }
  .am-special {
    font-size: 25px;
  }
}

@media only screen and (max-width: 1040px) {
  ul {
    width: 100%;
  }
}
</style>
