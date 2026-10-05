import { useState, useEffect } from 'react'

const imageCache = new Map();

export default function PokeImage({id}) {
    if (!id)
        return (
        <img alt="Image Unavailable" />
        )
  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + String(id) + ".png";

  return (
    <img src={url} alt="Image Unavailable" />
  )
}
