// uno.config.ts
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
    presets: [
        presetUno()
    ],
    transformers: [
        transformerVariantGroup(),
        transformerDirectives(),
    ],
})
