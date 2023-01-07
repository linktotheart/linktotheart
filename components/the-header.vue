<template>
 
  <header class="sticky top-0 z-50 navbar dark:text-gray-100">
		<div class="container flex justify-between relative mx-auto items-start md:items-center">
      <Logo />
			<ul class="items-stretch menu menu-horizontal space-x-3 " :class="showHeader ? 'flex md:flex justify-center absolute bg-base-300 w-full top-full flex-col md:flex-row' : 'hidden'">
				<!-- <li class="flex">
					<a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</a>
				</li> -->
        <li v-for="nav in navigation" class="flex" :key="nav.name">
            <nuxt-link :to="nav.link">{{nav.name}}</nuxt-link>
        </li>
			</ul>
			<button class="flex justify-end p-4 md:hidden" @click="showHeader = !showHeader">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</div>
	</header>
</template>

<script>
export default {
  data() {
    return {
      showHeader: false,
      navigation: [
        {name:'home', link: '/'},
        {name:'blogs', link: '/blogs'},
        {name:'works', link: '/projects'},
        {name:'about-me', link: '/about'},
        {name:'contact', link: '/contact'},
      ]
    }
  },
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
      html_tag[0]?.setAttribute('data-theme', theme_to_set)
    }
  }
}
</script>

<style lang="scss">
.navbar {
  backdrop-filter: blur(10px);

  .menu {
    li {
      &::focus,
      &::active {
        a {
          color: #fff;

          &::before {
            color: #fff;
            // content: '#';
          }
        }
      }

      a {
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
}
</style>
