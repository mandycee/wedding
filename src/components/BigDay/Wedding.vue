<template>
  <div class="wedding_details">
    <Ceremony />
    <Reception />
    <WeddingParty />
  </div>
</template>

<script>
import Ceremony from './Ceremony';
import Reception from './Reception';
import WeddingParty from './WeddingParty';
export default {
  components: {
    Ceremony,
    Reception,
    WeddingParty,
  },
};
</script>

<style scoped>
.wedding_details {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
}
</style>