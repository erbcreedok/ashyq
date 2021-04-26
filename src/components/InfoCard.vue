<style lang="less">
.info_card {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  padding: 10px 10px;
  text-align: center;
  box-shadow: 0 4px 20px 0 rgba(0, 59, 149, 0.1);
  .blue {
    font-size: 12px;
    color: #0b3264;
    margin-bottom: 10px;
  }
  .divider {
    display: flex;
    margin: 15px -10px;
    border-bottom: 1px solid #d3dbe9;
    & > div {
      width: 50%;
      padding-bottom: 8px;
    }
    &-first {
      display: block;
      border-right: 1px solid #d3dbe9;
    }
  }
  .status_block {
    background: #a7dcfe;
    color: #4a8bda;
    border-radius: 10px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
  }
}
</style>
<template>
  <div class="info_card">
    <span class="blue"> ВХОД </span>
    <label class="heading"> ИП Картоха </label>
    <div class="divider">
      <div class="divider-first">
        <label class="label">БИН/ИИН</label>
        <span>{{ data.bin }}</span>
      </div>
      <div class="divider-second">
        <label class="label">Номер входа</label>
        <span>{{ data.o }}</span>
      </div>
    </div>
    <label class="label"> Статус </label>
    <div class="status_block">СИНИЙ</div>
    <label class="label"> Срок действия истечет через:</label>
    <div class="time">
      <vue-countdown-timer
        :start-time="dates.startTime"
        :end-time="dates.endTime"
      >
        <template slot="countdown" slot-scope="scope">
          {{ scope.props.minutes }}:{{ scope.props.seconds }}
        </template>
      </vue-countdown-timer>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    dates() {
      if (!this.data) {
        return { startTime: null, endTime: null };
      }
      const startTime = new Date(this.data.created).getTime();
      const endTime = new Date(startTime + 300000).getTime();
      console.log(startTime, endTime);
      return { startTime, endTime };
    },
  },
};
</script>
