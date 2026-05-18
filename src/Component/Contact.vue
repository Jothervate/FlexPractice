<script setup>
  import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-vue-next';

  const copy = {
    eyebrow: '\u8207\u6211\u806f\u7d61',
    description: [
      '\u82e5\u6709\u6578\u4f4d\u7522\u54c1\u8a2d\u8a08\u548c\u958b\u767c\u76f8\u95dc\u554f\u984c',
      '\u6b61\u8fce\u586b\u5beb\u8868\u55ae \u6216 \u76f4\u63a5\u8207\u6211\u806f\u7d61\uff01',
    ],
    namePlaceholder: '\u59d3\u540d',
    phonePlaceholder: '\u624b\u6a5f\u865f\u78bc',
    emailPlaceholder: '\u96fb\u5b50\u4fe1\u7bb1',
    messagePlaceholder: '\u5099\u8a3b',
    submitText: '\u9001\u51fa',
  };

  const contactRows = [
    [
      { type: 'text', placeholder: copy.namePlaceholder, autocomplete: 'name' },
      { type: 'text', placeholder: copy.phonePlaceholder, autocomplete: 'tel' },
    ],
    [{ type: 'email', placeholder: copy.emailPlaceholder, autocomplete: 'email' }],
  ];

  const socialLinks = [
    {
      label: 'Instagram',
      icon: Instagram,
      colorClass:
        'hover:border-[#ff00d0] hover:bg-[#ff00d0] hover:text-black active:border-[#ff00d0] active:bg-[#ff00d0] active:text-black',
    },
    {
      label: 'LINE',
      icon: MessageCircle,
      colorClass:
        'hover:border-[#06C755] hover:bg-[#06C755] hover:text-white active:border-[#06C755] active:bg-[#06C755] active:text-white',
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      colorClass:
        'hover:border-[#007fff] hover:bg-[#007fff] hover:text-black active:border-[#007fff] active:bg-[#007fff] active:text-black',
    },
  ];

  const inputClass =
    'w-full rounded-full border border-white/30 bg-transparent px-6 py-4 transition-colors outline-none focus:border-white';
</script>

<template>
  <section class="bg-[#1A110A] px-4 py-8 text-white">
    <div class="mx-auto grid max-w-[1296px] grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-32">
      <div class="order-1 flex flex-col justify-start">
        <p class="mb-2 text-sm tracking-widest text-gray-400">{{ copy.eyebrow }}</p>
        <h1 class="mb-6 text-[48px] leading-none font-bold tracking-[0.1em] md:text-[80px]">
          CONTACT
        </h1>
        <div class="space-y-1 text-lg">
          <p v-for="text in copy.description" :key="text">{{ text }}</p>
        </div>
      </div>

      <form
        class="order-2 flex w-full max-w-[600px] flex-col gap-4 justify-self-end md:row-span-2 md:gap-6"
      >
        <div
          v-for="(row, rowIndex) in contactRows"
          :key="rowIndex"
          class="flex flex-col gap-4 md:gap-6"
          :class="{ 'md:flex-row': row.length > 1 }"
        >
          <input
            v-for="field in row"
            :key="field.placeholder"
            :type="field.type"
            :placeholder="field.placeholder"
            :autocomplete="field.autocomplete"
            :class="inputClass"
          />
        </div>

        <textarea
          :placeholder="copy.messagePlaceholder"
          rows="4"
          class="w-full resize-none rounded-[2rem] border border-white/30 bg-transparent px-6 py-4 transition-colors outline-none focus:border-white"
        ></textarea>

        <button
          type="submit"
          class="w-full rounded-full bg-white py-4 font-bold text-black transition-all hover:bg-gray-200 active:scale-[0.98]"
        >
          {{ copy.submitText }}
        </button>
      </form>

      <div class="order-3 mt-4 md:mt-0">
        <div class="mb-6 flex flex-row gap-3 pt-4 md:gap-6">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            href="#"
            :aria-label="social.label"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-all duration-200"
            :class="social.colorClass"
          >
            <component :is="social.icon" :size="20" />
          </a>
        </div>

        <div class="flex items-center gap-3 text-gray-300">
          <Mail :size="18" />
          <span class="text-sm">service@hexschool.com</span>
        </div>
      </div>
    </div>
  </section>
</template>
