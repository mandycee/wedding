<template>
  <main class="our-story">
    <h2 class="story-header">Girl Meets Boy!</h2>
    <p
      class="story"
    >Amanda & Miguel are high-school sweathearts. They made it through college together. They adopted their dog, Paris, together. They became best of friends. They have traveled cross-country three times. They have seen the canals of Amsterdam, indulged in Belgian chocolates, and fell deeper in love in Paris. He can't stop talking about their vacation in Aruba and she is already building an itinerary for Italy. These two are like yin and yang, night and day, and they have been inseparable for twelve years and they are finally tying the knot!</p>
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
  color: rgb(30, 32, 58);
}

.story-header {
  font-size: 3em;
  font-family: 'Dancing Script', cursive;
  letter-spacing: 5px;
  font-weight: 100;
  margin-bottom: 10px;
}

.story {
  width: 50%;
  font-size: 1.5em;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 35px;
  letter-spacing: 2px;
  font-weight: 100;
  margin-top: 15px;
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