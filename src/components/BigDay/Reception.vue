<template>
  <div class="reception">
    <div id="the_hall">
      <img src="../../assets/skyview.jpg" alt />
    </div>
    <h3>The Reception</h3>
    <p class="time">6:00pm</p>
    <p>The SkyView Hall</p>
    <p>278 Sunny Acres Ct</p>
    <p>Estes Park, CO 80517</p>
  </div>
</template>

<style scoped>
.reception {
  padding: 40px 0 40px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  text-align: center;
  background-color: rgba(42, 76, 131, 0.431);
}

#the_hall {
  height: 450px;
  width: 450px;
}

img {
  height: 100%;
  width: 100%;
  border-radius: 100%;
  object-fit: cover;
  filter: grayscale(90%);
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
</style>