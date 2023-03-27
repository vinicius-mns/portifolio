<script setup lang="ts">
import NavLinks from './components/Nav/NavLinks.vue'
import { useNav } from './stores/navToggle';

const nav = useNav()
</script>

<template>
  <main>
    <button v-if="!nav.visible" @click="nav.toggleVisible" class="showNav">o</button>
    <div class="nav" v-if="nav.visible">
      <NavLinks />
    </div>
    <div class="pages">a</div>
  </main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.nav { background-color: red; }
.pages { background-color: blue; }

@media screen and (min-width: 500px) {
  main {
    display: flex;

    .showNav {
      position: absolute;
      background-color: red;
      height: 2rem;
      width: 2rem;
      margin: 1.5rem;
    }

    .nav {
      width: 18%;
      height: 100vh;
    }
  
    .pages {
      width: 100%;
      height: 100vh;
    }
  }
}

@media screen and (max-width: 500px) {
  .nav {
    position: absolute;
    bottom: 1.4rem;
    right: 1.4rem;
  }

  .pages {
    width: 100%;
    height: 100vh;
  }

  .showNav {
    position: absolute;
    bottom: 1.8rem;
    right: 1.8rem;
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
  }
}
</style>
