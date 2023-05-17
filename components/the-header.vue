<template>
 
  <header class="sticky bg-base-100 top-0 z-50 navbar dark:text-gray-100">
		<div class="container flex justify-between relative mx-auto items-start md:items-center">
      <Logo />
			<ul class="items-stretch md:flex md:flex-row menu md:menu-horizontal md:space-x-3 rounded md:rounded-none shadow-md md:shadow-none p-5 md:p-0" :class="showHeader ? 'flex md:flex justify-center absolute bg-base-300 w-full top-full flex-col md:flex-row' : 'hidden'">
				<!-- <li class="flex">
					<a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</a>
				</li> -->
        <li v-for="nav in navigation" class="flex w-full md:w-auto" :key="nav.name">
            <nuxt-link class="block w-full md:w-auto md:inline-block" :to="nav.link" @click.native="showHeader = false">{{nav.name}}</nuxt-link>
        </li>
			</ul>
			<!-- <button class="flex justify-end p-4 " >
				
			</button> -->
      <label class="btn btn-circle  md:hidden inline-flex " @click="showHeader = !showHeader">
        
        <!-- this hidden checkbox controls the state -->
        <!-- hamburger icon -->
        <svg class="swap-off fill-current" v-if="!showHeader" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
        <!-- close icon -->
        <svg class="swap-on fill-current" v-if="showHeader" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
        
      </label>
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
  backdrop-filter: blur(50px);

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
