<template>
  <v-app id="app">
    <v-app-bar
      app
      height="80px"
      color="white"
      elevation="0"
    >
      <v-row align="center">
        <v-col align="left">
          <router-link style="text-decoration: none; color: inherit;" to="/">
            <v-avatar height="80px" width="300px" :tile="true" class="ma-5 pa-5">
              <h1 class="indigo--text">Seek Yours</h1>
            </v-avatar>
          </router-link>
        </v-col>
        <v-col align="right">
          <router-link style="text-decoration: none; color: inherit;" to="/search">
            <v-icon size="30" color="indigo">mdi-magnify</v-icon>
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>
    
    <v-main>
      <v-toolbar
      height="10px"
      color="indigo"
    >
    </v-toolbar>
      <v-card
        class="elevation-0"
      >
        <router-view />
      </v-card>
    </v-main>
    <v-footer height="300px" color="white" justify="center">
      <iframe id="frame" scrolling="no" src="https://www.safe182.go.kr/api/lcm/amberListTForm.do?esntlId=10000476&authKey=b8fcbe4344044bdb&viewType=02" frameborder="0"></iframe>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style scoped>
  #frame {
        -ms-zoom: 2;
        -moz-transform: scale(2);
        -moz-transform-origin: 0 0;
        -o-transform: scale(2);
        -o-transform-origin: 0 0;
        -webkit-transform: scale(2);
        -webkit-transform-origin: 0 0;
        width:50%; height:100px;
    }
</style>
