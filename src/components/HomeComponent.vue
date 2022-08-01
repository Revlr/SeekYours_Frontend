<!-- HomeComponent.vue -->
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <br><br><br><br>
        <v-caruosel cycle>
          <v-card flat>
            <v-row>
              <v-col>
                <v-avatar color="grey" size="400" tile></v-avatar></v-col>
              <v-col>
                <h1>Seek Yours는 <br>어쩌구 저쩌구를 통해서 <br>이렇게 저렇게 <br>잃어버린 물건을<br>찾을 수 있습니다! <br>뿌슝 빠슝!</h1>
                <br><br><br>
                <router-link to="/search">
                  <v-btn color="primary">검색하기</v-btn>
                </router-link>
              </v-col>
            </v-row>
          </v-card>
        </v-caruosel>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomeComponent',
  data: () => ({
  }),

  //map mount
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f421a1df81a6ea4bbdbd1ad7e05685be';
      document.head.appendChild(script);
    }
  },

  methods: {
  }
};
</script>



<style scoped>
.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
#map {
  width: 95%;
  height: 600px;
  border: 1px #a8a8a8 solid;
}
h2 {
  margin-left: 20px;
}
</style>