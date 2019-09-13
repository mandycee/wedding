<template>
  <div class="stay">
    <h2 class="estes-park">Where to Stay</h2>

    <div class="hotels">
      <div class="hotel">
        <p>Fall River Village</p>
        <p>Resort</p>
        <div class="address">
          <p>200 Filbey Court</p>
          <p>Estes Park,CO 80517</p>
        </div>
        <a target="_blank" href="https://www.fallrivervillage.com/">Book Now</a>
      </div>
      <div class="hotel">
        <p>The Maxwell Inn</p>
        <p>Hotel</p>
        <div class="address">
          <p>553 West Elkhorn</p>
          <p>Estes Park,CO 80517</p>
        </div>
        <a target="_blank" href="http://themaxwellinn.com/">Book Now</a>
      </div>
    </div>
    <h4>
      **Note that it is approximately a
      <span>2 hour drive</span> from Denver International Airport to Estes Park and it would be advised to rent a car.
    </h4>
  </div>
</template>

<style scoped>
.stay {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0;
}
.estes-park {
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
  /* letter-spacing: 5px; */
}

.hotels {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.hotel {
  margin: 0 40px;
}

.hotel > p:nth-child(1) {
  font-weight: 700;
  letter-spacing: 5px;
  color: rgb(136, 124, 83);
}

.hotel > p:nth-child(2) {
  margin-bottom: 18px;
}

.address {
  margin-bottom: 40px;
}

.address p {
  line-height: 2.5px;
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

h4 {
  color: rgb(136, 124, 83);
  margin-top: 55px;
  font-weight: 300;
  width: 30%;
}

span {
  font-weight: 700;
  text-decoration: underline;
}

@media only screen and (max-width: 1250px) {
  h4 {
    width: 70%;
  }
}

@media only screen and (max-width: 800px) {
  .stay {
    justify-content: flex-start;
  }
  .hotels {
    flex-flow: column;
  }

  .hotel {
    margin: 0;
    margin-bottom: 50px;
  }
}
</style>