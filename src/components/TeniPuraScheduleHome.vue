<template>
  <v-container>
    <section v-if="loading">
      <div>Loading</div>
    </section>
    <section v-else>
      <p>最終更新日: {{ lastupdate }}</p>
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
    </section>
  </v-container>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const loading = ref(false);
  const errored = ref(false);

  const schedules = ref(null);

  const lastupdate = ref(null);

  onMounted(() => {
    let string_url =
      'https://script.google.com/macros/s/AKfycbzKh-BEwznzPfArngSTfDD-rk4Y6ObZ9zl5ALurSOSuNz3EEEcbdFASvJGnteFAT-tC/exec';
    //'https://script.google.com/macros/s/AKfycbw8pvNmn192KqSV32HqwPwAB-z6J_ElAwLVb5CkGDvEVl-JcRAC3lrfDpn-jl5PJlNA/' +
    //'https://script.google.com/macros/s/AKfycbwOtbT0YoBijvxmn5N_ivSGgNHnL4vPr50ajnmNIofZMZGjSkks2iuEDJKt1be0t86O/' +
    '?mode=read' + '&name=schedule';
    console.log(string_url);

    loading.value = true;

    axios
      .get(string_url)
      .then((response) => {
        /*
        console.log(response.data.items.length);
        for (let i = 0; i < response.data.items.length; i++) {
          console.log(response.data.items[i]);
        }
        schedules.value = response.data.items;
        */

        console.log(response);
        console.log(response.data.items.date);
        console.log(response.data.items.data);

        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Tokyo',
        };
        const date = new Date(response.data.items.date);
        console.log(date);
        const formattedDate = date.toLocaleDateString('ja-JP', options);
        console.log(formattedDate);
        lastupdate.value = formattedDate;
        schedules.value = response.data.items.data;
      })
      .catch((error) => {
        console.log(error);
        errored.value = true;
      })
      .finally(() => (loading.value = false));
  });
</script>
