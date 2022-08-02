<script setup>
    const whatsHappening = ref([
        {
            title: 'SpaceX',
            count: '18.8k tweets'
        },
        {
            title: 'sheesh',
            count: '10k tweets'
        },
        {
            title: 'Apex Legends',
            count: '50k tweets'
        }
    ]);

    const whoToFollow = ref([
        {
            name: 'Elon Musk',
            username: '@ElonMusk',
            image: 'https://picsum.photos/200/200'
        },
        {
            name: 'Douglas',
            username: '@xdugss',
            image: 'https://picsum.photos/200/200'
        },
        {
            name: 'Izzamuzzic',
            username: '@izzamuzzic',
            image: 'https://picsum.photos/200/200'
        }
    ])
</script>

<template>
    <div class="flex flex-col">
        
        <!-- Preview Card: whats happening -->
        <sidebar-right-preview-card title="Whats happening">
            <sidebar-right-preview-card-item v-for="happening in whatsHappening">

                <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ happening.title }}</h2>
                <p class="text-xs text-gray-400">{{ happening.count }}</p>

            </sidebar-right-preview-card-item>
        </sidebar-right-preview-card>
        
        <!-- Preview Card: who to follow -->
        <sidebar-right-preview-card title="Who to follow">
            <sidebar-right-preview-card-item v-for="follow in whoToFollow">
                <div class="flex flex-row items-center justify-between p-2" >

                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="follow.image" :alt="follow.name">

                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{follow.name}}</h1>
                            <p class="text-xs text-gray-400">{{follow.username}}</p>
                        </div>
                    </div>

                    <div class="flex h-full">
                        <button class="px-4 py-2 font-bold text-xs bg-black text-white dark:text-black dark:bg-white rounded-full">
                            follow
                        </button>
                    </div>
                    
                </div>
            </sidebar-right-preview-card-item>
        </sidebar-right-preview-card>

    </div>
</template>
