/* global mouseIsPressed, loadImage, image, mouseX, mouseY */
window.brushes.apple = {
  name: 'apple stamp',
  draw: function () {
    if (mouseIsPressed && !window.dragging) {
      loadImage(`data:image/svg+xml,%3Csvg width='842' height='1e3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M702 960c-54.2 52.6-114 44.4-171 19.6-60.6-25.3-116-26.9-180 0-79.7 34.4-122 24.4-170-19.6-271-279-231-704 77-720 74.7 4 127 41.3 171 44.4 65.4-13.3 128-51.4 198-46.4 84.1 6.8 147 40 189 99.7-173 104-132 332 26.9 396-31.8 83.5-72.6 166-141 227zM423 237C414.9 113 515.4 11 631 1c15.9 143-130 250-208 236z'/%3E%3C/svg%3E`, img => {
        const imgW = 24, imgH = imgW * 1000 / 842
        let imgX = mouseX - imgW / 2, imgY = mouseY - imgH / 2
        image(img, imgX, imgY, imgW, imgH)
      })
    }
  }
}
