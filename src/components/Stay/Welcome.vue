5<template>
  <div>
    <div class="mountains_banner">
      <h1>Welcome to Colorado</h1>
    </div>
  </div>
</template>

<style scoped>
.mountains_banner {
  min-height: 75vh;
  background-image: linear-gradient(
      0deg,
      rgba(84, 71, 202, 0.3),
      rgba(255, 0, 150, 0.3)
    ),
    url('../../assets/mountains2.jpg');
  background-position: 10% 45%;
  background-size: fill;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mountains_banner h1 {
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  color: #fff;
  font-size: 80px;
}

@media only screen and (min-width: 1660px) {
  .mountains_banner {
    background-size: cover;
    background-position: center;
    align-items: flex-start;
  }
  .mountains_banner h1 {
    margin-top: 140px;
  }
}

@media only screen and (max-width: 1600px) {
  .mountains_banner {
    background-position: 5% 34%;
    background-size: fill;
  }
}

@media only screen and (max-width: 1250px) {
  .mountains_banner {
    height: 55vh;
    background-position: 30% center;
    background-size: fill;
    align-items: center;
  }

  .mountains_banner h1 {
    font-size: 3em;
  }
}

@media only screen and (max-width: 900px) {
  .mountains_banner {
    height: 35vh;
    background-position: center;
    background-size: cover;
    align-items: flex-start;
  }

  .mountains_banner h1 {
    font-size: 35px;
    margin-top: 80px;
  }
}
</style>