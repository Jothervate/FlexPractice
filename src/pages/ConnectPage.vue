<script setup>
  import { computed, reactive, ref } from 'vue';
  import SubscriptArea from '../Component/SubscriptArea.vue';
  const form = reactive({
    name: '',
    phone: '',
    email: '',
  });

  const touched = reactive({
    name: false,
    phone: false,
    email: false,
  });

  const submitted = ref(false);

  const rules = {
    name: {
      pattern: /^[\u4e00-\u9fa5A-Za-z\s]{2,30}$/,
      message: '請輸入 2 到 30 個中文字或英文字。',
    },
    phone: {
      pattern: /^(09\d{2}-?\d{3}-?\d{3}|0\d{1,2}-?\d{6,8})$/,
      message: '請輸入正確電話格式，例如 0912-345-678 或 02-12345678。',
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      message: '請輸入正確 Email 格式，例如 hello@example.com。',
    },
  };

  const errors = computed(() => ({
    name: !rules.name.pattern.test(form.name.trim()) ? rules.name.message : '',
    phone: !rules.phone.pattern.test(form.phone.trim()) ? rules.phone.message : '',
    email: !rules.email.pattern.test(form.email.trim()) ? rules.email.message : '',
  }));

  const isValid = computed(() => !errors.value.name && !errors.value.phone && !errors.value.email);

  const shouldShowError = (field) =>
    Boolean((touched[field] || submitted.value) && errors.value[field]);

  const markTouched = (field) => {
    touched[field] = true;
  };

  const handleSubmit = () => {
    submitted.value = true;
    touched.name = true;
    touched.phone = true;
    touched.email = true;

    if (!isValid.value) return;

    window.alert('表單已送出，謝謝你的聯絡！');
  };
</script>

<template>
  <section class="bg-[#FDF7F1] px-3 py-12 text-[#2A1F1C] md:px-10 md:py-20">
    <div
      class="mx-auto grid w-full max-w-[1296px] gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start"
    >
      <header class="flex flex-col gap-4">
        <p class="text-[14px] leading-none font-black tracking-[0.18em] text-[#7A6A5E]">CONTACT</p>
        <h1 class="text-[40px] leading-[1.12] font-black md:text-[72px]">與我聯絡</h1>
        <h2 class="text-[24px] leading-[1.12] font-black md:text-[36px]">喜歡我們的內容嗎?</h2>
        <p
          class="max-w-[520px] text-[15px] leading-[1.9] font-medium text-[#5B514B] md:text-[18px]"
        >
          歡迎留下你的聯絡資訊，我們會盡快回覆你。
        </p>
      </header>

      <form
        class="flex flex-col gap-6 bg-white p-5 shadow-[0_18px_48px_rgba(42,31,28,0.08)] md:p-10"
        novalidate
        @submit.prevent="handleSubmit"
      >
        <div class="flex flex-col gap-2">
          <label for="contact-name" class="text-[14px] font-bold">姓名</label>
          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            autocomplete="name"
            class="min-h-[48px] border border-[#D8CEC4] bg-white px-4 text-[15px] transition-colors outline-none focus:border-[#2A1F1C]"
            :class="shouldShowError('name') ? 'border-[#D92D20]' : ''"
            @blur="markTouched('name')"
          />
          <p
            v-if="shouldShowError('name')"
            class="text-[13px] leading-[1.5] font-bold text-[#D92D20]"
          >
            {{ errors.name }}
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <label for="contact-phone" class="text-[14px] font-bold">聯絡電話</label>
          <input
            id="contact-phone"
            v-model="form.phone"
            type="tel"
            autocomplete="tel"
            class="min-h-[48px] border border-[#D8CEC4] bg-white px-4 text-[15px] transition-colors outline-none focus:border-[#2A1F1C]"
            :class="shouldShowError('phone') ? 'border-[#D92D20]' : ''"
            @blur="markTouched('phone')"
          />
          <p
            v-if="shouldShowError('phone')"
            class="text-[13px] leading-[1.5] font-bold text-[#D92D20]"
          >
            {{ errors.phone }}
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <label for="contact-email" class="text-[14px] font-bold">Email</label>
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            class="min-h-[48px] border border-[#D8CEC4] bg-white px-4 text-[15px] transition-colors outline-none focus:border-[#2A1F1C]"
            :class="shouldShowError('email') ? 'border-[#D92D20]' : ''"
            @blur="markTouched('email')"
          />
          <p
            v-if="shouldShowError('email')"
            class="text-[13px] leading-[1.5] font-bold text-[#D92D20]"
          >
            {{ errors.email }}
          </p>
        </div>

        <div class="mt-2 flex w-full md:justify-end">
          <button
            type="submit"
            class="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#2A1F1C] px-6 text-[15px] font-bold text-white transition-colors hover:bg-[#4A3A32] disabled:cursor-not-allowed disabled:bg-[#B7AAA0] md:w-fit"
          >
            送出表單
          </button>
        </div>
      </form>
    </div>
  </section>
  <SubscriptArea />
</template>
