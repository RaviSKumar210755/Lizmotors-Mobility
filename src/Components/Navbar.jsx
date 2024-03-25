import React, { useCallback, useState } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import "../App.css";
import HoverComponent from "./HoverComponent";
const initialNodes = [
  {
    id: "horizontal-1",
    sourcePosition: "right",
    type: "input",
    data: { label: "Start" },
    position: { x: 0, y: 250 },
  },
  {
    id: "horizontal-20",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Research" },
    position: { x: 200, y: 50 },
  },
  {
    id: "horizontal-21",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Planning" },
    position: { x: 200, y: 150 },
  },
  {
    id: "horizontal-210",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "PRD" },
    position: { x: 400, y: 125 },
  },
  {
    id: "horizontal-211",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Specs" },
    position: { x: 400, y: 175 },
  },
  {
    id: "horizontal-22",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Designing" },
    position: { x: 200, y: 250 },
  },
  {
    id: "horizontal-220",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Hardware" },
    position: { x: 400, y: 225 },
  },
  {
    id: "horizontal-221",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Software" },
    position: { x: 400, y: 275 },
  },
  {
    id: "horizontal-23",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Manufacturing" },
    position: { x: 200, y: 350 },
  },
  {
    id: "horizontal-230",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Material" },
    position: { x: 400, y: 325 },
  },
  {
    id: "horizontal-231",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Production" },
    position: { x: 400, y: 375 },
  },
  {
    id: "horizontal-24",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Sales/Marketing" },
    position: { x: 200, y: 450 },
  },
  {
    id: "horizontal-240",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Online" },
    position: { x: 400, y: 425 },
  },
  {
    id: "horizontal-241",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Dealearship" },
    position: { x: 400, y: 475 },
  },
  {
    id: "horizontal-200",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "External" },
    position: { x: 400, y: 25 },
  },
  {
    id: "horizontal-201",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Internal" },
    position: { x: 400, y: 75 },
  },
  {
    id: "horizontal-300",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "B2C" },
    position: { x: 600, y: 0 },
  },
  {
    id: "horizontal-301",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "B2C" },
    position: { x: 600, y: 50 },
  },
  {
    id: "horizontal-2000",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Online" },
    position: { x: 800, y: -75 },
  },
  {
    id: "horizontal-2001",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Interview" },
    position: { x: 800, y: -25 },
  },
  {
    id: "horizontal-2002",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Public Data" },
    position: { x: 800, y: 25 },
  },
  {
    id: "horizontal-2003",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Health" },
    position: { x: 800, y: 75 },
  },
  {
    id: "horizontal-6",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "End" },
    position: { x: 1000, y: 0 },
  },
];

const initialEdges = [
  {
    id: "horizontal-e1-20",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-20",
    animated: true,
  },
  {
    id: "horizontal-e1-21",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-21",
    animated: true,
  },
  {
    id: "horizontal-e1-210",
    source: "horizontal-21",
    type: "smoothstep",
    target: "horizontal-210",
    animated: true,
  },
  {
    id: "horizontal-e1-211",
    source: "horizontal-21",
    type: "smoothstep",
    target: "horizontal-211",
    animated: true,
  },
  {
    id: "horizontal-e1-22",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-22",
    animated: true,
  },
  {
    id: "horizontal-e1-220",
    source: "horizontal-22",
    type: "smoothstep",
    target: "horizontal-220",
    animated: true,
  },
  {
    id: "horizontal-e1-221",
    source: "horizontal-22",
    type: "smoothstep",
    target: "horizontal-221",
    animated: true,
  },
  {
    id: "horizontal-e1-23",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-23",
    animated: true,
  },
  {
    id: "horizontal-e1-230",
    source: "horizontal-23",
    type: "smoothstep",
    target: "horizontal-230",
    animated: true,
  },
  {
    id: "horizontal-e1-231",
    source: "horizontal-23",
    type: "smoothstep",
    target: "horizontal-231",
    animated: true,
  },
  {
    id: "horizontal-e1-24",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-24",
    animated: true,
  },
  {
    id: "horizontal-e1-240",
    source: "horizontal-24",
    type: "smoothstep",
    target: "horizontal-240",
    animated: true,
  },
  {
    id: "horizontal-e1-241",
    source: "horizontal-24",
    type: "smoothstep",
    target: "horizontal-241",
    animated: true,
  },
  {
    id: "horizontal-e1-200",
    source: "horizontal-20",
    type: "smoothstep",
    target: "horizontal-200",
    animated: true,
  },
  {
    id: "horizontal-e1-201",
    source: "horizontal-20",
    type: "smoothstep",
    target: "horizontal-201",
    animated: true,
  },
  {
    id: "horizontal-e1-2000",
    source: "horizontal-300",
    type: "smoothstep",
    target: "horizontal-2000",
    animated: true,
  },
  {
    id: "horizontal-e1-300",
    source: "horizontal-200",
    type: "smoothstep",
    target: "horizontal-300",
    animated: true,
  },
  {
    id: "horizontal-e1-301",
    source: "horizontal-200",
    type: "smoothstep",
    target: "horizontal-301",
    animated: true,
  },
  {
    id: "horizontal-e1-2001",
    source: "horizontal-300",
    type: "smoothstep",
    target: "horizontal-2001",
    animated: true,
  },
  {
    id: "horizontal-e1-2002",
    source: "horizontal-300",
    type: "smoothstep",
    target: "horizontal-2002",
    animated: true,
  },
  {
    id: "horizontal-e1-2003",
    source: "horizontal-300",
    type: "smoothstep",
    target: "horizontal-2003",
    animated: true,
  },
  {
    id: "horizontal-e1-20000",
    source: "horizontal-2000",
    type: "smoothstep",
    target: "horizontal-6",
    animated: true,
  },
  {
    id: "horizontal-e1-20001",
    source: "horizontal-2001",
    type: "smoothstep",
    target: "horizontal-6",
    animated: true,
  },
  {
    id: "horizontal-e1-20002",
    source: "horizontal-2002",
    type: "smoothstep",
    target: "horizontal-6",
    animated: true,
  },
  {
    id: "horizontal-e1-20003",
    source: "horizontal-2003",
    type: "smoothstep",
    target: "horizontal-6",
    animated: true,
  },
];

const HorizontalFlow = () => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [mouseIn, setMouseIn] = useState(null);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );
  const onNodeMouseEnter = (event, node) => {
    setMouseIn(node);
    console.log(node);
  };
  const onNodeMouseLeave = () => {
    setMouseIn(null);
  };
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodeMouseEnter={onNodeMouseEnter}
      onNodeMouseLeave={onNodeMouseLeave}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="bottom-left"
    >
      {mouseIn && <HoverComponent Data={mouseIn} />}
    </ReactFlow>
  );
};

export default HorizontalFlow;
