<script setup>
import useTailwindConfig from '~~/composables/useTailwindConfig';
import { HomeIcon } from "@heroicons/vue/solid"
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, DotsCircleHorizontalIcon } from "@heroicons/vue/outline"

const { defaultTransition } = useTailwindConfig()
</script>

<template>
<div class="flex flex-col h-screen" >

  <div class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20" :class="defaultTransition">
    <nuxt-link to="/">
      <div class="w-8 h-8">
        <LogoTwitter></LogoTwitter>
      </div>
    </nuxt-link>
  </div>

  <div class="mt-2 space-y-3">
        <sidebar-left-tab active>
          <template v-slot:icon>
            <div>
              <home-icon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              Home
            </div>
          </template>  
        </sidebar-left-tab>

        <sidebar-left-tab active>
          <template v-slot:icon>
            <div>
              <hashtag-icon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              Explore
            </div>
          </template>  
        </sidebar-left-tab>

        <sidebar-left-tab active>
          <template v-slot:icon>
            <div>
              <bell-icon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              Notifications
            </div>
          </template>  
        </sidebar-left-tab>

        <sidebar-left-tab active>
          <template v-slot:icon>
            <div>
              <inbox-icon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              Messages
            </div>
          </template>  
        </sidebar-left-tab>

        <sidebar-left-tab active>
          <template v-slot:icon>
            <div>
              <bookmark-icon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              Bookmarks
            </div>
          </template>  
        </sidebar-left-tab>

        <sidebar-left-tab active>
          <template v-slot:icon>
            <div>
              <document-text-icon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              List
            </div>
          </template>  
        </sidebar-left-tab>

        <sidebar-left-tab active>
          <template v-slot:icon>
            <div>
              <user-icon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              Profile
            </div>
          </template>  
        </sidebar-left-tab>

        <sidebar-left-tab active>
          <template v-slot:icon>
            <div>
              <dots-circle-horizontal-icon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              More
            </div>
          </template>  
        </sidebar-left-tab>
  </div>

  
  
</div>
  
</template>