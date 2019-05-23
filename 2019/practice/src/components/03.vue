<template>
  <div id="content">
    <h1>ECMAScript6</h1>
    <div>
        <h3>Class类 </h3>
     
    </div>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            code01:''
        }
    },
    mounted() {
        class Point {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            toString() {
                return this.x + this.y
            }
        }
        let $point = new Point(2, 3);
        this.code01 = $point.toString();
    },
};
</script>