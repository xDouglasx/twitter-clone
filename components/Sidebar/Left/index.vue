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
        <SidebarLeftTab active>
          <template v-slot:icon>
            <div>
              <HomeIcon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              Home
            </div>
          </template>  
        </SidebarLeftTab>

        <SidebarLeftTab active>
          <template v-slot:icon>
            <div>
              <HashtagIcon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              Explore
            </div>
          </template>  
        </SidebarLeftTab>

        <SidebarLeftTab active>
          <template v-slot:icon>
            <div>
              <BellIcon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              Notifications
            </div>
          </template>  
        </SidebarLeftTab>

        <SidebarLeftTab active>
          <template v-slot:icon>
            <div>
              <InboxIcon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              Messages
            </div>
          </template>  
        </SidebarLeftTab>

        <SidebarLeftTab active>
          <template v-slot:icon>
            <div>
              <BookmarkIcon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              Bookmarks
            </div>
          </template>  
        </SidebarLeftTab>

        <SidebarLeftTab active>
          <template v-slot:icon>
            <div>
              <DocumentTextIcon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              List
            </div>
          </template>  
        </SidebarLeftTab>

        <SidebarLeftTab active>
          <template v-slot:icon>
            <div>
              <UserIcon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              Profile
            </div>
          </template>  
        </SidebarLeftTab>

        <SidebarLeftTab active>
          <template v-slot:icon>
            <div>
              <DotsCircleHorizontalIcon />        
            </div>
          </template>

          <template v-slot:name>
            <div>
              More
            </div>
          </template>  
        </SidebarLeftTab>
  </div>

  
  
</div>
  
</template>