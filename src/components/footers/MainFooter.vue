
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

</style>