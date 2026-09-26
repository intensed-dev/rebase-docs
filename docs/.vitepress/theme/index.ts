import DefaultTheme from 'vitepress/theme'
import PluginCard from './components/PluginCard.vue'
import HomeSection from './components/HomeSection.vue'
import '../custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PluginCard', PluginCard)
    app.component('HomeSection', HomeSection)
  }
}
