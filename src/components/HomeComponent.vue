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

          <v-row>
            <v-col>
              <v-card flat>
                <h2>습득물 검색</h2>
              </v-card>
            </v-col>
          </v-row>

          <!--항목-->
          <v-row>

            <v-col xs="12" md="6">
              <v-card min-width="300" flat>
                <v-row>
                  <v-col align="center">
                    <h3>분류명</h3>
                  </v-col>
                  <v-col>
                    <v-select :items="classify" label="선택안됐을때 뜨는 문장" solo></v-select>
                  </v-col>
                </v-row>



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
    item: ['분류명', '기간', '습득지역', '분실자명', '습득물명'],
    classify: ['지갑', '핸드폰'],
  }),
  name: 'HomeComponent',
  methods: {
    hello: function () {
      console.log('Hello')
    }
  }
};
</script>



<style>
h2 {
  margin-left: 30px
}

;
</style>