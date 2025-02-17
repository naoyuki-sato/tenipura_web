<template>
  <v-container>
    <v-sheet class="mx-auto">
      <section v-if="loading">
        <div>Loading</div>
      </section>
      <section v-else>
        削除したい予定を選択してください。
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
          <tbody>
            <tr v-for="(item, index) in schedules" :key="item.date">
              <td>
                <v-checkbox v-model="selectedRows" :value="index"></v-checkbox>
              </td>
              <td>{{ item.date }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.area }}</td>
              <td>{{ item.memo }}</td>
            </tr>
          </tbody>
        </v-table>
        <div class="d-flex flex-row justify-end text-black">
          <v-btn
            color="primary"
            @click="clickDeleteSchedule('clickDeleteSchedule')"
          >
            予定の削除
          </v-btn>
        </div>
      </section>
    </v-sheet>
  </v-container>
</template>

<script setup>
  import { ref, onMounted, computed, watch } from 'vue';
  import axios from 'axios';
  import { VCheckbox } from 'vuetify/components';

  // トップレベルで定義
  const loading = ref(false);
  const errored = ref(false);

  const schedules = ref(null);

  const selectedRows = ref([]); // チェックされた行番号を格納する配列

  const selectedData = computed(() => {
    return selectedRows.value.map((index) => schedules.value[index]);
  });

  watch(selectedRows, (newVal) => {
    console.log('選択された行番号', newVal);
    console.log('選択されたデータ', selectedData.value);
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

  const clickDeleteSchedule = (param) => {
    if (selectedRows.value.length == 0) {
      console.log('削除が選択されていない');
      alert('削除するスケジュールを選択して下さい。'); // アラート追加
    } else {
      console.log('選択した配列' + selectedRows.value);
      let sort = selectedRows.value.sort((a, b) => (a > b ? -1 : 1));
      console.log('ソートした配列' + sort);
      let string_url =
        // 'https://script.google.com/macros/s/AKfycbwOtbT0YoBijvxmn5N_ivSGgNHnL4vPr50ajnmNIofZMZGjSkks2iuEDJKt1be0t86O/' +
        'https://script.google.com/macros/s/AKfycbxFsJ8Lf2-DOZPxyOid1afUNNS_fSG74gSvgI0lV8jvYQw5MZaPYVrKV26AmUmGPqLa/' +
        'exec?mode=delete' +
        '&ids=[' +
        sort +
        ']';
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
          selectedRows.value = [];
        })
        .catch((error) => {
          console.log(error);
          errored.value = true;
        })
        .finally(() => (loading.value = false));
    }
  };
</script>
