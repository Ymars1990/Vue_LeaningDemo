<template>
  <div class="hello">
    <h1>调查问卷</h1>
    <form class="questionnaire_form">
      <div class="anwser_options">
        <h3><span class="need_question">*</span>您的年纪是?</h3>
        <input type="radio" id="0-10" value="0-10" v-model="age" />
        <label for="one">0-10岁</label>
        <input type="radio" id="11-20" value="11-20" v-model="age" />
        <label for="two">11-20岁</label>

        <input type="radio" id="21-40" value="21-40" v-model="age" />
        <label for="three">21-40岁</label>

        <input type="radio" id="41-60" value="41-60" v-model="age" />
        <label for="four">41-60岁</label>
      </div>
      <div class="anwser_options">
        <h3><span class="need_question">*</span>2.您的职业是?</h3>
        <div v-for="item in occupations" :key="item.occupation_id">
          <input
            type="radio"
            :id="item.occupation_id"
            :value="item.occupation_value"
            v-model="occupation"
          />
          <label :for="item.occupation_id">{{ item.occupation_value }}</label>

          <input
            type="text"
            v-if="item.occupation_id === 6"
            v-model="occupation"
          />
        </div>
      </div>
      <div class="anwser_options">
        <h3><span class="need_question">*</span>3.您的爱好?(最多三项)</h3>
        <div v-for="item in horbits" :key="item.horbits_id">
          <input
            type="checkbox"
            :id="item.horbits_id"
            :value="item.horbits_id"
            v-model="horbit"
            :disabled="item.disabled"
            @change="changeCheckBoxNum($event, item)"
          />
          <label :for="item.horbits_id">{{ item.horbits_value }}</label>
        </div>
      </div>
      <div class="anwser_options">
        <h3><span class="need_question">*</span>4.您愿意从哪些渠道获取信息?</h3>
        <div v-for="item in channels" :key="item.channels_id">
          <input
            type="checkbox"
            :id="item"
            name="channels_name"
            :value="item.channels_value"
            v-model="channel"
            @change="channelsCheck(item, 'channels_name')"
          />
          <label :for="item.channels_id">{{ item.channels_value }}</label>
        </div>
      </div>
      <div class="anwser_options">
        <h3>5.您有什么建议?</h3>
        <textarea
          placeholder="请输入您的建议"
          v-model="suggestion"
          style="margin-top: 5px"
        >
        </textarea>
      </div>
      <input
        type="button"
        @click="submitData()"
        value=" 提交问卷"
      />
    </form>
  </div>
</template>
<script>
import BaseVue from "./Base.vue";
export default {
  data() {
    return {
      components_name: "Questionnaire",
      age: "",
      occupation: "",
      occupations: [
        {
          occupation_id: 1,
          occupation_value: "公务员",
        },
        {
          occupation_id: 2,
          occupation_value: "教师",
        },
        {
          occupation_id: 3,
          occupation_value: "学生",
        },
        {
          occupation_id: 4,
          occupation_value: "私企职员",
        },
        {
          occupation_id: 5,
          occupation_value: "医生",
        },
        {
          occupation_id: 6,
          occupation_value: "其他",
        },
      ],
      horbit: [],
      horbits: [
        {
          horbits_id: 1,
          horbits_value: "看电影",
          state: false,
        },
        {
          horbits_id: 2,
          horbits_value: "逛街",
          state: false,
        },
        {
          horbits_id: 3,
          horbits_value: "体育运动",
          state: false,
        },
        {
          horbits_id: 4,
          horbits_value: "徒步",
          state: false,
        },
        {
          horbits_id: 5,
          horbits_value: "看书",
          state: false,
        },
        {
          horbits_id: 6,
          horbits_value: "其他爱好",
          state: false,
        },
      ],
      channel: [],
      channels: [
        {
          channels_id: 1,
          channels_value: "电视",
          state: false,
        },
        {
          channels_id: 2,
          channels_value: "网络",
          state: false,
        },
        {
          channels_id: 3,
          channels_value: "社交",
          state: false,
        },
        {
          channels_id: 4,
          channels_value: "以上全部渠道",
          state: false,
        },
      ],
      suggestion: "",
    };
  },
  extends: BaseVue,
  methods: {
    changeCheckBoxNum(event, item) {
      if (this.horbit.length >= 3) {
        for (let i = 0; i < this.horbit.length; i++) {
          this.horbits.forEach((item, index) => {
            if (this.horbit[i] === item.horbits_id) {
              this.$set(this.horbits[index], "disabled", false);
              this.horbits[index].state = true;
            } else {
              if (!this.horbits[index].state) {
                this.$set(this.horbits[index], "disabled", "disabled");
              }
            }
          });
        }
      } else {
        for (let i = 0; i < this.horbits.length; i++) {
          this.$set(this.horbits[i], "disabled", false);
          this.horbits[i].state = false;
        }
      }

      console.log(
        "选项:" + item.horbits_value + "  选中状态:" + event.target.checked
      );
    },
    channelsCheck(item, objName) {
      var objNameList = document.getElementsByName(objName);
      if (null != objNameList) {
        for (var i = 0; i < objNameList.length - 1; i++) {
          if (item.channels_id == 4) {
            if (objNameList[objNameList.length - 1].checked) {
              objNameList[i].checked = true;
              this.channel.push(this.channels[i].channels_value);
            } else {
              objNameList[i].checked = false;
              this.channel.splice(this.channels[i].channels_value, 1);
            }
          }
        }
      }
    },
    toast(str) {
      let v = this;
      v.toastText = str;
      v.toastShow = true;
      setTimeout(function () {
        v.toastShow = false;
      }, 1500);
    },
    submitData() {
      console.log(this.components_name + "age:" + this.age);
      console.log(this.components_name + "occupation:" + this.occupation);
      console.log(this.components_name + "horbit:" + this.horbit);
      console.log(this.components_name + "channel:" + this.channel);
      console.log(this.components_name + "suggestion:" + this.suggestion);
        this.$router.push({ path: '/components/ElDemo' });

    },
  },

  updated() {
    console.log(
      this.age !== "" &&
        this.occupation !== "" &&
        this.horbit.length > 0 &&
        this.channel.length > 0
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  text-align: left;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.anwser_options {
  text-align: left;
}
.need_question {
  color: rgba(247, 10, 10, 0.5);
}
</style>
