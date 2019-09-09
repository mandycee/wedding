<template>
  <div class="gift">
    <div class="gift_banner">
      <h1>Gifts</h1>
      <h2>Contribute to Our Honeymoon Fund</h2>
    </div>
    <div class="gift_message">
      <p>We don't need you to bring us gifts - we know plane tickets are expensive and your presence at the wedding is enough! If you really want to give us something, a contribution to our honeymoon fund or to some of our favorite activivities would be awesome!</p>
      <div class="gift_details">
        <p>Here's how you can make your contribution:</p>
        <p class="step">-1-</p>
        <p>Hand delivered cheque to us at the wedding</p>
        <p class="step">-2-</p>
        <p>
          Contribute to our
          <router-link
            to="https://www.blueprintregistry.com/registry/amanda-miguel-wedding-6-25-2020"
            class="blue_print"
          >BluePrint</router-link>Registry
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gift {
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.gift_banner {
  background-image: linear-gradient(
      to bottom,
      rgba(216, 209, 187, 0.52),
      rgba(42, 76, 131, 0.431)
    ),
    url('../assets/gift.jpg');
  background-size: cover;
  background-position: center;
  min-height: 65vh;
  width: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.gift_banner h1 {
  margin-top: 90px;
  font-size: 70px;
  letter-spacing: 5px;
}
.gift_banner h2 {
  font-size: 25px;
}

.gift_message {
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  width: 75%;
  font-size: 30px;
}

.gift_details > p:not(:first-child) {
  font-size: 20px;
}

.step {
  color: rgb(136, 124, 83);
}

.blue_print {
  color: rgb(136, 124, 83);
  margin-right: 5px;
}
</style>