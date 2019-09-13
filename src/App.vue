<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import 'normalize.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
html,
body {
  margin: 0 auto;
  min-height: 100%;
}

#app {
  flex: 1 0 auto;
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(30, 32, 58);
}
</style>
