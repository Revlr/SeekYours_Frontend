<!-- HomeComponent.vue -->
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <br><br>
        <h4>  검색결과 ( {{resp_data.length}} 건) </h4>
        <v-chip class="ma-4" v-for="(v, i) in selected_options" :key="i">{{v}}</v-chip>
        <br>
        <!--지도 띄우기-->
        <section class="test">
          <v-card id="map"></v-card>
        </section>
        <!--분실물 목록-->
        <br><br>
        <v-row>
          <v-col xs="12" sm="6" md="4" lg="3" xl="2" v-for="(v,i) in resp_data" :key="i" align="center">
            <v-dialog :v-model="dialog" width="550">
              <template v-slot:activator="{ on, attrs }">

                <v-card v-bind="attrs" v-on="on" @click="dialog = false" height="250" flat min-width="250"
                  max-width="250" class="ma-2 pa-2">
                  <v-img contain :src="v.image" height="75%"></v-img>
                  <v-card flat>{{v.item}}</v-card>
                  <v-card flat>{{v.date}}</v-card>
                  <v-card flat>{{v.place}}</v-card>
                </v-card>
              </template>
              <v-card >
                <v-card-title class="grey lighten-2">
                  <v-row>
                    <v-col>
                      {{v.item}}
                    </v-col>
                    <v-col align="right">
                      {{v.id}}
                    </v-col>
                  </v-row>
                </v-card-title>

                <v-card-text>
                  <v-img :src="v.image" class="ma-4" />
                  <v-card flat><p>물품명 : {{v.item}}</p></v-card>
                  <v-card flat><p>접수일 : {{v.date}}</p></v-card>
                  <v-card flat><p>보관장소 : {{v.place}}</p></v-card>
                  <v-card flat><p>습득장소 : {{v.get_place}}</p></v-card>
                  <v-card flat><p>전화번호 : {{v.tel}}</p></v-card>
                  <v-card flat><p>보관여부 : <b class="red--text">{{v.status}}</b></p></v-card>
                  <br><v-divider></v-divider><br>
                  <v-card flat>{{v.sbjt}}</v-card><br><br>
                </v-card-text>

                <v-divider></v-divider>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <template>
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="6"
            ></v-pagination>
          </div>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    dialog: false,
    selected_options:["서울특별시", "강남구", "지갑", "2022-08-05 ~ 2022-08-06"],
    resp_data:[
      {
        id : "F2022080600000185",
        item : "피에르가르덴 남성지갑",
        date : "2022-08-06",
        get_place : "마포구노상",
        area : "서울특별시",
        specific_area : "",
        place : "홍익지구대",
        tel : "02-334-8150",
        status : "보관중",
        image : "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220806/20220806031155613.jpg",
        type : "지갑 > 남성용 지갑",
        sbjt : "홍익지구대에서는 [2022.08.06] [피에르가르덴 남성지갑(그레이(회)색)]을 습득/보관 하였습니다. 분실하신 분께서는 본인을 증명할 수 있는 서류를 지참하시어 보관중으로 기재되어 있는 기관에 방문하시어 보관물품을 수령하시기 바랍니다. 특이사항 : 주민등록증1개, 운전면허증 1개, 신용카드 4개,",
      },
      {
        id : "F2022080600000183",
        item : "지갑",
        date : "2022-08-06",
        get_place : "",
        area : "서울특별시",
        specific_area : "",
        place : "대림지구대",
        tel : "02-2118-9108",
        status : "보관중",
        image : "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220806/20220806031242801.jpg",
        type : "지갑 > 남성용 지갑",
        sbjt : "대림지구대에서는 [2022.08.06] [지갑(블랙(검정)색)]을 습득/보관 하였습니다. 분실하신 분께서는 본인을 증명할 수 있는 서류를 지참하시어 보관중으로 기재되어 있는 기관에 방문하시어 보관물품을 수령하시기 바랍니다. 특이사항 : 없음",
      },
      {
        id : "F2022080600000210",
        item : "삼성 휴대폰",
        date : "2022-08-06",
        get_place : "",
        area : "서울특별시",
        specific_area : "",
        place : "염창지구대",
        tel : "",
        status : "보관중",
        image : "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220806/20220806030658651.jpg",
        type : "휴대폰 > 삼성휴대폰",
        sbjt : "염창지구대에서는 [2022.08.06] [삼성 휴대폰(블랙(검정)색)]을 습득/보관 하였습니다.",
      },
      {
        item : "AK PLAZA 쇼핑백",
        id : "V0002048H08060002",
        date : "2022-08-06",
        get_place : "",
        area : "서울특별시",
        specific_area : "",
        place : "녹번역(3호선)",
        tel : "",
        status : "보관중",
        image : "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220806/20220806051045456.jpg",
        type : "쇼핑백 > 쇼핑백",
        sbjt : "녹번역(3호선)에서는 [22.08.06] [AK PLAZA 쇼핑백(로열블루(밝은남)색)]을 습득/보관 하였습니다.",
      },
      {
        item : "아이폰",
        id : "F2022080600000303",
        date : "2022-08-06",
        get_place : "",
        area : "서울특별시",
        specific_area : "",
        place : "이태원파출소",
        tel : "",
        status : "보관중",
        image : "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220806/20220806052751195.jpg",
        type : "휴대폰 > 아이폰",
        sbjt : "이태원파출소에서는 [2022.08.06] [아이폰(그레이(회)색)]을 습득/보관 하였습니다.",
      },
      {
        item : "삼성 스마트폰",
        id : "V0000343H08060002",
        date : "2022-08-06",
        get_place : "",
        area : "서울특별시",
        specific_area : "",
        place : "노원역(7호선)",
        tel : "",
        status : "보관중",
        image : "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220806/r_20220806052636096.jpg",
        type : "휴대폰 > 삼성휴대폰",
        sbjt : "노원역(7호선)에서는 [22.08.06] [삼성 스마트폰(코럴(산호)색)]을 습득/보관 하였습니다.",
      },
      {
        item : "안경",
        id : "V0000294H08060004",
        date : "2022-08-06",
        get_place : "",
        area : "서울특별시",
        specific_area : "",
        place : "마천역(5호선)",
        tel : "",
        status : "보관중",
        image : "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220806/20220806051704016.jpeg",
        type : "기타물품 > 안경",
        sbjt : "마천역(5호선)에서는 [22.08.06] [안경(블랙(검정)색)]을 습득/보관 하였습니다.",
      },
    ]
  }),
  
  //map mount
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      script.onload = () => kakao.maps.load(this.initMap);
      const VUE_APP_API = process.env.VUE_APP_API;
      script.src = VUE_APP_API;
      document.head.appendChild(script);
    }
  },

  name: 'ResultComponent',
  watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 4000)
      },
    },
  methods: {

    
    initMap() {
      //var x = 127.0629852, y = 37.49664389; //위경도 정보 엑셀에서 시/군 별로 중앙점 좌표 정리된거에서 가져옴
      var mapContainer = document.getElementById('map'),
        mapOption = {
          center: new kakao.maps.LatLng(37.56359, 126.9673513),
          level: 3 // 지도의 확대 레벨
        };
      new kakao.maps.Map(mapContainer, mapOption);
      
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
  width: 100%;
  height: 500px;
  border: 1px #a8a8a8 solid;
}
h2 {
  margin-left: 20px;
}
</style>