<template>
  <main class="our-story">
    <h2 class="story-header">Girl Meets Boy!</h2>
    <p
      class="story"
    >Amanda & Miguel are high-school sweathearts. They made it through college together. They adopted their dog, Paris, together. They became best friends. They have traveled cross-country three times. They have seen the canals of Amsterdam, indulged in Belgian chocolates, and fell deeper in love in Paris. These two have been inseparable for twelve years and they are finally tying the knot!</p>
    <hr />
    <p>XOXO</p>
  </main>
</template>

<style scoped>
.our-story {
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 30px 0 30px 0;
}

.story-header {
  font-size: 3em;
  font-family: 'Raleway' Arial, Helvetica, sans-serif;
  letter-spacing: 5px;
  font-weight: 100;
}

.story {
  width: 50%;
  font-size: 1.5em;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 35px;
  letter-spacing: 2px;
  font-weight: 100;
}

hr {
  width: 40px;
}

@media only screen and (max-width: 1251px) {
  .story {
    width: 80%;
  }
}

@media only screen and (max-width: 500px) {
  .story-header {
    font-size: 25px;
  }
  .story {
    font-size: 15px;
  }
}
</style>