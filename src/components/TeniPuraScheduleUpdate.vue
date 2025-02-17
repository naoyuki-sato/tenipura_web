<template>
  <v-container>
    <section v-if="loading">
      <div>Loading</div>
    </section>
    <section v-else>
      <v-sheet class="mx-auto">
        更新したい予定を選択して、内容を変更して下さい。
        <v-table>
          <thead>
            <tr>
              <th>選択</th>
              <th>日程</th>
              <th>時間</th>
              <th>場所</th>
              <th>メモ</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in schedules" :key="item.date">
            <tr>
              <td>
                <v-radio-group v-model="selectedSchedule" :value="index">
                  <v-radio :value="index" />
                </v-radio-group>
              </td>
              <td>{{ item.date }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.area }}</td>
              <td>{{ item.memo }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-sheet>
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
          <v-btn
            color="primary"
            @click="clickUpdateSchedule('clickUpdateSchedule')"
          >
            予定の更新
          </v-btn>
        </div>
      </v-sheet>
    </section>
  </v-container>
</template>

<script setup>
  import { ref, onMounted, computed, watch } from 'vue';
  import axios from 'axios';
  import { VCheckbox } from 'vuetify/components';
  import { VDateInput } from 'vuetify/labs/VDateInput';

  // トップレベルで定義
  const loading = ref(false);
  const errored = ref(false);

  const schedules = ref(null);

  const selectedRows = ref([]); // チェックされた行番号を格納する配列

  const selectedData = computed(() => {
    return selectedRows.value.map((index) => schedules.value[index]);
  });

  const selectedSchedule = ref(null);
  const scheduleDate = ref('');
  const scheduleStart = ref('');
  const scheduleEnd = ref('');
  const scheduleArea = ref('');
  const scheduleMemo = ref('');

  watch(selectedRows, (newVal) => {
    console.log('選択された行番号', newVal);
    console.log('選択されたデータ', selectedData.value);
  });

  watch(selectedSchedule, (newVal) => {
    console.log('選択された行番号: ', newVal);
    console.log('選択されたデータ: ', schedules.value[newVal]);
    console.log('選択されたデータ: ', schedules.value[newVal].date);
    console.log('選択されたデータ: ', schedules.value[newVal].time);
    if (newVal !== null) {
      scheduleDate.value = new Date(schedules.value[newVal].date);
      const times = schedules.value[newVal].time.split('-');
      scheduleStart.value = times[0];
      scheduleEnd.value = times[1];
      scheduleArea.value = schedules.value[newVal].area;
      scheduleMemo.value = schedules.value[newVal].memo;
    }
  });

  onMounted(() => {
    loading.value = true;
    axios
      .get(
        'https://script.google.com/macros/s/AKfycbwOtbT0YoBijvxmn5N_ivSGgNHnL4vPr50ajnmNIofZMZGjSkks2iuEDJKt1be0t86O/exec'
      )
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

  const clickUpdateSchedule = (param) => {
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
        'https://script.google.com/macros/s/AKfycbyDneXaD-uCya72RE6Dv-HmaiFkvL4C5xqCes4x0TPyj5eZAbilN385mGRkWraQ0jYR/' +
        'exec?mode=update' +
        '&id=' +
        selectedSchedule.value +
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
        .finally(() => {
          loading.value = false;
          /*
          selectedSchedule.value = null;
          scheduleDate.value = '';
          scheduleStart.value = '';
          scheduleEnd.value = '';
          scheduleArea.value = '';
          scheduleMemo.value = '';
          */
        });
    } else {
      console.log('日付が選択されていません。');
      alert('日付を選択してください。'); // アラート追加
    }
  };
</script>
