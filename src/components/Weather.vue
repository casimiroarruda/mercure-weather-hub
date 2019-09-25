<template>
  <v-card
    class="mx-auto my-4"
    color="#036"
    max-width="420"
    dark
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
            <v-icon small>near_me</v-icon>
            Imasters Developer Hub
        </v-list-item-title>
        <v-list-item-subtitle>PHP Community Summit</v-list-item-subtitle>
        <v-list-item-subtitle>{{updatedAt}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <v-row align="center">
        <v-col cols="2">
          <v-icon x-large>brightness_5</v-icon>
        </v-col>
        <v-col class="display-3" cols="10">
            <span style="font-size:1.4em">{{temperature}}</span>
            &deg;C
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="2">
          <v-icon large>local_drink</v-icon>
        </v-col>
        <v-col class="display-2" cols="10">
            <span style="font-size:1.2em">{{humidity}}</span>
            %
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    temperature: 23.4,
    humidity: 42,
    updatedAt: '2019-09-24 23:12:42'
  }),
  computed: {
  },
  methods: {
    updateWeather: function (payload) {
      this.temperature = parseFloat(payload.temperature).toFixed(1)
      this.humidity = parseInt(payload.humidity)
      this.updatedAt = payload.updatedAt
    }
  },
  created () {
    const h = new URL('http://hub.casimiro.tech/hub')
    h.searchParams.append('topic', 'http://hub.casimiro.tech/weather')
    const es = new EventSource(h)
    es.onmessage = e => this.updateWeather(JSON.parse(e.data))
  }
}
</script>
