# Voxel Builder
**Version 3.4.1**

[Try Live!](https://nimadez.github.io/voxel-builder)

![screenshot](screenshot.jpg?raw=true "Screenshot")

3D voxel modeling application built using Babylon.js engine<br>
Optimized for maximum performance and minimum dependencies

## Features

***Project***
- New Project
- Save and Load Project (readable vox format)
- Import OBJ (merge and voxelize meshes)
- Export GLB (grid texture included)
- Quick Store and Restore (local storage)
- Memory Steps (auto-record 10 steps to undo/redo)
- Load HDRI (lighting and background)
- Create Grid and Plane
- Optimize Scene
- Debug Mode (toggle debug layer)

***Voxel Tools***
- Add (+symmetry)
- Remove (+symmetry)
- Transform (+symmetry)
- Hide Voxels
- Hide By Color
- Freeze Visibility (delete hidden voxels)
- Normalize Position

***Color Tools***
- Dynamic Color Palette (created on the fly)
- Paint Color (+symmetry)
- Pick Color
- Fill By Color

***Views***
- Fullscreen
- Fit Camera
- Auto Rotate
- Light Direction
- Cube Axis
- Symmetry Axis Plane
- Show FPS counter, Number of voxels/vertices
- High Quality Render *(not mobile friendly)*

***Supported Platforms***
- Electron (+keyboard shortcuts)
- Google Chrome (+keyboard shortcuts)
- Partially support Google Chrome on touch devices

***Keyboard Shortcuts***
| Key | Action |
| ----- | ----------- |
| **SPACE** | Toggle Menu |
| **W** | Add |
| **A** | Transform |
| **S** | Free Camera |
| **D** | Remove |
| **1** | Paint Color |
| **2** | Fill Color |
| **3** | Pick Color |
| **4** | Hide Voxels |
| **5** | Hide By Color |
| **F** | Toggle Fullscreen |
| **F5** | Reload Window |
| **CTRL+Z** | Undo (previous memory) |
| **CTRL+X** | Redo (next memory) |

## Changelog
```
v1: actual mesh instances -> performance failure
v2: hidden mesh instances, build the mesh by CSG boolean -> performance failure on events
v3: voxel is just a position and color, build the mesh by SPS particles -> highest performance

[3.3]
- update to Babylon.js 4.1
- ui improvements and re-arrangements
- lighting rework and simplified, optimized for desktop performance
- bug: remove prompt(), add numeric input fields in the Files menu
- bug: shadowGen.useBlurCloseExponentialShadowMap cause screen flashes in 4.0+, removed
- bug: fullscreen not working, fixed
[3.4]
- update to Babylon.js 4.2
- bug: local storage, getStorage() fixed
[3.4.1]
- visual enhancements
- cleanup voxelization code
- add debug mode
- add symmetry to Add/Remove/Transform/Paint
- add keyboard shortcuts
- add memory steps
[3.4.2]
coming soon...
```

## License
Code released under the [MIT license](https://github.com/nimadez/voxel-builder/blob/main/LICENSE).

## Credits
- [Babylon.js](https://www.babylonjs.com/)
- [Electron](https://github.com/electron)
- [Google Material Icons](https://github.com/google/material-design-icons)

###### Also available at [Babylon.js Demos](https://www.babylonjs.com/community/) and [Babylon.js Forum](https://forum.babylonjs.com/t/voxel-builder-application)
