<template>
  <div class="container mt-5 ">
    <div class="d-flex justify-content-center">
      <h1 class="fs-2 text-center fw-bold">周年慶抽獎</h1>
    </div>
    <div class="row mt-5 py-2">
      <div class="col-sm-4 d-flex justify-content-center pb-3" v-for="card in cards" :key="card.id">
        <button type="button" class="flip-card btn" 
                @click="chooseCard(card)" 
                :class="{'clickFlip': status.clickID === card.id}" 
                :disabled="status.isFlip">
          <div class="flip-card-inner">
            <div class="flip-card-front" v-if="!status.isFlip">
              <img src="https://imgur.com/YS7AfNK.jpg" alt="背面" style="width: 200px; height: 200px;" />
            </div>
            <div class="flip-card-back" v-if="status.isFlip">
              <img :src="card.pic" alt="正面" style="width: 300px; height: 200px;" />
            </div>
          </div>
        </button>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div class="fs-5 text-center fw-bold">
          恭喜獲得 {{ yourDiscount }} 優惠<br />
          折扣碼: <span id="couponCode">{{ yourCode }}</span>
        </div>
        <button type="button"
                class="btn btn-outline-primary text-dark fw-bold fs-5 mt-3 w-25"
                @click="copyCouponCode">
          複製折扣碼
        </button>
      </div>
      <div class="h2 text-primary text-center p-4 mt-3" v-if="status.clickID !== ''">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          id: 1,
          pic: 'https://imgur.com/DiAWuvX.jpg',
          discount: '5折',
          code: 'diamond'
        },
        {
          id: 2,
          pic: 'https://imgur.com/MWLitCH.jpg',
          discount: '7折',
          code: 'gold'
        },
        {
          id: 3,
          pic: 'https://imgur.com/nlpr8b8.jpg',
          discount: '8折',
          code: 'silver'
        }
      ],
      yourDiscount: '',
      yourCode: '',
      status: {
        clickID: '',
        isFlip: false
      }
    }
  },
  computed: {
  },
  methods: {
    chooseCard (card) {
      this.status.clickID = card.id
      this.yourDiscount = card.discount
      this.yourCode = card.code
      this.status.isFlip = true
    },
    copyCouponCode () {
      const couponCode = document.getElementById('couponCode')
      const selection = window.getSelection()
      selection.removeAllRanges()
      const range = document.createRange()
      range.selectNodeContents(couponCode)
      selection.addRange(range)
      document.execCommand('copy')
      this.$store.dispatch('receiveMessage', {
        style: 'success',
        title: '優惠碼 ' + this.yourCode + ' 已複製'
      })
    }
  }
}
</script>

<style scoped lang="scss">
// @import "@/assets/scss/viewScss/_userCouponGame";
</style>
