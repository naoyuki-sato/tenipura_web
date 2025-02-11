<template>
  <v-container>
    <p>最終更新日: yyyy/mm/dd hh:mm</p>
    <br />
    <v-sheet class="mx-auto">
      <v-table>
        <thead>
          <tr>
            <th>日程</th>
            <th>時間</th>
            <th>場所</th>
            <th>メモ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in schedules" :key="item.date">
            <td>{{ item.date }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.area }}</td>
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
      '&name=schedule';
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
