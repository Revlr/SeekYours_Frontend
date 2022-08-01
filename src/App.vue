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
              <h1 class="purple--text">Seek Yours</h1>
            </v-avatar>
          </router-link>
        </v-col>
        <v-col align="right">
          <router-link style="text-decoration: none; color: inherit;" to="/search">
            <v-icon size="30" color="purple">mdi-magnify</v-icon>
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>
    
    <v-main>
      <v-toolbar
      height="10px"
      color="purple"
    >
    </v-toolbar>
      <v-card
        class="elevation-0"
      >
        <router-view />
      </v-card>
    </v-main>
    <v-footer height="100" color="grey" justify="center">
      <v-avatar height="100%" width="100%" color="grey" tile></v-avatar>
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

</style>
