<!-- ShoppingList.vue -->
<template>
  <div>
    <ul id="myUL">
      <li v-for="(product, index) in products" :key="product.name">
        <a href="#" @click="changeDestinationPoint(index)">{{ product.name }} - {{ product.price }} - {{ product.manufacturer }}</a>
      </li>
    </ul>
  </div>
</template>

<style>
  #myUL {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  #myUL li a {
    border: 1px solid #ddd;
    margin-top: -1px; /* Prevent double borders */
    background-color: #f6f6f6;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    color: black;
    display: block
  }

  #myUL li a:hover:not(.header) {
    background-color: #eee;
  }
</style>

<script>
  import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
  import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";

  export default {
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    methods: {
      loadPath() {
        var selectedPath = this.path[this.startPointSelectedIndex][this.destinationPointSelectedIndex];
        var joints = [];
        for (var i = 0; i < selectedPath.length; i++) {
          joints.push(selectedPath[i].x);
          joints.push(selectedPath[i].y);
          joints.push(selectedPath[i].z);
        }
        var geometry = new LineGeometry();
        geometry.setPositions(joints);
        var material = new LineMaterial({
          color: 0xdd2222,
          linewidth: 5,
          resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
        });
        var line = new Line2(geometry, material);
        line.name = "Path";
        scene.add(line);
      },
      setPointerPosition(x, y, z) {
        pointerObject.position.x = x;
        pointerObject.position.y = y;
        pointerObject.position.z = z;
      },
      changeDestinationPoint(index) {
        alert(index);
        this.destinationPointSelectedIndex = index;
        this.setPointerPosition(
          this.points[this.destinationPointSelectedIndex].x,
          this.points[this.destinationPointSelectedIndex].y,
          this.points[this.destinationPointSelectedIndex].z
        );
        scene.remove(scene.getObjectByName("Path"));
        this.loadPath();
      }
    }
  };
</script>