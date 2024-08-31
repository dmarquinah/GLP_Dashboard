import AppLogo from './navbar/components/logos/AppLogo.vue'

export default {
  title: 'AppLogo',
  component: AppLogo,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { AppLogo },
  template: `<AppLogo start="#6B7AFE" end="#083CC6" />`,
})

export const White = () => ({
  components: { AppLogo },
  template: `<div class="bg-primary">
    <AppLogo start="#FFF"/>
  </div>`,
})

export const Blue = () => ({
  components: { AppLogo },
  template: `<AppLogo start="#0E41C9"/>`,
})

export const Height = () => ({
  components: { AppLogo },
  template: `<AppLogo start="#6B7AFE" end="#083CC6" :height="48"/>`,
})
