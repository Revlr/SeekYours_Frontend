<!-- HomeComponent.vue -->
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <v-card flat>
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
                <v-row v-if="i=='보관지역'">
                  <v-col>
                    <v-select v-if="select['보관지역']" :items="city[select['보관지역']]" :label="'세부지역'" class="pa-4" v-model="select['세부지역']"></v-select>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row  align="center">
            <v-col xs="4" md="2"><h4 class="pl-4">시작기간</h4></v-col>
            <v-col xs="8" md="4">
              
              <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" :return-value.sync="s_date"
                transition="scale-transition" offset-y min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="s_date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" >
                  </v-text-field>
                </template>
                <v-date-picker v-model="s_date" no-title scrollable :max="e_date">
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="s_date_search(s_date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col xs="4" md="2"><h4 class="pl-4">종료기간</h4></v-col>
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
          <v-row>
            <v-col align="center">
              <v-card flat>
                <router-link v-if="select" to="/result">
                  <v-btn color="primary">검색</v-btn>
                </router-link>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    select: {},
    item: {'분류명': ['지갑','핸드폰'],
          '보관지역':['서울특별시', '경기북부', '경기남부', '인천광역시' ] ,
          '분실자명':[],
          '습득물명':[]},
    city: {
      '서울특별시' : ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"],
      '경기북부'   : ["고양시", "구리시", "남양주시", "동두천시", "양주시", "의정부시", "파주시", "포천시", "가평군", "연천군"],
      '경기남부'   : ["과천시", "광명시", "광주시", "군포시", "김포시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "여주시", "오산시", "용인시", "의왕시", "이천시", "평택시", "하남시", "화성시", "양평군"],
      '인천광역시' : ["계양구", "남동구", "동구", "미추홀구", "부평구", "서구", "연수구", "중구"],
      '부산광역시' : ["강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구"],
      '대전광역시' : ["대덕구", "동구", "서구", "유성구", "중구"],
      '대구광역시' : ["남구", "달서구", "달서군", "동구", "북구", "서구", "수성구", "중구"],
      '울산광역시' : ["남구", "동구", "북구", "중구", "울주군"],
      '광주광역시' : ["광산구", "남구", "동구", "북구", "서구"],
      '제주특별자치도' : ["서귀포시", "제주시"],
      '세종특별자치시' : ["세종특별자치시"],
      '강원도'   : ["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "양구군", "양양군", "영월군", "인제군", "정선군", "철원군", "평창군", "홍천군", "화천군", "횡성군"],
      '충청북도' : ["제천시", "청주시", "충주시", "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "증평군", "진천군"],
      '충청남도' : ["계룡시", "공주시", "논산시", "당진시", "보령시", "서산시", "아산시", "천안시", "금산군", "부여군", "서천군", "예산군", "청양군", "태안군", "홍성군"],
      '경상북도' : ["경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "영천시", "포항시", "고령군", "군위군", "봉화군", "성주군", "영덕군", "영양군", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군"],
      '경상남도' : ["거제시", "김해시", "밀양시", "사천시", "양산시", "진주시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"],
      '전라북도' : ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"],
      '전라남도' : ["광양시", "나주시", "목포시", "순천시", "여수시", "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군", "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"],
      // TODO : 경기 남/북부 나누기
    },
    date: new Date().toISOString().substr(0, 10),
    s_date: new Date().toISOString().substr(0, 10),
    e_date: new Date().toISOString().substr(0, 10),
    menu1: false,
    menu2: false
  }),

  name: 'SearchComponent',
  methods: {
    hello: function () {
      console.log('Hello')
    },
    s_date_search(v) {
      this.s_date = v;
      this.menu1 = false;
      this.$refs.menu1.save(v);
    },
    e_date_search(v) {
      this.e_date = v;
      this.menu2 = false;
      this.$refs.menu2.save(v);
    }

  }
};
</script>
