<template>
  <v-app>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>テニプラ スケジュール</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list dense nav>
        <v-list-item :to="{ path: '/' }">
          <v-list-item-avatar>
            <v-icon>mdi-tennis</v-icon>
          </v-list-item-avatar>
          <v-list-item-title>予定の表示</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/schedule_create' }">
          <v-list-item-avatar>
            <v-icon>mdi-tennis</v-icon>
          </v-list-item-avatar>
          <v-list-item-title>予定の追加</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/schedule_delete' }">
          <v-list-item-avatar>
            <v-icon>mdi-tennis</v-icon>
          </v-list-item-avatar>
          <v-list-item-title>予定の削除</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/accounting_home' }">
          <v-list-item-avatar>
            <v-icon>mdi-tennis</v-icon>
          </v-list-item-avatar>
          <v-list-item-title>会計の表示</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/accounting_create' }">
          <v-list-item-avatar>
            <v-icon>mdi-tennis</v-icon>
          </v-list-item-avatar>
          <v-list-item-title>会計の追加</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';

  const drawer = ref(false);
</script>
