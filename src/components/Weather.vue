<template>
    <v-container class="pa-2" fluid>
        <v-row>
            <v-col md="4" xs="12">
                <v-card class="mx-auto my-4" color="#369" dark>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title class="headline">
                                <v-icon>room</v-icon>
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
                                <span style="font-size:1.4em">{{temperature}}</span> &deg;C
                            </v-col>
                        </v-row>
                        <v-row align="center">
                            <v-col cols="2">
                                <v-icon large>local_drink</v-icon>
                            </v-col>
                            <v-col class="display-2" cols="10">
                                <span style="font-size:1.2em">{{humidity}}</span>%
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col md="4" xs="12">
                <v-card class="mx-auto my-4" color="#2a9f7d" dark>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="headline">
                                <v-icon>record_voice_over</v-icon>
                                Interaja!
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img
                        src="../assets/qrcode-app.png"
                        contain
                        height="144"
                        ></v-img>
                    <v-card-text class="text-center"> Compatilhe </v-card-text>
                    <v-card-actions>
                        <v-btn text href="https://app.sli.do/event/k2tqufmh" target="_blank"><v-icon left>comments</v-icon>Pergunte</v-btn>
                        <div class="flex-grow-1"></div>
                        <v-btn text href="https://joind.in/talk/b0508" target="_blank">Avalie <v-icon right>star</v-icon></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col md="4" xs="12">
                <v-card class="mx-auto my-4">
                    <v-list-item>
                        <v-list-item-avatar color="grey">
                            <v-img src="../assets/me.jpg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headline">Anderson Casimiro</v-list-item-title>
                            <v-list-item-subtitle>Duodraco</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-img
                        src="../assets/duodraco.svg.png"
                        contain
                        height="120"
                        ></v-img>
                    <v-card-text class="text-center">
                        <div>Leadership / Management</div>
                        <div>Lean / Agile</div>
                        <div>Development / IT</div>
                    </v-card-text>
                    <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn icon color="#369" href="https://duodra.co" target="_blank"><v-icon>home</v-icon></v-btn>
                        <v-btn icon color="#369" href="https://linkedin.com/in/andersoncasimiro" target="_blank"><v-icon>work</v-icon></v-btn>
                        <v-btn icon color="#369" href="https://instagram.com/duodraco" target="_blank"><v-icon>photo_camera</v-icon></v-btn>
                        <v-btn icon color="#369" href="https://github.com/duodraco" target="_blank"><v-icon>code</v-icon></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
  data: () => ({
    temperature: 23.4,
    humidity: 42,
    updatedAt: '2019-09-24 23:12:42'
  }),
  methods: {
    updateWeather: function (payload) {
      this.temperature = parseFloat(payload.temperature).toFixed(1)
      this.humidity = parseInt(payload.humidity)
      this.updatedAt = payload.updatedAt
    }
  },
  created () {
    const h = new URL('https://mercure-weather-hub.azurewebsites.net/hub')
    h.searchParams.append('topic', 'http://hub.casimiro.tech/weather')
    const es = new EventSource(h)
    es.onmessage = e => this.updateWeather(JSON.parse(e.data))
  }
}
</script>
