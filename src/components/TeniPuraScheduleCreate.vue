<template>
  <v-container>
    <p>追加する予定を記入してください</p>
    <br />
    <v-sheet class="mx-auto">
      日程:
      <v-date-input prepend-icon="" v-model="scheduleDate" />
      開始時刻:
      <v-select
        v-model="scheduleStart"
        :items="[
          '6:00',
          '7:00',
          '8:00',
          '9:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
        ]"
      />
      終了時間:
      <v-select
        v-model="scheduleEnd"
        :items="[
          '7:00',
          '8:00',
          '9:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
        ]"
      />
      場所:
      <v-select
        v-model="scheduleArea"
        :items="[
          '善福寺川緑地',
          '井の頭恩賜公園',
          '武蔵野中央公園',
          '小金井公園',
          '野川公園',
          '府中の森公園',
          '祖師谷公園',
          '高井戸公園',
        ]"
      />
      メモ: <v-text-field v-model="scheduleMemo" />
      <div class="d-flex flex-row justify-end text-black">
        <v-btn color="primary" @click="clickAddSchedule('clickAddSchedule')">
          予定の追加
        </v-btn>
      </div>
    </v-sheet>
    「予定の追加」ボタン後、下のスケジュールに反映されていることを確認してして下さい。
    <br />
    <v-divider class="border-opacity-75" />
    <TeniPuraScheduleHome :key="renderKey" />
  </v-container>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { VDateInput } from 'vuetify/labs/VDateInput';

  // トップレベルで定義
  const loading = ref(false);
  const errored = ref(false);

  const renderKey = ref(false);

  // const scheduleDate = ref(new Date('2025-01-25'));
  const scheduleDate = ref(new Date());
  const scheduleStart = ref('6:00');
  const scheduleEnd = ref('8:00');
  const scheduleArea = ref('小金井公園');
  const scheduleMemo = ref('');

  const clickAddSchedule = (param) => {
    if (scheduleDate.value) {
      console.log(scheduleDate);
      // ここで日付を使った処理を行う
      let date = new Date(scheduleDate.value);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let formattedDate = `${year}/${month}/${day}`;
      console.log(formattedDate);
      console.log(scheduleStart.value);
      console.log(scheduleEnd.value);
      console.log(scheduleArea.value);
      console.log(scheduleMemo.value);
      let string_url =
        'https://script.google.com/macros/s/AKfycbwOtbT0YoBijvxmn5N_ivSGgNHnL4vPr50ajnmNIofZMZGjSkks2iuEDJKt1be0t86O/' +
        'exec?mode=create' +
        '&date=' +
        formattedDate +
        '&time=' +
        scheduleStart.value +
        '-' +
        scheduleEnd.value +
        '&area=' +
        scheduleArea.value +
        '&memo=' +
        scheduleMemo.value;
      console.log(string_url);
      loading.value = true;
      axios
        .get(string_url)
        .then((response) => {
          console.log(response);
          renderKey.value = !renderKey.value;
        })
        .catch((error) => {
          console.log(error);
          errored.value = true;
        })
        .finally(() => (loading.value = false));
    } else {
      console.log('日付が選択されていません。');
      alert('日付を選択してください。'); // アラート追加
    }
  };

  onMounted(() => {});
</script>
