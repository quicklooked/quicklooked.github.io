import mediumZoom from 'medium-zoom'

// Trigger the zoom when the button is clicked
const zoomToTrigger = mediumZoom('#zoom-trigger')

// Observe zooms to write the history
const observedZooms = [
  zoomToTrigger
]
