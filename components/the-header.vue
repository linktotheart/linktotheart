<template>
  <div class="navbar  z-50 sticky mx-auto top-0">
    <div class="container mx-auto max-w-3xl">
      <div class="flex-1 ">
        <Logo />
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li><nuxt-link to="/">home</nuxt-link></li>
          <li><nuxt-link to="/about">about-me</nuxt-link></li>
          <!-- <li tabindex="0">
            <nuxt-link>
              Parent
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </nuxt-link>
            <ul class="p-2 bg-base-100">
              <li><nuxt-link>Submenu 1</nuxt-link></li>
              <li><nuxt-link>Submenu 2</nuxt-link></li>
            </ul>
          </li> -->
          <li><nuxt-link to="/blogs">blogs</nuxt-link></li>
          <li><nuxt-link to="/works">works</nuxt-link></li>
          <li><nuxt-link to="/contact">contact</nuxt-link></li>
          <li v-if="false"><a>
              <label class="swap swap-rotate" @click="toggleDarkMode">
  
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />
  
                <!-- sun icon -->
                <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
  
                <!-- moon icon -->
                <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
  
              </label>
            </a></li>
          <!-- <li><a>Contact</a></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDarkMode() {
      const html_tag = document.getElementsByTagName('html')
      // console.log('html_tag', html_tag)
      const last_theme = html_tag[0]?.getAttribute('data-theme')
      let theme_to_set = 'dark'
      if (last_theme === 'dark') {
        theme_to_set = last_theme
      } else {
        theme_to_set = 'dark'
      }
      html_tag[0]?.setAttribute('data-theme',theme_to_set)
    }
  }
}
</script>

<style lang="scss">
  .navbar .menu {
    li {
      &::focus, &::active {
        a {
          color: #fff;
          &::before {
            color: #fff;
            // content: '#';
          }
        }
        }
      a{
        color: hsl(var(--p) / 1);
        gap: 0;
        &::before {
          content: '#';
        }
        
        &.nuxt-link-exact-active {
          color: #fff;
          &::before {
            color: hsl(var(--p));
          }
        }

        
      }
    }
  }
</style>
