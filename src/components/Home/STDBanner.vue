<template>
  <div class="save-the-date">
    <div>
      <h1>
        Soon to Be
        <span>Mr.</span> &
        <span>Mrs.</span>
      </h1>
      <p>June 25, 2020 | The SkyView</p>
    </div>
  </div>
</template>

<style scoped>
.save-the-date {
  height: 100vh;
  padding: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-image: linear-gradient(
      45deg,
      rgba(30, 32, 58, 0.431),
      rgba(212, 190, 118, 0.52)
    ),
    url('../../assets/us.jpg');
  background-size: cover;
  background-position: top;
  color: rgb(30, 32, 58);
}
.save-the-date h1 {
  font-family: 'Dancing Script', cursive;
  font-size: 64px;
}

span {
  color: rgb(255, 255, 255);
  text-shadow: -1px -1px 0 rgb(30, 32, 58), 1px -1px 0 rgb(189, 179, 146),
    -1px 1px 0 rgb(189, 179, 146), 1px 1px 0 rgb(189, 179, 146);
}
.save-the-date p {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 32px;
}
/* SCREENS */
@media only screen and (max-width: 1260px) {
  .save-the-date {
    background-size: fill;
    background-position: 50% 30%;
  }
  .save-the-date h1 {
    font-size: 55px;
  }
  .save-the-date p {
    font-size: 30px;
  }
}
@media only screen and (max-width: 1050px) {
  .save-the-date {
    height: 55vh;
    background-position: 35% 25%;
    background-size: fill;
    align-items: center;
  }
  .save-the-date h1 {
    font-size: 48px;
  }
  .save-the-date p {
    font-size: 28px;
  }
}

@media only screen and (max-width: 800px) {
  .save-the-date {
    background-position: center;
    background-size: fill;
    align-items: flex-end;
    justify-content: center;
    color: #fff;
  }
}
@media only screen and (max-width: 560px) {
  .save-the-date {
    height: 35vh;
    background-position: left;
    background-size: fill;
    padding: 20px;
  }
  .save-the-date h1 {
    font-size: 2em;
    color: #fff;
  }
  .save-the-date p {
    font-size: 23px;
    color: #fff;
    margin-bottom: 0;
  }
}
</style>
