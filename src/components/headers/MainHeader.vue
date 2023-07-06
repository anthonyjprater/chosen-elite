<script setup>
    
</script>

<template>
    <header>
        <a href="#">
          
          <span class="sr-only">Go to Team Chosen Elite Home Page</span>
        </a>
        <nav id="navigation" class="main-nav">
            <button class="menu-trigger">
            <svg class="icon" viewBox="0 0 44 32">
            <path
                    d="M0 6h28v6h-28v-6zM0 14h28v6h-28v-6zM0 22h28v6h-28v-6z"
            ></path>
            <path d="M31 14l6 6 6-6z"></path>
            </svg>
            <span class="sr-only">Main menu</span>
            </button>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>

/* HEADER STYLES */
header {
  display: flex;
  color: black;
}


/* NAV STYLES */
button {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  border: 0;
  background: none;
}

button:hover {
  cursor: pointer;
}

button:hover,
button:focus,
button:active {
  background: none;
  border-color: inherit;
  border-radius: 0;
}

.sr-only {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  width: 1.375em;
}

.main-nav {
  position: relative;
  width: fit-content;
}

.main-nav ul {
  position: absolute;
  max-width: fit-content;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  z-index: 1;
}

.main-nav li {
  position: relative;
}

.main-nav a,
.menu-trigger {
  display: block;
  margin-block-end: 1ch;
  margin-inline-end: 1ch;
  padding: 0.3rem 0.5rem;
  border: 3px solid black;
  color: black;
  text-decoration: none;
  background: white;
}

.main-nav a:hover,
.main-nav a:focus,
.menu-trigger:hover,
.menu-trigger:focus {
  background: black;
  color: white;
  border-color: black;
}

.main-nav ul.hide {
  display: none;
}

</style>