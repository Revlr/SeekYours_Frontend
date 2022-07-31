<!-- HomeComponent.vue -->
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <v-card>
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
                <v-row v-if="i=='습득지역'">
                  <v-col>
                    <v-select v-if="select['습득지역']" :items="city[select['습득지역']]" :label="'세부지역'" class="pa-4" v-model="select['세부지역']"></v-select>
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
          '습득지역':['서울', '경기도'] ,
          '분실자명':[],
          '습득물명':[]},
    city: {
      '서울' : ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"],
      '경기도' : ["고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "여주시", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시", "가평군", "양평군", "연천군"],

    },
    date: new Date().toISOString().substr(0, 10),
    s_date: new Date().toISOString().substr(0, 10),
    e_date: new Date().toISOString().substr(0, 10),
    menu1: false,
    menu2: false
  }),

  name: 'HomeComponent',
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
