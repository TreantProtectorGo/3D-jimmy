<template>
    <section>
      <section class="md-3 m-2" id="app">
        <div id="carouselBannerIndicators" class="carousel slide rounded bg-white shadow-sm" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button v-for="(slide, index) in slides" :key="index" type="button" :data-bs-target="'#carouselBannerIndicators'" :data-bs-slide-to="index" :class="{ active: index === activeIndex }" :aria-current="index === activeIndex" :aria-label="'Slide ' + (index + 1)"></button>
      </div>

      <div class="carousel-inner m-auto rounded">
        <div v-for="(slide, index) in slides" :key="index" :class="{ 'carousel-item': true, active: index === activeIndex }">
          <img :src="slide.image" class="d-block img-fluid h-100" :alt="slide.alt" />
        </div>
      </div>

        <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselBannerIndicators'" @click="prevSlide">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="'#carouselBannerIndicators'" @click="nextSlide">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </section>

      <section class="container my-3 text-center bg-white btnGroup">
        <div> 
          <p class="fs-5 title text-start p-0 m-0">Quick actions</p>
          <a href="https://chaujin.github.io/DEMO/" class="btn btn-sq-responsive">
            <img style="width: 6vh;" src="https://treantprotectorgo.github.io/json/image/AR-View.png" class="rounded mx-auto d-block" alt="...">
            AR Game
          </a>
          <router-link to="/IndoorNavigation_RequestPermission" class="btn btn-sq-responsive">
            <img style="width: 7vh;" src="https://treantprotectorgo.github.io/json/image/VR-Map.png" class="rounded mx-auto d-block" alt="...">
            VR Map
          </router-link>
        </div>
      </section>
    </section>
      
    <div class="mt-3 rounded container bg-light p-3">
      <p class="fs-5 title">Spotlight</p>
      <div class="row row-cols-2 row-cols-sm-4 g-2">
        <div class="col">
          <router-link :to="generateRoute('A')">
          <div class="card">
            <img src="https://api.pns.hk/medias/zoom-front-93690.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxNDk2MjN8aW1hZ2UvanBlZ3xhRE5tTDJnNVl5ODVPVGMwTlRBeU5qSXhNakUwTDFCT1UwaExMVGt6Tmprd0xXWnliMjUwTG1wd1p3fDU4M2QzMzFjZTYxMTNiZTc0YzI0MDNlNTg5NjAyNGY3MDM5MjBlNjY1Y2Y4YTM4ZjFiNzM4MTAzYmM1ZDNjZTM" class="card-img-top" alt="...">
            <div class="card-body bg-light">
              <h5 class="card-title fs-6 fw-normal">榮華</h5>
                <p class="card-text fw-bold">
                  雙黃白蓮蓉月餅
                </p>
              <td class="card-text"><span style="color: red;">$238.50 </span>
                <del><small class="text-muted">$398.00</small></del>
              </td>
            </div>
          </div>
        </router-link>
        </div>
        <div class="col">
          <router-link :to="generateRoute('B')">
          <div class="card">
            <img src="https://api.pns.hk/medias/zoom-front-41471.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxMzQyNjl8aW1hZ2UvanBlZ3xhRGhoTDJnMU5TODVPVGMwTkRjMU16VTRNak00TDFCT1UwaExMVFF4TkRjeExXWnliMjUwTG1wd1p3fGMyYTZkYjU4OGM0NTllYTk4ZjU5MzJiMDFmZWMzZDQ5ZjZjY2Y0NWI3YTE0OGQ0YTY2NTEzNTNmNzhhZDAwYTg" class="card-img-top" alt="...">
            <div class="card-body bg-light">
              <h5 class="card-title fs-6 fw-normal">恆香</h5>
                <p class="card-text fw-bold">
                  恆香伍仁月餅
                </p>
              <td class="card-text"><span style="color: red;">$238.00 </span>
                <del><small class="text-muted">$408.00</small></del>
              </td>
            </div>
          </div>
        </router-link>
        </div>
        <div class="col">
          <router-link :to="generateRoute('C')">
          <div class="card">
            <img src="https://api.pns.hk/medias/-LEMON-TEA-250ML-6PACK-185711.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3w0NjY0MTR8aW1hZ2UvanBlZ3xhRFprTDJnME15ODVNekU0TnpJNU5qRXpNelF5THlCTVJVMVBUaUJVUlVFZ01qVXdUVXdnTmxCQlEwc3RNVGcxTnpFeExtcHdad3xjNDQ0MmQ0Mzg4NDc4ZjA2NjMyMDQ2YzczYjJjMTUwNzgxZTdiZDcwNmUyNjUzYjkzYjQ4OWE4MDUwNzBjNjhi" class="card-img-top" alt="...">
            <div class="card-body bg-light">
              <h5 class="card-title fs-6 fw-normal">維他</h5>
                <p class="card-text fw-bold">
                    檸檬茶
                </p>
              <td class="card-text"><span style="color: red;">$18.00 </span>
              </td>
            </div>
          </div>
        </router-link>
        </div>
        <div class="col">
          <router-link :to="generateRoute('D')">
          <div class="card">
            <img src="https://api.pns.hk/medias/zoom-front-307847.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxNDIwMDZ8aW1hZ2UvanBlZ3xhRGhpTDJnMlppODVNelkwTXpJM05EazNOelU0TDFCT1UwaExMVE13TnpnME55MW1jbTl1ZEM1cWNHY3w5MTMxZWVmZWU3YmMwNTcyNzA5ZjM4MDgwYmY3NjdiMzMzMjUyNDMxNWVjNjhjMjliNDY3ZjMyMTAzYmM5NzEy" class="card-img-top" alt="...">
            <div class="card-body bg-light">
              <h5 class="card-title fs-6 fw-normal">維他奶</h5>
                <p class="card-text fw-bold">
                    麥精維他奶９包裝
                </p>
              <td class="card-text"><span style="color: red;">$54.00/ 2件 </span>
                <small class="text-muted">$31.00</small>
              </td>
            </div>
          </div>
        </router-link>
        </div>
      </div>
    </div>

    <section class="pb-5 mb-5">
      <div class="mt-3 rounded container px-1">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 rounded">
          <div class="col">
            <div class="card">
              <img src="https://api.pns.hk/medias/STRAWBERRY-ICE-CREAM-134317.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3w5Njk3M3xpbWFnZS9qcGVnfGFETmpMMmd4TVM4NU16RTVNakl3TVRFM05UTTBMMU5VVWtGWFFrVlNVbGtnU1VORklFTlNSVUZOTFRFek5ETXhOeTVxY0djfDIzZWZjMzRjMWEzMjFlYmZiYjQxZGMxYjVlMjIzMGY5NGVkNWMwYzU0ZmI1NjQ1ZWM5OTk0ZThlMDE2MzU5NTg" class="card-img-top" alt="..." >
              <div class="card-body bg-light">
                <h5 class="card-title fs-6">HAAGEN-DAZS</h5>
                <p class="card-text fw-bold">
                  士多啤梨雪糕家庭裝
                </p>
                <p class="card-text"><small class="text-muted">$49.00</small></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://api.pns.hk/medias/zoom-front-114639.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxMTIwNTB8aW1hZ2UvanBlZ3xhREpoTDJoak9DODVOVGcyTURNME16YzJOek0wTDFCT1UwaExMVEV4TkRZek9TMW1jbTl1ZEM1cWNHY3xlYmJhNzEwMmY3ZjkxZGNhODQzZWM5MDljMDYxYzlhMzg5ODhmYzdlZmVkZTRiMDIzNzhkNTc1YjZmOWQ2ODg5" class="card-img-top" alt="...">
              <div class="card-body bg-light">
                <h5 class="card-title fs-6">可口可樂</h5>
                <p class="card-text fw-bold">
                  可口可樂８罐裝
                </p>
                <p class="card-text"><small class="text-muted">$38.00</small></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://api.pns.hk/medias/-LOW-SUGAR-LEMON-TEA-250ML-9PACK-355420.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxMTY1MjJ8aW1hZ2UvanBlZ3xhRGN5TDJnME5pODVNekU1TXpBMU5UYzJORGM0THlCTVQxY2dVMVZIUVZJZ1RFVk5UMDRnVkVWQklESTFNRTFNSURsUVFVTkxMVE0xTlRReU1DNXFjR2N8NjVhZWFmYzVjZTNhNThiMDQ2ZmUxZjNlY2I5YmI3NmQwN2I4MDAxNzNlY2RhYzgwZWU3M2VhNWE4NmFiMWQ1Yg" class="card-img-top" alt="...">
              <div class="card-body bg-light">
                <h5 class="card-title">維他</h5>
                <p class="card-text fw-bold">
                  低糖檸檬茶250毫升(9包裝)
                </p>
                <p class="card-text"><small class="text-muted">$25.00</small></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://api.pns.hk/medias/POTATO-CHIPS-BBQ-126070.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxMTQ3NDZ8aW1hZ2UvanBlZ3xhRFkwTDJoaU5TODVNekU0TlRFeE5UYzFNRGN3TDFCUFZFRlVUeUJEU0VsUVV5MUNRbEV0TVRJMk1EY3dMbXB3Wnd8MzgyMzc5NmYxY2EwMzE1OTAxYzdhZjhlZWIxMTk4NmIxOWUwNjRlMTVkOWM1OWEwNWJjNTllODYyNzZmMzU3YQ" class="card-img-top" alt="...">
              <div class="card-body bg-light">
                <h5 class="card-title">卡樂B</h5>
                <p class="card-text fw-bold">
                  卡樂B薯片BBQ味105克
                </p>
                <p class="card-text"><small class="text-muted">$20.00</small></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://api.pns.hk/medias/zoom-front-110103.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxNDI5NjB8aW1hZ2UvanBlZ3xhRFV3TDJnME55ODVPRFF3T0RZNE9EVXhOelF5TDFCT1UwaExMVEV4TURFd015MW1jbTl1ZEM1cWNHY3xhOGNhZTgwNWZlMzg4ZDkwZjY0YTA3YTc1OWRhMzJiNTk4YjRkYWMwZWU2NTM5NzkyY2UwNjk4MjNmOTU0MDYy" class="card-img-top" alt="...">
              <div class="card-body bg-light">
                <h5 class="card-title">保利</h5>
                <p class="card-text fw-bold">
                  UHT 牛奶
                </p>
                <p class="card-text"><small class="text-muted">$60.00</small></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://api.pns.hk/medias/CLASSIC-CORN-FLAKES-115554.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxNTA0OTB8aW1hZ2UvanBlZ3xhR0kxTDJnek1DODVNekU0TlRRM05ESXpNall5TDBOTVFWTlRTVU1nUTA5U1RpQkdURUZMUlZNdE1URTFOVFUwTG1wd1p3fDgxMGY0YTRlNDYwMGI2MDI1ZGM4OTdlOWY2NzMyZDliMjkyMGI2Yzk1Y2VkMjA1MmI2MWEwZDg3YjU0ZjA0NzU" class="card-img-top" alt="...">
              <div class="card-body bg-light">
                <h5 class="card-title">家樂氏</h5>
                <p class="card-text fw-bold" > 
                  原味玉米片
                </p>
                <p class="card-text"><small class="text-muted">$42.50</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- footer -->
    <footer >
      <nav
        class="nav border-top nav-pills nav-justified fixed-bottom flex-nowrap " 
        
      >
      <div class="btn-group" role="group" style="width:100%;" >
        <button type="button" class="btn btn-light" style=" color: #094FA3;">
          <i style="display: flex; flex-direction: column; font-size: 28px;" class="material-icons">home</i>
          Home</button>
          
        <a href="https://nevercod.github.io/chat/" class="btn btn-light">
          <i style="display: flex; flex-direction: column; font-size: 28px;" class="material-icons">chat</i>
          Chat</a>

          <a href="https://treantprotectorgo.github.io/vue-bootstrap/" class="btn btn-light">
            <i style="display: flex; flex-direction: column; font-size: 28px;" class="material-icons">shopping_cart</i>
            Cart
          </a>

      </div>
    </nav>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      slides: [],
      activeIndex: 0
    }
  },
  mounted() {
    for (let i = 1; i <= 26; i++) {
      this.slides.push({ image: `https://treantprotectorgo.github.io/json/image/big/${i}.jpg`, alt: `Slide ${i}` })
    }
  },
  methods: {
    prevSlide() {
      this.activeIndex = (this.activeIndex === 0) ? this.slides.length - 1 : this.activeIndex - 1;
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex === this.slides.length - 1) ? 0 : this.activeIndex + 1;
    },
    generateRoute(option) {
      if (option === 'A') {
        return {
          path: '/IndoorNavigation_RequestPermission',
          query: { value: 4 },
        };
      } else if (option === 'B') {
        return {
          path: '/IndoorNavigation_RequestPermission',
          query: { value: 4 },
        };
      } else if (option === 'C') {
        return {
          path: '/IndoorNavigation_RequestPermission',
          query: { value: 3 },
        };
      } else if (option === 'D') {
        return {
          path: '/IndoorNavigation_RequestPermission',
          query: { value: 3 },
        };
      }
    }
  }
}
</script>


<style>
    /* .carousel {
  height: 25vh !important;
  background-color: black;
}
.carousel-inner {
  height: 100%;
}
.carousel-item {
  height: 25vh;
}
.carousel-item-next,
.carousel-item-prev,
.carousel-item.active {
  display: flex;
}
.carousel-item .img-fluid {
  max-height: 25vh !important;
  margin: auto;
}
.nav {
  overflow-x: scroll;
  background-color: white;
}
.nav-link {
  border-radius: 0 !important;
  min-width: 200px;
}
.nav-link span {
  font-size: 28px;
}
.loginSection{
    height: 40vh;
} */

.title {
  font-weight: bold;
}

body {
  font-family: 'General Sans', sans-serif;
}

.btnGroup {
  border-radius: 15px;
}

@media (min-width: 768px) {
  .navbar-brand.abs
      {
          position: absolute;
          width: auto;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
      }
  }

  
@media only screen and (max-width: 600px) {
    .nav-link {
        border-radius: 0 !important;
        min-width: 100px;
      }
      .nav-link span {
        font-size: 20px;
      }
      .nav-link p {
        font-size: 0.75rem;
      }
  }

</style>