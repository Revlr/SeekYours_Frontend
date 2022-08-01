<!-- HomeComponent.vue -->
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <!--picture-->
          <v-row>
            <v-col class="d-flex justify-center">
              <v-card class="text-center" width="100%" flat>
                <v-img contain src="@/assets/test_img.jpg" alt="dd" height="200"></v-img>
              </v-card>
            </v-col>
          </v-row>
          <!--습득물 검색-->
          <v-row>
            <v-col>
              <v-card flat>
                <h2>습득물 검색</h2>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs="12" md="6" v-for="(v, i) in item" :key="i">
              <v-card min-width="300" flat>
                <v-row>
                  <v-col>
                    <v-select :items=v :label=i class="pa-4" v-model="select[i]"></v-select>
                  </v-col>
                </v-row>
                <v-row v-if="i == '습득지역'">
                  <v-col>
                    <v-select v-if="select['습득지역']" :items="city[select['습득지역']]" :label="'세부지역'" class="pa-4"
                      v-model="select['세부지역']"></v-select>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col xs="4" md="2">
              <h4 class="pl-4">시작기간</h4>
            </v-col>
            <v-col xs="8" md="4">

              <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" :return-value.sync="s_date"
                transition="scale-transition" offset-y min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="s_date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                  </v-text-field>
                </template>
                <v-date-picker v-model="s_date" no-title scrollable :max="e_date">
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="s_date_search(s_date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col xs="4" md="2">
              <h4 class="pl-4">종료기간</h4>
            </v-col>
            <v-col xs="8" md="4">
              <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :return-value.sync="e_date"
                transition="scale-transition" offset-y min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="e_date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                  </v-text-field>
                </template>
                <v-date-picker v-model="e_date" no-title scrollable :min="s_date" :max="date">
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="e_date_search(e_date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <!---->
          <!--지도 띄우기-->
          <v-row>
            <v-col>
              <section class="test">
                <div id="map"></div>
              </section>
            </v-col>
          </v-row>
          <!---->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomeComponent',
  data: () => ({
    select: {},
    item: {
      '분류명': ['지갑', '핸드폰'],
      '습득지역': ['서울', '경기도'],
      '분실자명': [],
      '습득물명': []
    },
    city: {
      '서울': ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"],
      '경기도': ["고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "여주시", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시", "가평군", "양평군", "연천군"],

    },
    date: new Date().toISOString().substr(0, 10),
    s_date: new Date().toISOString().substr(0, 10),
    e_date: new Date().toISOString().substr(0, 10),
    menu1: false,
    menu2: false
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
    s_date_search(v) {
      this.s_date = v;
      this.menu1 = false;
      this.$refs.menu1.save(v);
    },
    e_date_search(v) {
      this.e_date = v;
      this.menu2 = false;
      this.$refs.menu2.save(v);
    },
    
    initMap() {
      var mapContainer = document.getElementById('map'),
        mapOption = {
          center: new kakao.maps.LatLng(37.28390075, 127.1569912),
          level: 3 // 지도의 확대 레벨
        };
      var map = new kakao.maps.Map(mapContainer, mapOption)
      var positions = [
        {
          title: '클린에어존',
          latlng: new kakao.maps.LatLng(37.285711, 127.154287)
        },
        {
          title: '루라헤어',
          latlng: new kakao.maps.LatLng(37.280597, 127.154542)
        },
        {
          title: '조영일도예공방',
          latlng: new kakao.maps.LatLng(37.287717, 127.162393)
        },
        {
          title: '커피로',
          latlng: new kakao.maps.LatLng(37.281496, 127.152854)
        },
        {
          title: '강남왕족발',
          latlng: new kakao.maps.LatLng(37.281578, 127.160880)
        }
      ];
      
      
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";// 마커 이미지의 이미지 주소
      for (var i = 0; i < positions.length; i++) {
        var imageSize = new kakao.maps.Size(24, 35); // 마커 이미지의 이미지 크기
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); // 마커 이미지 생성
        this.marker = new kakao.maps.Marker({  // 마커 생성
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage // 마커 이미지 
        });
      }
    }
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