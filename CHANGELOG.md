# Pamela Change Log

All notable changes to this project will be documented in this file. This
project adheres to [Semantic Versioning](http://semver.org/).

## 1.12.1 (18/3/2022)
Solves `Cell` rendering problems with underline. *Implements* very useful new methods on the `Matrix2D` collection class,
such as:
* `setCell` to set the value of a specific cell
* `countColumnsWhere` to count the columns where a given predicate is true
* `countRowsWhere`
* `anyRow` to check if at least one row satisfies a predicate
* `anyColumn`
* `slice` to create a copy of this matrix
* `hasRowAtIndex` to check if a number is a valid index
* `removeRow` to remove a row
* `removeColumn` to remove a column


## 1.11.1 (17/3/2022)

Implements *TableBuilder* methods to handle directly JSON strings. Now you can:

* Create a table starting from the JSON (`TableBuilder.fromJSON()`)
* Build a table to JSON (`builder.buildJSON()`)

IMPORTANT NOTE: The structure of the JSON string is the same of the `Table`
class. Normally, you can use a similar snippet to create and store a table to
JSON easily:

```typescript
import { TableBuilder } from './TableBuilder';

const builder = TableBuilder.withCells(100,
  100,
  { width: 200, height: 200 }).build()

const json = builder.buildJSON()

// Store your json
```

Please avoid creating the json by hand, it can lead to very stupid errors. Do
use the `TableBuilder` for that purpose.

## 1.10.1 (16/3/2022)

Implements *TableBuilder* population methods:

* `populateContent` to populate all the contents of a table
* `buildContent` to get a matrix with only the contents of a table
* `withCells` to create a xy table

Implements `populateContent` also on the `Table` class.

## 1.9.1 (16/3/2022)

Solves *Table* persistence issues with cells. Adds new useful methods to *Table*
for:

* Count columns
* Count rows
* Get a `Matrix2D` helper for managing table cells

## 1.8.2 (1/3/2022)

Implements *Table*.*toBuilder* method to create a *TableBuilder* starting from
an existing Table.

## 1.8.1 (1/3/2022)

Changes *Table* rendering method. Now each table works only with cells, without
specifing a policy to change them. Every **Pamela.Table** now receives a
**cells** *Matrix2D* object and draws it. How can i create such matrix? We
decided to create an entire *Builder* for that. It's an object that simplifies
the process of creating and editing tables.  
It uses the *Builder* gof pattern, so it can be instantiated and when the **
build** method is called, it will create a complete **Pamela.Table** object for
you.  
It implements very advanced ways of customizing your table, allowing also
different idioms:

* Working by columns
* Working by rows
* Fully functional set / get operations
* Advanced iterators
* Automatic size managing (using auto-width and auto-height)
* Async table building

This builder is completely un-opinionated on how you should look at your table.
See online documentation for better informations about it.

## 1.7.6 (12/2/2022)

Implements *cors* customizations for *Image.fromURL*. Add capability for *
Pamela.Image* to work with link images, allowing persistence of images. Now, we
can contruct an image specifing only the url:

```javascript
const i = new Pamela.Image({
  src: '<link>'
})
```

*Pamela.Image* will care about all the operations to correctly render and save
the image into the stage. We also added some very useful methods to:

* Change image src (using `image.loadImageFromUrl(<link>)`)
* Get image original size (using `image.getOriginalSize()`)
* Reload image from the same origin (using `image.reload()`)

## 1.6.14 (9/2/2022)

Fixes *Barcode* error message drawing problems

## 1.6.13 (8/2/2022)

Adds *Barcode* text for displaying errors during barcode calculations. It can be
formatted using

```javascript
Barcode.prototype.invalidCodeMessage
Barcode.prototype.invalidCodeMessageFont
Barcode.prototype.invalidCodeMessageFontSize
```

properties.

## 1.6.11 (3/2/2022)

Fixes *Barcode* resolution problems when it has long width. Corrects also *
RichText* unuseful margins and resizing problems. Implements *RichText*
measuring utils, to perform advanced text measuring.

## 1.6.3 (30/1/2022)

Fixes *Barcode* performance and exporting issues. Solves caching problems on *
backgroundColor* and *fill*.  
Solves *flashing* problem on resize end, now *Barcode* is fully resizable using
scale-based or size-based scaling policies. Increases *Barcode* border rendering
quality.

## 1.6.0 (30/1/2022)

Fixes Barcode drawing problems and implements **showContent** property to show /
hide it's code. Implements also text formatting configuration for barcode
content. Fixes Barcode resizing problems, to it is fully resizable using width
and or scale.

## 1.5.10 (28/1/2022)

Fixes several bugs, such as:

* Barcode not showing content
* Barcode without transparent background
* RichText not rendering borders
* RichText cutting text when resized
* Table header drawing problems
* Table borders drawing problems

Also **removes** unuseful exceptions for barcode and table. They are replaced
with **stage** events.  
**Adds** a new pullrequest template, to make it clearer.  
**Unifies** all **text-alignment** properties under the same enumeration: _
HorizontalAlignment_.
**Refactors** _RichText_ coloring process. Now **backgroundColor** is the color
of the background and **fill** is the color of the text, the same as **Text**.

## 1.5.3 (25/1/2022)

Implements advanced dragging behavior customization. Now you can specify combos
like:
alt + left click to trigger dragging on every node (usually on the stage).   
This behavior can be obtained using:

```typescript
const node = new Pamela.Stage({
  dragbuttons: [{ button: 0, altKey: true }]
})
```

Dragging will **only** be triggered when the user clicks altr + left mouse
click.

## 1.5.2 (25/1/2022)

Standardizes *Text* alignment using *HorizontalAlignment* enumeration.

## 1.5.1 (25/1/2022)

Re-introduces *Text* transparent background, using 'transparent' value on the
*backgroundColor* property. Increases code quality.

## 1.5.0 (24/1/2022)

Corrects *Text* editing problems and *Table* borders bugs. Adds *CHANGED*
event on the stage, fired when text auto-resizes to make all fit.

## 1.4.1 (21/1/2022)

**Implements** *resize* function for *Text*, to recalculate its boundaries to
make text fit. Corrects performance issues and increases code quality.

## 1.4.0 (19/1/2022)

**Implements** new shape *ExportVariable*, to draw a **variable** into the
stage. It has a yellow background by default, and it can render variable name,
via *variableName* field. It also has some simple customizable black border.
Variable icon *(x)* can be hidden using *hideFX* property.  
We have also corrected several richtext resizing / drawing problems, such as
glitches and incorrect sizing. Now *RichText* can recalculate its font during
resizing, when the *lockSize* option is activated. Box boundaries won't change,
but the font size will decrease / increase to make all fit.  
**Corrects** *Text* resizing problems, removing *expandToFit* option and using
only *lockSize*. The same behavior as *RichText* is now implemented into *Text*
.  
**Implements** new useful methods for containers (stage and layer):

* **Removing** items by **name**
* **Searching** items by **name**
* **Getting** child index by **name**
* **Getting** child by **index**
* **Remove** child by **index**
* **Search** child with **id**
* **Remove** child with **id**
* **Bring** to top by **name**
* **Bring** to top by **index**
* **Bring** to top by **id**
* **Contains** check

**Implements** also functional-like accessors for containers (*first()*, *
firstIndex()*, *last()*, *lastIndex()*) to **simplify**
accessing children.  
**Configures** *typedoc* for **automatic** **documentation** generation.
**Corrects** *Barcode* drawing, clipping and resizing problems.  
**Adds** events for contolling text editing, fired by *Text* shape during
editing:

* Editing start
* Text changed
* Editing end

**Implements** outside click to stop *Text* editing.

## 1.3.2 (6/2/2022)

Corrects fill problems for **RichText** and removes its property *
backgroundColor*.  
Implements resizing controls using *GrowPolicy*.

## 1.3.1 (6/2/2022)

Implements useful function to adapt **RichText** fontsize to make it fit the
container boundaries. It calculates a new font size to make all text fit into
the container. If fontsize becomes less that 6px, resizes the box and keeps 6pt
as font size.  
This is useful to make text more readable and adapt its font size automatically.

```javascript
// Since it requires lots of calculations, this function is asincronus.
// It resolves with the new fontsize used (min is 6pt)
const newFontSize = await richText.fitContainer();
```

We also added a new configuration for **RichText**: Text horizontal alignment.
Its default value is 'left'. You can change it using:

```javascript
new Pamela.RichText({
  // This will center our text into the RichText
  horizontalAlignment: HorizontalAlignment.Center
})
```

## 1.3.0 (5/1/2022)

Corrects huge problem with all newer shapes. They werent draggable into the
stage.  
Implements **RichText** font configuration(family, decoration, variant and size)
and corrects dragwing problems. Adds to **RichText** the possibility to render
direct html, insead of **markdown**. This behavior can be activated using:

```javascript
const richText = new Pamela.RichText({
  draggable: true,
  htmlContent: '<h1>Html text</h1>',
  width: 300,
  height: 200,
  x: 100,
  y: 20,
  fill: 'white',
  // Specifies if we want to render Markdown or
  // html. By default is is set to Markdown
  sourceType: RichTextSource.Html,
  bordered: true,
  borderColor: 'red',
  fontFamily: 'Courier New'
});
```

## 1.2.7 (4/1/2022)

Implements new shape **RichText** to render markdown text or html documents into
a single shape. It offers several useful configuring options, such as
**colors**, **font sizes** and **padding**. It automatically applies this
configurations to make it simplier to work with.  
We also refactored BorderRadius utils, now they are plugged into a more syntetic
way, under the **BorderRadiusUtils** namespace.  
Now all the shapes support advanced borders, via the **BorderConfiguration**
properties. Every shape can override the method used to render them, to give the
programmer better control over it.

## 1.2.6 (3/1/2022)

Implements basic text placeholder (only in textarea), configurable via

```javascript
text.placeholder('Insert some text')
```

## 1.2.5 (3/1/2022)

Refactors **Text** codebase, optimizes performances and adds methods for
enable/disable text editing.

```javascript
// Enable editing on Text class
text.enableEditing();

// Disable editing on Text class
text.disableEditing();
```

Implements also newer internal memory management.

## 1.2.3 (3/1/2022)

Implements text **background** color, expressed using html format or by its
known name.

## 1.2.2 (3/1/2022)

Corrects exception when no borderRadius is provided and adds useful **
BorderRadius** apis to create them, like:

```javascript
// Creates a border radius diagonally
let cornerRadius = borderRadiusDg(5, 7);
// Border radius with all set to 0
let nullBorderRadius = borderRadiusEm();
```

## 1.2.1 (3/1/2022)

**Implements** borders for **Text**.  
Includes options for customizing border width, color, visibility and more
advanced stuff like border radius (specific for each corner), line dash
configuration
(to create dashed border) and line cap control.  
**Exposes** new apis to manage border radiuses and line dashes configurations.  
Adds advanced border configuration to **Table**, providing the same interface
as **Text**.

## 1.2.0 (3/1/2022)

Implements complete text editing, providing inline textarea for editing text.
Adds controls for dynamic font size, fixed size textboxes, resizing policies and
more. Fixes several text problems like measurements and more.

## 1.0.21

Fixes targeting problems

## 1.0.20

Fixes Barcode transform problems.

## 1.0.19 (2021-12-20)

Adds new shape **Barcode**, for drawing automatically generated barcode starting
from code and encoding.

## 1.0.8 (2021-12-8)

Added support for **jest** testing suite, migrated compiling defaults to **
CommonJs** for better user experience and fixed bugs.

## 8.3.0 (2021-12-15)

- new `transformer.anchorDragBoundFunc` method.

## 8.2.4 (2021-12-15)

- Fix not working `Pamela.Transformer` when several transformers were used

## 8.2.2

- Fix `Pamela.Arrow` rendering when it has two pointers

## 8.2.1

- Fix `package.json` exports.

## 8.2.0

- Restore build in CommonJS. `const Pamela = require('konva/cmj').default;`
- Fix arrow rendering when dash is used
- Fix `dbltap` trigger when multi-touch is used

## 8.1.4

- Fix `dblclick` event when `cancelBubble` is used.

## 8.1.3

- Fix `fillPattern` cache invalidation on shapes

## 8.1.2

- Fix memory leak for `Pamela.Image`

## 8.1.1

- Fix `Pamela.Transformer` dragging draw when `shouldOverdrawWholeArea = true`.
- Fix auto redraw when `container.removeChildren()`
  or `container.destroyChildren()` are used

## 8.1.0

- New property `useSingleNodeRotation` for `Pamela.Transformer`.

## 8.0.4

- Fix fill pattern updates on `fillPatternX` and `fillPatternY` changes.

## 8.0.2

- Fix some transform caches
- Fix cache with hidden shapes

## 8.0.1

- Some typescript fixes

## 8.0.0

This is a very large release! The long term of `Pamela` API is to make it
simpler and faster. So when possible I am trying to optimize the code and remove
unpopular/confusing API methods.

**BREAKING:**

- `Pamela.Collection` is removed. `container.children` is a simple array
  now. `container.find()` will returns an array instead of `Pamela.Collection()`
  instance.
  `Pamela.Collection` was confusing for many users. Also it was slow and worked
  with a bit of magic. So I decided to get rif of it. Now we are going to use
  good old arrays.

```js
// old code:
group.find('Shape').visible(false);

// new code:
group.find('Shape').forEach((shape) => shape.visible(false));
```

- argument `selector` is removed from `node.getIntersection(pos)` API. I don't
  think you even knew about it.
- `Pamela.Util.extend` is removed.
- All "content" events from `Pamela.Stage` are removed. E.g. instead
  of `contentMousemove` just use `mousemove` event.

**New features:**

- All updates on canvas will do automatic redraw with `layer.batchDraw()`. This
  features is configurable with `Pamela.autoDrawEnabled` property. Pamela will
  automatically redraw layer when you change any property, remove or add nodes,
  do caching. So you don't need to call `layer.draw()` or `layer.batchDraw()` in
  most of the cases.
- New method `layer.getNativeCanvasElement()`
- new `flipEnabled` property for `Pamela.Transformer`
- new `node.isClientRectOnScreen()` method
- Added `Pamela.Util.degToRad` and `Pamela.Util.radToDeg`
- Added `node.getRelativePointerPosition()`

**Changes and fixes:**

- **Full migration to ES modules package (!), commonjs code is removed.**
- **`konva-node` is merged into `konva` npm package. One package works for both
  environments.**
- Full event system rewrite. Much better `pointer` events support.
- Fix `TextPath` recalculations on `fontSize` change
- Better typescript support. Now every module has its own `*.d.ts` file.
- Removed `Pamela.UA`, `Pamela._parseUA` (it was used for old browser detection)
- Fixed Arrow head position when an arrow has tension
- `textPath.getKerning()` is removed
- Fix `a` command parsing for `Pamela.Path`
- Fix fill pattern for `Pamela.Text` when the pattern has an offset or rotation
- `Pamela.names` and `Pamela.ids` are removed
- `Pamela.captureTouchEventsEnabled` is renamed
  to `Pamela.capturePointerEventsEnabled`

## 7.2.5

- Fix transform update on `letterSpacing` change of `Pamela.Text`

## 7.2.4

- Fix wrong `mouseleave` trigger for `Pamela.Stage`

## 7.2.3

- Fix transformer rotation when parent of a node is rotated too.

## 7.2.2

- Fix wrong size calculations for `Pamela.Line` with tension
- Fix `shape.intersects()` behavior when a node is dragged
- Fix ellipsis rendering for `Pamela.Text`

## 7.2.1

- Fix correct rendering of `Pamela.Label` when heigh of text is changed
- Fix correct `transformstart` and `transformend` events when several nodes are
  attached with `Pamela.Transformer`

## 7.2.0

- New property `fillAfterStrokeEnabled` for `Pamela.Shape`. See API docs for
  more information.
- Fix for `Pamela.Transformer` when it may fail to draw.
- Fix rendering of `TextPath` one more time.

## 7.1.9

- Fix autodrawing for `Pamela.Transformer` when it is on a different layer
- Fix `Pamela.RegularPolygon` size calculations.

## 7.1.8

- Fix incorrect rendering of `TextPath` in some cases. (again)

## 7.1.7

- Fix incorrect rendering of `TextPath` in some cases.

## 7.1.6

- Fix for correct image/dataURL/canvas exports for `Pamela.Stage`.

## 7.1.5

- Performance fixes for dragging many nodes with `Pamela.Transformer`.
- Documentation updates

## 7.1.4

- Perf fixes
- Change events trigger flow, so adding new events INSIDE event callback will
  work correctly.
- Fix double `dragend`, `dragstart`, `dragmove` triggers on `Pamela.Transformer`

## 7.1.3

- Text rendering fixes

## 7.1.2

- fix ellipses behavior for `Pamela.Text`.
- fix scaled fill pattern for text.

## 7.1.1

- fixes for `dragstart` event when `Pamela.Transformer` is used. `dragstart`
  event will have correct native `evt` reference
- Better unicode support in `Pamela.Text` and `Pamela.TextPath`. Emoji should
  work better now 👍

## 7.1.0

- Multi row support for `ellipsis` config for `Pamela.Text`
- Better `Pamela.Transfomer` behavior when single attached node is
  programmatically rotated.

## 7.0.7

- fixes for `dragstart` event when `Pamela.Transformer` is used. `dragstart`
  will not bubble from transformer.
- `string` and `fill` properties validation can accept `CanvasGradient` as valid
  value

## 7.0.6

- Better performance for stage dragging

## 7.0.5

- Fixes for `node.cache()` function.

## 7.0.4

- Add `onUpdate` callbacks to `Pamela.Tween` configuration and `node.to()`
  method.
- Up to 6x faster initializations of objects,
  like `const shape = new Pamela.Shape()`.

## 7.0.3 - 2020-07-09

- Fix wring `dragend` trigger on `draggable` property change inside `click`
- Fix incorrect text rendering with `letterSpacing !== 0`
- Typescript fixes

## 7.0.2 - 2020-06-30

- Fix wrong trigger `dbltap` and `click` on mobile

## 7.0.1 - 2020-06-29

- Fixes for different font families support.
- Fixes for `Pamela.Transformer` positions
- Types fixes for better Typescript support

## 7.0.0 - 2020-06-23

- **BREAKING** `inherit` option is removed from `visible` and `listening`. They
  now just have boolean values `true` or `false`. If you
  do `group.listening(false);` then whole group and all its children will be
  removed from the hitGraph (and they will not listen to events). Probably
  99% `Pamela` applications will be not affected by this _breaking change_.
- **Many performance fixes and code size optimizations. Up to 70% performance
  boost for many moving nodes.**
- `layer.hitGraphEnabled()` is deprecated. Just use `layer.listening(false)`
  instead
- Better support for font families with spaces inside (like `Font Awesome 5`).
- Fix wrong `dblclick` and `dbltap` triggers
- Deprecate `Pamela.FastLayer`. Use `new Pamela.Layer({ listening: false });`
  instead.
- `dragmove` event will be fired on `Pamela.Transformer` too when you drag a
  node.
- `dragmove` triggers only after ALL positions of dragging nodes are changed

## 6.0.0 - 2020-05-08

- **BREAKING!** `boundBoxFunc` of `Pamela.Transformer` works in absolute
  coordinates of whole transformer. Previously in was working in local
  coordinates of transforming node.
- Many `Pamela.Transformer` fixes. Now it works correctly when you transform
  several rotated shapes.
- Fix for wrong `mouseleave` and `mouseout` fire on shape remove/destroy.

## 5.0.3 - 2020-05-01

- Fixes for `boundBoxFunc` of `Pamela.Transformer`.

## 5.0.2 - 2020-04-23

- Deatach fixes for `Pamela.Transformer`

## 5.0.1 - 2020-04-22

- Fixes for `Pamela.Transformer` when parent scale is changed
- Fixes for `Pamela.Transformer` when parent is draggable
- Performance optimizations

## 5.0.0 - 2020-04-21

- **New `Pamela.Transformer` implementation!**. Old API should work. But I
  marked this release is `major` (breaking) just for smooth updates. Changes:
    - Support of transforming multiple nodes at
      once: `tr.nodes([shape1, shape2])`.
    - `tr.node()`, `tr.setNode()`, `tr.attachTo()` methods are deprecated.
      Use `tr.nodes(array)` instead
    - Fixes for center scaling
    - Fixes for better `padding` support
    - `Transformer` can be placed anywhere in the tree of a stage tree (NOT just
      inside a parent of attached node).
- Fix `imageSmoothEnabled` resets when stage is resized
- Memory usage optimizations when a node is cached

## 4.2.2 - 2020-03-26

- Fix hit stroke issues

## 4.2.1 - 2020-03-26

- Fix some issues with `mouseenter` and `mouseleave` events.
- Deprecate `hitStrokeEnabled` property
- Fix rounding issues for `getClientRect()` for some shapes

## 4.2.0 - 2020-03-14

- Add `rotationSnapTolerance` property to `Pamela.Transformer`.
- Add `getActiveAnchor()` method to `Pamela.Transformer`
- Fix hit for non-closed `Pamela.Path`
- Some fixes for experimental Offscreen canvas support inside a worker

## 4.1.6 - 2020-02-25

- Events fixes for `Pamela.Transformer`
- Now `Pamela` will keep `id` in a cloned node
- Better error messages on tainted canvas issues

## 4.1.5 - 2020-02-16

- Fixes for `path.getClientRect()` function calculations

## 4.1.4 - 2020-02-10

- Fix wrong internal caching of absolute attributes
- Fix `Pamela.Transformer` behavior on scaled with CSS stage

## 4.1.3 - 2020-01-30

- Fix line with tension calculations
- Add `node.getAbsoluteRotation()` method
- Fix cursor on anchors for rotated parent

## 4.1.2 - 2020-01-08

- Fix possible `NaN` in content calculations

## 4.1.1 - 2020-01-07

- Add ability to use `width = 0` and `height = 0` for `Pamela.Image`.
- Fix `cache()` method of `Pamela.Arrow()`
- Add `Transform` to `Pamela` default exports. So `Pamela.Transform` is
  available now.

## 4.1.0 - 2019-12-23

- Make events work on some CSS transforms
- Fix caching on float dimensions
- Fix `mouseleave` event on stage.
- Increase default anchor size for `Pamela.Transformer` on touch devices

## 4.0.18 - 2019-11-20

- Fix `path.getClientRect()` calculations for `Pamela.Path`
- Fix wrong fire of `click` and `tap` events on stopped drag events.

## 4.0.17 - 2019-11-08

- Allow hitStrokeWidth usage, even if a shape has not stroke visible
- Better IE11 support

## 4.0.16 - 2019-10-21

- Warn on undefined return value of `dragBoundFunc`.
- Better calculations for `container.getClientRect()`

## 4.0.15 - 2019-10-15

- TS fixes
- Better calculations for `TextPath` with align = right
- Better `textPath.getClientRect()`

## 4.0.14 - 2019-10-11

- TS fixes
- Fix globalCompositeOperation + cached hit detections.
- Fix absolute position calculations for cached parent

## 4.0.13 - 2019-10-02

- Fix `line.getClientRect()` calculations for line with a tension or low number
  of points

## 4.0.12 - 2019-09-17

- Fix some bugs when `Pamela.Transformer` has `padding > 0`

## 4.0.10 - 2019-09-10

- Fix drag position handling
- Fix multiple selector for find() method

## 4.0.9 - 2019-09-06

- Fix `Pamela.Transformer` behavior on mirrored nodes
- Fix `stage.getPointerPosition()` logic.

## 4.0.8 - 2019-09-05

- Fix `dragend` event on click
- Revert fillPatternScale for text fix.

## 4.0.7 - 2019-09-03

- Fixed evt object on `dragstart`
- Fixed double tap trigger after dragging

## 4.0.6 - 2019-08-31

- Fix fillPatternScale for text

## 4.0.5 - 2019-08-17

- Fix `dragstart` flow when `node.startDrag()` is called.
- Fix `tap` and `dbltap` double trigger on stage

## 4.0.4 - 2019-08-12

- Add `node.isCached()` method
- Fix nested dragging bug

## 4.0.3 - 2019-08-08

- Slightly changed `mousemove` event flow. It triggers for first `mouseover`
  event too
- Better `Pamela.hitOnDragEnabled` support for mouse inputs

## 4.0.2 - 2019-08-08

- Fixed `node.startDrag()` behavior. We can call it at any time.

## 4.0.1 - 2019-08-07

- Better `Pamela.Arrow` + tension drawing
- Typescript fixes

## 4.0.0 - 2019-08-05

Basically the release doesn't have any breaking changes. You may only have
issues if you are using something from `Pamela.DD` object (which is private and
never documented). Otherwise you should be fine. `Pamela` has major upgrade
about touch events system and drag&drop flow. The API is exactly the same. But
the internal refactoring is huge so I decided to make a major version. Please
upgrade carefully. Report about any issues you have.

- Better multi-touch support. Now we can trigger several `touch` events on one
  or many nodes.
- New drag&drop implementation. You can drag several shapes at once with several
  pointers.
- HSL colors support

## 3.4.1 - 2019-07-18

- Fix wrong double tap trigger

## 3.4.0 - 2019-07-12

- TS types fixes
- Added support for different values for `cornerRadius` of `Pamela.Rect`

## 3.3.3 - 2019-06-07

- Some fixes for better support `konva-node`
- TS types fixes

## 3.3.2 - 2019-06-03

- TS types fixes

## 3.3.1 - 2019-05-28

- Add new property `imageSmoothingEnabled` to the node caching
- Even more ts fixes. Typescript need a lot of attention, you know...

## 3.3.0 - 2019-05-28

- Enable strict mode for ts types
- Add new property `imageSmoothingEnabled` to the layer

## 3.2.7 - 2019-05-27

- Typescript fixes
- Experimental pointer events support. Do `Pamela._pointerEventsEnabled = true;`
  to enable
- Fix some `Pamela.Transformer` bugs.

## 3.2.6 - 2019-05-09

- Typescript fixes again

## 3.2.5 - 2019-04-17

- Show a warning when `Pamela.Transformer` and attaching node have different
  parents.
- Typescript fixes

## 3.2.4 - 2019-04-05

- Fix some stage events. `mouseenter` and `mouseleave` should work correctly on
  empty spaces
- Fix some typescript types
- Better detection of production mode (no extra warnings)

## 3.2.3 - 2019-03-21

- Fix `hasName` method for empty name cases

## 3.2.2 - 2019-03-19

- Remove `dependencies` from npm package

## 3.2.1 - 2019-03-18

- Better `find` and `findOne` lookup. Now we should not care about duplicate
  ids.
- Better typescript definitions

## 3.2.0 - 2019-03-10

- new property `shape.hitStrokeWidth(10)`
- Better typescript definitions
- Remove `Object.assign` usage (for IE11 support)

## 3.1.7 - 2019-03-06

- Better modules and TS types

## 3.1.6 - 2019-02-27

- Fix commonjs exports
- Fix global injections

## 3.1.0 - 2019-02-27

- Make `Pamela` modular: `import Pamela from 'konva/lib/Core';`;
- Fix incorrect `Transformer` behavior
- Fix drag&drop for touch devices

## 3.0.0 - 2019-02-25

## Breaking

Customs builds are temporary removed from npm package. You can not
use `import Pamela from 'konva/src/Core';`. This feature will be added back
later.

### Possibly breaking

That changes are private and internal specific. They should not break most
of `Pamela` apps.

- `Pamela.Util.addMethods` is removed
- `Pamela.Util._removeLastLetter` is removed
- `Pamela.Util._getImage` is removed
- `Konv.Util._getRGBAString` is removed
- `Konv.Util._merge` is removed
- Removed polyfill for `requestAnimationFrame`.
- `id` and `name` properties defaults are empty strings, not `undefined`
- internal `_cache` property was updated to use es2015 `Map` instead of `{}`.
- `Pamela.Validators` is removed.

### Added

- Show a warning when a stage has too many layers
- Show a warning on duplicate ids
- Show a warning on weird class in `Node.create` parsing from JSON
- Show a warning for incorrect value for component setters.
- Show a warning for incorrect value for `zIndex` property.
- Show a warning when user is trying to reuse destroyed shape.
- new publish method `measureSize(string)` for `Pamela.Text`
- You can configure what mouse buttons can be used for drag&drop. To enable
  right button you can use `Pamela.dragButtons = [0, 1]`.
- Now you can hide stage `stage.visible(false)`. It will set its container
  display style to "none".
- New method `stage.setPointersPositions(event)`. Usually you don't need to use
  it manually.
- New method `layer.toggleHitCanvas()` to show and debug hit areas

### Changed

- Full rewrite to Typescript with tons of refactoring and small optimizations.
  The public API should be 100% the same
- Fixed `patternImage` and `radialGradient` for `Pamela.Text`
- `Pamela.Util._isObject` is renamed to `Pamela.Util._isPlainObject`.
- A bit changed behavior of `removeId` (private method), now it doesn't clear
  node ref, if object is changed.
- simplified `batchDraw` method (it doesn't use `Pamela.Animation`) now.
- Performance improvements for shapes will image patterns, linear and radial
  fills
- `text.getTextHeight()` is deprecated. Use `text.height()` or `text.fontSize()`
  instead.
- Private method `stage._setPointerPosition()` is deprecated.
  Use `stage.setPointersPositions(event)`;

### Fixed

- Better mouse support on mobile devices (yes, that is possible to connect mouse
  to mobile)
- Better implementation of `mouseover` event for stage
- Fixed underline drawing for text with `lineHeight !== 1`
- Fixed some caching behavior when a node has `globalCompositeOperation`.
- Fixed automatic updates for `Pamela.Transformer`
- Fixed container change for a stage.
- Fixed warning for `width` and `height` attributes for `Pamela.Text`
- Fixed gradient drawing for `Pamela.Text`
- Fixed rendering with `strokeWidth = 0`

## 2.6.0 - 2018-12-14

### Changed

- Performance fixes when cached node has many children
- Better drawing for shape with `strokeScaleEnabled = false` on HDPI devices

### Added

- New `ignoreStroke` for `Pamela.Transformer`. Good to use when a shape
  has `strokeScaleEnabled = false`

### Changed

- `getKerning` TextPath API is deprecated. Use `kerningFunc` instead.

## 2.5.1 - 2018-11-08

### Changed

- Use custom functions for `trimRight` and `trimLeft` (for better browsers
  support)

## 2.5.0 - 2018-10-24

### Added

- New `anchorCornerRadius` for `Pamela.Transformer`

### Fixed

- Performance fixes for caching

### Changed

- `dragstart` event behavior is a bit changed. It will fire BEFORE actual
  position of a node is changed.

## 2.4.2 - 2018-10-12

### Fixed

- Fixed a wrong cache when a shape inside group has `listening = false`

## 2.4.1 - 2018-10-08

### Changed

- Added some text trim logic to wrap in better

### Fixed

- `getClientRect` for complex paths fixes
- `getClientRect` calculation fix for groups
- Update `Pamela.Transformer` on `rotateEnabled` change
- Fix click stage event on dragend
- Fix some Transformer cursor behavior

## 2.4.0 - 2018-09-19

### Added

- Centered resize with ALT key for `Pamela.Transformer`
- New `centeredScaling` for `Pamela.Transformer`

### Fixed

- Tween support for gradient properties
- Add `user-select: none` to the stage container to fix some "selected contend
  around" issues

## 2.3.0 - 2018-08-30

### Added

- new methods `path.getLength()` and `path.getPointAtLength(val)`
- `verticalAlign` for `Pamela.Text`

## 2.2.2 - 2018-08-21

### Changed

- Default duration for tweens and `node.to()` methods is now 300ms
- Typescript fixes
- Automatic validations for many attributes

## 2.2.1 - 2018-08-10

### Added

- New properties for `Pamela.Transformer`: `borderStroke`, `borderStrokeWidth`
  , `borderDash`, `anchorStroke`, `anchorStrokeWidth`, `anchorSize`.

### Changed

- Some properties of `Pamela.Transformer` are renamed. `lineEnabled`
  -> `borderEnabled`. `rotateHandlerOffset` -> `rotateAnchorOffset`
  , `enabledHandlers` -> `enabledAnchors`.

## 2.1.8 - 2018-08-01

### Fixed

- Some `Pamela.Transformer` fixes
- Typescript fixes
- `stage.toDataURL()` fixes when it has hidden layers
- `shape.toDataURL()` automatically adjust position and size of resulted image

## 2.1.7 - 2018-07-03

### Fixed

- `toObject` fixes

## 2.1.7 - 2018-07-03

### Fixed

- Some drag&drop fixes

## 2.1.6 - 2018-06-16

### Fixed

- Removed wrong dep
- Typescript fixes

## 2.1.5 - 2018-06-15

### Fixed

- Typescript fixes
- add shape as second argument for `sceneFunc` and `hitFunc`

## 2.1.4 - 2018-06-15

### Fixed

- Fixed `Pamela.Text` justify drawing for a text with decoration
- Added methods `data()`,`setData()` and `getData()` methods
  to `Pamela.TextPath`
- Correct cache reset for `Pamela.Transformer`

## 2.1.3 - 2018-05-17

### Fixed

- `Pamela.Transformer` automatically track shape changes
- `Pamela.Transformer` works with shapes with offset too

## 2.1.2 - 2018-05-16

### Fixed

- Cursor fixes for `Pamela.Transformer`
- Fixed lineHeight behavior for `Pamela.Text`
- Some performance optimizations for `Pamela.Text`
- Better wrap algorithm for `Pamela.Text`
- fixed `Pamela.Arrow` with tension != 0
- Some fixes for `Pamela.Transformer`

## 2.0.3 - 2018-04-21

### Added

- Typescript defs for `Pamela.Transformer`
- Typescript defs for `globalCompositeOperation`

## Changes

- Fixed flow for `contextmenu` event. Now it will be triggered on shapes too
- `find()` method for Containers can use a function as a parameter

### Fixed

- some bugs fixes for `group.getClientRect()`
- `Pamela.Arrow` will not draw dash for pointers
- setAttr will trigger change event if new value is the same Object
- better behavior of `dblclick` event when you click fast on different shapes
- `stage.toDataURL` will use `pixelRatio = 1` by default.

## 2.0.2 - 2018-03-15

### Fixed

- Even more bugs fixes for `Pamela.Transformer`

## 2.0.1 - 2018-03-15

### Fixed

- Several bugs fixes for `Pamela.Transformer`

## 2.0.0 - 2018-03-15

### Added

- new `Pamela.Transformer`. It is a special group that allow simple resizing and
  rotation of a shape.
- Add ability to remove event by callback `node.off('event', callback)`.
- new `Pamela.Filters.Contrast`.
- new `Pamela.Util.haveIntersection()` to detect simple collusion
- add `Pamela.Text.ellipsis` to add '…' to text string if width is fixed and
  wrap is set to 'none'
- add gradients for strokes

## Changed

- stage events are slightly changed. `mousedown`, `click`, `mouseup`, `dblclick`
  , `touchstart`, `touchend`, `tap`, `dbltap` will be triggered when clicked on
  empty areas too

### Fixed

- Some typescript fixes
- Pixelate filter fixes
- Fixes for path data parsing
- Fixed shadow size calculation

## Removed

- Some deprecated methods are removed. If previous version was working without
  deprecation warnings for you, this one will work fine too.

## 1.7.6 - 2017-11-01

### Fixed

- Some typescript fixes

## 1.7.4 - 2017-10-30

### Fixed

- `isBrowser` detection for electron

## 1.7.3 - 2017-10-19

### Changed

- Changing size of a stage will redraw it in synchronous way

### Fixed

- Some fixes special for nodejs

## 1.7.2 - 2017-10-11

### Fixed

- Fixed `Pamela.document is undefined`

## 1.7.1 - 2017-10-11

### Changed

- Pamela for browser env and Pamela for nodejs env are separate packages now.
  You can use `konva-node` for NodeJS env.

## 1.7.0 - 2017-10-08

### Fixed

- Several typescript fixes

### Changed

- Default value for `dragDistance` is changed to 3px.
- Fix rare error throw on drag
- Caching with height = 0 or width = 0 with throw async error. Caching will be
  ignored.

## 1.6.8 - 2017-08-19

### Changed

- The `node.getClientRect()` calculation is changed a bit. It is more powerfull
  and correct. Also it takes parent transform into account. See docs.
- Upgrade nodejs deps

## 1.6.7 - 2017-07-28

### Fixed

- Fix bug with double trigger wheel in Firefox
- Fix `node.getClientRect()` calculation in a case of Group + invisible child
- Fix dblclick issue https://github.com/konvajs/konva/issues/252

## 1.6.3 - 2017-05-24

### Fixed

- Fixed bug with pointer detection. css 3d transformed stage will not work now.

## 1.6.2 - 2017-05-08

### Fixed

- Fixed bug with automatic shadow for negative scale values

## 1.6.1 - 2017-04-25

### Fixed

- Fix pointer position detection

### Changed

- moved `globalCompositeOperation` property to `Pamela.Node`

## 1.6.0 - 2017-04-21

### Added

- support of globalCompositeOperation for `Pamela.Shape`

### Fixed

- getAllIntersections now works ok for Text
  shapes (https://github.com/konvajs/konva/issues/224)

### Changed

- Pamela a bit changed a way to detect pointer position. Now it should be OK to
  apply css transform on Pamela
  container. https://github.com/konvajs/konva/pull/215

## 1.5.0 - 2017-03-20

### Added

- support for `lineDashOffset` property for `Pamela.Shape`.

## 1.4.0 - 2017-02-07

## Added

- `textDecoration` of `Pamela.Text` now supports `line-through`

## 1.3.0 - 2017-01-10

## Added

- new align value for `Pamela.Text` and `Pamela.TextPath`: `justify`
- new property for `Pamela.Text` and `Pamela.TextPath`: `textDecoration`. Right
  now it sports only '' (no decoration) and 'underline' values.
- new property for `Pamela.Text`: `letterSpacing`
- new event `contentContextmenu` for `Pamela.Stage`
- `align` support for `Pamela.TextPath`
- new method `toCanvas()` for converting a node into canvas element

### Changed

- changing a size of `Pamela.Stage` will update it in async way (
  via `batchDraw`).
- `shadowOffset` respect pixel ratio now

### Fixed

- Fixed bug when `Pamela.Tag` width was not changing its width dynamically
- Fixed "calling remove() for dragging shape will throw an error"
- Fixed wrong opacity level for cached group with opacity
- More consistent shadows on HDPI screens
- Fixed memory leak for nodes with several names

## 1.2.2 - 2016-09-15

### Fixed

- refresh stage hit and its `dragend`
- `getClientRect` calculations

## 1.2.0 - 2016-09-15

## Added

- new properties for `Pamela.TextPath`: `letterSpacing` and `textBaseline`.

## 1.1.4 - 2016-09-13

### Fixed

- Prevent throwing an error when text property of `Pamela.Text` = undefined or
  null

## 1.1.3 - 2016-09-12

### Changed

- Better hit function for `TextPath`.
- Validation of `Shape` filters.

## 1.1.2 - 2016-09-10

### Fixed

- Fixed "Dragging Group on mobile view throws "missing preventDefault" error"
  # 169

## 1.1.1 - 2016-08-30

### Fixed

- Fixed #166 bug of drag&drop

## 1.1.0 - 2016-08-21

## Added

- new property of `Pamela.Shape` - `preventDefault`.

## 1.0.3 - 2016-08-14

### Fixed

- Fixed some typescript definitions

## 1.0.2 - 2016-07-08

## Changed

- `Pamela.Text` will interpret undefined `width` and `height` as `AUTO`

## 1.0.1 - 2016-07-05

### Changed

- you can now unset property by `node.x(undefined)` or `node.setAttr('x', null)`

### Fixed

- Bug fix for case when `touchend` event throws error

## 1.0.0 - 2016-07-05

### Fixed

- Bug fix for case when `touchend` event throws error

## 0.15.0 - 2016-06-18

## Added

- Custom clip function

## 0.14.0 - 2016-06-17

### Fixed

- fixes in typescript definitions
- fixes for bug with `mouseenter` event on deep nesting case

## 0.13.9 - 2016-05-14

### Changed

- typescript definition in npm package
- node@5.10.1, canvas@1.3.14, jsdom@8.5.0 support
- `Pamela.Path` will be filled when it is not closed
- `Animation.start()` will not not immediate sync draw. This should improve
  performance a little.
- Warning when node for `Tween` is not in layer yet.
- `removeChildren()` remove only first level children. So it will not remove
  grandchildren.

## 0.12.4 - 2016-04-19

### Changed

- `batchDraw` will do not immediate `draw()`

### Fixed

- fix incorrect shadow offset on rotation

## 0.12.3 - 2016-04-07

### Fixed

- `batchDraw` function works less time now
- lighter npm package

## 0.12.2 - 2016-03-31

### Fixed

- repair `cancelBubble` event property behaviour
- fix wrong `Path` `getClientRect()` calculation
- better HDPI support
- better typescript definitions
- node 0.12 support

### Changed

- more universal stage container selector
- `mousewheel` event changed to `wheel`

## 0.11.1 - 2016-01-16

### Fixed

- correct `Pamela.Arrow` drawing. Now it works better.
- Better support for dragging when mouse out of stage
- Better corner radius for `Label` shape
- `contentTap` event for stage

### Added

- event delegation. You can use it in this
  way: `layer.on('click', 'Circle', handler);`
- new `node.findAncestors(selector)` and `node.findAncestor(selector)` functions
- optional selector parameter for `stage.getIntersection`
  and `layer.getIntersection`
- show warning message if several instances of Pamela are added to page.

### Changed

- `moveTo` and some other methods return `this`
- `getAbsolutePosition` support optional relative parent argument (useful to
  find absolute position inside of some of parent nodes)
- `change` event will be not fired if changed value is the same as old value

## 0.10.0 - 2015-10-27

### Added

- RGBA filter. Thanks to [@codefo](https://github.com/codefo)
- `stroke` and `fill` support for `Pamela.Sprite`

### Fixed

- Correct calculation in `getClientRect` method of `Pamela.Line`
  and `Pamela.Container`.
- Correct `toObject()` behaviour for node with attrs with extended native
  prototypes
- Fixed bug for caching where buffer canvas is required

### Changed

- Dragging works much better. If your pointer is out of stage content dragging
  will still continue.
- `Pamela.Node.create` now works with objects.
- `Pamela.Tween` now supports tweening points to state with different length

## 0.9.5 - 2015-05-28

### Fixed

- `to` will not throw error if no `onFinish` callback
- HDPI support for desktop
- Fix bug when filters are not correct for HDPI
- Fix bug when hit area is not correct for HDPI
- Fix bug for incorrect `getClientRect` calculation
- Repair fill gradient for text

### Changed

- context wrapper is more capable with native context. So you can
  use `context.fillStyle` property in your `sceneFunc` without accessing native
  context.
- `toDataURL` now handles pixelRatio. you can pass `config.pixelRatio` argument
- Correct `clone()` for custom nodes
- `FastLayer` can now have transforms
- `stage.toDataURL()` method now works synchronously. So `callback` argument is
  not required.
- `container.find(selector)` method now has a validation step. So if you forgot
  to add `#` or `.` you will see a warning message in the console.

### Added

- new `Pamela.Image.fromURL` method

### Deprecated

- `fillRed`, `fillGreen`, `fillBlue`, `fillAlpha` are deprecated. Use `fill`
  instead.
- `strokeRed`, `strokeGreen`, `strokeBlue`, `strokeAlpha` are deprecated.
  Use `stroke` instead.
- `shadowRed`, `shadowGreen`, `shadowBlue`, `shadowAlpha` are deprecated.
  Use `shadow` instead.
- `dashArray` is deprecated. Use `dash` instead.
- `drawFunc` is deprecated. Use `sceneFunc` instead.
- `drawHitFunc` is deprecated. Use `hitFunc` instead.
- `rotateDeg` is deprecated. Use `rotate` instead.

## 0.9.0 - 2015-02-27

### Fixed

- cache algorithm has A LOT OF updates.

### Changed

- `scale` now affects `shadowOffset`
- performance optimization (remove some unnecessary draws)
- more expected drawing when shape has opacity, stroke and shadow
- HDPI for caching.
- Cache should work much better. Now you don't need to pass bounding box
  {x,y,width,height} to `cache` method for all buildin Pamela shapes. (only for
  your custom `Pamela.Shape` instance).
- `Tween` now supports color properties (`fill`, `stroke`, `shadowColor`)

### Added

- new methods for working with node's name: `addName`, `removeName`, `hasName`.
- new `perfectDrawEnabled` property for shape.
  See [http://konvajs.org/docs/performance/Disable_Perfect_Draw.html](http://konvajs.org/docs/performance/Disable_Perfect_Draw.html)
- new `shadowForStrokeEnabled` property for shape.
  See [http://konvajs.org/docs/performance/All_Performance_Tips.html](http://konvajs.org/docs/performance/All_Performance_Tips.html)
- new `getClientRect` method.
- new `to` method for every node for shorter tweening

## 0.8.0 - 2015-02-04

- Bug Fixes
    - browser crashing on pointer events fixed
    - optimized `getIntersection` function
- Enhancements
    - `container.findOne()` method
    - new `strokeHitEnabled` property. Useful for performance optimizations
    - typescript definitions. see `/resources/konva.d.ts`

## Rebranding release 2015-01-28

Differences from last official `KineticJS` release

- Bug Fixes

    - `strokeScaleEnabled = false` is disabled for text as I can not find a way
      to implement this
    - `strokeScaleEnabled = false` for Line now creates a correct hit graph
    - working "this-example" as name for nodes
    - Pamela.Text() with no config will not throw exception
    - Pamela.Line() with no config will not throw exception
    - Correct stage resizing with `FastLayer`
    - `batchDraw` method for `FastLayer`
    - Correct mouseover/mouseout/mouseenter/mouseleave events for groups
    - cache node before adding to layer
    - `intersects` function now works for shapes with shadow

- Enhancements
    - `cornerRadius` of Rect is limited by `width/2` and `height/2`
    - `black` is default fill for text
    - true class extending. Now `rect instanceOf Pamela.Shape` will return true
    - while dragging you can redraw layer that is not under drag. hit graph will
      be updated in this case
    - now you can move object that is dragging into another layer.
    - new `frameOffsets` attribute for `Pamela.Sprite`
    - much better dragging performance
    - `browserify` support
    - applying opacity to cached node
    - remove all events with `node.off()`
    - mouse dragging only with left button
    - opacity now affects cached shapes
    - Label corner radius
    - smart changing `width`, `height`, `radius` attrs for circle, start,
      ellipse, ring.
    - `mousewheel` support.
      Thanks [@vmichnowicz](https://github.com/vmichnowicz)
    - new Arrow plugin
    - multiple names: `node.name('foo bar'); container.find('.foo');` (
      thanks [@mattslocum](https://github.com/mattslocum))
    - `Container.findOne()`
