<style lang="less" scoped>
.field {
  display: flex;
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: space-between;
  color: white;
  font-size: 12px;
  margin-bottom: 10px;
  box-sizing: border-box;
  label {
    opacity: 0.6;
    font-weight: 300;
    display: block;
  }
}
.info {
  & &_card {
    margin-top: -18px;
    margin-bottom: 24px;
  }
}
.time {
  font-size: 16px;
}
.black {
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  max-width: 315px;
}
</style>
<template>
  <div class="info">
    <Header with-logo>
      <div class="container" style="margin-top: 20px">
        <div class="field">
          <label>ФИО</label>
          <span>Сыздық Ербол Нұржанұлы</span>
        </div>
        <div class="field">
          <label>Номер телефона</label>
          <span>+77012223685</span>
        </div>
        <div class="field">
          <label>ИИН</label>
          <span>961105351374</span>
        </div>
      </div>
    </Header>
    <div class="container text-center" v-if="data">
      <InfoCard :data="data" />
      <div class="d-flex">
        <label class="label">Время сканирования кода:</label>
        <div class="time">{{ formatDate(data.created) }}</div>
      </div>
      <div class="black">
        Покажите полученный результат соответсвующему сотруднику объекта
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
export default {
  components: { InfoCard, Header },
  mounted() {
    this.setData(this.$route);
  },
  watch: {
    $route(to) {
      this.setData(to);
    },
  },
  data() {
    return {
      ls: localStorage,
      data: null,
    };
  },
  methods: {
    formatDate(date) {
      const time = new Date(date);
      return `${this.formatNumber(time.getHours())}:${this.formatNumber(
        time.getMinutes()
      )}`;
    },
    formatNumber(num) {
      return num < 10 ? "0" + num.toString().trim() : num;
    },
    setData(route) {
      const b = route.query.b;
      this.data = this.$store.state.tickets[b + ""];
    },
  },
};
</script>
