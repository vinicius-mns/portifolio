<script setup lang="ts">
import { useNav } from '@/stores/navToggle'

const nav = useNav()

const links = [
  {name: 'Quem sou', path: '/quemsou'},
  {name: 'O que eu sei', path: '/oquesei'},
  {name: 'O que eu nao sei', path: '/oquenaosei'},
  {name: 'Meus projetos', path: '/meusprojetos'},
  {name: 'Tanto Faz', path: '/tantofaz'},
]
</script>

<template>
  <nav v-if="nav.visible">
    <button class="close" @click="nav.toggleVisible">X</button>
    <ul>
      <li v-for="(link, id) of links" :key="id">
        <RouterLink :to="link.path" class="router">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">

.close {
  align-self: flex-start;
}

nav {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: end;

  & ul {
    list-style: none;

    & li {
      margin: 1rem;
    }
  }

  & .router {
    text-decoration: none;
  }
}
</style>
