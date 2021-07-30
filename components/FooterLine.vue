<template>
  <footer v-if="icp || security" class="footer-container d-flex align-items-center panel">
    <div class="container">
      <div class="row align-items-center footer">
        <div class="col-md-4 text-center text-md-left order-md-1 order-2">
          <div class="footer-social">
            <div v-if="security" class="flex-row text-center">
              <a style="color: #000000;" target="_blank"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41162502150055">
                <img src="https://www.firstmeet.xyz/%E5%A4%87%E6%A1%88%E5%9B%BE%E6%A0%87.png" />
                {{ security }}
              </a>
            </div>
            <div v-if="icp" class="flex-row text-center">
              <a style="color: #000000;" href="http://beian.miit.gov.cn/">
                {{ icp }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterLine',
    props: {
      icp: {
        type: String
      },
      security: {
        type: String
      }
    }
  }
</script>

<style>
</style>
