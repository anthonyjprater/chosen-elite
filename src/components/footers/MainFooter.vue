
<script setup>

</script>

<template>
    <footer role="contentinfo">
        <a href="#" data-v-ff36cf16=""><img src="/elite-logo.svg" class="logo" alt="" data-v-ff36cf16=""><span class="sr-only" data-v-ff36cf16="">Go to Team Chosen Elite Home Page</span></a>
        <div class="footer-nav">
            <ul>
                <li>
                  <button class="footer-nav-trigger">General</button>
                  <ul class="footer-sub-menu">
                    <li><a href="/references">References</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/training_grounds">Training Grounds</a></li>
                  </ul>
                </li>
                <li>
                  <button class="footer-nav-trigger">Training Programs</button>
                  <ul class="footer-sub-menu">
                    <li><a href="#">Children</a></li>
                    <li><a href="#">Amateurs</a></li>
                    <li><a href="#">Professionals</a></li>
                    <li><a href="#">Apply</a></li>
                  </ul>
                </li>
                <li>
                  <button class="footer-nav-trigger">Training Programs</button>
                  
                  <ul class="footer-sub-menu">
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/coaches">Coaches</a></li>
                      <li><a href="/merch">Merch</a></li>
                  </ul>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>

footer {
  grid-area: footer;
  display: flex;
  flex-direction: column;
  background-color: var(--grey);
}

footer .logo {
    width: 7em;
    height: 7em;
}

.footer-nav > ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-nav > ul li {
  width: 90%;
}

button.footer-nav-trigger {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1em 0.5em;
  color: var(--white);
  background: transparent;
  border-top: 1px solid var(--white);
  border-bottom: 1px solid var(--white);
  border-radius: 0;
}
.footer-nav-trigger:hover,
.footer-nav-trigger:focus {
    background: var(--green);
    cursor: pointer;
    /* opacity: 0.3; */
}

.footer-nav-trigger:focus {
    outline: 1px solid rgba(255,255,255,0.7);
    outline-offset: -4px;
}

.footer-nav-trigger:active {
    transform: scale(0.99);
}
.footer-nav-trigger::after {
  display: inline-block;
  margin-inline-start: 0.5rem;
  color: var(--white);
  font-size: 0.75em;
  content: "▶";
  transform: rotate(90deg);
}

</style>