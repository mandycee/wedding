<template>
  <div class="save-the-date">
    <div>
      <h1>Soon To Be Mr. & Mrs.</h1>
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
      to bottom,
      rgba(216, 209, 187, 0.52),
      rgba(42, 76, 131, 0.431)
    ),
    url('../../assets/us.jpg');
  background-size: cover;
  background-position: top;
  color: rgb(30, 32, 58);
}

.save-the-date h1 {
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-size: 80px;
}

.save-the-date p {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 35px;
}

/* SCREENS */
@media only screen and (max-width: 1500px) {
  .save-the-date {
    height: 45vh;
    background-position: right center;
    background-size: fill;
    align-items: center;
  }

  .save-the-date h1 {
    font-size: 60px;
  }
}

@media only screen and (max-width: 1100px) {
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
    font-size: 30px;
    color: #fff;
  }
  .save-the-date p {
    font-size: 20px;
    color: #fff;
    margin-bottom: 0;
  }
}
</style>