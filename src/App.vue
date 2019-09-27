<template>
  <v-app>
    <v-app-bar
      app
      prominent
      dark
      src="./assets/sara-the-freak-A4UojtraSrw-unsplash.jpg"
      >
      <v-toolbar-title class="headline">
        <span class="font-weight-light mb-12">Weather Service</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      &nbsp;
    </v-app-bar>

    <v-content>
      <Weather/>
    </v-content>
  </v-app>
</template>

<script>
import Weather from './components/Weather'

export default {
  name: 'App',
  components: {
    Weather
  },
  data: () => ({
    //
  })
}
</script>
