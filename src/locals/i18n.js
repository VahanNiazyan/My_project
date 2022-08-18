import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'am',
    messages: {
        en: {
            NewPage: 'New page'
        },
        am: {
            NewPage: 'Նոր էջ'
        },
    }
})

export default i18n;
