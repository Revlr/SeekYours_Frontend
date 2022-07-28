<template>
  <v-app id="app">
    <v-app-bar
      app
      height="100px"
      color="grey darken-4"
      elevation="0"
    >
      <v-row>
        <v-col align="center">
          <router-link to="/">
            <v-avatar height="80px" width="160px" :tile="true" class="ma-5 pa-5">
                Seek Yours
            </v-avatar>
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-card
        class="elevation-0"
      >
        <router-view />
      </v-card>
    </v-main>
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
