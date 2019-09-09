<template>
  <div class="stay">
    <div class="estes-park">
      <h2>Where To Stay</h2>
    </div>

    <div class="hotels">
      <div class="hotel">
        <p>Fall River Village</p>
        <p>Resort</p>
        <p>200 Filbey Court</p>
        <p>Estes Park,CO 80517</p>
        <router-link to="https://www.fallrivervillage.com/">Book Now</router-link>
      </div>
      <div class="hotel">
        <p>The Maxwell Inn</p>
        <p>Hotel</p>
        <p>553 West Elkhorn</p>
        <p>Estes Park,CO 80517</p>
        <router-link to="http://themaxwellinn.com/">Book Now</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stay {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 55vh;
}
.estes-park {
  font-size: 20px;
  letter-spacing: 5px;
}

.hotels {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.hotel > p:nth-child(1) {
  font-weight: 700;
  letter-spacing: 5px;
  margin-bottom: 10px;
}

.hotel a {
  text-decoration: none;
  color: #fff;
  width: 200px;
  background-color: rgb(31, 31, 88);
  border-radius: 5px;
  padding: 10px 15px;
  text-align: center;
}
</style>