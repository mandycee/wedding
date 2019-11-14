<template>
  <div class="reception">
    <div class="details">
      <h3>The Reception</h3>
      <p class="time">5:00pm - 10:00pm</p>
      <p>The SkyView Hall</p>
      <p>278 Sunny Acres Ct</p>
      <p>Estes Park, CO 80517</p>
      <p>Dress Code: Semi-formal</p>
    </div>
    <div id="the_hall">
      <img src="../../assets/skyview.jpg" alt />
    </div>
  </div>
</template>

<style scoped>
.reception {
  padding: 40px 0 40px 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: rgb(216, 209, 187);
}

#the_hall {
  height: 380px;
  width: 450px;
  display: flex;
  align-items: center;
}

img {
  height: 80%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(90%);
}
h3 {
  font-family: 'Dancing Script', cursive;
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
  .reception {
    flex-flow: column;
  }
  #the_hall {
    order: -1;
  }

  .detail {
    order: 0;
  }
}

@media only screen and (max-width: 500px) {
  .reception {
    justify-content: flex-start;
    padding-top: 0;
  }

  #the_hall {
    align-items: flex-start;
    width: 100%;
  }
}
</style>