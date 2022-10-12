<script setup>
import LoadingPage from "./components/UI/LoadingPage.vue";
const darkMode = ref(false)
const { useAuthUser, initAuth, useAuthLoading } = useAuth()
const user = useAuthUser()
const isAuthLoading = useAuthLoading()

onBeforeMount(() => {
  initAuth()
})

</script>

<template>
  <div :class="{'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900">

      <LoadingPage v-if="isAuthLoading"/>

      <!-- App -->
      <div v-else-if="user" class="min-h-full">
          <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

            <!-- left sidebar -->
            <div class="hidden md:block xs-col-span-1 xl:col-span-2">
              <div class="sticky top-0">
                <SidebarLeft></SidebarLeft>             
              </div>
            </div>

            <!-- Main content -->
            <main class="col-span-12 md:col-span-8 xl:col-span-6 ">
              <router-view></router-view>
            </main>

            <!-- Right Sidebar -->
            <div class="hidden md:block xl:col-span-4 md:col-span-3">
              <div class="sticky top-0">
                <SidebarRight></SidebarRight>             
              </div>
            </div>

          </div>
      </div>

      <!-- Auth -->
      <AuthPage v-else></AuthPage>

    </div>
  </div>
</template>
