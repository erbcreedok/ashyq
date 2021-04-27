<style lang="less" scoped>
.qr_scanner {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  span {
    position: absolute;
    display: block;
    background: white;
    top: 0;
    left: 0;
    z-index: 100;
  }
}
</style>
<template>
  <div class="qr_scanner">
    <qrcode-stream @decode="onResult" />
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import uriToObject from "@/utils/uriToObject";
export default {
  components: {
    QrcodeStream,
  },
  data() {
    return {
      qr: null,
      video: null,
      result: null,
      bodyColor: null,
    };
  },
  mounted() {
    const body = document.querySelector("body");
    this.bodyColor = body.style.background;
    body.style.background = "#000000";
  },
  beforeDestroy() {
    const body = document.querySelector("body");
    body.style.background = this.bodyColor;
  },
  methods: {
    onResult(result) {
      const search = result.split("?")[1];
      this.result = uriToObject(search);
      this.$store.commit({ type: "SAVE_NEW_TICKET", payload: this.result });
      this.$router.push({ path: "/info?" + search });
    },
  },
};
</script>
