<template>
  <div class="save-the-date">
    <div>
      <h1>Soon To Be Mr. & Mrs.</h1>
      <p>June 25, 2020 | The SkyView</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.save-the-date {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(211, 218, 255, 0.52),
      rgba(75, 75, 75, 0.73)
    ),
    url('../../assets/us.jpg');
  background-size: cover;
  color: rgb(30, 32, 58);
}

.save-the-date div {
  margin-left: 750px;
}

.save-the-date h1 {
  font-family: 'Raleway' Arial, Helvetica, sans-serif;
  font-size: 4em;
}
.save-the-date p {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2em;
}
</style>