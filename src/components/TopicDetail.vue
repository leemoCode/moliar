<template>
  <div class="detail-top">
    <div class="topic-title">{{ topicDetail.title }}</div>
    <div class="topic-rank">
      话题榜单第 <span class="rank-numer">{{ topicDetail.rank }}</span> 名 >
    </div>
    <div class="topic-heat">
      {{ topicDetail.heatNumer }}万人正在热议，{{
        topicDetail.joinNumber
      }}万人参与
    </div>
    <div class="topic-introduction">
      话题简介：{{ topicDetail.introduction }}
    </div>
    <div class="follow-button" @click="follow">{{ followText }}</div>
  </div>

  <div class="post-list">
    <div class="tab">
      <div
        class="tab-item"
        :class="tabStatus === tabType.hot ? 'tab-active' : ''"
        @click="tabStatus = tabType.hot"
      >
        热门
      </div>
      <div
        class="tab-item"
        :class="tabStatus === tabType.new ? 'tab-active' : ''"
        @click="tabStatus = tabType.new"
      >
        最新
      </div>
    </div>

    <keep-alive>
      <PostList
        v-if="tabStatus === tabType.new && detailData && detailData.new"
        :data="detailData.new"
      />
      <PostList
        v-else-if="tabStatus === tabType.hot && detailData && detailData.hot"
        :data="detailData.hot"
      />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import PostList from './PostList.vue';

export default defineComponent({
  name: 'TopicDetail',
  components: {
    PostList,
  },
  setup() {
    const topicDetail = {
      title: '东京奥运会遭抵制',
      rank: '1',
      heatNumer: 2,
      joinNumber: 9.3,
      introduction: '美媒：东京奥运会必须取消，国际奥委会尽快做出取消决定',
    };

    const followStatus = ref(0);

    const followText = computed(() => {
      return followStatus.value ? '√已关注' : '+关注';
    });

    const follow = () => {
      console.log('<< follow');
      followStatus.value = followStatus.value === 0 ? 1 : 0;
    };

    const tabType = {
      new: 0,
      hot: 1,
    };

    const tabStatus = ref(tabType.hot);

    const fetchDetailData = () => {
      return {
        hot: [
          {
            id: '3213',
            content: '部分侵害用户权益行为的APP被通报 你手机里下过吗？',
            commentNum: 57484,
            praiseNum: 7767,
            postAt: 1624335132,
            userName: '用户666',
            imgList: [1, 2, 3, 4],
            url: '',
            urlInfo: '韩媒：韩国“无指登山家”金洪彬坠入冰隙 下落不明',
          },
          {
            id: '74445125',
            content: '美媒：一年了，该考虑重开中国驻休斯敦总领馆了',
            commentNum: 78368,
            praiseNum: 5270,
            postAt: 1624335132,
            userName: '用户666',
            imgList: [],
            url: 'http://www.baidu.com',
            urlInfo: '韩媒：韩国“无指登山家”金洪彬坠入冰隙 下落不明',
          },
          {
            id: '744454125',

            content: '掉队的威马：科创板IPO遇阻 销量被零跑和哪吒赶超',
            commentNum: 876786,
            praiseNum: 6786,
            postAt: 1624335132,
            userName: '用户666',
            imgList: [],
            url: '',
            urlInfo: '韩媒：韩国“无指登山家”金洪彬坠入冰隙 下落不明',
          },
          {
            id: '744045125',

            content: '广发银行申请冻结恒大1.32亿元资产 恒大将反诉',
            commentNum: 27222,
            praiseNum: 786,
            postAt: 1624335132,
            userName: '用户666',
            imgList: [],
            url: '',
            urlInfo: '韩媒：韩国“无指登山家”金洪彬坠入冰隙 下落不明',
          },
        ],

        new: [
          {
            id: '7444512',

            content: '东京奥运会开幕在即 多国代表团已接种中国新冠疫苗',
            commentNum: 67867,
            praiseNum: 32453,
            postAt: 1624335132,
            userName: '用户666',
            imgList: [],
            url: '',
            urlInfo: '韩媒：韩国“无指登山家”金洪彬坠入冰隙 下落不明',
          },
          {
            id: '744451425',

            content: '蓝色起源载人飞行在即：贝索斯接受14小时速成训练',
            commentNum: 520,
            praiseNum: 32,
            postAt: 1624335132,
            userName: '用户666',
            imgList: [],
            url: '',
            urlInfo: '韩媒：韩国“无指登山家”金洪彬坠入冰隙 下落不明',
          },
          {
            id: '7448945125',

            content: '瑞幸前董事长陆正耀被限制高消费：执行标的超9亿元',
            commentNum: 6786,
            praiseNum: 752,
            postAt: 1624335132,
            userName: '用户666',
            imgList: [],
            url: '',
            urlInfo: '韩媒：韩国“无指登山家”金洪彬坠入冰隙 下落不明',
          },
          {
            id: '744451925',
            content: '婴儿爽身粉致癌遭巨额索赔？强生子公司或将申请破产',
            commentNum: 272,
            praiseNum: 10,
            postAt: 1624335132,
            userName: '用户666',
            imgList: [1, 2],
            url: 'http://www.baidu.com',
            urlInfo: '韩媒：韩国“无指登山家”金洪彬坠入冰隙 下落不明',
          },
        ],
      };
    };

    const detailData = fetchDetailData();

    return {
      topicDetail,
      followText,
      tabType,
      tabStatus,

      detailData,

      follow,
    };
  },
});
</script>

<style scoped>
.detail-top {
  position: relative;
  background: #f5f3f3;
  padding: 50px;

  margin-top: 60px;
}
.topic-title {
  font-size: 51px;
  font-weight: 600;
}
.topic-rank {
  font-size: 36px;
  margin-top: 18px;
  color: gray;
}
.rank-numer {
  color: red;
}
.topic-heat {
  font-size: 39px;
  margin-top: 18px;
  color: gray;
}
.topic-introduction {
  background: white;
  color: gray;
  padding: 20px;
  margin-top: 30px;
  border-radius: 21px;

  font-size: 45px;
}
.follow-button {
  width: 200px;
  height: 60px;
  font-size: 36px;
  background: #aaa7a7;
  color: white;
  border-radius: 60px;

  position: absolute;
  top: 30%;
  right: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.tab {
  display: flex;
  justify-content: center;
  flex-direction: row;

  font-size: 45px;
  color: #a7a4a4;
}
.tab-active {
  color: black;
  font-weight: 550;
}
.tab-item {
  margin: 20px 20px 30px 20px;
}
</style>
