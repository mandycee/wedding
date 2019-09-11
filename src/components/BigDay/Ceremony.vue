<template>
  <div class="ceremony">
    <div id="i_do">
      <img src="../../assets/ring.jpg" />
    </div>
    <div>
      <h3>The Ceremony</h3>
      <p class="time">4:00pm</p>
      <p>The SkyView Deck</p>
      <p>278 Sunny Acres Ct</p>
      <p>Estes Park, CO 80517</p>
    </div>
  </div>
</template>

<style scoped>
.ceremony {
  padding: 40px 0 40px 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#i_do {
  height: 350px;
  width: 450px;
  display: flex;
  align-items: center;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(80%);
}

h3 {
  font-size: 40px;
  font-weight: 500;
  margin: 25px 0 25px 0;
}

p {
  color: rgb(59, 60, 80);
  margin: 5px 0 5px 0;
}

.time {
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 15px 0;
}

@media only screen and (max-width: 800px) {
  .ceremony {
    flex-flow: column;
  }
}

@media only screen and (max-width: 500px) {
  .ceremony {
    justify-content: flex-start;
    padding-top: 0;
  }

  #i_do {
    align-items: flex-start;
    width: 100%;
  }
}
</style>