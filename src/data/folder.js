// export const data = {
//   name: "root",
//   type: "folder",
//   children: [
//     {
//       name: "folder1",
//       type: "folder",
//       children: [
//         {
//           name: "folder1-1",
//           type: "folder",
//           children: [
//             {
//               name: "folder1-1-1",
//               type: "folder",
//               children: [],
//             },
//             {
//               name: "folder1-1-2",
//               type: "folder",
//               children: [],
//             },
//           ],
//         },
//         {
//           name: "folder1-2",
//           type: "folder",
//           children: [],
//         },
//       ],
//     },
//     {
//       name: "folder2",
//       type: "folder",
//       children: [
//         {
//           name: "folder2-1",
//           type: "folder",
//           children: [],
//         },
//         {
//           name: "folder2-2",
//           type: "folder",
//           children: [],
//         },
//       ],
//     },
//   ],
// };

export const data = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "assets",
          type: "file",
          children: [],
        },
        {
          name: "hoc",
          type: "folder",
          children: [
            {
              name: "useFecth",
              type: "file",
              children: [],
            },
          ],
        },
        {
          name: "pages",
          type: "folder",
          children: [
            {
              name: "customHooks",
              type: "folder",
              children: [
                {
                  name: "debounced",
                  type: "file",
                  children: [],
                },
              ],
            },
            {
              name: "hoc",
              type: "folder",
              children: [{ name: "clickCounter", type: "file", children: [] }],
            },
          ],
        },
      ],
    },
    {
      name: "app.js",
      type: "file",
      children: [],
    },
  ],
};
