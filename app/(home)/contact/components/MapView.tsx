"use client"

import { useEffect, useRef, useState } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export default function MapView() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !mapRef.current) return

    if (mapRef.current.style.height === "") {
      mapRef.current.style.height = "400px"
    }

    const map = L.map(mapRef.current).setView([23.7508, 90.3928], 15)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    const customIcon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      shadowSize: [41, 41],
    })

    const marker = L.marker([23.7508, 90.3928], { icon: customIcon }).addTo(map)
    marker.bindPopup("BTMC Building, Level 5, Kawran Bazar, Dhaka-1215").openPopup()

    return () => {
      map.remove()
    }
  }, [isClient])

  return (
    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
      <div ref={mapRef} className="h-[400px]" />
    </div>
  )
}
