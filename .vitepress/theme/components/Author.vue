<template>
  <div class="relative isolate overflow-hidden bg-write py-24 sm:py-32">
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem]"/>
    </div>
    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem]"/>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl">About Me</h2>
        <p class="mt-6 text-lg leading-8 text-gray-500">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-300 sm:grid-cols-2 md:flex lg:gap-x-10">
          <span :class="`inline-flex items-center rounded-md bg-${tagColor[index]}-50 px-2 py-1 text-${tagColor[index]}-600 text-xs font-medium ring-1 ring-inset ring-${tagColor[index]}-500/10 cursor-pointer`"
                v-for="(link, index) in links" :key="link.name">
              {{ link.name }}
          </span>
        </div>
        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-600">{{ stat.name }}</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-gray-500">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const tagColor = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'] //0-7
const links = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]
</script>