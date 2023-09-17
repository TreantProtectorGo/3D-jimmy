<template>
  <RequestPermission></RequestPermission>
  <IndoorNavigation :sentIndex="sentIndex"></IndoorNavigation>
</template>

<script setup>
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import RequestPermission from './RequestPermission.vue'
import IndoorNavigation from './IndoorNavigation.vue'

// Navigation guard
onBeforeRouteLeave((to, from, next) => {
  if (to.path !== from.path) {
    next(from.path) // Reset URL address to the source route's address
    location.reload()
  } else {
    next()
  }
})

// Access the route object using the useRoute function
const route = useRoute()
console.log(route.query)

// Do something with the value from the query object
const sentIndex = route.query.value
console.log(sentIndex)
</script>