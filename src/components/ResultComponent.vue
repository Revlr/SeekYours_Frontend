<!-- HomeComponent.vue -->
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <br><br>
        <!--지도 띄우기-->
          <v-row>
            <v-col>
              <section class="test">
                <div id="map"></div>
              </section>
            </v-col>
          </v-row>
          <!---->
        <v-card>
            
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
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

  name: 'ResultComponent',
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
