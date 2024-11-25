<template>
  <div class="ww-flow-wrapper">
    <VueFlow
      class="vueflow"
      v-model="data"
      v-if="content.data && content.data.nodes && content.data.nodes.length > 0"
      :nodes="content.data.nodes"
      :edges="content.data.edges"
      :default-viewport="{ zoom: 1.5 }"
      :fit-view-on-init="true"
    >
      <Background pattern-color="#aaa" :gap="16" />

      <MiniMap />

      <Controls position="top-left" />
    </VueFlow>
    <div
      v-else-if="!content.data || content.data.length < 1"
      class="flow-empty-state"
    >
      Add nodes and edges in the properties panel
    </div>
  </div>
</template>

<script>
import { VueFlow } from "@vue-flow/core";
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";
import "@vue-flow/minimap/dist/style.css";
import "@vue-flow/controls/dist/style.css";
import { Background } from "@vue-flow/background";
import { MiniMap } from "@vue-flow/minimap";
import { Controls } from "@vue-flow/controls";

export default {
  components: {
    VueFlow,
    Background,
    MiniMap,
    Controls,
  },
  emits: [
    "update:content",
    "update:content:effect",
    "trigger-event",
    "element-event",
  ],
  props: {
    content: { type: Object, required: true },
    /* wwEditor:end */
  },
  setup(props) {
    console.log({ props });
  },
  // setup(props, { emit }) {
  //   const mounted = ref(false);

  //   console.log("PROPS IN SETUP=== ", props);
  //   // Compute nodes with default values if needed
  //   const flowNodes = computed(() => {
  //     return props.nodes.length
  //       ? props.nodes
  //       : [
  //           {
  //             id: "1",
  //             type: "input",
  //             data: { label: "Input Node" },
  //             position: { x: 250, y: 0 },
  //           },
  //           {
  //             id: "2",
  //             data: { label: "Default Node" },
  //             position: { x: 100, y: 100 },
  //           },
  //           {
  //             id: "3",
  //             type: "output",
  //             data: { label: "Output Node" },
  //             position: { x: 400, y: 200 },
  //           },
  //         ];
  //   });

  //   // Compute edges with default values if needed
  //   const flowEdges = computed(() => {
  //     return props.edges.length
  //       ? props.edges
  //       : [
  //           {
  //             id: "e1-2",
  //             source: "1",
  //             target: "2",
  //             animated: true,
  //           },
  //           {
  //             id: "e2-3",
  //             source: "2",
  //             target: "3",
  //             type: "smoothstep",
  //           },
  //         ];
  //   });

  //   const onNodeClick = (event, node) => {
  //     console.log("Node clicked:", node);
  //     emit("trigger-event", {
  //       name: "nodeClick",
  //       event: { node },
  //     });
  //   };

  //   const onEdgeClick = (event, edge) => {
  //     console.log("Edge clicked:", edge);
  //     emit("trigger-event", {
  //       name: "edgeClick",
  //       event: { edge },
  //     });
  //   };

  //   const onConnect = (connection) => {
  //     console.log("New connection:", connection);
  //     emit("trigger-event", {
  //       name: "connect",
  //       event: { connection },
  //     });
  //   };

  //   onMounted(() => {
  //     setTimeout(() => {
  //       mounted.value = true;
  //     }, 100);
  //   });

  //   return {
  //     flowNodes,
  //     flowEdges,
  //     mounted,
  //     props,
  //     onNodeClick,
  //     onEdgeClick,
  //     onConnect,
  //   };
  // },
};
</script>

<style>
.vue-flow__node {
  border-radius: 3px;
  color: #222;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  white-space: pre-wrap;
  background: white;
  border: 1px solid #ddd;
}

.vueflow {
  width: 100%;
  height: 80vh;
}

.vue-flow__node-input {
  background: #f0f9ff;
  border-color: #0041d0;
}

.vue-flow__node-output {
  background: #fff0f6;
  border-color: #ff0072;
}

.vue-flow__node-default {
  background: #ffffff;
  border-color: #2563eb;
}

.vue-flow__edge path {
  stroke-width: 2;
}

.vue-flow__edge-path {
  stroke: #2563eb;
}

.vue-flow__edge.animated path {
  stroke-dasharray: 5;
  animation: dashdraw 0.5s linear infinite;
}

.vue-flow__minimap {
  background-color: #f8fafc;
}

.ww-flow-wrapper {
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  position: relative;
  width: 100%;
  height: 80vh;
}

.vue-flow {
  width: 100%;
  height: 80vh;
}

.flow-empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
}

@keyframes dashdraw {
  from {
    stroke-dashoffset: 10;
  }
}
</style>
