# Voxel Builder
**Version 3.4.1**

![screenshot](screenshot.jpg?raw=true "Screenshot")

3D voxel modeling application built using Babylon.js engine<br>

## Features
- ***Performance***: optimized for maximum performance, minimum dependencies
- ***Files***: New, Load, Save, Import OBJ, Export GLB (grid texture included)
- ***Storage***: local storage to quickly save and load project
- ***Voxel Tools***: Add, Remove, Transform, Hide, Delete hidden (freeze), Normalize Position
- ***Color Tools***: Dynamic color palette, Paint color, Pick color, Fill by color, Hide by color
- ***Symmetry***: Support Add, Remove, Transform, and Paint Color tools
- ***HDRI***: Import HDR map for lighting and background
- ***Presets***: Create grid and random voxels
- ***Voxelization***: Import OBJ and voxelize mesh *(beta - not mobile friendly)*
- ***HQ Render***: High-quality render mode *(beta - not mobile friendly)*

***Supported Platforms***
- Electron
- Google Chrome
- Partially support Google Chrome on touch devices

## Changelog
```
v1: mesh instances -> performance failure
v2: hidden voxel instances, build mesh by CSG boolean -> performance failure on events, color issue
v3: voxel is just a position and color, build mesh by SPS particles -> highest performance

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
- add Debug Mode
- add Symmetry to Add/Remove/Transform/Paint
- add keyboard shortcuts for toolsets
```

## License
Code released under the [MIT license](https://github.com/nimadez/voxel-builder/blob/main/LICENSE).

## Credits
- [Babylon.js](https://www.babylonjs.com/)
- [Electron](https://github.com/electron)
- [Google Material Icons](https://github.com/google/material-design-icons)

##### Also available at [Babylon.js Demos](https://www.babylonjs.com/community/) and [Babylon.js Forum](https://forum.babylonjs.com/t/voxel-builder-application)
