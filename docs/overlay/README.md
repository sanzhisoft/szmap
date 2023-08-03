---
sidebar: auto
---

# 覆盖元素 🌎

三维场景重要组成部分， 用数字化表示三场景中的一个实体和记录其实时状态

## Overlay

> 覆盖物基类

:::warning
该类无法实例化
:::

### properties

- `{String} overlayId`：唯一标识 **_`readonly`_**
- `{String} id`：业务唯一标识
- `{Boolean} show`：是否显示
- `{Object} attr`：业务属性
- `{Array} contextMenu`：设置右击菜单，菜单的回调函数参数为 viewer,overlay
- `{String} state`：覆盖物状态 **_`readonly`_**
- `{String} type`：覆盖物类型 **_`readonly`_**
- `{Boolean} allowDrillPicking`：是否可以穿透选择，默认为 false，如果为 true 时，覆盖物为穿透选择其后面的所有覆盖物，并触发其后面的所有覆盖物的鼠标事件

### methods

- **_addTo(layer)_**

  添加到图层

  - 参数
    - `{Layer} layer` ：图层
  - 返回值 `this`

- **_remove()_**

  删除

  - 返回值 `this`

- **_setLabel(text, textStyle)_**

  设置标签

  - 参数
    - `{String} text`：文本
    - `{String} textStyle`：文本样式，详情参考：[SzMap.Label](#szmap-label)
  - 返回值 `this`

:::warning
该函数仅对下列覆盖物有效：Point、Circle、Polygon、Billboard、Ellipse、Rectangle
:::

- **_on(type, callback, context)_**

  事件订阅

  - 参数
    - `{Object} type` ：订阅类型
    - `{Function} callback` ：订阅回调
    - `{Object} context` ：上下文
  - 返回值 `this`

- **_off(type, callback, context)_**

  取消事件订阅

  - 参数
    - `{Object} type` ：订阅类型
    - `{Function} callback` ：订阅回调
    - `{Object} context` ：上下文
  - 返回值 `this`

- **_fire(type,params)_**

  触发事件

  - 参数
    - `{Object} type` ：订阅类型
    - `{Object} params` ：参数
  - 返回值 `this`

### static methods

- **_registerType(type)_**

  注册覆盖物类型

  - 参数
    - `{String} type`：覆盖物类型

- **_getOverlayType(type)_**

  获取覆盖物类型

  - 参数
    - `{String} type`：覆盖物类型
  - 返回值 `string`

## SzMap.Point

> 点位要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let point = new SzMap.Point(position)
point.setStyle({
  pixelSize: 10,
})
```

### creation

- **_constructor(position)_**

  构造函数

  - 参数
    - `{Position|String|Array|Object} position`：坐标
  - 返回值 `point`

### properties

- `{Position|String|Array|Object} position`：坐标

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[PointGraphics](http://szmap.sanzhisoft.com/cesium-docs/PointGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "pixelSize": 1, //像素大小
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "color": SzMap.Color.WHITE, //颜色
  "outlineColor": SzMap.Color.WHITE, //边框颜色
  "outlineWidth": 0, //边框大小，
  "scaleByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置比例
  "translucencyByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置透明度
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "disableDepthTestDistance": 0 // 深度检测距离，用于防止剪切地形，设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。
}
```

- **_fromEntity(entity)_**

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
  - 返回值 `point`

## SzMap.Polyline

> 线要素，继承于[Overlay](#overlay)

### example

```js
let polyline = new SzMap.Polyline('120,20;120,30')
polyline.setStyle({
  width: 10,
})
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `polyline`

### properties

- `{String|Array<Position|Number|String|Object>} positions`：坐标串
- `{SzMap.Position} center`：中心点 **_`readonly`_**
- `{Number} distance`：距离,单位：米 **_`readonly`_**

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[PolylineGraphics](http://szmap.sanzhisoft.com/cesium-docs/PolylineGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "width": 1, //线宽
  "material": SzMap.Color.WHITE, //材质
  "clampToGround": false, //是否贴地
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "classificationType": 2, //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
  "zIndex": 0 //层级
}
```

- **_fromEntity(entity)_**

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
  - 返回值 `polyline`

## SzMap.Polygon

> 面要素，继承于[Overlay](#overlay)

### example

```js
let polygon = new SzMap.Polygon('120,20;120,30;122,30')
polygon.setStyle({
  height: 10,
})
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object} positions`：坐标串
  - 返回值 `polygon`

### properties

- `{String|Array<Position|Number|String|Object>} positions`：坐标串
- `{String|Array<Position|Number|String|Object>} holes`：洞坐标串
- `{SzMap.Position} center`：中心点 **_`readonly`_**
- `{Number} area`：距离，单位：平方米 **_`readonly`_**

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[PolygonGraphics](http://szmap.sanzhisoft.com/cesium-docs/PolygonGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "height": 1, //高度
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "extrudedHeight": 0, //拉升高度
  "stRotation": 0, //旋转角度
  "fill": true, //是否用提供的材料填充多边形。
  "material": SzMap.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": SzMap.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "closeTop": true, //顶面是否闭合
  "closeBottom": true, //底面是否闭合
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "classificationType": 2, //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
  "zIndex": 0 //层级
}
```

- **_fromEntity(entity)_**

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
  - 返回值 `polygon`

## SzMap.Billboard

> 图标要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let billboard = new SzMap.Billboard(position, '***/**.png')
billboard.size = [20, 20]
```

### creation

- **_constructor(position,icon)_**

  构造函数

  - 参数
    - `{Position|String|Array|Object} position`：坐标
    - `{String} icon`：图标地址
  - 返回值 `billboard`

### properties

- `{Position|String|Array|Object} position`：坐标
- `{String} icon`：图标地址
- `{Array<Number>} size`：图标大小

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[BillboardGraphics](http://szmap.sanzhisoft.com/cesium-docs/BillboardGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "scale": 1, //比例
  "pixelOffset": { "x": 0, "y": 0 }, //偏移像素
  "rotation": 0, //旋转角度
  "translucencyByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置透明度
  "scaleByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置比例
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "disableDepthTestDistance": 0 // 深度检测距离，用于防止剪切地形，设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。
}
```

- **_fromEntity(entity)_**

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
  - 返回值 `billbard`

## SzMap.Label

> 标签要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let Label = new SzMap.Label(position, 'test')
```

### creation

- **_constructor(position,text)_**

  构造函数

  - 参数
    - `{Position|String|Array|Object} position`：坐标
    - `{String} text`：文本
  - 返回值 `label`

### properties

- `{Position} position`：坐标
- `{String} text`：文本

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[LabelGraphics](http://szmap.sanzhisoft.com/cesium-docs/LabelGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "font": "30px sans-serif", // CSS 字体设置
  "scale": 1, //比例
  "pixelOffset": { "x": 0, "y": 0 }, //偏移像素
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "showBackground": false, //是否显示背景
  "backgroundColor": SzMap.Color.BLACK, //背景颜色
  "backgroundPadding": { "x": 0, "y": 0 }, //背景间隙
  "fillColor": SzMap.Color.BLACK, //文字颜色
  "outlineColor": SzMap.Color.WHITE, //边框颜色
  "outlineWidth": 0, //边框大小，
  "scaleByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置比例
  "translucencyByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置透明度
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "disableDepthTestDistance": 0 // 深度检测距离，用于防止剪切地形，设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。
}
```

- **_fromEntity(entity,text)_**

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
    - `{String} text`：文本
  - 返回值 `label`

## SzMap.Circle

> 圆要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let circle = new SzMap.Circle(position, 200)
```

### creation

- **_constructor(center, radius)_**

  构造函数

  - 参数
    - `{Position|String|Array|Object} center`：圆心
    - `{String} radius`：半径
  - 返回值 `billboard`

### properties

- `{Position} center`：圆心
- `{String} radius`：半径

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[EllipseGraphics](http://szmap.sanzhisoft.com/cesium-docs/EllipseGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "height": 1, //高度
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "extrudedHeight": 0, //拉升高度
  "rotation": 0, //顺时针旋转角度
  "stRotation": 0, //逆时针旋转角度
  "fill": true, //是否用提供的材料填充多边形。
  "material": SzMap.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": SzMap.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "classificationType": 2, //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
  "zIndex": 0 //层级
}
```

## SzMap.Rect

> 矩形要素，继承于[Overlay](#overlay)

### example

```js
let rectangle = new SzMap.Rect('-90.0,32.0;-94.0,36.0;')
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值 `rectangle`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[RectangleGraphics](http://szmap.sanzhisoft.com/cesium-docs/RectangleGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "height": 1, //高度
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "extrudedHeight": 0, //拉升高度
  "rotation": 0, //顺时针旋转角度
  "stRotation": 0, //逆时针旋转角度
  "fill": true, //是否用提供的材料填充多边形。
  "material": SzMap.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": SzMap.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "classificationType": 2, //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
  "zIndex": 0 //层级
}
```

## SzMap.Wall

> 墙体要素，继承于[Overlay](#overlay)

### example

```js
let wall = new SzMap.Wall('-90.0,32.0,1000;-94.0,36.0,1000;')
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值 `wall`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[WallGraphics](http://szmap.sanzhisoft.com/cesium-docs/WallGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "fill": true, //是否用提供的材料填充多边形。
  "material": SzMap.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": SzMap.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "classificationType": 2 //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
}
```

- **_fromEntity(entity)_**

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
  - 返回值 `wall`

## SzMap.Model

> 模型要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let model = new SzMap.Model(position, '**/**.glb')
```

### creation

- **_constructor(position, modelUrl)_**

  构造函数

  - 参数
    - ``{Position|String|Array|Object} position`：坐标
    - `{String} modelUrl`：模型地址
  - 返回值 `model`

### properties

- `{Position} position`：坐标
- `{String} modelUrl`：模型地址

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[ModelGraphics](http://szmap.sanzhisoft.com/cesium-docs/ModelGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "scale": 1, //比例
  "minimumPixelSize": 0, //指定模型的最小像素大小，而不考虑缩放
  "maximumScale": 0, //指定模型的最大比例
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "silhouetteColor": SzMap.Color.RED, //轮廓颜色
  "silhouetteSize": 0, //轮廓宽度
  "lightColor": SzMap.Color.RED, //模型着色时指定灯光颜色
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

- **_fromEntity(entity,modelUrl)_**

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
    - `{String} modelUrl`：模型地址
  - 返回值 `model`

## SzMap.Tileset

> 3Dtiles 模型要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let tileset = new SzMap.Tileset('**/tileset.json')
tileset.setPosition(position)
```

### creation

- **_constructor(url,[options])_**

  构造函数

  - 参数
    - `{String} url`：模型地址
    - `{Object} options`：参数设置，详情参考：[Tileset](http://szmap.sanzhisoft.com/cesium-docs/Cesium3DTileset.html)
  - 返回值 `tileset`

### properties

- `{Promise} readyPromise`：加载完成后的异步函数 **_`readonly`_**

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[TileStyle](https://github.com/CesiumGS/3d-tiles/tree/master/specification/Styling)
  - 返回值 `this`

  ```js
  let style = new SzMap.TilesetStyle({
    color: {
      conditions: [
        ['${Height} >= 100', 'color("purple", 0.5)'], //Height 为模型设置的属性
        ['${Height} >= 50', 'color("red")'],
        ['true', 'color("blue")'],
      ],
    },
    show: '${Height} > 0',
  })
  ```

- **_setPosition(position)_**

  设置位置

  - 参数
    - `{Position|String|Array|Object} position`：位置
  - 返回值 `this`

- **_setHeadingPitchRoll(heading, pitch, roll)_**

  设置方位角

  - 参数
    - `{Number} heading`：偏航角度，可能其他框架作 yaw，表示绕 Z 轴旋转。默认：0
    - `{Number} pitch`：俯仰角度，表示绕 Y 轴旋转。默认：0
    - `{Number} roll`：翻转角度，表示绕 X 轴旋转。默认：0
  - 返回值 `this`

- **_setHeight(height,isAbsolute)_**

  设置高度

  - 参数
    - `{Number} height`：高度
    - `{Boolean} isAbsolute`：是否为绝对高度，如果为 true，将不根据模型中心高度计算
  - 返回值 `this`

- **_setScale(scale)_**

  设置比例

  - 参数
    - `{Number} scale`：比例
  - 返回值 `this`

- **_setCustomShader(customShader)_**

  设置自定义片元着色器

  - 参数
    - `{String} customShader`：片元着色器
  - 返回值 `this`

- **_setProperties(properties)_**

  根据现有的属性添加属性

  - 参数
    - `{Array<Object>} properties`: 属性
  - 返回值 `this`

```json
//属性参数
{
  "key": "name", //已有属性名称
  "keyValue": "1", //已有属性值
  "propertyName": "highlight", //新增属性名称
  "propertyValue": true //新增属性值
}
```

## SzMap.DivIcon

> DivIcon 要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let divIcon = new SzMap.DivIcon(position, '<div></div>')
```

### creation

- **_constructor(position, content)_**

  构造函数

  - 参数
    - `{Position|String|Array|Object} position`：坐标
    - `{String|Element} content`：内容
  - 返回值 `divIcon`

### properties

- `{Position|String|Array} position`：坐标
- `{String|Element} content`：内容 **_`writeonly`_**

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "className": "test", //样式名
  "scaleByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置比例
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

- **_fromEntity(entity,content)_**

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
    - `{String|Element} content`：内容
  - 返回值 `divIcon`

## SzMap.Box

> 盒要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let box = new SzMap.Box(position, 20, 30, 40)
```

### creation

- **_constructor(position, length, width, height)_**

  构造函数

  - 参数
    - `{Position|String|Array|Object} position`：坐标
    - `{Number} length`：长度
    - `{Number} width`：宽度
    - `{Number} height`：高度
  - 返回值 `box`

### properties

- `{Position} position`：坐标
- `{Number} length`：长度
- `{Number} width`：宽度
- `{Number} height`：高度

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[BoxGraphics](http://szmap.sanzhisoft.com/cesium-docs/BoxGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "fill": true, //是否用提供的材料填充多边形。
  "material": SzMap.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": SzMap.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

## SzMap.Corridor

> 走廊要素，继承于[Overlay](#overlay)

### example

```js
let corridor = new SzMap.Corridor('120,20;120,30')
corridor.setStyle({
  width: 10,
})
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `corridor`

### properties

- `{Array<Position>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[CorridorGraphics](http://szmap.sanzhisoft.com/cesium-docs/CorridorGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "width": 1, //线宽
  "height": 0, //高度
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "cornerType": 0, //转角类别，0：圆角、1：直角、2：斜角
  "fill": true, //是否用提供的材料填充多边形。
  "material": SzMap.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": SzMap.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "classificationType": 2, //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
  "zIndex": 0 //层级
}
```

- **_fromEntity(entity)_**

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
  - 返回值 `corridor`

## SzMap.Cylinder

> 圆柱要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let cylinder = new SzMap.Cylinder(position, 20, 30, 40)
```

### creation

- **_constructor(position, length, topRadius, bottomRadius)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} position`：坐标
    - `{Number} length`：长度
    - `{Number} topRadius`：上半径
    - `{Number} bottomRadius`：下半径
  - 返回值 `cylinder`

### properties

- `{Position} position`：坐标
- `{Number} length`：长度
- `{Number} topRadius`：上半径
- `{Number} bottomRadius`：下半径

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[CylinderGraphics](http://szmap.sanzhisoft.com/cesium-docs/CylinderGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "fill": true, //是否用提供的材料填充多边形。
  "material": SzMap.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": SzMap.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

## SzMap.Ellipse

> 椭圆要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let ellipse = new SzMap.Ellipse(position, 20, 30)
```

### creation

- **_constructor(position, semiMajorAxis, semiMinorAxis)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} position`：坐标
    - `{Number} semiMajorAxis`：长半轴
    - `{Number} semiMinorAxis`：短半轴
  - 返回值 `ellipse`

### properties

- `{Position} position`：坐标
- `{Number} semiMajorAxis`：长半轴
- `{Number} semiMinorAxis`：短半轴

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[EllipseGraphics](http://szmap.sanzhisoft.com/cesium-docs/EllipseGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "height": 1, //高度
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "extrudedHeight": 0, //拉升高度
  "rotation": 0, //顺时针旋转角度
  "stRotation": 0, //逆时针旋转角度
  "fill": true, //是否用提供的材料填充多边形。
  "material": SzMap.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": SzMap.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "classificationType": 2, //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
  "zIndex": 0 //层级
}
```

## SzMap.Ellipsoid

> 球体要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let ellipsoid = new SzMap.Ellipsoid(position, { x: 30, y: 30, z: 30 })
```

### creation

- **_constructor(position, radius)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} position`：坐标
    - `{Object} radius`：半径，格式是：{x: 30, y: 30, z: 30}
  - 返回值 `ellipsoid`

### properties

- `{Position} position`：坐标
- `{Object} radius`：半径，格式是：{x: 30, y: 30, z: 30}

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[EllipsoidGraphics](http://szmap.sanzhisoft.com/cesium-docs/EllipsoidGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "fill": true, //是否用提供的材料填充多边形。
  "material": SzMap.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": SzMap.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

## SzMap.Plane

> 平面要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let plane = new SzMap.Plane(position, 20, 30, { normal: 'x' })
```

### creation

- **_constructor(position, width, height, direction)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} position`：坐标
    - `{Number} width`：宽度
    - `{Number} height`：高度
    - `{Object} plane`：面板格式
  - 返回值 `plane`

```json
// 面板参数(可选)
{
  "normal": "x", // 法线,x,y,z其中一个
  "distance": 0 // 距离
}
```

### properties

- `{Position} position`：坐标
- `{Number} width`：宽度
- `{Number} height`：高度
- `{Number} distance`：距离

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[PlaneGraphics](http://szmap.sanzhisoft.com/cesium-docs/PlaneGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "fill": true, //是否用提供的材料填充多边形。
  "material": SzMap.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": SzMap.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

## SzMap.PolylineVolume

> 管道要素，继承于[Overlay](#overlay)

### example

```js
function computeCircle(radius) {
  var positions = []
  for (var i = 0; i < 360; i++) {
    var radians = SzMap.Math.toRadians(i)
    positions.push({
      x: radius * Math.cos(radians),
      y: radius * Math.sin(radians),
    })
  }
  return positions
}

let polylineVolume = new SzMap.PolylineVolume(
  '-90.0,32.0,0.0;-90.0,36.0,100000.0;-94.0,36.0,0.0;',
  computeCircle(60000)
)
```

### creation

- **_constructor(positions, shape)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
    - `{Array} shape`：形状
  - 返回值 `polylineVolume`

### properties

- `{Array<Position>} positions`：坐标串
- `{Array} shape`：形状

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[PolylineVolumeGraphics](http://szmap.sanzhisoft.com/cesium-docs/PolylineVolumeGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "cornerType": 0, //转角类别，0：圆角、1：直角、2：斜角
  "fill": true, //是否用提供的材料填充多边形。
  "material": SzMap.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": SzMap.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

- **_fromEntity(entity)_**

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
  - 返回值 `polylineVolume`

## SzMap.DynamicBillboard

> 动态图标，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let billboard = new SzMap.DynamicBillboard(position, '***/**.png')
billboard.size = [20, 20]
```

### creation

- **_constructor(position,icon)_**

  构造函数

  - 参数
    - `{Position|String|Array|Object} position`：坐标
    - `{String} icon`：图标地址
  - 返回值 `billboard`

### properties

- `{Position} position`：坐标 **_`readonly`_**
- `{String} icon`：图标地址
- `{Array<Number>} size`：图标大小

### methods

- **_addPosition(position,interval)_**

  添加点位

  - 参数
    - `{Position|Array|String|Object} position`：点位
    - `{Number} interval`：间隔，单位：秒
  - 返回值 `this`

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[BillboardGraphics](http://szmap.sanzhisoft.com/cesium-docs/BillboardGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "scale": 1, //比例
  "pixelOffset": { "x": 0, "y": 0 }, //偏移像素
  "rotation": 0, //旋转角度
  "translucencyByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置透明度
  "scaleByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置比例
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "disableDepthTestDistance": 0 // 深度检测距离，用于防止剪切地形，设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。
}
```

## SzMap.DynamicModel

> 动态模型要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let model = new SzMap.DynamicModel(position, '**/**.glb')
```

### creation

- **_constructor(position, modelUrl)_**

  构造函数

  - 参数
    - `{Position|String|Array|Object} position`：坐标
    - `{String} modelUrl`：模型地址
  - 返回值 `model`

### properties

- `{Position} position`：坐标 **_`readonly`_**
- `{String} modelUrl`：模型地址

### methods

- **_addPosition(position,interval)_**

  添加点位

  - 参数
    - `{Position|Array|String|Object} position`：点位
    - `{Number} interval`：间隔，单位：秒
  - 返回值 `this`

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[ModelGraphics](http://szmap.sanzhisoft.com/cesium-docs/ModelGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "scale": 1, //比例
  "minimumPixelSize": 0, //指定模型的最小像素大小，而不考虑缩放
  "maximumScale": 0, //指定模型的最大比例
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "silhouetteColor": SzMap.Color.RED, //轮廓颜色
  "silhouetteSize": 0, //轮廓宽度
  "lightColor": SzMap.Color.RED, //模型着色时指定灯光颜色
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

## SzMap.CustomBillboard

> 自定义图标，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let billboard = new SzMap.CustomBillboard(position, '***/**.png')
billboard.size = [20, 20]
```

### creation

- **_constructor(position,icon)_**

  构造函数

  - 参数
    - `{Position|String|Array|Object} position`：坐标
    - `{String} icon`：图标地址
  - 返回值 `billboard`

### properties

- `{Position} position`：坐标
- `{String} icon`：图标地址
- `{Array<Number>} size`：图标大小

### methods

- **_setVLine(style)_**

  设置垂直线

  - 参数
    - `{Object} style`：样式，详情参考：[PolylineGraphics](http://szmap.sanzhisoft.com/cesium-docs/PolylineGraphics.html)
  - 返回值 `this`

- **_setBottomCircle(radius,style,rotateAmount)_**

  设置底圆

  - 参数
    - `{Number} radius`：半径
    - `{Object} style`：样式，详情参考：[EllipseGraphics](http://szmap.sanzhisoft.com/cesium-docs/EllipseGraphics.html)
    - `{Number} rotateAmount`：旋转量
  - 返回值 `this`

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[BillboardGraphics](http://szmap.sanzhisoft.com/cesium-docs/BillboardGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "scale": 1, //比例
  "pixelOffset": { "x": 0, "y": 0 }, //偏移像素
  "rotation": 0, //旋转角度
  "translucencyByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置透明度
  "scaleByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置比例
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "disableDepthTestDistance": 0 // 深度检测距离，用于防止剪切地形，设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。
}
```

## SzMap.CustomLabel

> 自定义文本，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let label = new SzMap.CustomLabel(position, 'test')
```

### creation

- **_constructor(position,text)_**

  构造函数

  - 参数
    - `{Position|String|Array|Object} position`：坐标
    - `{String} text`：文本
  - 返回值 `label`

### properties

- `{Position} position`：坐标
- `{String} text`：文本

### methods

- **_setVLine(style)_**

  设置垂直线

  - 参数
    - `{Object} style`：样式，详情参考：[PolylineGraphics](http://szmap.sanzhisoft.com/cesium-docs/PolylineGraphics.html)
  - 返回值 `this`

- **_setBottomCircle(radius,style,rotateAmount)_**

  设置底圆

  - 参数
    - `{Number} radius`：半径
    - `{Object} style`：样式，详情参考：[EllipseGraphics](http://szmap.sanzhisoft.com/cesium-docs/EllipseGraphics.html)
    - `{Number} rotateAmount`：旋转量
  - 返回值 `this`

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[LabelGraphics](http://szmap.sanzhisoft.com/cesium-docs/LabelGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "scale": 1, //比例
  "pixelOffset": { "x": 0, "y": 0 }, //偏移像素
  "rotation": 0, //旋转角度
  "translucencyByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置透明度
  "scaleByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置比例
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "disableDepthTestDistance": 0 // 深度检测距离，用于防止剪切地形，设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。
}
```

## SzMap.AttackArrow

> 攻击箭头要素，继承于[Overlay](#overlay)

### example

```js
let attackArrow = new SzMap.AttackArrow('-90.0,32.0;-94.0,36.0;-94.0,38.0')
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `attackArrow`

### properties

- `{Array<Position>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](#szmap-polygon)
  - 返回值 `this`

## SzMap.DoubleArrow

> 双箭头要素，继承于[Overlay](#overlay)

### example

```js
let doubleArrow = new SzMap.DoubleArrow('-90.0,32.0;-94.0,36.0;-94.0,38.0')
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `doubleArrow`

### properties

- `{Array<Position>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](#szmap-polygon)
  - 返回值 `this`

## SzMap.FineArrow

> 直箭头要素，继承于[Overlay](#overlay)

### example

```js
let fineArrow = new SzMap.FineArrow('-90.0,32.0;-94.0,36.0')
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `fineArrow`

### properties

- `{Array<Position>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](#szmap-polygon)
  - 返回值 `this`

## SzMap.GatheringPlace

> 聚集地要素，继承于[Overlay](#overlay)

### example

```js
let gatheringPlace = new SzMap.GatheringPlace('-90.0,32.0;-94.0,36.0')
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `gatheringPlace`

### properties

- `{Array<Position>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](#szmap-polygon)
  - 返回值 `this`

## SzMap.TailedAttackArrow

> 聚集地，继承于[Overlay](#overlay)

### example

```js
let tailedAttackArrow = new SzMap.TailedAttackArrow('-90.0,32.0;-94.0,36.0')
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `tailedAttackArrow`

### properties

- `{Array<Position>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](#szmap-polygon)
  - 返回值 `this`

## SzMap.BillboardPrimitive

> 图标图元，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let billboard = new SzMap.BillboardPrimitive(position, '***/**.png')
billboard.size = [20, 20]
```

### creation

- **_constructor(position,icon)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} position`：坐标
    - `{String} icon`：图标地址
  - 返回值 `billboard`

### properties

- `{Position} position`：坐标
- `{String} icon`：图标地址
- `{Array<Number>} size`：图标大小

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Billboard](http://szmap.sanzhisoft.com/cesium-docs/Billboard.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "scale": 1, //比例
  "pixelOffset": { "x": 0, "y": 0 }, //偏移像素
  "rotation": 0, //旋转角度
  "translucencyByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置透明度
  "scaleByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置比例
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "disableDepthTestDistance": 0 // 深度检测距离，用于防止剪切地形，设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。
}
```

## SzMap.BounceBillboardPrimitive

> 跳动图标图元，继承于[BillboardPrimitive](#szmap-billboardprimitive)

### example

```js
let position = new SzMap.Position(120, 20)
let billboard = new SzMap.BounceBillboardPrimitive(position, '***/**.png')
billboard.size = [20, 20]
```

### creation

- **_constructor(position,icon)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} position`：坐标
    - `{String} icon`：图标地址
  - 返回值 `billboard`

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Billboard](http://szmap.sanzhisoft.com/cesium-docs/Billboard.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "maxOffsetY": 10, //垂直方向最大平移量
  "offsetAmount": 0.1 //垂直方向每帧平移量
  // 其他样式参考 BillboardPrimitive 样式
}
```

## SzMap.DiffuseWallPrimitive

> 扩散墙图元，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let wall = new SzMap.DiffuseWallPrimitive(position, 2000, 1000)
```

### creation

- **_constructor(center, radius, height)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} center`：圆心
    - `{Number} radius`：半径
    - `{Number} height`：高度
  - 返回值 `wall`

### properties

- `{Position|Number|String|Object} center`：圆心
- `{Number} radius`：半径
- `{Number} height`：高度

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "minRadius": 10, // 动画最小半径
  "minHeight": 30, // 动画最小高度
  "color": SzMap.Color.RED, // 墙体颜色
  "slices": 128, //边数
  "speed": 10 //速度
}
```

## SzMap.ElecEllipsoidPrimitive

> 电弧球图元，继承于[Overlay](#overlay)

### example

```js
let elecEllipsoid = new SzMap.ElecEllipsoidPrimitive('120,20',{x:2000,y:2000:z:2000})
```

### creation

- **_constructor(center,radius)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} center`：球心
    - `{Object} radius`:球半径
  - 返回值 `elecEllipsoid`

### properties

- `{Position|Number|String|Object} center`：球心
- `{Object} radius`:球半径

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "speed": 5, //速度
  "color": SzMap.Color.WHITE //颜色
}
```

## SzMap.FlowLinePrimitive

> 流动线图元，继承于[Overlay](#overlay)

### example

```js
let flowLinePrimitive = new SzMap.FlowLinePrimitive('120,20;120,30;122,30')
```

### creation

- **_constructor(positions,[asynchronous])_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `flowLine`

### properties

- `{String|Array<Position|Number|String|Object>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "speed": 5, //速度
  "color": SzMap.Color.WHITE, //颜色
  "percent": 0.3, // 比例
  "gradient": 0.1 // 透明程度
}
```

## SzMap.LabelPrimitive

> 标签图元，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let Label = new SzMap.LabelPrimitive(position, 'test')
```

### creation

- **_constructor(position,text)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} position`：坐标
    - `{String} text`：文本
  - 返回值 `label`

### properties

- `{Position|Number|String|Object} position`：坐标
- `{String} text`：文本

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Label](http://szmap.sanzhisoft.com/cesium-docs/Label.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "font": "30px sans-serif", // CSS 字体设置
  "scale": 1, //比例
  "pixelOffset": { "x": 0, "y": 0 }, //偏移像素
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "showBackground": false, //是否显示背景
  "backgroundColor": SzMap.Color.BLACK, //背景颜色
  "backgroundPadding": { "x": 0, "y": 0 }, //背景间隙
  "fillColor": SzMap.Color.BLACK, //文字颜色
  "outlineColor": SzMap.Color.WHITE, //边框颜色
  "outlineWidth": 0, //边框大小，
  "scaleByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置比例
  "translucencyByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置透明度
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "disableDepthTestDistance": 0 // 深度检测距离，用于防止剪切地形，设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。
}
```

## SzMap.LightCylinderPrimitive

> 光柱要素，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let cylinder = new SzMap.LightCylinderPrimitive(position, 1000, 1, 100)
```

### creation

- **_constructor(position, length, topRadius, bottomRadius)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} position`：坐标
    - `{Number} length`：长度
    - `{Number} topRadius`：上半径
    - `{Number} bottomRadius`：下半径
  - 返回值 `cylinder`

### properties

- `{Position} position`：坐标
- `{Number} length`：长度
- `{Number} topRadius`：上半径
- `{Number} bottomRadius`：下半径

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "color": SzMap.Color.BLACK //颜色
}
```

## SzMap.BounceLabelPrimitive

> 跳动文本图元，继承于[LabelPrimitive](#szmap-labelprimitive)

### example

```js
let position = new SzMap.Position(120, 20)
let label = new SzMap.BounceLabelPrimitive(position, 'test')
```

### creation

- **_constructor(position,text)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} position`：坐标
    - `{String} text`：文本
  - 返回值 `label`

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Label](http://szmap.sanzhisoft.com/cesium-docs/Label.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "maxOffsetY": 10, //垂直方向最大平移量
  "offsetAmount": 0.1 //垂直方向每帧平移量
  // 其他样式参考 LabelPrimitive 样式
}
```

## SzMap.ModelPrimitive

> 模型图元，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let model = new SzMap.ModelPrimitive(position, '**/**.glb')
```

### creation

- **_constructor(position, modelUrl)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} position`：坐标
    - `{String} modelUrl`：模型地址
  - 返回值 `model`

### properties

- `{Position|Number|String|Object} position`：坐标
- `{String} modelUrl`：模型地址
- `{Promise} readyPromise`：加载完成后的异步函数 **_`readonly`_**

### methods

- **_getMaterial(name)_**

  设置材质

  - 参数
    - `{String} name`：节点名称
  - 返回值 `modelMaterial`

- **_getMesh(name)_**

  获取三角网

  - 参数
    - `{String} name`：节点名称
  - 返回值 `modelMesh`

- **_getNode(name)_**

  获取节点

  - 参数
    - `{String} name`：节点名称
  - 返回值 `modelNode`

- **_getNodes()_**

  获取所有节点

  - 返回值 `array<ModelNode>`

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Model](http://szmap.sanzhisoft.com/cesium-docs/Model.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "scale": 1, //比例
  "minimumPixelSize": 0, //指定模型的最小像素大小，而不考虑缩放
  "maximumScale": 0, //指定模型的最大比例
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "silhouetteColor": SzMap.Color.RED, //轮廓颜色
  "silhouetteSize": 0, //轮廓宽度
  "lightColor": SzMap.Color.RED, //模型着色时指定灯光颜色
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

## SzMap.ModelCollectionPrimitive

> 模型结合图元，继承于[Overlay](#overlay)

### example

```js
let positions = '120,20;120,30;122,30'
let model = new SzMap.ModelCollectionPrimitive(positions, '**/**.glb')
```

### creation

- **_constructor(positions, modelUrl)_**

  构造函数

  - 参数
    - `{Array<Position|String|Object>} positions`：坐标串
    - `{String} modelUrl`：模型地址
  - 返回值 `model`

### properties

- `{Array<Position|String|Object>} positions`：坐标串
- `{String} modelUrl`：模型地址
- `{Array<Object>} attrs`：属性集合
- `{Promise} readyPromise`：加载完成后的异步函数 **_`readonly`_**

### methods

- **_getModelInstance(instanceId)_**

  获取模型实例

  - 参数
    - `{String} instanceId`：实例 ID，默认为实例的 index，可通过鼠标事件获取
  - 返回值 `modelInstance`

- **_getAttrByInstanceId(instanceId)_**

  获取属性

  - 参数
    - `{String} instanceId`：实例 ID，默认为实例的 index，可通过鼠标事件获取
  - 返回值 `Object`

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Model](http://szmap.sanzhisoft.com/cesium-docs/Model.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "scale": 1, //比例
  "minimumPixelSize": 0, //指定模型的最小像素大小，而不考虑缩放
  "maximumScale": 0, //指定模型的最大比例
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "silhouetteColor": SzMap.Color.RED, //轮廓颜色
  "silhouetteSize": 0, //轮廓宽度
  "lightColor": SzMap.Color.RED, //模型着色时指定灯光颜色
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

## SzMap.PointPrimitive

> 点位图元，继承于[Overlay](#overlay)

### example

```js
let position = new SzMap.Position(120, 20)
let point = new SzMap.PointPrimitive(position)
point.setStyle({
  pixelSize: 10,
})
```

### creation

- **_constructor(position)_**

  构造函数

  - 参数
    - `{Position|Number|String|Object} position`：坐标
  - 返回值 `point`

### properties

- `{Position|Number|String|Object} position`：坐标

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[PointGraphics](http://szmap.sanzhisoft.com/cesium-docs/PointGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "pixelSize": 1, //像素大小
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "color": SzMap.Color.WHITE, //颜色
  "outlineColor": SzMap.Color.WHITE, //边框颜色
  "outlineWidth": 0, //边框大小，
  "scaleByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置比例
  "translucencyByDistance": {
    "near": 0, //最近距离
    "nearValue": 0, //最近距离值
    "far": 1, //最远距离值
    "farValue": 0 //最远距离值
  }, //根据距离设置透明度
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "disableDepthTestDistance": 0 // 深度检测距离，用于防止剪切地形，设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。
}
```

## SzMap.PolylinePrimitive

> 线图元，继承于[Overlay](#overlay)

### example

```js
let polyline = new SzMap.PolylinePrimitive('120,20;120,30')
polyline.setStyle({
  width: 10,
})
```

### creation

- **_constructor(positions)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `polyline`

### properties

- `{String|Array<Position|Number|String|Object>} positions`：坐标串
- `{Position} center`：中心点 **_`readonly`_**
- `{Number} distance`：距离,单位：米 **_`readonly`_**

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polyline](http://szmap.sanzhisoft.com/cesium-docs/Polyline.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "width": 1, //线宽
  "material": SzMap.Color.WHITE, //材质
  "clampToGround": false, //是否贴地
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "classificationType": 2, //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
  "zIndex": 0 //层级
}
```

## SzMap.ScanCirclePrimitive

> 扫描圆图元，继承于[Overlay](#overlay)

### example

```js
let scanCirclePrimitive = new SzMap.ScanCirclePrimitive('120,20', 1000)
```

### creation

- **_constructor(position,radius)_**

  构造函数

  - 参数
    - `{String|Position|Array|Object} position`：圆心
    - `{Number} radius`：半径
  - 返回值 `scanCircle`

### properties

- `{String|Position|Array|Object} position`：圆心
- `{Number} radius`：半径

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "speed": 5, //速度
  "color": SzMap.Color.WHITE //颜色
}
```

## SzMap.TrailLinePrimitive

> 轨迹线图元，继承于[Overlay](#overlay)

### example

```js
let trailLinePrimitive = new SzMap.TrailLinePrimitive('120,20;120,30;122,30')
```

### creation

- **_constructor(positions,[asynchronous])_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
  - 返回值 `trailLine`

### properties

- `{String|Array<Position|Number|String|Object>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "speed": 5, //速度
  "color": SzMap.Color.WHITE //颜色
}
```

## SzMap.WaterPrimitive

> 水面图元，继承于[Overlay](#overlay)

### example

```js
let water = new SzMap.WaterPrimitive('120,20;120,30;122,30')
water.setStyle({
  baseWaterColor: SzMap.Color.AQUA.withAlpha(0.3),
  normalMap: 'examples/images/icon/waterNormalsSmall.jpg',
  frequency: 1000.0,
  animationSpeed: 0.01,
  amplitude: 10,
  specularIntensity: 10,
})
```

### creation

- **_constructor(positions,[holes])_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
    - `{Array<Position|Number|String|Object>} holes`：洞面坐标
  - 返回值 `water`

### properties

- `{String|Array<Position|Number|String|Object>} positions`：坐标串

### methods

- **_setStyle(style)_**

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[PolygonGraphics](http://szmap.sanzhisoft.com/cesium-docs/PolygonGraphics.html)
  - 返回值 `this`

```json
// 样式参数(可选)
{
  "height": 1, //高度
  "extrudedHeight": 0, //拉升高度
  "stRotation": 0, //旋转角度
  "outline": false, //是否显示边框
  "closeTop": true, //顶面是否闭合
  "closeBottom": true, //底面是否闭合
  "classificationType": 2, //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
  "baseWaterColor": SzMap.Color.WHITE, // 水体颜色
  "blendColor": SzMap.Color.WHITE, // 混合颜色
  "specularMap": "", // 镜面图
  "normalMap": "", // 法线图
  "frequency": 1000, //波纹数量
  "animationSpeed": 0.03, // 动画速度
  "amplitude": 10, //水波振幅
  "specularIntensity": 10 //镜面反射强度
}
```

## SzMap.VideoPrimitive

> 视频图元，继承于[Overlay](#overlay)

### example

```js
let videoEl = new document.getElementById('video')
let videoPrimitive = new SzMap.VideoPrimitive('120,20;120,30;122,30', videoEl)
```

### creation

- **_constructor(positions,video)_**

  构造函数

  - 参数
    - `{String|Array<Position|Number|String|Object>} positions`：坐标串
    - `{Element} video`：视频节点
  - 返回值 `videoPrimitive`

### properties

- `{String|Array<Position|Number|String|Object>} positions`：坐标串
- `{Element} video`：视频节点
