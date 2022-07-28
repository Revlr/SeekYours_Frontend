<!-- AboutComponent.vue -->
<template>
  <v-row>
  <v-col cols="12" lg="2">
    <v-menu
      ref="menu1"
      v-model="menu1"
      :close-on-content-click="false"
      :return-value.sync="s_date"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="s_date"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="s_date" no-title scrollable :max="e_date">
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
        <v-btn text color="primary" @click="s_date_search(s_date)">OK</v-btn>
      </v-date-picker>
    </v-menu>
  </v-col>
  
  <v-col cols="12" lg="2">
    <v-menu
      ref="menu2"
      v-model="menu2"
      :close-on-content-click="false"
      :return-value.sync="e_date"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="e_date"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="e_date" no-title scrollable :min="s_date" :max="date">
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
        <v-btn text color="primary" @click="e_date_search(e_date)">OK</v-btn>
      </v-date-picker>
    </v-menu>
  </v-col>
</v-row>
</template>

<script>
export default {
  
}
</script>