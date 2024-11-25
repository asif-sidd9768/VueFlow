const schema = {
  nodes: [
    {
      id: "1",
      type: "input",
      data: { label: "Input Node" },
      position: { x: 250, y: 0 },
    },
    {
      id: "2",
      data: { label: "Default Node" },
      position: { x: 100, y: 100 },
    },
    {
      id: "3",
      type: "output",
      data: { label: "Output Node" },
      position: { x: 400, y: 200 },
    },
  ],
  edges: [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true,
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      type: "smoothstep",
    },
  ],
};

export default {
  editor: {
    label: "Flow Chart",
    icon: "network-wired",
  },
  properties: {
    data: {
      label: {
        en: "Schema",
      },
      type: "Info",
      options: {
        text: { en: "Bind your data" },
      },
      bindable: "repeatable",
      defaultValue: schema,
      section: "settings",
      /* wwEditor:start */
      bindingValidation: {
        validations: [
          {
            type: "array",
          },
          {
            type: "object",
          },
        ],
        tooltip:
          "A collection or an array of data: \n\n`myCollection` or `[{}, {}, ...]`",
      },
      /* wwEditor:end */
    },
  },
};

const newSchema = {
  nodes: [
    {
      id: "1",
      type: "input",
      data: { label: "Start Node" },
      position: { x: 250, y: 0 },
    },
    {
      id: "2",
      data: { label: "Process Node" },
      position: { x: 250, y: 100 },
    },
    {
      id: "3",
      type: "output",
      data: { label: "End Node" },
      position: { x: 250, y: 200 },
    },
  ],
  edges: [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true,
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      type: "smoothstep",
    },
  ],
};
