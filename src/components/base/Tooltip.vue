<template>
  <div class="inline-block">
    <div
      ref="referenceRef"
      class="inline-block"
      @blur="hide"
      @focus="show"
      @mouseenter="show"
      @mouseleave="hide"
    >
      <slot />
    </div>

    <div
      ref="floatingRef"
      :class="[
        'absolute top-2 left-0 z-50 font-semibold text-sm p-2  bg-flc-greenDark border rounded-xl shadow-sm text-slate-50 cursor-default min-w-[110px] text-center max-w-[320px]',
        isHidden && 'hidden'
      ]"
    >
      {{ props.content }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { computePosition, flip, offset, shift } from '@floating-ui/dom'

const props = defineProps({
  placement: String,
  content: {
    type: String,
    default: 'top'
  },
  isJobOffer: {
    type: Boolean,
    default: false
  }
})

const floatingRef = ref()
const referenceRef = ref()
const isHidden = ref(true)

const calculatePosition = async () => {
  const { x, y } = await computePosition(referenceRef.value, floatingRef.value, {
    placement: props.placement,
    middleware: [offset(2), flip(), shift({ padding: 5 })]
  })

  Object.assign(floatingRef.value.style, {
    left: `${x}px`,
    top: `${y}px`
  })
}

const hide = () => {
  isHidden.value = true
}

const show = () => {
  isHidden.value = false
  calculatePosition()
}
</script>
