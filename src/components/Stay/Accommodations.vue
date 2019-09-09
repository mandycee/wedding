<template>
  <div>
    <Welcome />
    <WhereToStay />
    <WhatToDo />
  </div>
</template>

<script>
import Welcome from './Welcome';
import WhereToStay from './WhereToStay';
import WhatToDo from './WhatToDo';
export default {
  components: {
    Welcome,
    WhereToStay,
    WhatToDo,
  },
};
</script>