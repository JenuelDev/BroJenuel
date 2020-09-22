<template>
     <div class="not-found-body" style="margin-top: 50px;">
          <div class="not-found-body">
               <div class="scene">
                    <div class="box">
                         <div class="box__face front">4</div>
                         <div class="box__face back">0</div>
                         <div class="box__face right">4</div>
                         <div class="box__face left">0</div>
                         <div class="box__face top">0</div>
                         <div class="box__face bottom">0</div>
                    </div>
                    <div class="shadow"></div>
               </div>
               <div class="desc">
                    <h2>Ooops page not found!</h2>
                    <v-btn to="/" color="primary">Go Back To Home Page</v-btn>
               </div>
          </div>
     </div>
</template>
<style lang="scss">
.not-found-body {
  width: 100%;
  height: 100%;
  font-family: "Days One", sans-serif;
}

.not-found-body {
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.scene {
  perspective: 400px;
}

.box {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: 0.3s;
  animation-name: rotateAnimation;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  &__face {
    position: absolute;
    width: 200px;
    height: 200px;
    font-size: 120px;
    line-height: 200px;
    text-align: center;
    color: #fff;
    border: 1px solid #69666b;

    &.front {
      transform: rotateY(0deg) translateZ(100px);
      background: #69666b;
    }

    &.back {
      transform: rotateY(90deg) translateZ(100px);
      background: darken(#69666b, 5%);
    }

    &.right {
      transform: rotateY(180deg) translateZ(100px);
      background: darken(#69666b, 10%);
    }

    &.left {
      transform: rotateY(-90deg) translateZ(100px);
      background: darken(#69666b, 15%);
    }

    &.top {
      transform: rotateX(90deg) translateZ(100px);
      background: darken(#69666b, 5%);
    }

    &.bottom {
      transform: rotateX(-90deg) translateZ(100px);
      background: darken(#69666b, 20%);
    }
  }
}

@keyframes rotateAnimation {
  25% {
    transform: translateZ(-100px) rotateY(-90deg);
  }
  50% {
    transform: translateZ(-100px) rotateY(-180deg);
  }
  75% {
    transform: translateZ(-100px) rotateX(-90deg);
  }
  85% {
    transform: translateZ(-100px) rotateX(-90deg);
  }
}

.shadow {
  position: absolute;
  z-index: -1;
  left: -50px;
  top: calc(100% - 20px);
  width: calc(100% + 100px);
  height: 30px;
  border-radius: 50%;
  background: #000;
  filter: blur(20px);
}

.desc {
  margin-top: 60px;
  text-align: center;
  h2 {
    margin: 0;
    font-size: 26px;
  }
}

</style>