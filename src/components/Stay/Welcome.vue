5<template>
  <div>
    <div class="mountains_banner">
      <h2>Welcome to Colorado</h2>
    </div>
  </div>
</template>

<style scoped>
.mountains_banner {
  height: 75vh;
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

.mountains_banner h2 {
  color: #fff;
  font-size: 60px;
}
</style>