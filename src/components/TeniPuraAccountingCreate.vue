<template>
  <v-container>
    会計追加
    <v-sheet class="mx-auto">
      会計入力
      <br /><br />
      <v-row>
        <v-col cols="1">
          <v-label for="my-text-field">内容:</v-label>
        </v-col>
        <v-col cols="8">
          <v-radio-group inline>
            <v-radio label="支出" value="one" />
            <v-radio label="収入" value="two" />
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-label for="my-text-field">日程:</v-label>
        </v-col>
        <v-col cols="8">
          <v-date-input prepend-icon="" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-label for="my-text-field">科目:</v-label>
        </v-col>
        <v-col cols="8">
          <v-select :items="['コート代', 'ボール代', '大会参加費', '雑費']" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-label for="my-text-field">金額:</v-label>
        </v-col>
        <v-col cols="8">
          <v-text-field suffix="円" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-label for="my-text-field">備考:</v-label>
        </v-col>
        <v-col cols="8">
          <v-text-field />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1" />
        <v-col cols="8">
          <div class="d-flex flex-row justify-end text-black">
            <v-btn color="primary">会計の追加</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-sheet>

    <p>最終更新日: yyyy/mm/dd hh:mm</p>
    <br />
    <v-sheet class="mx-auto">
      <v-table>
        <thead>
          <tr>
            <th>日程</th>
            <th>科目</th>
            <th>支出</th>
            <th>収入</th>
            <th>合計</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in schedules" :key="item.date">
            <td>{{ item.date }}</td>
            <td>{{ item.subject }}</td>
            <td>{{ item.expence }}</td>
            <td>{{ item.income }}</td>
            <td>{{ item.total }}</td>
            <td>{{ item.memo }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-sheet>
  </v-container>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const loading = ref(false);
  const errored = ref(false);

  const schedules = ref(null);

  onMounted(() => {
    let string_url =
      'https://script.google.com/macros/s/AKfycbwOtbT0YoBijvxmn5N_ivSGgNHnL4vPr50ajnmNIofZMZGjSkks2iuEDJKt1be0t86O/' +
      'exec?mode=read' +
      '&name=accounting';
    console.log(string_url);

    loading.value = true;
    axios
      .get(string_url)
      .then((response) => {
        console.log(response.data.items.length);
        for (let i = 0; i < response.data.items.length; i++) {
          console.log(response.data.items[i]);
        }
        schedules.value = response.data.items;
      })
      .catch((error) => {
        console.log(error);
        errored.value = true;
      })
      .finally(() => (loading.value = false));
  });
</script>
