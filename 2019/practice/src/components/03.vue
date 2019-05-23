<template>
  <div id="content">
    <h1>ECMAScript6</h1>
    <div>
        <h3>Class类 </h3>
        <h3>Set和Map类型</h3>
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

            get prop() {
                return 'getter';
            }

            set prop(value) {
                console.log('setter: '+ value)
            }

            toString() {
                return this.x + this.y
            }
        }
        let $point = new Point(2, 3);
        this.code01 = $point.toString();

        //set
        const s = new Set();
        [2, 3, 5, 4, 2, 2].forEach(x => s.add(x));

        for (let i of s) {
            console.log(i);
        }
        console.log(s);
        console.log([...s]);
        s.delete(5)
        console.log([...s]);
        console.log(s.has(5));
        console.log([...s]);
        s.clear();
        console.log(s);

        let set = new Set(['red', 'green', 'blue']);
        for (let x of set) {
            console.log(x);
        }

        //map
        const m = new Map();
        const o = {p: 'Hello World'};

        m.set(o, 'content')
        console.log(m.get(o))

        m.has(o)
        m.delete(o)
        m.has(o)

        const map = new Map([
            ['name', '张三'],
            ['title', 'Author']
        ]);

        map.size
        map.has('name')
        console.log(map.get('name'))

    },
};
</script>